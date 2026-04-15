import { useState } from "react";
import Search from "./components/Search.jsx";
import UserCard from "./components/UserCard.jsx";
import RepoList from "./components/RepoList.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (username) => {
    if (!username) return;

    setLoading(true);
    setError("");

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error("User not found");

      const userData = await userRes.json();

      const repoRes = await fetch(userData.repos_url);
      const repoData = await repoRes.json();

      setUser(userData);
      setRepos(repoData.slice(0, 5));
    } catch (err) {
      setError(err.message);
      setUser(null);
      setRepos([]);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>GitHub Viewer</h1>

      <Search onSearch={fetchData} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {user && <UserCard user={user} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
}

export default App;