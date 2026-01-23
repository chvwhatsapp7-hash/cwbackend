/*import { pool } from "../../../lib/database.js";
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

}*/

import { pool } from "../../../lib/database.js";
import { authenticate } from "../../../lib/auth";

export default async function handler(req, res) {

  if (req.method === "POST") {
    const user = await authenticate(req, res);
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    try {
      const {
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
        user.user_id,
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
        JSON.stringify(variables)

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
      console.log("POST body:", req.body);
      return res.status(201).json({
        success: true,
        template_id: templateId
      });


    } catch (error) {
      console.error("POST /api/templates/template error:", error);
      console.log("POST body:", req.body);
      return res.status(500).json({
        success: false,
        error: "Failed to create template"
      });
    }
  }
  if (req.method === "GET") {
    const user = await authenticate(req, res);
    if (!user) return res.status(401).json({ message: "Unauthorized" });
  try {
    const query = `
      SELECT 
        t.*,
        COALESCE(
          json_agg(
            json_build_object(
              'button_id', b.button_id,
              'button_type', b.button_type,
              'button_text', b.button_text,
              'button_value', b.button_value,
              'position', b.position
            )
            ORDER BY b.position
          ) FILTER (WHERE b.button_id IS NOT NULL),
          '[]'
        ) AS buttons
      FROM template_table t
      LEFT JOIN template_buttons b
        ON t.template_id = b.template_id
      WHERE t.created_by = $1
      GROUP BY t.template_id
      ORDER BY t.created_at DESC
    `;

    const values = [user.user_id];

    const result = await pool.query(query, values);

    return res.status(200).json({
      success: true,
      data: result.rows
    });

  } catch (error) {
    console.error("GET /api/templates/template error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to fetch templates"
    });
  }
}



if (req.method === "PUT") {
  const user = await authenticate(req, res);
  if (!user) return res.status(401).json({ message: "Unauthorized" });
  try {
    const { template_id } = req.query;

    if (!template_id) {
      return res.status(400).json({
        success: false,
        error: "template_id is required"
      });
    }

    const {
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


    const existsCheck = await pool.query(
      "SELECT 1 FROM template_table WHERE template_id = $1",
      [template_id]
    );

    if (existsCheck.rowCount === 0) {
      return res.status(404).json({
        success: false,
        error: "Template not found"
      });
    }

    
    if (template_name) {
      const nameCheck = await pool.query(
        `
        SELECT 1
        FROM template_table
        WHERE template_name = $1
          AND template_id <> $2
        `,
        [template_name, template_id]
      );

      if (nameCheck.rowCount > 0) {
        return res.status(409).json({
          success: false,
          error: "Template name already exists"
        });
      }
    }

  
    const updateQuery = `
      UPDATE template_table
      SET
        template_name     = COALESCE($1, template_name),
        category          = COALESCE($2, category),
        language          = COALESCE($3, language),
        template_type     = COALESCE($4, template_type),
        header_type       = COALESCE($5, header_type),
        header_text       = COALESCE($6, header_text),
        header_media_url  = COALESCE($7, header_media_url),
        message_body      = COALESCE($8, message_body),
        footer_text       = COALESCE($9, footer_text),
        variable_count    = COALESCE($10, variable_count),
        variables         = COALESCE($11, variables),
        updated_at        = CURRENT_TIMESTAMP
      WHERE template_id = $12
      RETURNING template_id;
    `;

    await pool.query(updateQuery, [
      template_name ?? null,
      category ?? null,
      language ?? null,
      template_type ?? null,
      header_type ?? null,
      header_text ?? null,
      header_media_url ?? null,
      message_body ?? null,
      footer_text ?? null,
      variable_count ?? null,
      JSON.stringify(variables)
,
      template_id
    ]);

    
    if (Array.isArray(buttons)) {
      await pool.query(
        "DELETE FROM template_buttons WHERE template_id = $1",
        [template_id]
      );

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
          template_id,
          btn.button_type,
          btn.button_text,
          btn.button_value || null,
          btn.position || i + 1
        ]);
      }
    }

    return res.status(200).json({
      success: true,
      message: "Template updated successfully"
    });

  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        success: false,
        error: "Template name already exists"
      });
    }

    console.error("PUT /api/templates/template error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to update template"
    });
  }
}


if (req.method === "DELETE") {
  const user = await authenticate(req, res);
  if (!user) return res.status(401).json({ message: "Unauthorized" });
  try {
    const { template_id } = req.query;

    const result = await pool.query(
      "DELETE FROM template_table WHERE template_id = $1",
      [template_id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        error: "Template not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Template deleted successfully"
    });

  } catch (error) {
    console.error("DELETE /api/templates/template error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to delete template"
    });
  }
}
}