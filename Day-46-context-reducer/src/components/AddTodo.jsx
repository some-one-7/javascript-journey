import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleAdd = () => {
    if (!input) return;

    dispatch({
      type: "ADD_TODO",
      payload: input
    });

    setInput("");
  };

  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default AddTodo;