import { pool } from "../../../lib/database.js";
import { hashpassword } from "../../../lib/hash.js";
import { cors } from "../../../lib/cors.js";

export default async function updatePassword(req, res) {
  cors(req, res);

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Allow only PUT
  if (req.method !== "PUT") {
    res.setHeader("Allow", ["PUT"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  // ✅ GET action from query
  const { action } = req.query || {};
  const { email, password } = req.body || {};

  // ✅ CHECK ACTION
  if (action !== "updatepassword") {
    return res.status(400).json({ message: "Invalid action" });
  }

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  try {
    const hashedPassword = await hashpassword(password);

    const result = await pool.query(
      `UPDATE "User" SET password=$2 WHERE email=$1`,
      [email.trim().toLowerCase(), hashedPassword]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Update password failed:", error.message);
    return res.status(500).json({
      message: "Update password failed",
      error: error.message,
    });
  }
}
