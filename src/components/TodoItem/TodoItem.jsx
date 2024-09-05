import React from 'react';
import './TodoItem.css'; // Add some styling for individual to-do items

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={onToggle} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
