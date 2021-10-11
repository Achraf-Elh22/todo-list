import React, { useState, useEffect } from "react";

// Components
import TasksItems from "./TasksItems.jsx";
import NewItemForm from "../formComponents/NewItemForm.jsx";

// Style
import "./TasksList.style.css";

const TasksList = (props) => {
  const [error, setError] = useState({ status: false, message: "" });

  useEffect(() => {
    // if (error.status)
  }, [error, setError]);

  // Check if the new item is unique
  const isTaskNew = (newItem) => {
    const isTaskNew = (tasks, newItem) =>
      tasks.some(
        ({ id, taskName }) => id === newItem.id || taskName === newItem.name
      );
    if (!isTaskNew(props.tasksList, newItem)) {
      props.taskHelpers.addTask(newItem);
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
      <TasksItems
        tasks={props.tasksList}
        toggleOpen={props.taskHelpers.toggleOpen}
        deleteTask={props.taskHelpers.deleteItems}
      />
      <div className="tasks-list__form">
        <NewItemForm callback={isTaskNew} />
      </div>
      {error.status ? errorTag(error.message) : null}
    </div>
  );
};

export default TasksList;
