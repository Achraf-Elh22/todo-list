import React, { useContext } from "react";

// Components
import TodoItem from "./TodoItem.jsx";
import NewItemForm from "../formComponents/NewItemForm.jsx";

// Context
import { TodoContext } from "../../contexts/Todo.context.jsx";

// Styles
import "./TodoList.style.css";

const TodoList = () => {
  const { todo, dispatch } = useContext(TodoContext);

  const uncompletedTodos = () =>
    todo.todos.filter((todo) => todo.isCompleted !== true);

  const toggleStatus = (id, isCompleted) =>
    dispatch({
      type: "TOGGLE_TODO_STATUS",
      payload: {
        ...todo,
        todos: todo.todos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted } : todo
        ),
      },
    });

  const addTodo = (newTodo) =>
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: todo.id,
        newTodo: { id: newTodo.id, todoName: newTodo.name, isCompleted: false },
      },
    });

  const deleteCompletedTodos = () =>
    dispatch({
      type: "DELETE_COMPLETED_TODOS",
      payload: { ...todo, todos: uncompletedTodos() },
    });

  const deleteAllTodos = () =>
    dispatch({ type: "DELETE_ALL_TODOS", payload: todo.id });

  return (
    <div className="todo-list">
      <div className="todo-list--header">
        <h2 className="todo-list--title">{todo.taskName}</h2>
        <p className="todo-item-count">{`${
          uncompletedTodos().length
        } Tasks remaining`}</p>
      </div>
      <div className="todo-list--body">
        <div className="todo-items">
          {todo.todos.map((todo) => (
            <TodoItem {...todo} key={todo.id} toggleStatus={toggleStatus} />
          ))}
          <div className="todo--new-item">
            <NewItemForm callback={addTodo} />
          </div>
        </div>
      </div>
      <div className="todo-list--footer">
        <button className="delete" onClick={deleteCompletedTodos}>
          Clear Completed Todos
        </button>
        <button className="delete" onClick={deleteAllTodos}>
          Clear All Todos
        </button>
      </div>
    </div>
  );
};
export default TodoList;
