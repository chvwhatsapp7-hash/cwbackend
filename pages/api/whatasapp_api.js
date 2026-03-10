import { pool } from "../../lib/database"; // PostgreSQL pool
import fetch from "node-fetch";

// Wannotifier API key & URL
const WANNOTIFIER_API_KEY = process.env.WANNOTIFIER_API_KEY;
const WANNOTIFIER_API_URL = "https://api.wannotifier.com/sendMessage";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { user_id, templateid, message, contacts, image, button } = req.body;

  if (!message || !contacts || contacts.length === 0) {
    return res.status(400).json({ error: "Message and contacts are required" });
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // 1️⃣ Insert the main message
    const msgInsert = await client.query(
      `INSERT INTO messages (message, image, campaignid, user_id, button, templateid)
       VALUES ($1, $2, NULL, $3, $4, $5)
       RETURNING messageid`,
      [message, image || null, user_id, button || null, templateid || null]
    );

    const messageid = msgInsert.rows[0].messageid;

    // 2️⃣ Send messages concurrently
    const sendPromises = contacts.map(async contact => {
      try {
        const payload = {
          phone: contact.phone,
          message,
          image: image || undefined,
          button: button || undefined,
          template_id: templateid || undefined
        };

        const response = await fetch(WANNOTIFIER_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${WANNOTIFIER_API_KEY}`
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        const receipt = await client.query(
          `INSERT INTO message_receipts
           (messageid, contactid, templateid, provider_msg_id, status)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING sentid`,
          [
            messageid,
            contact.contactid,
            templateid || null,
            result?.message_id || result?.id || null,
            result?.status || "queued"
          ]
        );

        return { contact: contact.phone, sentid: receipt.rows[0].sentid, status: result?.status || "queued" };
      } catch (err) {
        // Insert failed receipt
        const receipt = await client.query(
          `INSERT INTO message_receipts
           (messageid, contactid, templateid, status, error_message)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING sentid`,
          [messageid, contact.contactid, templateid || null, "failed", err.message]
        );

        return { contact: contact.phone, sentid: receipt.rows[0].sentid, status: "failed", error: err.message };
      }
    });

    // Wait for all messages to be sent
    const receipts = await Promise.all(sendPromises);

    await client.query("COMMIT");

    return res.status(200).json({ message: "Bulk messages sent", receipts });

  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error sending bulk messages:", error);
    return res.status(500).json({ error: "Internal server error" });
  } finally {
    client.release();
  }
}
