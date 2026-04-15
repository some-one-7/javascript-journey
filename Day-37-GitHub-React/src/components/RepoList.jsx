function RepoList({ repos }) {
  return (
    <div>
      <h3>Repositories</h3>
      {repos.map(repo => (
        <div key={repo.id}>
          <strong>{repo.name}</strong> ⭐ {repo.stargazers_count}
        </div>
      ))}
    </div>
  );
}

export default RepoList;