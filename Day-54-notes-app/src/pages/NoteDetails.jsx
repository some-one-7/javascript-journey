import { useParams } from "react-router-dom";

const NoteDetails = ({ notes }) => {
  const { id } = useParams();

  const note = notes.find(
    (item) => item.id === Number(id)
  );

  if (!note) {
    return <h2>Note Not Found</h2>;
  }

  return (
    <div>
      <h1>{note.title}</h1>

      <p>{note.text}</p>
    </div>
  );
};

export default NoteDetails;