import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/Modal/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    let enteredName = nameInputRef.current.value;
    let enteredAge = ageInputRef.current.value;
    const userData = {
      id: Math.random(0 * 100).toString(),
      username: enteredName,
      age: enteredAge,
    };
    if (!formValidation(userData)) {
      props.onAddUser(userData);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
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
          <input type="text" ref={nameInputRef} />
          <label>Idade</label>
          <input type="number" ref={ageInputRef} />
          <Button type="submit">Cadastrar</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
