import React from "react";
import { Todo } from "../../types";
import "./TodoItem.scss";

type Props = {
  item: Todo;
  toggle: () => void;
  remove: () => void;
};

const TodoItem: React.FC<Props> = (props) => {
  const { item, toggle, remove } = props;

  return (
    <div className="todo-item">
      <label className="todo-item-text">
        <input
          className="todo-item-checkbox"
          type="checkbox"
          checked={item.checked}
          onChange={toggle}
        />
        {item.content}
      </label>
      <button onClick={remove}>Poista</button>
    </div>
  );
};

export default TodoItem;
