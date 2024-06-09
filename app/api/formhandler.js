// pages/api/formhandler.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;
    // Process form data, e.g., store it in a database
    console.log(formData);
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
