import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './Util.css';

function JavaHandsOn() {
  return (
    <>
    <div className="content-line">
            <Link to="/java/java-handson/problem1-1" className="nav-link">
              <Card title="Numeric Computation " />
            </Link>
            <Link to="/java/java-handson/problem1-2" className="nav-link">
              <Card title="Objects and Classes" />
            </Link>
          </div>
          <div className="content-line">
            <Link to="/java/java-handson/problem2-1" className="nav-link ">
              <Card title="Conditional Operands" />
            </Link>
            <Link to="/java/java-handson/problem2-2" className="nav-link">
              <Card title="Java Iterations - I" />
            </Link>
          </div>
          <div className="content-line">
            <Link to="/java/java-handson/problem3-1" className="nav-link ">
              <Card title="Java Iterations - II" />
            </Link>
            <Link to="/java/java-handson/problem3-2" className="nav-link">
              <Card title="Java Arrays - I - I" />
            </Link>
          </div>
          <div className="content-line">
            <Link to="/java/java-handson/problem4-1" className="nav-link ">
              <Card title="Java Arrays - I - II" />
            </Link>
            <Link to="/java/java-handson/problem4-2" className="nav-link">
              <Card title="Java Arrays - II - I" />
            </Link>
          </div>
          <div className="content-line">
            <Link to="/java/java-handson/problem5-1" className="nav-link ">
              <Card title="Java Arrays - II - II" />
            </Link>
          </div>
    </>
  )
}

export default JavaHandsOn