import cookie from "cookie";
import { cors } from "../../../lib/cors.js";

export default async function logout(req, res) {

  cors(req, res);
    if (req.method === "OPTIONS") return;
    
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    res.setHeader("Set-Cookie", [
      cookie.serialize("accessToken", "", {
        httpOnly: true,
        path: "/",
        expires: new Date(0),
      }),
      cookie.serialize("refreshToken", "", {
        httpOnly: true,
        path: "/",
        expires: new Date(0),
      }),
    ]);
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Logout failed", error: error.message });
  }
}