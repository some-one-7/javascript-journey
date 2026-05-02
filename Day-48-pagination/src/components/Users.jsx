import { useState, useEffect } from "react";
import Pagination from "./Pagination";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;

  const currentUsers = users.slice(firstIndex, lastIndex);

  return (
    <>
      <ul>
        {currentUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Pagination
        total={users.length}
        perPage={usersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Users;