import { useState } from "react";

function Search({ onSearch }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search GitHub user..."
      value={input}
      onChange={handleChange}
    />
  );
}

export default Search;