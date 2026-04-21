import { useState, useEffect } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    if (!username) return;

    try {
      setLoading(true);
      setError("");

      const res = await fetch(`https://api.github.com/users/${username}`);

      if (!res.ok) {
        throw new Error("User not found");
      }

      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUser();
    }, 500);

    return () => clearTimeout(timer);
  }, [username]);

  return (
    <div>
      <h1>GitHub Finder</h1>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search username..."
      />

      {/* 🔥 Loading */}
      {loading && <p>Loading...</p>}

      {/* 🔥 Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 🔥 Data */}
      {userData && !loading && (
        <div>
          <img src={userData.avatar_url} width="100" />
          <h2>{userData.login}</h2>
        </div>
      )}
    </div>
  );
}
