import React from "react";

// Contexts
import { TaskContextProvider } from "./contexts/Task.context.jsx";
import { TodoContextProvider } from "./contexts/Todo.context.jsx";
import { TodoListContextProvider } from "./contexts/TodoList.context.jsx";

// Components
import TasksList from "./components/taskComponents/TasksList.jsx";
import TodoList from "./components/todoComponents/TodoList.jsx";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Stuff I need to do</h1>
      <TodoListContextProvider>
        <TaskContextProvider>
          <TasksList />
        </TaskContextProvider>
        <TodoContextProvider>
          <TodoList />
        </TodoContextProvider>
      </TodoListContextProvider>
    </div>
  );
};

export default App;

// Todolist
// Add a way to delete task (before deletion show an alert)
