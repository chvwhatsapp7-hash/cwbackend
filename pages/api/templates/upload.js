import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import multer from "multer";
import { cors } from "../../../lib/cors.js";

export const config = {
  api: { bodyParser: false },
};

// Multer memory storage (IMPORTANT)
const upload = multer({ storage: multer.memoryStorage() });

// DigitalOcean Spaces config
const s3 = new S3Client({
  region: "sfo3",
  endpoint: "https://sfo3.digitaloceanspaces.com",
  credentials: {
    accessKeyId: process.env.DO_SPACES_KEY,
    secretAccessKey: process.env.DO_SPACES_SECRET,
    
  },
});
console.log("KEY:", process.env.DO_SPACES_KEY);
console.log("SECRET:", process.env.DO_SPACES_SECRET);
export default function handler(req, res) {
  if (cors(req, res)) return;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  upload.single("file")(req, res, async err => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Upload error" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    try {
      const fileName = Date.now() + "-" + req.file.originalname;

      const command = new PutObjectCommand({
        Bucket: "chvwahtsapp", // your space name
        Key: `whatsappmarketingimages/${fileName}`,
        Body: req.file.buffer,
        ACL: "public-read",
        ContentType: req.file.mimetype,
      });

      await s3.send(command);

      const fileUrl = `https://chvwahtsapp.sfo3.digitaloceanspaces.com/whatsappmarketingimages/${fileName}`;

      return res.status(200).json({
        url: fileUrl,
        filename: fileName,
      });

    } catch (error) {
      console.error("Upload failed:", error);
      return res.status(500).json({ error: "Upload failed" });
    }
  });
}