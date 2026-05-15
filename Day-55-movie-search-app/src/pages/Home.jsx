import { useState } from "react";

import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const API_KEY = "YOUR_API_KEY";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] =
    useState(false);

  const fetchMovies = async () => {
    if (!search) return;

    setLoading(true);

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );

    const data = await response.json();

    setMovies(data.Search || []);

    setLoading(false);
  };

  return (
    <div>
      <SearchBar
        search={search}
        setSearch={setSearch}
        fetchMovies={fetchMovies}
      />

      {loading && <h2>Loading...</h2>}

      <div className="container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;