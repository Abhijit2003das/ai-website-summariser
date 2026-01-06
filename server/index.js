
import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/summarize", async (req, res) => {
  try {
    const { url } = req.body;

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const text = $("body").text().replace(/\s+/g, " ").trim();

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: "Summarize the following webpage in 5-6 lines:\n" + text.substring(0, 4000) }
              ]
            }
          ]
        })
      }
    );

    const result = await response.json();
    res.json({ summary: result.candidates[0].content.parts[0].text });
  } catch (err) {
    res.status(500).json({ error: "Failed to summarize" });
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
