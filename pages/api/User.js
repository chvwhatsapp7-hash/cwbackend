import { pool } from "../../lib/database.js";
import { hashpassword, verifypassword } from "../../lib/hash.js";
import { generateAccessToken, generateRefreshToken } from "../../lib/jwt.js";
import cookie from "cookie";
import { authenticate } from "../../lib/auth.js";

export default async function User(req, res) {
  const method = req.method;
  const action = req.query.action;

  if (method === "POST") {
    if (action === "adduser") {
      try {
        const { first_name, last_name, email, password, whatsapp_number, country } =
          req.body;

        if (!email || !password)
          return res.status(400).json({ message: "Email and password are required" });

        const hashedPassword = await hashpassword(password);

        const query = `
          INSERT INTO "User"
          (first_name, last_name, email, password, whatsapp_number, country)
          VALUES ($1,$2,$3,$4,$5,$6)
          RETURNING user_id, first_name, last_name, email;
        `;

        const values = [first_name, last_name, email, hashedPassword, whatsapp_number, country];

        const result = await pool.query(query, values);
        return res.status(201).json(result.rows[0]);
      } catch (err) {
        console.error("Insert failed:", err.message);
        return res.status(500).json({ message: "Failed to register user", error: err.message });
      }
    }
    else if (action === "login") {
      try {
        const { email, password } = req.body;

        if (!email || !password)
          return res.status(400).json({ message: "Email and password are required" });

        const query = `SELECT user_id, email, password FROM "User" WHERE LOWER(email) = $1`;
        const result = await pool.query(query, [email.trim().toLowerCase()]);

        if (result.rows.length === 0)
          return res.status(404).json({ message: "User not found" });

        const user = result.rows[0];
        const isMatch = await verifypassword(password, user.password);

        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.setHeader("Set-Cookie", [
          cookie.serialize("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 15 * 60,
          }),
          cookie.serialize("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 7 * 24 * 60 * 60,
          }),
        ]);

        return res.status(200).json({ message: "Login successful" });
      } catch (error) {
        console.error("Login failed:", error.message);
        return res.status(500).json({ message: "Login failed", error: error.message });
      }
    }

    else if (action === "logout") {
      try {
        res.setHeader("Set-Cookie", [
          cookie.serialize("accessToken", "", { httpOnly: true, path: "/", expires: new Date(0) }),
          cookie.serialize("refreshToken", "", { httpOnly: true, path: "/", expires: new Date(0) }),
        ]);
        return res.status(200).json({ message: "Logged out successfully" });
      } catch (error) {
        return res.status(500).json({ message: "Logout failed", error: error.message });
      }
    } else {
      return res.status(400).json({ message: "Invalid action" });
    }
  }

  else if (method === "GET") {
    if (action === "profile") {
      try {
        const decoded = authenticate(req, res);
        const user_id = decoded.user_id;
        const result = await pool.query(
          `SELECT user_id, first_name, last_name, email, whatsapp_number, country
          FROM "User" WHERE user_id = $1`,
          [user_id]
        );

        if (result.rows.length === 0)
          return res.status(404).json({ message: "User not found" });
        return res.status(200).json({ user: result.rows[0] });
      } catch (error) {
        return res.status(401).json({ message: error.message });
      }
    }
    return res.status(400).json({ message: "Invalid action" });
  }
  else if (method === "PUT") {
    if (action === "updatepassword") {
      try {
        const { email, password } = req.body;
        const hashedPassword = await hashpassword(password);
        await pool.query(`UPDATE "User" SET password=$2 WHERE email=$1`, [email, hashedPassword]);
        return res.status(200).json({ message: "Password updated successfully" });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
    else if (action === "updateprofile") {
      try {
        const decoded = authenticate(req, res);
        const user_id = decoded.user_id;
        const { first_name, last_name, email, country, whatsapp_number } = req.body;
        await pool.query(
          `UPDATE "User" SET first_name=$1, last_name=$2, email=$3, country=$4, whatsapp_number=$5 WHERE user_id=$6`,
          [first_name, last_name, email, country, whatsapp_number, user_id]
        );
        return res.status(200).json({ message: "Profile updated successfully" });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    }
    return res.status(400).json({ message: "Invalid action" });
  }
  else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
