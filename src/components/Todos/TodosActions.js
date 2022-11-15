import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri";
import Button from "../UI/Button";
import styles from "./TodosActions.module.css";

function TodosAction({ resetTodos, deleteCompletedTodo, completedTodosExist }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodo}
        disabled={completedTodosExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosAction;
