import { useState, useEffect } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
    );

    const data = await res.json();

    setPosts((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  useInfiniteScroll(() => {
    setPage((prev) => prev + 1);
  });

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} style={{ margin: "20px", borderBottom: "1px solid #ccc" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

      {loading && <h2>Loading...</h2>}
    </>
  );
};

export default Posts;