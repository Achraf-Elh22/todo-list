import React from "react";

// Components
import TodoItem from "./TodoItem.jsx";
import NewItemForm from "../formComponents/NewItemForm.jsx";

// Styles
import "./TodoList.style.css";

const TodoList = (props) => {
  const { todoHelpers, todosList } = props;

  const uncompletedTodos = () =>
    todosList.todos.filter((todo) => todo.isCompleted !== true);

  return (
    <div className="todo-list">
      <div className="todo-list--header">
        <h2 className="todo-list--title">{todosList.taskName}</h2>
        <p className="todo-item-count">{`${
          uncompletedTodos().length
        } Tasks remaining`}</p>
      </div>
      <div className="todo-list--body">
        <div className="todo-items">
          {todosList.todos.map((todo) => (
            <TodoItem
              {...todo}
              key={todo.id}
              todoStatus={todoHelpers.todoStatus}
            />
          ))}
          <div className="todo--new-item">
            <NewItemForm callback={todoHelpers.addTodo} />
          </div>
        </div>
      </div>
      <div className="todo-list--footer">
        <button
          className="delete"
          onClick={() =>
            todoHelpers.deleteItems("completedTodos", uncompletedTodos())
          }>
          Clear Completed Todos
        </button>
        <button
          className="delete"
          onClick={() => todoHelpers.deleteItems("task")}>
          Delete List
        </button>
      </div>
    </div>
  );
};
export default TodoList;
