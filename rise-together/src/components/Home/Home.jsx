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
        <Link to="#ascend-course" className=" ascend-header">
          <h3 className="">AsCEnD Courses</h3>
        </Link>
      </div>
      <div className="card-container kyt-questions" id="#ascend-course">
        <Link to="/ascend-courses/advance-java" className="nav-link">
          <Card title="AsCEnD Advanced Java Programming" />
        </Link>
        <Link to="/ascend-courses/java-mvc&web-dev" className="nav-link">
          <Card title="AsCEnD Java MVC and Web Development" />
        </Link>
        <Link to="/ascend-courses/python-web&flask" className="nav-link">
          <Card title="AsCEnD Python Web with Flask" />
        </Link>
        <Link to="/ascend-courses/machine-learning" className="nav-link">
          <Card title="AsCEnD Machine Learning" />
        </Link>
        <Link to="/ascend-courses/node" className="nav-link">
          <Card title="AsCEnD Node JS" />
        </Link>
        <Link to="/ascend-courses/mongo-db" className="nav-link">
          <Card title="AsCEnD Mongo DB" />
        </Link>
        <Link to="/ascend-courses/test-automation" className="nav-link">
          <Card title="AsCEnD Test Automation" />
        </Link>
        <Link to="/ascend-courses/azure-cloud" className="nav-link">
          <Card title="AsCEnD Azure Cloud" />
        </Link>
        <Link to="/ascend-courses/adv-dotnet" className="nav-link">
          <Card title="AsCEnD Advanced DotNet" />
        </Link>
        <Link to="/ascend-courses/datawarehouse" className="nav-link">
          <Card title="AsCEnD Datawarehouse" />
        </Link>
        <Link to="/ascend-courses/devops" className="nav-link">
          <Card title="AsCEnD Devops" />
        </Link>
        <Link to="/ascend-courses/bigdata" className="nav-link">
          <Card title="AsCEnD Bigdata" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
