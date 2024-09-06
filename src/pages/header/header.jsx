import React, { useState } from 'react';
import './header.css'; // Ensure the correct path to your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons'; // Import the FontAwesome icon
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h2>Eagles Lodges</h2>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faList} />
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;