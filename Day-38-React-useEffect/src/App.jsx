import { useState, useEffect } from "react";

export default function App() {
  const [username, setUsername] = useState("octocat");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async (user) => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 useEffect → runs on page load
  useEffect(() => {
    fetchUser(username);
  }, []);

  return (
    <div className="container">
      <h1>GitHub Auto Fetch</h1>

      <div className="search-box">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => fetchUser(username)}>Search</button>
      </div>

      {loading && <p>Loading...</p>}

      {userData && (
        <div className="card">
          <img src={userData.avatar_url} />
          <h2>{userData.name}</h2>
          <p>@{userData.login}</p>
        </div>
      )}
    </div>
  );
}
