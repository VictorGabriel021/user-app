import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([
    { id: Math.random(0 * 100).toString(), username: "Victor", age: 23 },
    { id: Math.random(0 * 100).toString(), username: "Pedro", age: 37 },
    { id: Math.random(0 * 100).toString(), username: "Ana", age: 19 },
  ]);

  const addUserHandler = (user) => {
    setUserList((prevUsersList) => {
      return [user, ...prevUsersList];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
