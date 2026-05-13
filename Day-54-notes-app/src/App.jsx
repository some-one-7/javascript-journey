import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import NoteDetails from "./pages/NoteDetails";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  const deleteNote = (id) => {
    const filtered = notes.filter(
      (note) => note.id !== id
    );

    setNotes(filtered);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              notes={notes}
              deleteNote={deleteNote}
            />
          }
        />

        <Route
          path="/add"
          element={<AddNote addNote={addNote} />}
        />

        <Route
          path="/note/:id"
          element={
            <NoteDetails notes={notes} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;