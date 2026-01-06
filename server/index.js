import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Groq client (OpenAI compatible)
const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});

app.post("/summarize", async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    console.log("URL received:", url);

    // Fetch webpage safely
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept: "text/html"
      },
      timeout: 10000
    });

    // Extract visible text
    const $ = cheerio.load(data);
    const text = $("body").text().replace(/\s+/g, " ").trim();

    console.log("Extracted text length:", text.length);

    if (text.length < 100) {
      return res
        .status(400)
        .json({ error: "Not enough readable content" });
    }

    // ✅ UPDATED GROQ MODEL (WORKING)
    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: "Summarize the webpage in 5–6 clear, concise lines."
        },
        {
          role: "user",
          content: text.substring(0, 4000)
        }
      ],
      temperature: 0.4
    });

    const summary = completion.choices[0].message.content;

    res.json({ summary });
  } catch (error) {
    console.error("SERVER ERROR:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
