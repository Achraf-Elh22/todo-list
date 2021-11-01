import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import "./NewItemForm.style.css";

const NewItemForm = ({ callback }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Value isn't empty
    if (value) {
      const newItem = { id: uuid(), name: value };

      // Add a new  Task
      callback(newItem);

      return setValue("");
    }
  };

  return (
    <div>
      <form className="new-item__container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="new-item__task"
          placeholder="new task list"
          aria-label="new task list"
          onChange={handleChange}
          value={value}
        />
        <button className="new-item__btn" aria-label="create new item">
          +
        </button>
      </form>
    </div>
  );
};

export default NewItemForm;
