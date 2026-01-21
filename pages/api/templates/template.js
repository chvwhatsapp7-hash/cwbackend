import { pool } from "../../../lib/database.js";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      created_by,
      template_name,
      category,
      language,
      template_type,
      header_type,
      header_text,
      header_media_url,
      message_body,
      footer_text,
      variable_count,
      variables,
      buttons
    } = req.body;


    const templateQuery = `
      INSERT INTO template_table (
        created_by,
        template_name,
        category,
        language,
        template_type,
        header_type,
        header_text,
        header_media_url,
        message_body,
        footer_text,
        variable_count,
        variables,
        status,
        approval_status
      )
      VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,'draft','pending'
      )
      RETURNING template_id;
    `;

    const templateValues = [
      created_by,
      template_name,
      category,
      language,
      template_type || "custom",
      header_type || null,
      header_text || null,
      header_media_url || null,
      message_body,
      footer_text || null,
      variable_count || 0,
      variables || null
    ];

    const templateResult = await pool.query(
      templateQuery,
      templateValues
    );

    const templateId = templateResult.rows[0].template_id;

    if (Array.isArray(buttons)) {
      const buttonQuery = `
        INSERT INTO template_buttons (
          template_id,
          button_type,
          button_text,
          button_value,
          position
        )
        VALUES ($1,$2,$3,$4,$5);
      `;

      for (let i = 0; i < buttons.length; i++) {
        const btn = buttons[i];
        await pool.query(buttonQuery, [
          templateId,
          btn.button_type,
          btn.button_text,
          btn.button_value || null,
          btn.position || i + 1
        ]);
      }
    }

    return res.status(201).json({
      success: true,
      template_id: templateId
    });

  } catch (error) {
    console.error("POST /api/templates/template error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to create template"
    });
  }
}
