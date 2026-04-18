import { useState, useEffect } from "react";

export default function App() {
  const [username, setUsername] = useState("octocat");
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    if (!username) return;

    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    setUserData(data);
  };

  useEffect(() => {
    fetchUser();
  }, [username]);

  return (
    <div>
      <h1>Live GitHub Search</h1>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
