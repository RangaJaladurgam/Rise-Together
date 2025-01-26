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
        {/* <Link to="/python" className="nav-link">
          <Card title="Xplore HandsOn (Python)" />
        </Link> */}
        <Link to="/kyt" className="nav-link">
          <Card title="Know Your Organization 2024" />
        </Link>
        <Link to="/bizskills" className="nav-link">
          <Card title="Bussiness Skills" />
        </Link>
        <Link to="/ipa-practice" className="nav-link">
          <Card title="Xplore Practice IPA Questions 2024" />
        </Link>
        <Link to="/career-edge" className="nav-link">
          <Card title="Career Edge" />
        </Link>
        <Link to="/ascend-courses" className="nav-link">
          <Card title="AsCEnD Courses" />
        </Link>
        <Link to="/ipa-practice" className="nav-link">
          <Card title="Xplore Practice IPA Questions 2024" />
        </Link>
        <Link to="/ipa-practice" className="nav-link">
          <Card title="Xplore Practice IPA Questions 2024" />
        </Link>
      </div>
      <div className="card-container">
        <Link to="/ascend-course" className=" ascend-header">
          <h3>AsCEnD Courses</h3>
        </Link>
      </div>
      <div className="card-container" id="/ascend-course">
      <Link
          to="/ascend-courses/advance-java"
          className="nav-link"
        >
          <Card title="AsCEnD Advanced Java Programming" />
        </Link>
        <Link
          to="/ascend-courses/java-mvc&web-dev"
          className="nav-link"
        >
          <Card title="AsCEnD Java MVC and Web Development" />
        </Link>
        <Link
          to="/ascend-courses/python-web&flask"
          className="nav-link"
        >
          <Card title="AsCEnD Python Web with Flask" />
        </Link>
      <Link
          to="/ascend-courses/python-web&flask"
          className="nav-link"
        >
          <Card title="AsCEnD Machine Learning" />
        </Link>
      </div>  
    </div>
  );
}

export default Home;
