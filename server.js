// Importing the required modules
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

// Create an express instance
const app = express();
// Enable cors for all the routes
app.use(cors());
// load the environment variable from .env
const EXCHANGE_API_KEY = process.env.EXCHANGE_API_KEY;

// Exchange rate endpoint
app.get("/exchange-rate", async (req, res) => {
  const searchQuery = req.query.q;
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${EXCHANGE_API_KEY}/latest/${searchQuery}`
    );
    const data = await response.json();
    console.log(data);

    res.json(data);
  } catch (error) {
    console.error("Error fetching the exchange rate data:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
