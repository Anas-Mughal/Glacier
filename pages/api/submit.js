// pages/api/submit.js
import { connectDatabase, getDb } from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, number, bottles, review } = req.body;

    try {
      await connectDatabase();

      const db = getDb();

      const result = await db
        .collection("formdata_collection_glacier")
        .insertOne({
          name,
          email,
          number,
          bottles,
          review,
        });

      res.status(200).json({
        message: "Message sent successfully!",
        insertedId: result.insertedId,
      });
    } catch (error) {
      console.error("Error sending message:", error);
      res
        .status(500)
        .json({ message: "Failed to send message. Please try again later." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
