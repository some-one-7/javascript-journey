import { Link } from "react-router-dom";

const NoteCard = ({ note, deleteNote }) => {
  return (
    <div className="card">
      <h3>{note.title}</h3>

      <p>{note.text}</p>

      <Link to={`/note/${note.id}`}>
        View
      </Link>

      <button onClick={() => deleteNote(note.id)}>
        Delete
      </button>
    </div>
  );
};

export default NoteCard;