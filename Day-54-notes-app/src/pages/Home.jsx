import NoteCard from "../components/NoteCard";

const Home = ({ notes, deleteNote }) => {
  return (
    <div>
      <h1>All Notes</h1>

      <div className="container">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;