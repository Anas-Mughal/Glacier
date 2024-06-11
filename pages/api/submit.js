// pages/api/submit.js
import clientPromise from "../../lib/mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, number, bottles, review } = req.body;

    try {
      console.log("Connecting to MongoDB...");
      const client = await clientPromise;
      console.log("Connected to MongoDB");

      const db = client.db("formDataDB");
      const collection = db.collection("submissions");

      await collection.insertOne({ name, email, number, bottles, review });

      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Failed to submit message:", error);
      res
        .status(500)
        .json({ error: "Failed to submit message", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, number, bottles, review } = req.body;

//     try {
//       const client = await clientPromise;
//       const db = client.db('formDataDB');
//       const collection = db.collection('submissions');

//       await collection.insertOne({ name, email, number, bottles, review });

//       res.status(200).json({ message: 'Message sent successfully' });
//     } catch (error) {
//       console.error('Failed to submit message:', error);
//       res.status(500).json({ error: 'Failed to submit message' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
