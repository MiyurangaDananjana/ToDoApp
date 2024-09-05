// ErrorMessage.jsx
import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null; // Don't render if there's no message

  return (
    <div style={{ color: 'red', marginBottom: '10px' }}>
      {message}
    </div>
  );
};

export default ErrorMessage;
