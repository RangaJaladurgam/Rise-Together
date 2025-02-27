import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./Util.css";

function UiHandsOn() {
  return (
    <>
      <div className="content-line">
        <Link to="/java/ui-handson/problem-1" className="nav-link">
          <Card title="Ui HandsOn 1" />
        </Link>
        <Link to="/java/ui-handson/problem-2" className="nav-link">
          <Card title="Ui HandsOn 2" />
        </Link>
      </div>
      <div className="content-line">
        <Link to="/java/ui-handson/problem-3" className="nav-link ">
          <Card title="Ui HandsOn 3" />
        </Link>
        <Link to="/java/ui-handson/problem-4" className="nav-link">
          <Card title="Ui HandsOn 4" />
        </Link>
      </div>
      <div className="content-line">
        <Link to="/java/ui-handson/problem-5" className="nav-link ">
          <Card title="Ui HandsOn 5" />
        </Link>
        <Link to="/java/ui-handson/problem-6" className="nav-link ">
          <Card title="Ui HandsOn 6" />
        </Link>
      </div>
    </>
  );
}

export default UiHandsOn;
