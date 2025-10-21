import { pool } from "../../lib/database";
import { authenticate } from "../../lib/auth";

export default async function Contact(req, res) {

const method = req.method;
const action = req.query.action;

if (method !== "POST") {
return res.status(405).json({ message: "Method not allowed" });
}

try {
if (action === "addcontacts") {
    const user = await authenticate(req);
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    let { contacts } = req.body;
    const contactList = Array.isArray(contacts) ? contacts : [contacts];

    if (!contactList.length) {
    return res.status(400).json({ message: "No contact data provided" });
    }

    for (const c of contactList) {
    if (!c.name || !c.phoneNum) {
        return res
        .status(400)
        .json({ message: "Each contact must have name and phoneNum" });
    }
    }

    const query = `
    INSERT INTO contacts (name, phoneNum, userId)
    VALUES ${contactList
        .map((_, i) => `($${i * 3 + 1}, $${i * 3 + 2}, $${i * 3 + 3})`)
        .join(", ")}
    RETURNING *;
    `;
    const values = contactList.flatMap(c => [c.name, c.phoneNum, user.user_id]);

    await pool.query("BEGIN");
    let result;
    try {
    result = await pool.query(query, values);
    await pool.query("COMMIT");
    } catch (err) {
    await pool.query("ROLLBACK");
    throw err;
    }

    return res.status(201).json({
    message:
        contactList.length > 1
        ? "Multiple contacts added successfully"
        : "Contact added successfully",
    data: result.rows,
    });
}

return res.status(400).json({ message: "Invalid action" });
} catch (error) {
console.error("Contact API Error:", error);
return res.status(500).json({ message: "Internal Server Error", error: error.message });
}
}
