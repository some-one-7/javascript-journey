const Pagination = ({ total, perPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(total / perPage);

  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          style={{
            margin: "5px",
            fontWeight: currentPage === i + 1 ? "bold" : "normal"
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;