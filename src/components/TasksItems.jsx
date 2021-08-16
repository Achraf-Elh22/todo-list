import React from "react";

import "./TaskItems.style.css";

const TasksItems = () => {
  return (
    <ul className="tasks__items">
      <li className="tasks__item">Homeworks</li>
      <li className="tasks__item">Social</li>
      <li className="tasks__item tasks__item--active">Programming</li>
      <li className="tasks__item">Gym</li>
    </ul>
  );
};
export default TasksItems;
