import React, { useState } from "react";

import "./TaskItems.style.css";

const TasksItems = ({ tasks, toggleOpen }) => {
  return (
    <ul className="tasks__items">
      {tasks.map(({ taskName, isOpen, id }) => (
        <li
          className={`tasks__item ${isOpen ? "tasks__item--active" : ""}`}
          key={id}
          onClick={() => toggleOpen(id)}>
          {taskName}
        </li>
      ))}
    </ul>
  );
};
export default TasksItems;
