import React from "react";

import "./NewItemForm.style.css";

const NewItemForm = () => {
  return (
    <form className="new-item__container">
      <input
        type="text"
        value=""
        className="new-item__task"
        placeholder="new task list"
        aria-label="new task list"
      />
      <button className="new-item__btn" aria-label="create new item">
        +
      </button>
    </form>
  );
};

export default NewItemForm;
