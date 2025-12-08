import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = { api: { bodyParser: false } };

export default async function uploadHandler(req, res){
  if(req.method !== 'POST') return res.status(405).end();
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), '/public/uploads');
  form.keepExtensions = true;
  if(!fs.existsSync(form.uploadDir)) fs.mkdirSync(form.uploadDir, { recursive:true });

  form.parse(req, (err, fields, files) => {
    if(err) return res.status(500).json({ error: err.message });
    const file = files.file;
    const url = `/uploads/${path.basename(file.path)}`;
    res.status(200).json({ url });
  });
}
