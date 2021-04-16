import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import NewTodoItem from "../NewTodoItem/NewTodoItem";
import "./TodoList.css";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([
    { checked: false, content: "clean the house" },
  ]);

  const handleToggleCheck = (index) => {
    const copyItems = [...todoItems];
    copyItems[index] = {
      ...copyItems[index],
      checked: !copyItems[index].checked,
    };
    setTodoItems(copyItems);
  };

  const addItem = (content) =>
    setTodoItems([...todoItems, { content, checked: false }]);

  const removeItem = (index) => {
    const copyItems = [...todoItems];
    copyItems.splice(index, 1);
    setTodoItems(copyItems);
  };

  return (
    <div className="todo-list">
      {todoItems.map((todoItem, index) => (
        <TodoItem
          key={index}
          item={todoItem}
          onChange={() => handleToggleCheck(index)}
          removeItem={() => removeItem(index)}
        />
      ))}
      <NewTodoItem addItem={addItem} />
    </div>
  );
};

export default TodoList;
