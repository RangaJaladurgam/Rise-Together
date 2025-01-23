import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import About from './components/About/About';

import './App.css';
import XploreHandsOn from './components/content/XploreHandsOn';

function App() {
  return (
    <>
    
    <Router>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/java" element={<XploreHandsOn />} />
      </Routes>
      </div>
    </Router>
      
    </>
  )
}

export default App