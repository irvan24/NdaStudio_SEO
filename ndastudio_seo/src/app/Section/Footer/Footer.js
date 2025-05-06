import React from "react";
import "./Footer.css";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section gauche - Logo */}
        <div className="footer-logo">
          <img src="/Logo_nda.png" alt="ndastudio logo" className="brand-logo" />
        </div>

        {/* Section centrale - Contact */}
        <div className="footer-contact">
          <p className="contact-text">📍 Adresse : 9 boulevard Antoine Giroust, 77600 Bussy St Georges</p>
          <p className="contact-text">📧 Email : <a href="mailto:contact@agence.com">rayanwillam.achour@gmail.com</a></p>
          <p className="contact-text">📞 Téléphone : <a href="tel:+33123456789">+33 6 95 74 37 56</a></p>
        </div>

        {/* Section droite - Réseaux sociaux */}
        <div className="footer-socials">
          <a href="https://www.linkedin.com/company/ndastudio/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a href="https://www.instagram.com/ndastudio.pa?igsh=azQxeWk3MDNnYmg=" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>
          <a href="https://wa.me/33695743756" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon whatsapp" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Agence NDA STUDIO. Tous droits réservés.</p>
      </div>
    </footer>
  );
}