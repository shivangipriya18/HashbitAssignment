import React from 'react';

function ToDoItem({ todo, onRemove, onToggleCompleted }) {
  const handleCheckboxChange = (event) => {
    onToggleCompleted(todo.id);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={todo.completed} onChange={handleCheckboxChange} />
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </li>
  );
}

export default ToDoItem;