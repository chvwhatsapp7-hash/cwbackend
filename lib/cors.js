// Parse allowed origins safely
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map(origin => origin.trim())
  .filter(Boolean);

export function cors(req, res) {
  const origin = req.headers.origin;

  // ✅ Match exact origin
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }

  // ✅ Required for cookies
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // ✅ Keep headers clean (important for preflight success)
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  // ✅ Handle preflight properly
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  return false;
}
