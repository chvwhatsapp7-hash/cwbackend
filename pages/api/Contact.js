import { pool } from "../../lib/database";
import { authenticate } from "../../lib/auth";

export default async function Contact(req, res) {
  // --- DIAGNOSTIC LOG ---
  console.log("\n--- [START] RUNNING Contact.js ---");

  const method = req.method;
  const action = req.query.action;
  
  console.log(`METHOD: ${method} | ACTION: ${action}`);

  // --- GET Contacts ---
  if (method === "GET") {
    try {
      console.log("Authenticating user...");
      const user = await authenticate(req, res);
      
      // --- DIAGNOSTIC LOG ---
      console.log("Authenticated user object:", user);

      if (!user) {
        console.log("Authentication FAILED. User is null or undefined.");
        return res.status(401).json({ message: "Unauthorized" });
      }

      // --- DIAGNOSTIC LOG ---
      console.log(`Fetching contacts for user_id: ${user.user_id}`);

      const result = await pool.query(
        "SELECT * FROM contacts WHERE userid = $1 ORDER BY name ASC",
        [user.user_id]
      );

      // --- DIAGNOSTIC LOG ---
      console.log(`Database query returned ${result.rowCount} rows.`);
      console.log("--- [END] Request successful ---");

      return res.status(200).json({ contacts: result.rows });
    } catch (error) {
      console.error("Get Contacts Error:", error);
      console.log("--- [END] Request failed with error ---");
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // --- POST Contact ---
  if (method === "POST") {
    try {
      console.log("Authenticating user for POST...");
      const user = await authenticate(req, res);
      if (!user) {
        console.log("Authentication FAILED. User is null or undefined.");
        return res.status(401).json({ message: "Unauthorized" });
      }
      
      console.log(`Adding contacts for user_id: ${user.user_id}`);
      
      if (action === "addcontacts") {
        let { contacts } = req.body;
        const contactList = Array.isArray(contacts) ? contacts : [contacts];

        if (!contactList.length) {
          return res.status(400).json({ message: "No contact data provided" });
        }

        for (const c of contactList) {
          if (!c.name || !c.phonenum) {
            return res
              .status(400)
              .json({ message: "Each contact must have name and phonenum" });
          }
        }

        const query = `
        INSERT INTO contacts (name, phonenum, userid)
        VALUES ${contactList
          .map((_, i) => `($${i * 3 + 1}, $${i * 3 + 2}, $${i * 3 + 3})`)
          .join(", ")}
        RETURNING *;
        `;

        const values = contactList.flatMap((c) => [
          c.name,
          c.phonenum,
          user.user_id,
        ]);

        await pool.query("BEGIN");
        let result;
        try {
          result = await pool.query(query, values);
          await pool.query("COMMIT");
        } catch (err) {
          await pool.query("ROLLBACK");
          throw err;
        }

        console.log("--- [END] POST successful ---");
        return res.status(201).json({
          message:
            contactList.length > 1
              ? "Multiple contacts added successfully"
              : "Contact added successfully",
          data: result.rows,
        });
      }

      console.log("--- [END] POST failed, invalid action ---");
      return res.status(400).json({ message: "Invalid action" });
    } catch (error) {
      console.error("Contact API Error:", error);
      console.log("--- [END] POST failed with error ---");
      return res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }

  // --- DELETE Contact ---
  if (method === "DELETE") {
    try {
      console.log("Authenticating user for DELETE...");
      const user = await authenticate(req, res);
      if (!user) {
        console.log("Authentication FAILED. User is null or undefined.");
        return res.status(401).json({ message: "Unauthorized" });
      }

      const { id } = req.query;
      console.log(`Deleting contact ${id} for user_id: ${user.user_id}`);

      if (!id) {
        console.log("--- [END] DELETE failed, no ID provided ---");
        return res.status(400).json({ message: "Contact ID is required" });
      }

      const deleteQuery = `
        DELETE FROM contacts
        WHERE contactid = $1 AND userid = $2
      `;
      
      const result = await pool.query(deleteQuery, [id, user.user_id]);

      if (result.rowCount === 0) {
        console.log("--- [END] DELETE failed, contact not found or no permission ---");
        return res.status(404).json({ message: "Contact not found or you do not have permission to delete it." });
      }

      console.log("--- [END] DELETE successful ---");
      return res.status(200).json({ message: "Contact deleted successfully" });

    } catch (error) {
      console.error("Delete Contact Error:", error);
      console.log("--- [END] DELETE failed with error ---");
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  console.log(`--- [END] Request failed, method ${method} not allowed ---`);
  return res.status(405).json({ message: "Method not allowed" });
}