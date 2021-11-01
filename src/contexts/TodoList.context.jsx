import React, { createContext, useState } from "react";

export const TodoListContext = createContext();

export const TodoListContextProvider = ({ children }) => {
  const [activeTodo, setActiveTodo] = useState({
    id: "",
    taskName: "",
  });

  return (
    <TodoListContext.Provider value={{ activeTodo, setActiveTodo }}>
      {children}
    </TodoListContext.Provider>
  );
};
