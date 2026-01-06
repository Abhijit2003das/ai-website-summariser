AI-Driven Website Summariser Web App
📌 Overview

This project is a simple AI-powered web application that allows users to enter any public website URL and receive a concise summary of the webpage content.

The application fetches visible text from the webpage, processes it using an AI language model, and displays a short, readable summary to the user.

This project was developed as part of an assignment to demonstrate:

Frontend–backend integration

Basic web scraping

AI API usage

Clean project structure

🚀 Features

Input field to enter any public URL

Backend fetches and extracts visible webpage text

AI-generated summary of the webpage

Loading indicator during processing

Clean and minimal UI

Proper error handling

🛠️ Tech Stack
Frontend

React (Vite)

HTML, CSS, JavaScript

Fetch API

Backend

Node.js

Express.js

Axios (for fetching webpage content)

Cheerio (for extracting visible text)

CORS & dotenv

AI Integration

Groq AI API

Model used: llama-3.1-8b-instant

OpenAI-compatible SDK

Note: Groq was chosen due to its reliable free-tier access and fast inference speed.
The assignment allows the use of any AI API such as OpenAI, Gemini, or Groq.

🧠 How AI Is Used

The backend fetches HTML content from the given URL.

Cheerio extracts visible text from the webpage body.

The extracted text is sent to the Groq LLM.

The AI model generates a concise 5–6 line summary.

The summary is returned to the frontend and displayed to the user.

📁 Project Structure
ai-website-summariser
│
├── client
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── server
    ├── index.js
    ├── package.json
    └── .env.example

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone <your-github-repo-link>
cd ai-website-summariser

2️⃣ Backend Setup
cd server
npm install


Create a .env file in the server folder:

GROQ_API_KEY=your_groq_api_key_here


Start the backend server:

npm start


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup

Open a new terminal:

cd client
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🧪 How to Use

Open the frontend URL in your browser

Enter a valid public website URL
Example:

https://www.ibm.com/topics/artificial-intelligence


Click Summarize

Wait for the AI-generated summary to appear

⚠️ Notes & Limitations

Only public websites are supported

Some sites (e.g., Medium, LinkedIn) may block scraping

AI output may vary slightly for the same URL

.env file should never be committed to GitHub

📹 Demo (Optional)

A short demo video (1–3 minutes) can be recorded showing:

URL input

Loading indicator

Generated summary

✅ Assignment Requirements Checklist

✔ React frontend

✔ Node.js backend

✔ Webpage content extraction

✔ AI integration

✔ Loading indicator

✔ Clean folder structure

✔ README with setup instructions

👨‍💻 Author

Abhijit Das

🏁 Conclusion

This project demonstrates a complete flow from URL input → content extraction → AI summarization → UI display.
It reflects practical backend handling, API integration, and clean frontend development.