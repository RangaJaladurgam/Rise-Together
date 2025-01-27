import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link 
        to="/" 
        className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        Home
      </Link>
      <Link 
        to="/about" 
        className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
        About
      </Link>
    </nav>
  );
}

export default NavBar;
