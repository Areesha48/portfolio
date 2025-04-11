import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <h3>Areesha<span className="accent-dot">.</span></h3>
          <p className="tagline">Frontend Developer</p>
          <div className="social-links">
            <a href="https://github.com/Areesha48" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/Areesha shehzad" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/code.craftwithme" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            <a href="mailto:bushrashehzad90@gmail.com">bushrashehzad90@gmail.com</a>
          </p>
          <p>Based in Pakistan</p>
          <a 
            href="/resume.pdf" 
            download 
            className="resume-button"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Areesha. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
