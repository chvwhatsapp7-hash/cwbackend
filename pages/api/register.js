import { pool } from "../../lib/database.js";
import { hashpassword } from "../../lib/hash.js";
import { cors } from "../../lib/cors.js"; 

export default async function register(req, res) {
  if (cors(req, res)) return; 
  // ✅ Allow CORS preflight


if (req.method !== "POST") {
  res.setHeader("Allow", ["POST"]);
  return res.status(405).json({ message: "Method not allowed" });
}


  try {
    const {
  first_name,
  last_name,
  email,
  password,
  whatsapp_number,
  country,
  gst_num,
  website,
  api_key,
  role,
  created_by
} = req.body;


    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    if (!gst_num) {
      return res
        .status(400)
        .json({ message: "GST number is required" });
    }


    const hashedPassword = await hashpassword(password);

    const query = `
  INSERT INTO "User"
  (first_name, last_name, email, password, whatsapp_number, country, role, gst_num, website, api_key, created_by)
  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
  RETURNING user_id, first_name, last_name, email, role, created_by;
`;


    const values = [
  first_name,
  last_name,
  email,
  hashedPassword,
  whatsapp_number,
  country,
  role || "client",
  gst_num,
  website,
  api_key,
  created_by ?? 0,
];

    const result = await pool.query(query, values);
    return res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Register failed:", err.message);
    if (err.code === '23505') {
        return res.status(409).json({ message: "A user with this email, WhatsApp number, or GST number already exists." });
    }
    return res
      .status(500)
      .json({ message: "Failed to register user", error: err.message });
  }
}