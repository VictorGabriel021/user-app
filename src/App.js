import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const userList = [
  { username: "Victor", age: 23 },
  { username: "Pedro", age: 37 },
  { username: "An", age: 19 },
];

function App() {
  return (
    <div>
      <AddUser />
      <UserList users={userList} />
    </div>
  );
}

export default App;
