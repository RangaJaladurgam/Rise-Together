import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./Util.css";

function XploreHandsOn() {
  return (
    <div className="content ">
      <h2>Xplore HandsOn (Java)</h2>
      <div className="content-container">
        <div className="card-container content-half">
          <Link to="/java-handson" className="nav-link">
            <Card title="Java HandsOn" />
          </Link>
          <Link to="/sql-handson" className="nav-link">
            <Card title="SQL HandsOn" />
          </Link>
          <Link to="/unix-handson" className="nav-link">
            <Card title="Unix HandsOn" />
          </Link>
          <Link to="/ui-handson" className="nav-link">
            <Card title="HTML&CSS HandsOn" />
          </Link>
          <Link to="/js-handson" className="nav-link">
            <Card title="JavaScript HandsOn" />
          </Link>
        </div>
        <div className="card-container content-half">
          <div className="row">
            <Link to="/problem1" className="nav-link ">
              <Card title="Numeric Computation" />
            </Link>
            <Link to="/problem2" className="nav-link">
              <Card title="Objects and Classes" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default XploreHandsOn;
