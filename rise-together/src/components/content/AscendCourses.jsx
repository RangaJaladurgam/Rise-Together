import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from "../Card/Card";
import "./Util.css";


function AscendCourses() {
  const location = useLocation();

// Define content for each route
const renderContent = () => {
  switch (location.pathname) {
    case "/ipa-practice/question-1":
      return <XploreIPAQ1 />;
    case "/ipa-practice/question-2":
      return <XploreIPAQ2 />;
    case "/ipa-practice/question-3":
      return <XploreIPAQ3 />;
    default:
      return <p>Select to see solutions here.</p>;
  }
};

 // Helper function to check if a link is active
 const isActive = (path) => location.pathname === path;

return (
  <div className="content">
    <Link to="/" className="">
      {" "}
      <span>
        <i class="fa-solid fa-arrow-left"></i>
      </span>
    </Link>
    <h2>Xplore Practice IPA Questions 2024</h2>
    <div className="content-container content-container-xploreipa">
      {/* Left Half */}
      <div className="card-container content-half half1 content-half-xplore">
      <Link
          to="/ascend-courses/advance-java"
          className="nav-link"
        >
          <Card title="AsCEnD Advanced Java Programming" />
        </Link>
        <Link
          to="/ascend-courses/java-mvc&web-dev"
          className="nav-link"
        >
          <Card title="AsCEnD Java MVC and Web Development" />
        </Link>
        <Link
          to="/ascend-courses/python-web&flask"
          className="navlink"
        >
          <Card title="AsCEnD Python Web with Flask" />
        </Link>
      <Link
          to="/ascend-courses/python-web&flask"
          className="navlink"
        >
          <Card title="AsCEnD Machine Learning" />
        </Link>
      </div>

      {/* Right Half */}
      <div className="card-container content-half half2">
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300}
          >
            <div className="render-content">{renderContent()}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  </div>
);
}

export default AscendCourses;