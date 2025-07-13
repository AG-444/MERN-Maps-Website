import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} LenScape</p>
        <div className="footer-links">
          <a href="mailto:aditya444garg@gmail.com" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
          <a href="https://forms.gle/qw8feLARUaz1WNUbA" target="_blank" rel="noopener noreferrer">
            Feedback Form
          </a>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
