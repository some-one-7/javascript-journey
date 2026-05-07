import { memo } from "react";

const ExpensiveComponent = ({ onClick }) => {
  console.log("Child Rendered");

  return (
    <button onClick={onClick}>
      Increment Counter
    </button>
  );
};

export default memo(ExpensiveComponent);