import { useState, useEffect } from "react";

export default function App() {
  const [username, setUsername] = useState("octocat");
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    setUserData(data); // ✅ store data
  };

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


      {userData && (
        <div>
          <img src={userData.avatar_url} width="100" />
          <h2>{userData.login}</h2>
        </div>
      )}
    </div>
  );
}
