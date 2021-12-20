import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/Modal/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setUsername(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const userData = {
      id: Math.random(0 * 100).toString(),
      username: userName,
      age: userAge,
    };
    if (!formValidation(userData)) {
      props.onAddUser(userData);
      setUsername("");
      setUserAge("");
    } else {
      setError({
        title: "Ocorreu um erro!",
        message: "Campos inválidos por favor insira os dados :)",
      });
    }
  };

  const formValidation = (userData) => {
    return userData.username.trim().length === 0 || +userData.age <= 0;
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label>Nome</label>
          <input type="text" value={userName} onChange={userNameHandler} />
          <label>Idade</label>
          <input type="number" value={userAge} onChange={userAgeHandler} />
          <Button type="submit">Cadastrar</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
