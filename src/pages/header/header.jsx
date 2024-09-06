import React from 'react';
import './header.css'; // Ensure the correct path to your CSS file
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h2>Doohm</h2>
        <nav className="nav-links">
        <a href="/Home">Home</a>
        <Link to="/about">About</Link>
          <a href="/contact">Contact</a>
          <a href="/booking">Booking</a>
          <a href="/gallery">Gallery</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
