// pages/api/submit.js
import { databases } from "../../lib/appwrite";
import { ID } from "appwrite";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, number, bottles, review } = req.body;

    try {
      const databaseId = "66714a2f0008fd332708"; // Replace with your Database ID
      const collectionId = "66714b930021775a8df2"; // Replace with your Collection ID

      const response = await databases.createDocument(
        databaseId,
        collectionId,
        ID.unique(), // Automatically generate a unique document ID
        {
          name,
          email,
          number,
          bottles,
          review,
        }
      );

      res.status(200).json({
        message: "Message sent successfully!",
        documentId: response.$id,
      });
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(500).json({
        message: "Failed to send message. Please try again later.",
      });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
