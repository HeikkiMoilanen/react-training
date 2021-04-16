import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import NewTodoItem from "../NewTodoItem/NewTodoItem";
import { Todo } from "../../types";
import "./TodoList.css";

const TodoList: React.FC = (props) => {
  const [todoItems, setTodoItems] = useState<Todo[]>([
    { checked: false, content: "clean the house" },
  ]);

  const handleToggleCheck = (index: number) => {
    const copyItems = [...todoItems];
    copyItems[index] = {
      ...copyItems[index],
      checked: !copyItems[index].checked,
    };
    setTodoItems(copyItems);
  };

  const addItem = (content: string) =>
    setTodoItems([...todoItems, { content, checked: false }]);

  const removeItem = (index: number) => {
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
          toggle={() => handleToggleCheck(index)}
          remove={() => removeItem(index)}
        />
      ))}
      <NewTodoItem addItem={addItem} />
    </div>
  );
};

export default TodoList;
