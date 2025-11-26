const DEFAULT_ALLOWED = (process.env.ALLOWED_ORIGINS || "http://localhost:3000,http://localhost:3001").split(",");

export function cors(req, res) {
  const origin = req.headers.origin;
  const allowed = DEFAULT_ALLOWED.map(o => o.trim()).filter(Boolean);

  if (origin && allowed.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    // Tell caches that responses vary by Origin
    res.setHeader("Vary", "Origin");
  }

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With, Accept, Cookie, Set-Cookie"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return true;
  }

  return false;
}
