import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./Util.css";

function KYT_SideBar() {
  return (
    <>
      <Link to="/kyt/embrace" className="nav-link">
        <Card title="Embrace Quiz" />
      </Link>
      <Link to="/kyt/quiz" className="nav-link">
        <Card title=" Know Your TCS Quiz " />
      </Link>
      <Link to="/kyt/itci" className="nav-link">
        <Card title="IT Consultancy Industry Quiz" />
      </Link>
      <Link to="/kyt/bizz-4" className="nav-link">
        <Card title="Business 4.0 Quiz" />
      </Link>
      <Link to="/kyt/digital-awareness" className="nav-link">
        <Card title=" Digital Awareness Quiz " />
      </Link>
      <Link to="/kyt/mfdm" className="nav-link">
        <Card title="MFDM Quiz" />
      </Link>
      <Link to="/kyt/final-assessment" className="nav-link">
        <Card title="KYT Final Assessment" />
      </Link>
    </>
  );
}

export default KYT_SideBar;
