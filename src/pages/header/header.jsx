import React from 'react';
import './header.css'; // Ensure the correct path to your CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h2>MyToDo</h2>
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;
