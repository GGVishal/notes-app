import React from "react";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  const [notes, setNotes] = React.useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  // Add new Note

  function addNote(color) {
    const tempNotes = [...notes];

    tempNotes.push({
      id: new Date().now + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color: color,
    });

    setNotes(tempNotes);
  }

  // Delet functionality

  const deletNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  // Update Text functionality

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  React.useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  });
  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deletNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
