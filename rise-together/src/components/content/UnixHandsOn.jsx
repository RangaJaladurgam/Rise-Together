import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./Util.css";

function UnixHandsOn() {
  return (
    <>
      <div className="content-line">
        <Link to="/unix/problem-1" className="nav-link">
          <Card title="Unix HandsOn 1" />
        </Link>
        <Link to="/unix/problem-2" className="nav-link">
          <Card title="Unix HandsOn 2" />
        </Link>
      </div>
      <div className="content-line">
        <Link to="/unix/problem-3" className="nav-link ">
          <Card title="Unix HandsOn 3" />
        </Link>
        <Link to="/unix/problem-4" className="nav-link">
          <Card title="Unix HandsOn 4" />
        </Link>
      </div>
      <div className="content-line">
        <Link to="/unix/problem-5" className="nav-link ">
          <Card title="Unix HandsOn 5" />
        </Link>
      </div>
    </>
  );
}

export default UnixHandsOn;
