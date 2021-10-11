import React, { useEffect, useState } from "react";

// Style
import "./TodoItem.style.css";

const TodoItem = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);

  const { id, todoName, todoStatus } = props;

  useEffect(() => {
    if (isCompleted !== props.isCompleted)
      todoStatus({ id, status: isCompleted });
  }, [isCompleted, id]);

  const handleChange = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <div className="todo-item">
      <label
        htmlFor={`todo-${id}`}
        className={`${props.isCompleted ? "todo-item__completed" : ""}`}>
        <input
          type="checkbox"
          name="isCompleted"
          id={`todo-${id}`}
          onChange={handleChange}
          checked={isCompleted}
        />
        <span className="todo-item__custom-checkbox"></span>
        {todoName}
      </label>
    </div>
  );
};

export default TodoItem;
