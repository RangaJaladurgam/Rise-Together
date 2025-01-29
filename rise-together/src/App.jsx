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
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import Unix_Question1 from "./components/content/Unix/Unix_Question1";
import Unix_Question2 from "./components/content/Unix/Unix_Question2";
import Unix_Question3 from "./components/content/Unix/Unix_Question3";
import Unix_Question4 from "./components/content/Unix/Unix_Question4";
import Unix_Question5 from "./components/content/Unix/Unix_Question5";
import Ui_Question1 from "./components/content/Ui/Ui_Question1";
import Ui_Question2 from "./components/content/Ui/Ui_Question2";
import Ui_Question3 from "./components/content/Ui/Ui_Question3";
import Ui_Question4 from "./components/content/Ui/Ui_Question4";
import Ui_Question5 from "./components/content/Ui/Ui_Question5";
import Ui_Question6 from "./components/content/Ui/Ui_Question6";
import Js_Question1 from "./components/content/Js/Js_Question1";
import Js_Question2 from "./components/content/Js/Js_Question2";
import Js_Question3 from "./components/content/Js/Js_Question3";
import Js_Question4 from "./components/content/Js/Js_Question4";
import Advance_Java from "./components/content/Ascend-Courses/Advance_Java";
import Java_MVC_Web from "./components/content/Ascend-Courses/Java_MVC_Web";
import Python_WebFlask from "./components/content/Ascend-Courses/Python_WebFlask";
import MachineLearning from "./components/content/Ascend-Courses/MachineLearning";
import Node from "./components/content/Ascend-Courses/Node";
import MongoDb from "./components/content/Ascend-Courses/MongoDb";
import TestAutomation from "./components/content/Ascend-Courses/TestAutomation";
import AzureCloud from "./components/content/Ascend-Courses/AzureCloud";
import AdvanceDotNet from "./components/content/Ascend-Courses/AdvanceDotNet";

function App() {
  const location = useLocation();
  
  return (
    <div>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <div className="container">
            <Routes location={location}>
              <Route path="/about" element={<About />} />
              <Route path="/bizskills" element={<BizzSkills />} />
              <Route path="/career-edge" element={<CareerEdge />} />
              <Route path="/hackathon-java" element={<ComingSoon />} />
              {/* Ascend Courses Links */}
              <Route
                path="/ascend-courses/advance-java"
                element={<Advance_Java />}
              />
              <Route
                path="/ascend-courses/java-mvc&web-dev"
                element={<Java_MVC_Web />}
              />
              <Route
                path="/ascend-courses/python-web&flask"
                element={<Python_WebFlask />}
              />
              <Route
                path="/ascend-courses/machine-learning"
                element={<MachineLearning />}
              />
              <Route path="/ascend-courses/node" element={<Node />} />
              <Route path="/ascend-courses/mongo-db" element={<MongoDb />} />
              <Route
                path="/ascend-courses/test-automation"
                element={<TestAutomation />}
              />
              <Route
                path="/ascend-courses/azure-cloud"
                element={<AzureCloud />}
              />
              <Route
                path="/ascend-courses/adv-dotnet"
                element={<AdvanceDotNet />}
              />
              <Route
                path="/ascend-courses/datawarehouse"
                element={<ComingSoon />}
              />
              <Route path="/ascend-courses/devops" element={<ComingSoon />} />
              <Route path="/ascend-courses/bigdata" element={<ComingSoon />} />
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
              {/* Java Handson */}
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
              {/* Unix Handson */}
              <Route
                path="/java/unix-handson/problem-1"
                element={<Unix_Question1 />}
              />
              <Route
                path="/java/unix-handson/problem-2"
                element={<Unix_Question2 />}
              />
              <Route
                path="/java/unix-handson/problem-3"
                element={<Unix_Question3 />}
              />
              <Route
                path="/java/unix-handson/problem-4"
                element={<Unix_Question4 />}
              />
              <Route
                path="/java/unix-handson/problem-5"
                element={<Unix_Question5 />}
              />
              {/* Ui HandsOn */}
              <Route
                path="/java/ui-handson/problem-1"
                element={<Ui_Question1 />}
              />
              <Route
                path="/java/ui-handson/problem-2"
                element={<Ui_Question2 />}
              />
              <Route
                path="/java/ui-handson/problem-3"
                element={<Ui_Question3 />}
              />
              <Route
                path="/java/ui-handson/problem-4"
                element={<Ui_Question4 />}
              />
              <Route
                path="/java/ui-handson/problem-5"
                element={<Ui_Question5 />}
              />
              <Route
                path="/java/ui-handson/problem-6"
                element={<Ui_Question6 />}
              />
              {/* JavaScript links */}
              <Route
                path="/java/js-handson/problem-1"
                element={<Js_Question1 />}
              />
              <Route
                path="/java/js-handson/problem-2"
                element={<Js_Question2 />}
              />
              <Route
                path="/java/js-handson/problem-3"
                element={<Js_Question3 />}
              />
              <Route
                path="/java/js-handson/problem-4"
                element={<Js_Question4 />}
              />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}
const AppWrapper = () => (
  
  <>
  <Router>
    <div className="app-wrapper">
      <Navbar />
      <div className="main-content">
        <App />
      </div>
      <Footer />
    </div>
  </Router>
  </>
);

export default AppWrapper;
