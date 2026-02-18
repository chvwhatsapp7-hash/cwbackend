// file: /pages/api/messages.js
import { pool } from "../../lib/database";
import { authenticate } from "../../lib/auth";
import { cors } from "../../lib/cors.js";

export default async function handler(req, res) {
  if (cors(req, res)) return;
  const user = await authenticate(req, res);
      if (!user) return res.status(401).json({ message: "Unauthorized" });
  if (req.method === "POST") {
    // ----------------- POST: store bulk messages -----------------
const { template_id, message, contacts, image, button } = req.body;
const user_id = user.user_id; // 👈 from logged-in user

    if (!message || !contacts || contacts.length === 0) {
      return res.status(400).json({ error: "Message and contacts are required" });
    }

    const client = await pool.connect();
    try {
      await client.query("BEGIN");

      // 1️⃣ Insert the message
      const msgInsert = await client.query(
        `INSERT INTO messages (message, image, campaignid, user_id, button)
         VALUES ($1, $2, NULL, $3, $4)
         RETURNING messageid`,
        [message, image || null, user_id, button || null]
      );
      const messageid = msgInsert.rows[0].messageid;

      const receipts = [];

      // 2️⃣ Insert a receipt for each contact (simulate sending)
      for (const contact of contacts) {
        const status = "queued"; // default status for simulation
        const receipt = await client.query(
          `INSERT INTO message_receipts
           (messageid, contactid, template_id, status)
           VALUES ($1, $2, $3, $4)
           RETURNING sentid`,
          [messageid, contact.contactid, template_id || null, status]
        );

        receipts.push({
          contact: contact.contactid,
          sentid: receipt.rows[0].sentid,
          status
        });
      }

      await client.query("COMMIT");

      return res.status(200).json({ message: "Messages stored successfully", receipts });
    } catch (error) {
      await client.query("ROLLBACK");
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    } finally {
      client.release();
    }
  } 
  else if (req.method === "GET") {
  // Expect ?user_id=123 in the query
  const user_id = user.user_id; // 👈 from logged-in user

  try {
    const messagesRes = await pool.query(
      `SELECT m.messageid, m.message, m.image, m.campaignid, m.user_id, m.button, m.created_at,
              json_agg(json_build_object(
                'sentid', r.sentid,
                'contactid', r.contactid,
                'template_id', r.template_id,
                'status', r.status,
                'sent_at', r.sent_at,
                'delivered_at', r.delivered_at,
                'read_at', r.read_at,
                'error_message', r.error_message
              )) AS receipts
       FROM messages m
       LEFT JOIN message_receipts r ON m.messageid = r.messageid
       WHERE m.user_id = $1
       GROUP BY m.messageid
       ORDER BY m.created_at DESC`,
      [user_id]
    );

    return res.status(200).json({ messages: messagesRes.rows });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch messages" });
  }
}
}
