import { pool } from "../../../lib/database";

export default async function handler(req, res) {
  const { method } = req;
  const action = req.query.action;

  try {

    // ================= POST =================
    if (method === "POST" && action === "add") {

      const { messageid, contactid, template_id, status } = req.body;

      if (!messageid || !contactid || !template_id) {
        return res.status(400).json({
          message: "All fields are required"
        });
      }

      // ✅ Allow only sent / unsent
      const validStatus = ["sent", "unsent"];
      const finalStatus = validStatus.includes(status)
        ? status
        : "unsent";

      const result = await pool.query(
        `INSERT INTO message_receipts
         (messageid, contactid, template_id, status)
         VALUES ($1, $2, $3, $4)
         RETURNING 
           sentid,
           messageid,
           contactid,
           template_id,
           status,
           sent_at AT TIME ZONE 'Asia/Kolkata' AS sent_at`,
        [messageid, contactid, template_id, finalStatus]
      );

      return res.status(201).json({
        message: "Recipient added successfully",
        data: result.rows[0]
      });
    }

    // ================= GET =================
    if (method === "GET" && action === "list") {

      const result = await pool.query(
        `SELECT 
            sentid,
            messageid,
            contactid,
            template_id,
            status,
            sent_at AT TIME ZONE 'Asia/Kolkata' AS sent_at
         FROM message_receipts
         ORDER BY sentid DESC`
      );

      return res.status(200).json({
        data: result.rows
      });
    }

    return res.status(405).json({ message: "Method not allowed" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}z