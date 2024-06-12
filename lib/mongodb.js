// lib/mongodb.js
import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://Anas_Mughal:Cbw8knmvtW9tQddP@glacier.vjbqzya.mongodb.net/?retryWrites=true&w=majority&appName=Glacier";

let db;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectDatabase() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    db = client.db("formdata_glacier");
    console.log("Db connected");
    return db; // Return the connected database
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error; // Rethrow the error to handle it in the caller function
  }
}

export function getDb() {
  if (!db) {
    throw new Error("Database not initialized. Call connectDatabase first.");
  }
  return db;
}
