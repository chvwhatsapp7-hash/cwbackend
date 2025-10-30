import { pool } from "../../../lib/database.js";
import { verifypassword } from "../../../lib/hash.js";
import { generateAccessToken, generateRefreshToken } from "../../../lib/jwt.js";
import cookie from "cookie";

export default async function login(req, res) {

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    } 

    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Email and password are required" });
        }

        const query = `SELECT user_id, email, password, role FROM "User" WHERE LOWER(email) = $1`;
        const result = await pool.query(query, [email.trim().toLowerCase()]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const user = result.rows[0];
        
        const isMatch = await verifypassword(password, user.password); //

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        const tokenPayload = {
            user_id: user.user_id,
            role: user.role
        };

        const accessToken = generateAccessToken(tokenPayload);
        const refreshToken = generateRefreshToken(tokenPayload);

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

        return res.status(200).json({ 
            message: "Login successful",
            user: {
                id: user.user_id,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Login failed:", error.message);
        return res
        .status(500)
        .json({ message: "Login failed", error: error.message });
    }
}