import React, { useState } from 'react';
import logo from '/dasar.jpg';
import '../index.css'
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="nav-container">
        <a style={{position: 'relative', left: '0'}} href="#" className="logo-link" target="_blank" rel="noopener noreferrer">
          <img src={logo} className="logo" alt="Dasar Coffee" />
        </a>
        <div className="menu-toggle" style={{position: 'relative', right: '0'}} onClick={toggleMenu}>
          &#9776; {/* This is a hamburger icon */}
        </div>
        <nav className={`nav-menu ${menuOpen ? '' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><Link to={`menu-dasar-coffee`}>Menu</Link></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      {menuOpen?
      <nav className={`nav-menu ${menuOpen ? 'show' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><Link to={`menu-dasar-coffee`}>Menu</Link></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>:''
      }
      <div className="header-background">
        <div className="overlay">
          <h1>Dasar Coffee</h1>
          <h3>Reasons for Choosing Us</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
          <br />
          <button>READ MORE</button>
        </div>
      </div>

    </header>

  );
};

export default Header;
