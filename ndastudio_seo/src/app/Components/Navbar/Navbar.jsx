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
          <a href="#services">Nos sevices</a>
        </li>
        <li className="nav-links-button">
          <a href="#pourquoi">Pourquoi</a>
        </li>
      </ul>
      {/* Version desktop : bouton de contact visible */}
      <div className="contact-button desktop-only">
        <a href="mailto:rayanwillam.achour@gmail.com">Nous contactez</a>
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
            <li><a href="#services">Nos Services</a></li>
            <li><a href="#pourquoi">Pourquoi</a></li>
            <li><a href="mailto:rayanwillam.achour@gmail.com">Nous contactez</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
