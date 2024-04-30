import React from "react";

function Task({ text, task, category, onclick }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onclick(task)}>X</button>
    </div>
  );
}

export default Task;
