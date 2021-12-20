import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const [userName, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameHandler = (event) => {
    setUsername(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: userName,
      age: userAge,
    };
    if (!formValidation(userData)) {
      setUsername("");
      setUserAge("");
    }
  };

  const formValidation = (userData) => {
    return userData.name.trim().length === 0 || +userData.age <= 0;
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label>Nome</label>
        <input type="text" value={userName} onChange={userNameHandler} />
        <label>Idade</label>
        <input type="number" value={userAge} onChange={userAgeHandler} />
        <Button type="submit">Cadastrar</Button>
      </form>
    </Card>
  );
};

export default AddUser;
