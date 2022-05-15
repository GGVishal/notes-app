import React from "react";
import plusicon from "../../images/plusicon.png";
import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = React.useState(false);

  function toggle() {
    setListOpen(!listOpen);
  }
  

  return (
    <div className="sidebar">
      <img src={plusicon} alt="add" onClick={toggle}></img>

      <ul
        className={`sidebar--list ${listOpen ? "sidebar--list--active" : ""}`}
      >
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar--list--item"
            style={{ backgroundColor: item }}
            onClick={() => {
              props.addNote(item);
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
