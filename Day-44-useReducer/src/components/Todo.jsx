import { useReducer, useState } from "react";
import { todoReducer, initialState } from "../reducer/todoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;

    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  return (
    <div>
      <h2>Todo Manager (useReducer)</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
