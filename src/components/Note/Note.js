import React from "react";
import "./Note.css";
import deleteIcon from "../../images/delet.png";

function Note(props) {
  // To Display Date
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const updateText = (text, id) => {
    return props.updateText(text, id);
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note--text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note--footer">
        <small>{formatDate(props.note.time)}</small>
        <img
          src={deleteIcon}
          alt="deleteIcon"
          onClick={() => props.deleteNote(props.note.id)}
          className="delete--icon"
        />
      </div>
    </div>
  );
}

export default Note;
