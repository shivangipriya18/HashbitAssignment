
import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoApp() {
  const [todos, setTodos] = useState([]); 

  const addTodo = (text) => {
    setTodos([...todos, { id: Math.random(), text, completed: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <input type="text" placeholder="Add a task" onChange={(e) => addTodo(e.target.value)} />
      <ul>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onRemove={removeTodo}
            onToggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
