import { useState } from "react";

const AddNote = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      title,
      text,
    };

    addNote(newNote);

    setTitle("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        placeholder="Enter note"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button>Add Note</button>
    </form>
  );
};

export default AddNote;