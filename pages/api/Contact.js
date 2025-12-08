import { pool } from "../../lib/database";
import { authenticate } from "../../lib/auth";
import { cors } from "../../lib/cors";

async function findColumn(tableName, candidates = []) {

  try {
    const q = await pool.query(
      `SELECT column_name FROM information_schema.columns WHERE lower(table_name) = lower($1)`,
      [tableName]
    );
    const cols = q.rows.map(r => r.column_name);
    for (const cand of candidates) {
      const found = cols.find(c => c.toLowerCase() === cand.toLowerCase());
      if (found) return found;
    }

    const simplified = cols.map(c => ({ orig: c, norm: c.replace(/_/g, "").toLowerCase() }));
    for (const cand of candidates) {
      const target = cand.replace(/_/g, "").toLowerCase();
      const f = simplified.find(x => x.norm === target);
      if (f) return f.orig;
    }
    return null;
  } catch (err) {
    console.warn("findColumn error for table", tableName, err && err.message ? err.message : err);
    return null;
  }
}

export default async function Contact(req, res) {
  await cors(req, res);
  const method = req.method;
  const action = req.query.action;

  try {

    const user = await authenticate(req, res);
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    
    const premiumCandidates = ["isPremium"];
    const premiumCol = await findColumn("User", premiumCandidates);

    let isPremium = typeof user.isPremium === "boolean" ? user.isPremium : null;

    if (isPremium === null) {
      if (premiumCol) {
        const qText = `SELECT ${premiumCol} FROM "User" WHERE user_id = $1 LIMIT 1`;
        try {
          const q = await pool.query(qText, [user.user_id]);
          if (q.rowCount > 0) {

            isPremium = !!q.rows[0][premiumCol];
          } else {
            isPremium = false;
          }
        } catch (err) {

          try {
            const q2 = await pool.query(`SELECT "${premiumCol}" FROM "User" WHERE user_id = $1 LIMIT 1`, [user.user_id]);
            isPremium = q2.rowCount > 0 ? !!q2.rows[0][premiumCol] : false;
          } catch (err2) {
            console.warn("getIsPremium dynamic select failed:", err2 && err2.message ? err2.message : err2);
            isPremium = false;
          }
        }
      } else {

        isPremium = false;
      }
    }


    const tsCandidates = ["created_at", "createdat", "created", "added_at", "createdAt", "timestamp"];
    const tsCol = await findColumn("contacts", tsCandidates);

    // ---------------- GET ----------------
    if (method === "GET") {
      if (isPremium) {
        if (tsCol) {
          const q = await pool.query(
            `SELECT DISTINCT ON (phonenum) contactid, name, phonenum, userid, ${tsCol} AS created_at
             FROM contacts
             WHERE phonenum IS NOT NULL
             ORDER BY phonenum, ${tsCol} DESC`
          );
          return res.status(200).json({ contacts: q.rows });
        } else {
          // No timestamp column - return first row per phonenum (ORDER BY phonenum)
          const q = await pool.query(
            `SELECT DISTINCT ON (phonenum) contactid, name, phonenum, userid
             FROM contacts
             WHERE phonenum IS NOT NULL
             ORDER BY phonenum`
          );
          return res.status(200).json({ contacts: q.rows });
        }
      } 
      else {
        if (tsCol) {
          const q = await pool.query(
            `SELECT DISTINCT ON (phonenum) contactid, name, phonenum, userid, ${tsCol} AS created_at
             FROM contacts
             WHERE userid = $1
             ORDER BY phonenum, ${tsCol} DESC`,
            [user.user_id]
          );
          return res.status(200).json({ contacts: q.rows });
        } else {
          const q = await pool.query(
            `SELECT DISTINCT ON (phonenum) contactid, name, phonenum, userid
             FROM contacts
             WHERE userid = $1
             ORDER BY phonenum`,
            [user.user_id]
          );
          return res.status(200).json({ contacts: q.rows });
        }
      }
    }

    // ---------------- POST (bulk addcontacts) ----------------
    if (method === "POST") {
      if (action === "addcontacts") {
        let { contacts } = req.body;
        const contactList = Array.isArray(contacts) ? contacts : [contacts];

        if (!contactList || contactList.length === 0) {
          return res.status(400).json({ message: "No contact data provided" });
        }

        for (const c of contactList) {
          if (!c.name || !c.phonenum) {
            return res.status(400).json({ message: "Each contact must have name and phonenum" });
          }
        }

        const values = [];
        const placeholders = contactList.map((_, i) => {
          const base = i * 4;
          values.push(contactList[i].name, contactList[i].phonenum, user.user_id, new Date());
          return `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4})`;
        });

        const insertCols = tsCol ? `name, phonenum, userid, ${tsCol}` : `name, phonenum, userid, created_at`;
        const insertValsPlaceholder = placeholders.join(", ");

        const query = `
          INSERT INTO contacts (${insertCols})
          VALUES ${insertValsPlaceholder}
          RETURNING contactid, name, phonenum, userid${tsCol ? `, ${tsCol} AS created_at` : ""};
        `;

        const client = await pool.connect();
        try {
          await client.query("BEGIN");
          const result = await client.query(query, values);
          await client.query("COMMIT");
          return res.status(201).json({
            message:
              contactList.length > 1 ? "Multiple contacts added successfully" : "Contact added successfully",
            data: result.rows,
          });
        } catch (err) {
          await client.query("ROLLBACK");
          console.error("Bulk insert error:", err && err.message ? err.message : err);
          return res.status(500).json({ message: "Bulk insert failed", error: err.message });
        } finally {
          client.release();
        }
      } else {
        return res.status(400).json({ message: "Invalid action" });
      }
    }

    // ---------------- PUT (update) ----------------
    if (method === "PUT") {
      const contactid = req.query.contactid || (req.body && req.body.contactid);
      if (!contactid) return res.status(400).json({ message: "Missing contactid" });

      const found = await pool.query(`SELECT * FROM contacts WHERE contactid = $1 LIMIT 1`, [contactid]);
      if (found.rowCount === 0) return res.status(404).json({ message: "Contact not found" });
      const contact = found.rows[0];

      if (String(contact.userid) !== String(user.user_id) && !isPremium) {
        return res.status(403).json({ message: "Forbidden: not allowed to update this contact" });
      }

      const { name = contact.name, phonenum = contact.phonenum } = req.body;
      const upd = await pool.query(
        `UPDATE contacts SET name = $1, phonenum = $2, updated_at = NOW() WHERE contactid = $3
         RETURNING contactid, name, phonenum, userid${tsCol ? `, ${tsCol} AS created_at` : ""}`,
        [name, phonenum, contactid]
      );
      return res.status(200).json({ message: "Contact updated", data: upd.rows[0] });
    }

    // ---------------- DELETE ----------------
    if (method === "DELETE") {
      const contactid = req.query.contactid;
      if (!contactid) return res.status(400).json({ message: "Missing contactid" });

      const found = await pool.query(`SELECT * FROM contacts WHERE contactid = $1 LIMIT 1`, [contactid]);
      if (found.rowCount === 0) return res.status(404).json({ message: "Contact not found" });
      const contact = found.rows[0];

      if (String(contact.userid) !== String(user.user_id) && !isPremium) {
        return res.status(403).json({ message: "Forbidden: not allowed to delete this contact" });
      }

      await pool.query(`DELETE FROM contacts WHERE contactid = $1`, [contactid]);
      return res.status(200).json({ message: "Contact deleted" });
    }

    // unsupported method
    return res.status(405).json({ message: "Method not allowed" });
  } catch (err) {
    console.error("Contact API Error:", err && err.stack ? err.stack : err);
    return res.status(500).json({ message: "Internal Server Error", error: err.message || String(err) });
  }
}
