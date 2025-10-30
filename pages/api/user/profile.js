// pages/api/user/profile.js
import { pool } from "../../../lib/database.js";
import { authenticate } from "../../../lib/auth.js"; // Your auth middleware

export default async function profile(req, res) {
  try {
    // 1. Authenticate the user for both GET and PUT
    const decoded = authenticate(req, res); // This will throw an error if not auth'd
    const user_id = decoded.user_id;

    if (req.method === "GET") {

      const result = await pool.query(
        `SELECT user_id, first_name, last_name, email, whatsapp_number, country, role
         FROM "User" WHERE user_id = $1`,
        [user_id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ user: result.rows[0] });

    } else if (req.method === "PUT") {

      const { first_name, last_name, email, country, whatsapp_number } =
        req.body;
      await pool.query(
        `UPDATE "User" 
         SET first_name=$1, last_name=$2, email=$3, country=$4, whatsapp_number=$5 
         WHERE user_id=$6`,
        [first_name, last_name, email, country, whatsapp_number, user_id]
      );
      return res.status(200).json({ message: "Profile updated successfully" });

    } else {
      res.setHeader("Allow", ["GET", "PUT"]);
      return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {

    if (error.message.includes("token")) {
        return res.status(401).json({ message: error.message });
    }
    console.error("Profile error:", error.message)
    return res.status(500).json({ message: error.message });
  }
}