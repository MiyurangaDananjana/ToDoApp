import React, { useState } from 'react';
import TodoItem from '../components/TodoItem/TodoItem';
import '../styles/TodoPage.css'; // Assuming some basic styling for the page

const TodoPage = () => {
  // Initial state to manage to-dos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: false },
  ]);
  
  const [newTodo, setNewTodo] = useState('');

  // Function to handle adding a new to-do
  const handleAddTodo = () => {
    if (newTodo.trim() === '') return; // Prevent adding empty to-do
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo(''); // Clear the input after adding
  };

  // Function to handle toggling the completion status of a to-do
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to handle deleting a to-do
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-page">
      <h1>My To-Do List</h1>
      
      {/* Input for adding a new to-do */}
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new to-do"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      {/* Render the list of to-dos */}
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => handleToggleTodo(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
