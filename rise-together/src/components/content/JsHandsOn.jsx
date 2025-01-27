import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./Util.css";

function JsHandsOn() {
  return (
    <>
      <div className="content-line">
        <Link to="/java/js-handson/problem-1" className="nav-link">
          <Card title="JavaScript HandsOn 1" />
        </Link>
        <Link to="/java/js-handson/problem-2" className="nav-link">
          <Card title="JavaScript HandsOn 2" />
        </Link>
      </div>
      <div className="content-line">
        <Link to="/java/js-handson/problem-3" className="nav-link ">
          <Card title="JavaScript HandsOn 3" />
        </Link>
        <Link to="/java/js-handson/problem-4" className="nav-link">
          <Card title="JavaScript HandsOn 4" />
        </Link>
      </div>
    </>
  );
}

export default JsHandsOn;
