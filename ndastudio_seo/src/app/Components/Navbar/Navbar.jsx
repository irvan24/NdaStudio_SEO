"use client";
import React, { useState } from 'react';
import "./Navbar.css";
// import NdaLogo from "/Logo_nda.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="Navbar">
      <div className="logo">
        <img
          src="/Logo_nda.png"
          className="Nda-Logo"
          alt="ndastudio logo"
        />
      </div>
      <ul className="nav-links">
        <li className="nav-links-button">
          <a href="#">Nos projets</a>
        </li>
        <li className="nav-links-button">
          <a href="#">Nos services</a>
        </li>
      </ul>
      {/* Version desktop : bouton de contact visible */}
      <div className="contact-button desktop-only">
        <a href="#">Nous contactez</a>
      </div>
      {/* Version mobile : affichage du burger menu */}
      <div className="burger-menu mobile-only" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* Menu déroulant mobile */}
      {isMenuOpen && (
        <div className="mobile-dropdown">
          <ul>
            <li><a href="#">Nos projets</a></li>
            <li><a href="#">Nos services</a></li>
            <li><a href="#">Nous contactez</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
