import React, { useState } from "react";
import logo from "/dasar.jpg";
import "../index.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div
        id="menu-btn"
        className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}
        onClick={toggleMenu}
      ></div>

      <a href="#" className="logo">
        Đa Sar Coffee
      </a>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <Link to="/">Trang chủ</Link>
        <a href="#about">Về chúng tôi</a>
        <Link to="/menu-dasar-coffee">Thực đơn</Link>
        <a href="#review">Review</a>
      </nav>
    </header>
  );
};

export default Header;
