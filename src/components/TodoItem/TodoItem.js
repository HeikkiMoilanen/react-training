import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { item, onChange, removeItem } = props;

  return (
    <div className="todo-item">
      <label className="todo-item-text">
        <input
          className="todo-item-checkbox"
          type="checkbox"
          checked={item.checked}
          onChange={onChange}
        />
        {item.content}
      </label>
      <button onClick={removeItem}>Poista</button>
    </div>
  );
};

export default TodoItem;
