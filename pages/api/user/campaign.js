import { pool } from "../../../lib/database.js";
import { authenticate } from "../../../lib/auth.js";
import { cors } from "../../../lib/cors.js";

export default async function handler(req, res) {
  if (cors(req, res)) return;
  const { method, query, body } = req;
  const { action, id } = query;

  try {
    // ================= AUTHENTICATION =================
    const decoded = await authenticate(req, res);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const userid = decoded.user_id;

    // =========================================================
    // ================= CREATE CAMPAIGN ========================
    // =========================================================
    if (method === "POST" && action === "create") {
      const { campaignname, templateid, status } = body;

      if (!campaignname?.trim()) {
        return res.status(400).json({
          success: false,
          message: "Campaign name is required",
        });
      }

      const result = await pool.query(
        `INSERT INTO campaign (userid, templateid, campaign_name, status)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
        [
          userid,
          templateid || null,
          campaignname.trim(),
          status ?? true,
        ]
      );

      return res.status(201).json({
        success: true,
        message: "Campaign created successfully",
        data: result.rows[0],
      });
    }

    // =========================================================
    // ================= GET ALL CAMPAIGNS =====================
    // =========================================================
    if (method === "GET" && action === "list") {
      const result = await pool.query(
        `SELECT *
         FROM campaign
         WHERE userid = $1 and status = true
         ORDER BY campaignid DESC`,
        [userid]
      );

      return res.status(200).json({
        success: true,
        data: result.rows,
      });
    }

    // =========================================================
    // ================= GET SINGLE CAMPAIGN ===================
    // =========================================================
    if (method === "GET" && action === "single") {
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Campaign ID is required",
        });
      }

      const result = await pool.query(
        `SELECT *
         FROM campaign
         WHERE campaignid = $1
         AND userid = $2`,
        [id, userid]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Campaign not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: result.rows[0],
      });
    }

    // =========================================================
    // ================= UPDATE CAMPAIGN =======================
    // =========================================================
    if (method === "PUT" && action === "update") {
      const { campaignname, templateid, status } = body;

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Campaign ID is required",
        });
      }

      const result = await pool.query(
        `UPDATE campaign
         SET campaign_name = $1,
             templateid = $2,
             status = $3
         WHERE campaignid = $4
         AND userid = $5
         RETURNING *`,
        [
          campaignname?.trim(),
          templateid || null,
          status,
          id,
          userid,
        ]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Campaign not found or not authorized",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Campaign updated successfully",
        data: result.rows[0],
      });
    }

    // =========================================================
    // ================= DELETE CAMPAIGN =======================
    // =========================================================
    if (method === "DELETE" && action === "delete") {
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Campaign ID is required",
        });
      }

      const result = await pool.query(
        `DELETE FROM campaign
         WHERE campaignid = $1
         AND userid = $2
         RETURNING *`,
        [id, userid]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Campaign not found or not authorized",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Campaign deleted successfully",
      });
    }

    // ================= INVALID ROUTE =================
    return res.status(405).json({
      success: false,
      message: "Invalid method or action",
    });

  } catch (error) {
    console.error("Campaign API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}
