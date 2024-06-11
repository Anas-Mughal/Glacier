// pages/api/connect.js

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  // if (req.method !== "GET") {
  //   return res.status(405).json({ message: "Method Not Allowed" });
  // }

  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    const database = client.db("admin");

    // Send a ping to confirm a successful connection
    await database.command({ ping: 1 });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    res.status(200).json({ message: "Connected to MongoDB!" });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ message: "Failed to connect to MongoDB" });
  } finally {
    // Close the connection
    await client.close();
  }
}
