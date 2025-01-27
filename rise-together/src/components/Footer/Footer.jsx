import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Rise-Together. All rights reserved.</p>
      <ul className="footer-links">
        <li>
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>
        </li>
        <li>
          <a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a>
        </li>
      </ul>
    </footer>
  )
}

export default  Footer;