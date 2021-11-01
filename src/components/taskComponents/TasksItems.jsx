/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from "react";

// Context
import { TaskContext } from "../../contexts/Task.context.jsx";

import "./TaskItems.style.css";

const TasksItems = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  const toggleOpen = (id) => dispatch({ type: "TOGGLE_ISOPEN", payload: id });
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
