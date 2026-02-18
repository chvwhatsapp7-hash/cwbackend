import fs from "fs";
import path from "path";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false, // REQUIRED for multer
  },
};

// Ensure uploads directory exists
const uploadDir = path.join(process.cwd(), "public/uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + "-" + file.originalname);
  },
});

const upload = multer({ storage });

export default function handler(req, res) {
  if (cors(req, res)) return;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  upload.single("file")(req, res, err => {
    if (err) {
      console.error("Multer error:", err);
      return res.status(500).json({ error: "Upload error" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3000";

    const fileUrl = `${baseUrl}/uploads/${req.file.filename}`;

    return res.status(200).json({
      url: fileUrl,
      filename: req.file.filename,
    });
  });
}
