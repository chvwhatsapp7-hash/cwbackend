import multer from "multer";
import fs from "fs";
import csv from "csv-parser";
import { pool } from "../../lib/database";
import { authenticate } from "../../lib/auth";


const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      resolve();
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const user = await authenticate(req);
        if (!user) return res.status(401).json({ message: "Unauthorized" });
    console.log(user.user_id);
    await runMiddleware(req, res, upload.single("file"));

    const filePath = req.file.path;
    const results = [];

    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv({ mapHeaders: ({ header }) => header.trim() }))
        .on("data", (row) => {
          const name = row.name?.trim();
          const phnnum = row.phnnum?.trim();

          if (!name || !phnnum) {
            console.log("Skipping row with missing data:", row);
            return;
          }

          results.push({ name, phnnum });
        })
        .on("end", resolve)
        .on("error", reject);
    });

    if (results.length > 0) {
      const values = [];
      const placeholders = [];

      results.forEach((row, index) => {
        const i = index * 3;
        placeholders.push(`($${i + 1}, $${i + 2}, $${i+3})`);
        values.push(row.name, row.phnnum,user.user_id);
      });

      const query = `INSERT INTO contacts (name, phonenum, userid) VALUES ${placeholders.join(", ")}`;
      await pool.query(query, values);
    }

    fs.unlink(filePath, (err) => {
      if (err) console.error("Error removing file:", err);
      else console.log("File removed after processing.");
    });

    return res.status(200).json({
      message: "Data inserted successfully",
      rowsInserted: results.length,
    });
  } catch (err) {
    console.error("Error processing request:", err);
    return res.status(500).json({ error: "An error occurred during processing." });
  }
}
