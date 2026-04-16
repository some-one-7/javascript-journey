import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");

  const fetchUser = async () => { const res = await fetch("https://api.github.com/users/${username}"); const data = await res.json(); console.log(data); };

  return (
    <div className="container">
      <h1>GitHub Auto Fetch</h1>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={fetchUser}>Search</button>
    </div>
  );
}
