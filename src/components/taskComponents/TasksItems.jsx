/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { MdDeleteForever } from "react-icons/md";

import "./TaskItems.style.css";

const TasksItems = ({ tasks, toggleOpen, deleteTask }) => {
  return (
    <ul className="tasks__items">
      {tasks.map(({ taskName, isOpen, id }) => (
        <li
          className={`tasks__item ${isOpen ? "tasks__item--active" : ""}`}
          key={id}>
          <span onClick={() => !isOpen && toggleOpen(id)} role="button">
            {taskName}
          </span>
          <span className="tasks__items--delete">
            <MdDeleteForever onClick={() => deleteTask("task")} />
          </span>
        </li>
      ))}
    </ul>
  );
};
export default TasksItems;
