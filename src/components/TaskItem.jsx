import React, { useState } from "react";

const TaskItem = ({ id, taskName }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <div className="todo-list--task">
      <input
        type="checkbox"
        name="isCompleted"
        id={`task-${id}`}
        // onChange={setIsCompleted(!isCompleted)}
        checked={isCompleted}
      />
      <label htmlFor="task-${id}">
        <span className="todo-list--task__custom-checkbox"></span>
        {taskName}
      </label>
    </div>
  );
};

export default TaskItem;
