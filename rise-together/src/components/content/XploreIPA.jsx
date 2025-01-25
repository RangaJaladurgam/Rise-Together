import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from "../Card/Card";
import "./Util.css";
import SqlHandsOn from "./SqlHandsOn";
import UnixHandsOn from "./UnixHandsOn";
import XploreIPAQ1 from "./XploreIPAQ1";
import XploreIPAQ2 from "./XploreIPAQ2";
import XploreIPAQ3 from "./XploreIPAQ3";

function XploreIPA() {
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
            to="/ipa-practice/question-1"
            className={`nav-link ${isActive("/ipa-practice/question-1") ? "active" : ""}`}
          >
            <Card title="Java Assessment Test 1" />
          </Link>
          <Link
            to="/ipa-practice/question-2"
            className={`nav-link ${isActive("/ipa-practice/question-2") ? "active" : ""}`}
          >
            <Card title="Java Assessment Test 2" />
          </Link>
          <Link
            to="/ipa-practice/question-3"
            className={`nav-link ${isActive("/ipa-practice/question-3") ? "active" : ""}`}
          >
            <Card title="Java Assessment Test 3" />
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

export default XploreIPA;
