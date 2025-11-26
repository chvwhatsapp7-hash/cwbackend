import { pool } from "../../lib/database";
import { authenticate } from "../../lib/auth";
import { cors } from "../../lib/cors";

export default async function Contact(req, res) {
  if (cors(req, res)) return;

  const { method } = req;
  const action = req.query.action;

  if (method === "GET") {
    try {
      const user = await authenticate(req, res);
      if (!user) return res.status(401).json({ message: "Unauthorized"  });

      const result = await pool.queryK(
        'SELECT * FROM contacts WHERE userId = $1 ORDER BY name ASC',
        [user.user_id]
      );

      return res.status(200).json({ contacts: result.rows });
    } catch (err) {
      console.error("Get Contacts Error:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  if (method === "POST" && action === "addcontacts") {
    try {
      const user = await authenticate(req, res);
      if (!user) return res.status(401).json({ message: "Unauthorized" });

      let { contacts } = req.body;
      const contactList = Array.isArray(contacts) ? contacts : [contacts];

      if (!contactList.length)
        return res.status(400).json({ message: "No contact data provided" });

      const query = `
        INSERT INTO contacts (name, phonenum, userId)
        VALUES ${contactList.map((_, i) => `($${i*3+1}, $${i*3+2}, $${i*3+3})`).join(", ")}
        RETURNING *;
      `;

      const values = contactList.flatMap(c => [c.name, c.phonenum, user.user_id]);

      await pool.query("BEGIN");
      let result;
      try {
        result = await pool.query(query, values);
        await pool.query("COMMIT");
      } catch (err) {
        await pool.query("ROLLBACK");
        throw err;
      }

      return res.status(201).json({
        message: contactList.length > 1 ? "Multiple contacts added successfully" : "Contact added successfully",
        data: result.rows,
      });
    } catch (err) {
      console.error("Contact API Error:", err);
      return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
