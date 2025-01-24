import React from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "../Card/Card";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="card-container">
        <Link to="/java" className="nav-link">
          <Card title="Xplore HandsOn (Java)" />
        </Link>
        <Link to="/python" className="nav-link">
          <Card title="Xplore HandsOn (Python)" />
        </Link>
        <Link to="/kyt" className="nav-link">
          <Card title="Know Your Organization 2024" />
        </Link>
        <Link to="/bizskills" className="nav-link">
          <Card title="Bussiness Skills" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
