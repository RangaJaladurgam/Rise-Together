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
import KYT from "./components/content/KYT";
import Question1 from "./components/content/Java/Question1";
import Question2 from "./components/content/Java/Question2";
import Question3 from "./components/content/Java/Question3";
import Question4 from "./components/content/Java/Question4";
import Question5 from "./components/content/Java/Question5";
import Question6 from "./components/content/Java/Question6";
import Question7 from "./components/content/Java/Question7";
import Question8 from "./components/content/Java/Question8";
import Question9 from "./components/content/Java/Question9";
import XploreIPA from "./components/content/XploreIPA";
import CareerEdge from "./components/content/CareerEdge";
import AscendCourses from "./components/content/AscendCourses";

function App() {
  const location = useLocation();
  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
      <div className="container">
        <Routes location={location}>
          <Route path="/about" element={<About />} />
          <Route path="/bizskills" element={<BizzSkills />} />
          <Route path="/career-edge" element={<CareerEdge />} />
          <Route path="/ascend-course" element={<Home />} />
        </Routes>
      </div>
      </CSSTransition>
      </TransitionGroup>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/java" element={<XploreHandsOn />} />
          <Route path="/kyt" element={<KYT />} />
          <Route path="/ipa-practice" element={<XploreIPA />} />
        </Routes>

        <Routes>
          <Route path="/java/java-handson" element={<XploreHandsOn />} />
          <Route path="/java/sql-handson" element={<XploreHandsOn />} />
          <Route path="/java/unix-handson" element={<XploreHandsOn />} />
          <Route path="/java/ui-handson" element={<XploreHandsOn />} />
          <Route path="/java/js-handson" element={<XploreHandsOn />} />
        </Routes>
        <Routes>
          <Route path="/kyt/embrace" element={<KYT />} />
          <Route path="/kyt/quiz" element={<KYT />} />
          <Route path="/kyt/itci" element={<KYT />} />
          <Route path="/kyt/bizz-4" element={<KYT />} />
          <Route path="/kyt/digital-awareness" element={<KYT />} />
          <Route path="/kyt/mfdm" element={<KYT />} />
          <Route path="/kyt/final-assessment" element={<KYT />} />

          <Route path="/ipa-practice/question-1" element={<XploreIPA />} />
          <Route path="/ipa-practice/question-2" element={<XploreIPA />} />
          <Route path="/ipa-practice/question-3" element={<XploreIPA />} />
        </Routes>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300}
          >
            <Routes location={location}>
              <Route
                path="/java/java-handson/problem1-1"
                element={<Question1 />}
              />
              <Route
                path="/java/java-handson/problem1-2"
                element={<Question2 />}
              />
              <Route
                path="/java/java-handson/problem2-1"
                element={<Question3 />}
              />
              <Route
                path="/java/java-handson/problem2-2"
                element={<Question4 />}
              />
              <Route
                path="/java/java-handson/problem3-1"
                element={<Question5 />}
              />
              <Route
                path="/java/java-handson/problem3-2"
                element={<Question6 />}
              />
              <Route
                path="/java/java-handson/problem4-1"
                element={<Question7 />}
              />
              <Route
                path="/java/java-handson/problem4-2"
                element={<Question8 />}
              />
              <Route
                path="/java/java-handson/problem5-1"
                element={<Question9 />}
              />
              {/* --- */}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
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
