import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <>
    
    <Router>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </Router>
      
    </>
  )
}

export default App