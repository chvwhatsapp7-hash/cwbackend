import { pool } from "../../../lib/database.js";
import { cors } from "../../../lib/cors.js";

export default async function handler(req, res) {
  if (cors(req, res)) return;

  if (req.method !== "PUT") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { user_id, ispremium } = req.body;

  try {
    await pool.query(
      `UPDATE "User" SET "isPremium" = $1 WHERE user_id = $2`,
      [ispremium, user_id]
    );

    return res.status(200).json({
      success: true,   // ⚠ VERY IMPORTANT
      message: "Premium updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}
