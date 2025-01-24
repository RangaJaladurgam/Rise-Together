import React from 'react'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import About from './components/About/About';

import './App.css';
import XploreHandsOn from './components/content/XploreHandsOn';
import JavaHandsOn from './components/content/JavaHandsOn';

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
        <Route path="/java-handson" element={<XploreHandsOn />} />
        <Route path="/sql-handson" element={<XploreHandsOn />} />
        <Route path="/unix-handson" element={<XploreHandsOn />} />
        <Route path="/ui-handson" element={<XploreHandsOn />} />
        <Route path="/js-handson" element={<XploreHandsOn />} />
      </Routes>
      </div>
    </Router>
      
    </>
  )
}

export default App