import { useState, useEffect } from "react";
import useDebounce from "./hooks/useDebounce";

export default function App() {
  const [username, setUsername] = useState("");
  const debouncedUsername = useDebounce(username, 500);

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!debouncedUsername) return;

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://api.github.com/users/${debouncedUsername}`
        );

        if (!res.ok) throw new Error("User not found");

        const data = await res.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [debouncedUsername]);

  return (
    <div>
      <h1>useDebounce Hook</h1>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search GitHub user..."
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && !loading && (
        <div>
          <img src={userData.avatar_url} width="100" />
          <h2>{userData.login}</h2>
        </div>
      )}
    </div>
  );
}
