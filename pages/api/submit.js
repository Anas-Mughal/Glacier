// pages/api/submit.js
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, number, bottles, review } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db("your-database-name"); // Replace with your database name

      const collection = db.collection("submissions");
      const result = await collection.insertOne({
        name,
        email,
        number,
        bottles,
        review,
        submittedAt: new Date(),
      });

      res.status(200).json({ message: "Message sent successfully!", result });
    } catch (error) {
      console.error("Error saving to MongoDB:", error);
      res
        .status(500)
        .json({ message: "Failed to save message. Please try again later." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
