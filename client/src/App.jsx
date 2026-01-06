
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const summarize = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });
    const data = await res.json();
    setSummary(data.summary);
    setLoading(false);
  };

  return (
    <div className="container">
      <h2>AI Website Summariser</h2>
      <input value={url} onChange={e => setUrl(e.target.value)} placeholder="Enter URL" />
      <button onClick={summarize}>Summarize</button>
      {loading && <p>Loading...</p>}
      {summary && <p>{summary}</p>}
    </div>
  );
}

export default App;
