import { pool } from "../../../lib/database.js";
import { cors } from "../../../lib/cors.js";

export default async function handler(req, res) {
  if (cors(req, res)) return;

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const result = await pool.query(
  `SELECT 
      user_id, 
      first_name, 
      last_name, 
      email, 
      whatsapp_number,
      website,
      country,
      gst_num,
      status,
      ispremium,
      role
   FROM "User"
   ORDER BY user_id DESC`
);


    res.status(200).json({
      success: true,
      users: result.rows,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}
