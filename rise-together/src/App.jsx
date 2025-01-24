import React from "react";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./components/NavBar/NavBar";
import About from "./components/About/About";

import "./App.css";
import XploreHandsOn from "./components/content/XploreHandsOn";
import JavaHandsOn from "./components/content/JavaHandsOn";
import BizzSkills from "./components/content/BizzSkills";

function App() {
  const location = useLocation();
  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <div className="container">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/java" element={<XploreHandsOn />} />
              <Route path="/bizskills" element={<BizzSkills />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <div className="container">
      <Routes>
        <Route path="/java-handson" element={<XploreHandsOn />} />
        <Route path="/sql-handson" element={<XploreHandsOn />} />
        <Route path="/unix-handson" element={<XploreHandsOn />} />
        <Route path="/ui-handson" element={<XploreHandsOn />} />
        <Route path="/js-handson" element={<XploreHandsOn />} />
      </Routes>
      </div>
    </>
  );
}
const AppWrapper = () => (
  <Router>
    <Navbar />
    <App />
  </Router>
);

export default AppWrapper;
