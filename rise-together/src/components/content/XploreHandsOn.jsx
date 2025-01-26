import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from "../Card/Card";
import "./Util.css";
import JavaHandsOn from "./JavaHandsOn";
import SideBar from "./SideBar";
import SqlHandsOn from "./SqlHandsOn";
import UnixHandsOn from "./UnixHandsOn";
import UiHandsOn from "./UiHandOn";
import JsHandsOn from "./JsHandsOn";

function XploreHandsOn() {
  const location = useLocation();

  // Define content for each route
  const renderContent = () => {
    switch (location.pathname) {
      case "/java/java-handson":
        return <JavaHandsOn/>;
      case "/java/sql-handson":
        return <SqlHandsOn/>;
      case "/java/unix-handson":
        return <UnixHandsOn/>;
      case "/java/ui-handson":
        return <UiHandsOn/>;
       case "/java/js-handson":
        return <JsHandsOn/>;
      default:
        return <p>Select a HandsOn topic to see solutions here.</p>;
    }
  };
  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="content">
       <Link to="/" className=""> <span><i class="fa-solid fa-arrow-left"></i></span>
        </Link>
      <h2>Xplore HandsOn (Java)</h2>
      <div className="content-container">
        {/* Left Half */}
        <div className="card-container content-half half1">
          <SideBar isActive={isActive}/>
        </div>

        {/* Right Half */}
        <div className="card-container content-half half2">
        <TransitionGroup>
            <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
              <div className="render-content">{renderContent()}</div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}

export default XploreHandsOn;
