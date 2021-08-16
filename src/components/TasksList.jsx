import React from "react";

// Components
import TasksItems from "./TasksItems.jsx";
import NewItemForm from "./NewItemForm.jsx";

// Style
import "./TasksList.style.css";

class TasksList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="tasks-list">
        <h2 className="tasks-list__title">My lists</h2>
        <TasksItems />
        <NewItemForm />
      </div>
    );
  }
}

export default TasksList;
