import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const API_KEY = "YOUR_API_KEY";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );

    const data = await response.json();

    setMovie(data);
  };

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <img
        src={movie.Poster}
        alt={movie.Title}
      />

      <h1>{movie.Title}</h1>

      <p>{movie.Plot}</p>

      <p>Year: {movie.Year}</p>
    </div>
  );
};

export default MovieDetails;