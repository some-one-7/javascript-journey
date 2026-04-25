import { useState } from "react";

// simple in-memory cache
const cache = {};

export const useCachedFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (query) => {
    if (!query) return;

    // ✅ check cache first
    if (cache[query]) {
      console.log("From Cache");
      setData(cache[query]);
      return;
    }

    try {
      setLoading(true);
      console.log("API Call");

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${query}`
      );
      const result = await res.json();

      // store in cache
      cache[query] = result;

      setData(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, fetchData };
};
