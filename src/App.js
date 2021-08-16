import React from "react";

import TasksList from "./components/TasksList.jsx";
import TodoList from "./components/TodoList.jsx";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Stuff I need to do</h1>
      <TasksList />
      <TodoList />
    </div>
  );
};

export default App;
