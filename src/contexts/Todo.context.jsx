import React, { createContext, useReducer, useContext } from "react";

import { v4 as uuid } from "uuid";

// Contexts
import { TodoListContext } from "./TodoList.context.jsx";

const state = [
  {
    id: "t001",
    taskName: "Homeworks",
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
    id: "t002",
    taskName: "social",
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
    id: "t003",
    taskName: "Programming",
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
];

const reducer = (todos, action) => {
  switch (action.type) {
    case "TOGGLE_TODO_STATUS":
      return todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case "ADD_TODO":
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todos: [...todo.todos, action.payload.newTodo] }
          : todo
      );
    case "NEW_TODO_LIST":
      return [...todos, action.payload];
    case "DELETE_ALL_TODOS":
      return todos.map((todo) =>
        todo.id === action.payload ? { ...todo, todos: [] } : todo
      );
    case "DELETE_COMPLETED_TODOS":
      return todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
  }
};

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, state);
  const { activeTodo, setActiveTodo } = useContext(TodoListContext);

  // Open task
  // the task can be new, which require to create a new todo for it
  const todo =
    todos.filter((todo) => todo.id === activeTodo.id)[0] ||
    dispatch({
      type: "NEW_TODO_LIST",
      payload: {
        id: activeTodo.id,
        taskName: activeTodo.taskName,
        todos: [],
      },
    });

  return (
    <TodoContext.Provider value={{ todo, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
