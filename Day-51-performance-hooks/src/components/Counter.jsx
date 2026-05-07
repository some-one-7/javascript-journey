import { useState, useMemo, useCallback } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");

    let total = 0;

    for (let i = 0; i < 100000000; i++) {
      total += i;
    }

    return total;
  }, [count]);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <h2>Count: {count}</h2>

      <input
        type="text"
        placeholder="Type here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <p>Expensive Value: {expensiveCalculation}</p>

      <ExpensiveComponent onClick={increment} />
    </>
  );
};

export default Counter;