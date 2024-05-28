import React, { useState } from "react";
import logo from "/dasar.jpg";
import "../index.css";
import { Link } from "react-router-dom";
import BackgroundHeader from "./bgHeader";
import Slideshow from "./sliderImage";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="nav-container">
        <Link
          style={{ position: "relative", left: "0" }}
          to={"/"}
          className="logo-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="logo" alt="Dasar Coffee" />
        </Link>
        <div
          className="menu-toggle"
          style={{ position: "relative", right: "0" }}
          onClick={toggleMenu}
        >
          &#9776; {/* This is a hamburger icon */}
        </div>
        <nav className={`nav-menu ${menuOpen ? "" : ""}`}>
          <ul>
            <li>
              <Link to={"/"}>Trang chủ</Link>
            </li>
            <li>
              <Link to={`/menu-dasar-coffee`}>Menu</Link>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      {menuOpen ? (
        <nav className={`nav-menu nav-menu-sub ${menuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <Link to="/menu-dasar-coffee">Menu</Link>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
