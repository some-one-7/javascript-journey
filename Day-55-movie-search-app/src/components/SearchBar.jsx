const SearchBar = ({
  search,
  setSearch,
  fetchMovies,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <button onClick={fetchMovies}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;