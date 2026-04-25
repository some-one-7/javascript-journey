import { useState } from "react";
import { useCachedFetch } from "../hooks/useCachedFetch";

const Search = () => {
  const [query, setQuery] = useState("");
  const { data, loading, fetchData } = useCachedFetch();

  const handleSearch = () => {
    fetchData(query);
  };

  return (
    <div>
      <h2>API Caching Demo</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
