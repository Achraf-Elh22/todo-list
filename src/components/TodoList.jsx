import React from "react";

// Components
import TaskItem from "./TaskItem.jsx";

// Styles
import "./TodoList.style.css";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: "001",
          taskName: "Javascript",
          isCompleted: false,
        },
        {
          id: "002",
          taskName: "React",
          isCompleted: false,
        },
        {
          id: "003",
          taskName: "Something else different",
          isCompleted: false,
        },
      ],
    };
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  // Toggle Checkbox
  toggleCheckbox() {
    const task = this.state.tasks.filter((task) => task.id === id);
    this.setState({ isCompleted: !this.state.isCompleted });
  }

  render() {
    return (
      <div className="todo-list">
        <div className="todo-list--header">
          <h2 className="todo-list--title">Programming</h2>
          <p className="todo-list--task-count">2 Tasks remaining</p>
        </div>
        <div className="todo-list--body">
          <div className="todo-list--tasks">
            {this.state.tasks.map((task) => (
              <TaskItem {...task} key={task.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default TodoList;
