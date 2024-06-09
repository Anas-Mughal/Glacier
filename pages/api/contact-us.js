// pages/api/contact-us.js
export default function handler(req, res) {
  if (req.method === "POST") {
    // Destructure all expected fields from the request body
    const { name, email, number, bottles, review } = req.body;

    // Log the received data for demonstration purposes
    console.log(name, email, number, bottles, review);

    // Here you can process the form data, e.g., save it to a database
    // For demonstration, we're just logging the data

    res.status(200).json({ message: "Form submitted successfully" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
