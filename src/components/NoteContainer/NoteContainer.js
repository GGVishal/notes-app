import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

function NoteContainer(props) {
  const reverseArray = (arr) => {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      newArray.push(arr[i]);
    }

    return newArray;
  };

  const notes = reverseArray(props.notes);

  return (
    <div className="note--container">
      <h1 className="note--title">Notes</h1>
      <div className="note--container--notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h2>Create New Note</h2>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
