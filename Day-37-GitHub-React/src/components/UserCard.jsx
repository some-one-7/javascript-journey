function UserCard({ user }) {
  return (
    <div>
      <img src={user.avatar_url} width="100" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
    </div>
  );
}

export default UserCard;