import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TodoList = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <ul>
      {state.todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() =>
            dispatch({ type: "DELETE_TODO", payload: index })
          }>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;