import React, { useState } from 'react';
import './NewTodoItem.css';

const NewTodoItem = (props) => {
  const { addItem } = props;

  const [creatingNewItem, setCreatingNewItem] = useState(false);
  const [itemName, setItemName] = useState('');

  const clearInput = () => setItemName('');
  const toggleShowInput = () => {
    setCreatingNewItem(!creatingNewItem);
    clearInput();
  }
  const handleSave = () => {
    setCreatingNewItem(false);
    addItem?.(itemName);
    clearInput();
  }

  return (
  <div className="new-todo-item">
    <input value={itemName} onChange={(event) => setItemName(event.target.value)} />
      <div className="buttons-container">
        <button className="button-secondary" onClick={toggleShowInput}>Peruuta</button>
        <button className="button-primary" onClick={handleSave}>Tallenna</button>
      </div>
    </div>
  );
}

export default NewTodoItem;
