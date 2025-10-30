import { pool } from "../../../lib/database.js";
import { hashpassword, verifypassword } from "../../../lib/hash.js";
import { authenticate } from "../../../lib/auth.js";

export default async function updatePassword(req, res) {
  if (req.method !== "PUT") {
    res.setHeader("Allow", ["PUT"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const decoded = authenticate(req, res);
    const user_id = decoded.user_id;

    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
        return res.status(400).json({ message: "Old and new passwords are required." });
    }

    const result = await pool.query(
      `SELECT password FROM "User" WHERE user_id = $1`,
      [user_id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result.rows[0];
    
    const isMatch = await verifypassword(oldPassword, user.password); //
    if (!isMatch) {
        return res.status(401).json({ message: "Your old password is not correct." });
    }

    const newHashedPassword = await hashpassword(newPassword); //
    await pool.query(
      `UPDATE "User" SET password=$1 WHERE user_id=$2`,
      [newHashedPassword, user_id]
    );

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
     if (error.message.includes("token")) {
        return res.status(401).json({ message: error.message });
    }
    console.error("Password update error:", error.message)
    return res.status(500).json({ message: error.message });
  }
}