import { useState, useEffect } from "react";

export default function App() {
  const [username, setUsername] = useState("octocat");

  const fetchUser = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    console.log(data);
  };

  // ✅ Auto fetch on page load
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>GitHub Finder</h1>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={fetchUser}>Search</button>
    </div>
  );
}
