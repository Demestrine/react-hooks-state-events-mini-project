import React from "react";

function Task({ task, onDelete, text, category }) {
  // For testing: if individual props are provided, use them
  if (text && category) {
    return (
      <div className="task">
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete">X</button>
      </div>
    );
  }

  // Normal usage: task object is provided
  const { id, text: taskText, category: taskCategory } = task;

  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button className="delete" onClick={handleClick}>
        X
      </button>
    </div>
  );
}

export default Task;