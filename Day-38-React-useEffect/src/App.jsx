import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="container">
      <h1>GitHub Auto Fetch</h1>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button>Search</button>
    </div>
  );
}
