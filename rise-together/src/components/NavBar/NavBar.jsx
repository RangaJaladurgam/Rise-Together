import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/about" className="nav-item">About</Link>
    </nav>
  );
};

export default NavBar