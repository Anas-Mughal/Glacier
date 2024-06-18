// lib/appwrite.js
import { Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
  .setProject("6671428f001e4f830c3c"); // Your project ID

client.headers["X-Appwrite-Key"] =
  "b88e6a60d18bd039605367269691c376a9cbcbb60edd0315774e1394007bca2c3a3b8e656bd018db4091b7045b237871861c7092b435da8b18624ff8c57083c025a1c3362de63198360628ed6bc9793bd9cd46f741d298b1e16073671e65a809cf3df2fbea4ce42caab5caa02403dfedab2412d4ca0cb14b87dbd2ab1f94a8b4"; // Your API Key

const databases = new Databases(client);

export { client, databases };
