import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";

// Components
import TasksItems from "./TasksItems.jsx";
import NewItemForm from "../formComponents/NewItemForm.jsx";

// Context
import { TaskContext } from "../../contexts/Task.context.jsx";

// Style
import "./TasksList.style.css";

const TasksList = () => {
  const [error, setError] = useState({ status: false, message: "" });
  const { tasks, dispatch } = useContext(TaskContext);

  // Check if the new item is unique
  const isTaskNew = (item) => {
    const isTaskNew = (tasks, item) =>
      tasks.some(
        ({ id, taskName }) => id === item.id || taskName === item.name
      );

    if (!isTaskNew(tasks, item)) {
      const newItem = {
        id: item.id,
        taskName: item.name,
        isOpen: false,
        todosId: uuid(),
      };
      dispatch({ type: "ADD_NEW_TASK", payload: newItem });
    } else {
      // Show error
      showError("Already exists");
    }
  };

  // Show error
  const showError = (message) => {
    setError({ status: true, message });

    setTimeout(() => setError({ status: false, message: "" }), 2500);
  };

  const errorTag = (message) => {
    return <span className={"error"}>{message}</span>;
  };

  return (
    <div className="tasks-list">
      <h2 className="tasks-list__title">My lists</h2>
      <TasksItems />
      <div className="tasks-list__form">
        <NewItemForm callback={isTaskNew} />
      </div>
      {error.status ? errorTag(error.message) : null}
    </div>
  );
};

export default TasksList;
