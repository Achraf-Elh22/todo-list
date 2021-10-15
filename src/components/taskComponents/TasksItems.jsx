/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";

import "./TaskItems.style.css";

const TasksItems = ({ tasks, toggleOpen, deleteTask }) => {
  return (
    <ul className="tasks__items">
      {tasks.map(({ taskName, isOpen, id }) => (
        <li
          className={`tasks__item ${isOpen ? "tasks__item--active" : ""}`}
          key={id}
          onClick={() => !isOpen && toggleOpen(id)}>
          {taskName}
        </li>
      ))}
    </ul>
  );
};
export default TasksItems;
