import React, { Component } from "react";

import TasksList from "./components/taskComponents/TasksList.jsx";
import TodoList from "./components/todoComponents/TodoList.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {
          id: "001",
          taskName: "homeworks",
          isOpen: false,
          todos: [
            {
              id: "001",
              todoName: "Math",
              isCompleted: false,
            },
            {
              id: "002",
              todoName: "Geographie",
              isCompleted: true,
            },
            {
              id: "003",
              todoName: "Something else different",
              isCompleted: false,
            },
          ],
        },
        {
          id: "002",
          taskName: "social",
          isOpen: false,
          todos: [
            {
              id: "001",
              todoName: "Meet with friends",
              isCompleted: false,
            },
            {
              id: "002",
              todoName: "Read book",
              isCompleted: true,
            },
            {
              id: "003",
              todoName: "Something else different",
              isCompleted: false,
            },
          ],
        },
        {
          id: "003",
          taskName: "programming",
          isOpen: true,
          todos: [
            {
              id: "001",
              todoName: "Javascript",
              isCompleted: false,
            },
            {
              id: "002",
              todoName: "React",
              isCompleted: true,
            },
            {
              id: "003",
              todoName: "Something else different",
              isCompleted: false,
            },
          ],
        },
      ],
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.addTask = this.addTask.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.todoStatus = this.todoStatus.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
    this.modifyCurrentTask = this.modifyCurrentTask.bind(this);
  }

  // ----------------------------------- Tasks Helpers -------------------------------------------------
  //Toggle isOpen property in task
  toggleOpen(id) {
    // Only one tasks should be open that why isOpen:false
    const newTasks = this.state.tasks.map((task) =>
      task.id == id
        ? { ...task, isOpen: !task.isOpen }
        : { ...task, isOpen: false }
    );

    this.setState({ tasks: newTasks });
  }

  // Add Task
  addTask(newItem) {
    const newTask = {
      id: newItem.id,
      taskName: newItem.name,
      isOpen: false,
      todos: [],
    };

    const newState = { tasks: [...this.state.tasks, newTask] };

    this.setState(newState);
  }
  // ----------------------------------- ------------------------------------------------------------
  // ----------------------------------- Todos Helpers -------------------------------------------------

  // Toggle Checkbox
  todoStatus(currentTask, newTodo) {
    // modify todo in currentTask
    const newTodos = currentTask.todos.map((todo) =>
      todo.id === newTodo.id
        ? { ...todo, isCompleted: newTodo.status }
        : { ...todo }
    );
    // modify tasks in state
    this.modifyCurrentTask(currentTask, { ...currentTask, todos: newTodos });
  }

  // Modify current task
  modifyCurrentTask(currentTask, newTask) {
    const newTasks = this.state.tasks.map((task) =>
      task.id === currentTask.id ? newTask : task
    );

    this.setState({ tasks: newTasks });
  }

  //Add Todo
  addTodo(currentTask, newTodo) {
    const newTask = {
      ...currentTask,
      todos: [
        ...currentTask.todos,
        { id: newTodo.id, todoName: newTodo.name, isCompleted: false },
      ],
    };

    this.modifyCurrentTask(currentTask, newTask);
  }

  // Delete the complete todos or list
  deleteItems(deletedItem, currentTask, newItems) {
    if (deletedItem === "todos")
      return this.modifyCurrentTask(currentTask, { ...currentTask, todos: [] });
    if (deletedItem === "completedTodos")
      return this.modifyCurrentTask(currentTask, {
        ...currentTask,
        todos: newItems,
      });
    if (deletedItem === "task") {
      let newTasks = this.state.tasks
        .filter((task) => task.id !== currentTask.id)
        // Modify isOpen for the first element of tasks from state
        .map((task, idx) => (idx == 0 ? { ...task, isOpen: true } : task));

      this.setState({ tasks: newTasks });
      return;
    }
  }

  render() {
    // current Task
    const currentTask = this.state.tasks.filter(
      (task) => task.isOpen === true
    )[0] || { taskName: "", todos: [] };

    // tasks without todos
    const tasksList = this.state.tasks.map(({ id, taskName, isOpen }) => ({
      id,
      taskName,
      isOpen,
    }));

    // todos without tasks
    const todosList = {
      taskName: currentTask.taskName,
      todos: currentTask.todos,
    };

    // Helpers
    const taskHelpers = {
      addTask: this.addTask,
      toggleOpen: this.toggleOpen,
      deleteItems: (deletedItem, newItems) =>
        this.deleteItems(deletedItem, currentTask, newItems),
    };
    const todoHelpers = {
      addTodo: (newTodo) => this.addTodo(currentTask, newTodo),
      todoStatus: (todo) => this.todoStatus(currentTask, todo),
      deleteItems: (deletedItem, newItems) =>
        this.deleteItems(deletedItem, currentTask, newItems),
    };

    return (
      <div className="container">
        <h1 className="title">Stuff I need to do</h1>
        <TasksList taskHelpers={taskHelpers} tasksList={tasksList} />
        <TodoList todoHelpers={todoHelpers} todosList={todosList} />
      </div>
    );
  }
}

export default App;

// Todolist
// Add a way to delete task (before deletion show an alert)
// remove error showing when Empty all tasks
