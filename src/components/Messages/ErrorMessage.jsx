// ErrorMessage.jsx
import React from 'react';
import './messages.css';

const ErrorMessage = ({ message }) => {
  if (!message) return null; // Don't render if there's no message
  return (
    <div className='message-body'>
      {message}
    </div>
  );
};

export default ErrorMessage;
