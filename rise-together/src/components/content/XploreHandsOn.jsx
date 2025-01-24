import React from "react";
import { Link, useLocation } from "react-router-dom";
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
      case "/java-handson":
        return <JavaHandsOn/>;
      case "/sql-handson":
        return <SqlHandsOn/>;
      case "/unix-handson":
        return <UnixHandsOn/>;
      case "/ui-handson":
        return <UiHandsOn/>;
       case "/js-handson":
        return <JsHandsOn/>;
      default:
        return <p>Select a HandsOn topic to see the details here.</p>;
    }
  };

  return (
    <div className="content">
      <h2>Xplore HandsOn (Java)</h2>
      <div className="content-container">
        {/* Left Half */}
        <div className="card-container content-half half1">
          <SideBar/>
        </div>

        {/* Right Half */}
        <div className="card-container content-half half2">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default XploreHandsOn;
