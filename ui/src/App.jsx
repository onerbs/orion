import React, { useEffect, useState } from "react";

import { fetchUsers } from "./lib/api";
import Filter from "./parts/Filter";
import Table from "./parts/Table";
import HiddenList from "./parts/HiddenList";

export default function App() {
  const [error, setError] = useState({});
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [hidden, setHidden] = useState([]);

  useEffect(async () => {
    fetchUsers()
      .then(setUsers)
      .catch(setError);
  }, []);

  if (error.message) {
    return <strong>{error.message}</strong>;
  }

  if (users.length == 0) {
    return <p>Obteniendo lista de usuarios ...</p>;
  }

  return (
    <>
      <h1>Users</h1>
      <Filter users={users} setUsers={setFilteredUsers} />
      {filteredUsers.length > 0
        ? (
          <Table
            users={filteredUsers}
            hidden={hidden}
            setHidden={setHidden}
          />
        )
        : <span />}
      <HiddenList
        hidden={hidden}
        setHidden={setHidden}
      />
    </>
  );
}
