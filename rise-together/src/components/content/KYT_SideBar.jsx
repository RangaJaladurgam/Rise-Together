import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./Util.css";

function KYT_SideBar({isActive}) {
  return (
    <>
      <Link to="/kyt/embrace" className={`nav-link ${isActive("/kyt/embrace") ? "active" : ""}`}>
        <Card title="Embrace Quiz" />
      </Link>
      <Link to="/kyt/quiz" className={`nav-link ${isActive("/kyt/quiz") ? "active" : ""}`}>
        <Card title=" Know Your TCS Quiz " />
      </Link>
      <Link to="/kyt/itci" className={`nav-link ${isActive("/kyt/itci") ? "active" : ""}`}>
        <Card title="IT Consultancy Industry Quiz" />
      </Link>
      <Link to="/kyt/bizz-4" className={`nav-link ${isActive("/kyt/bizz-4") ? "active" : ""}`}>
        <Card title="Business 4.0 Quiz" />
      </Link>
      <Link to="/kyt/digital-awareness" className={`nav-link ${isActive("/kyt/digital-awareness") ? "active" : ""}`}>
        <Card title=" Digital Awareness Quiz " />
      </Link>
      <Link to="/kyt/mfdm" className={`nav-link ${isActive("/kyt/mfdm") ? "active" : ""}`}>
        <Card title="MFDM Quiz" />
      </Link>
      <Link to="/kyt/final-assessment" className={`nav-link ${isActive("/kyt/final-assessment") ? "active" : ""}`}>
        <Card title="KYT Final Assessment" />
      </Link>
    </>
  );
}

export default KYT_SideBar;
