import { useState, useEffect } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [debouncedUsername, setDebouncedUsername] = useState("");
  const [userData, setUserData] = useState(null);

  // 🔥 Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedUsername(username);
    }, 500); // delay 500ms

    return () => clearTimeout(timer);
  }, [username]);

  // 🔥 API call only after delay
  useEffect(() => {
    if (!debouncedUsername) return;

    const fetchUser = async () => {
      const res = await fetch(
        `https://api.github.com/users/${debouncedUsername}`
      );
      const data = await res.json();
      setUserData(data);
    };

    fetchUser();
  }, [debouncedUsername]);

  return (
    <div>
      <h1>Debounced GitHub Search</h1>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Type username..."
      />

      {userData && (
        <div>
          <img src={userData.avatar_url} width="100" />
          <h2>{userData.login}</h2>
        </div>
      )}
    </div>
  );
}
