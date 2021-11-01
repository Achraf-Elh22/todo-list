import React, { createContext, useContext, useReducer, useEffect } from "react";

import { TodoListContext } from "./TodoList.context.jsx";

// Temperary
const state = [
  {
    id: "001",
    taskName: "homeworks",
    isOpen: true,
    todosId: "t001",
  },
  {
    id: "002",
    taskName: "social",
    isOpen: false,
    todosId: "t002",
  },
  {
    id: "003",
    taskName: "programming",
    isOpen: false,
    todosId: "t003",
  },
];

const reducer = (tasks, action) => {
  switch (action.type) {
    case "TOGGLE_ISOPEN":
      return tasks.map((task) =>
        task.id === action.payload
          ? { ...task, isOpen: true }
          : { ...task, isOpen: false }
      );

    case "ADD_NEW_TASK":
      return [...tasks, action.payload];

    case "DELETE_TASK":
      return (
        tasks
          .filter((task) => task.id !== action.payload)
          // Modify isOpen for the first element of tasks from state
          .map((task, idx) => (idx == 0 ? { ...task, isOpen: true } : task))
      );
  }
};

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducer, state);
  const { activeTodo, setActiveTodo } = useContext(TodoListContext);

  useEffect(() => {
    const openTask = tasks.filter((task) => task.isOpen === true)[0];

    if (openTask && openTask.todosId !== activeTodo.id)
      setActiveTodo({ id: openTask.todosId, taskName: openTask.taskName });
  });

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
