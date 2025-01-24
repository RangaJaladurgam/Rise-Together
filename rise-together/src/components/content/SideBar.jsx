import React from 'react';
import {Link } from 'react-router-dom';
import Card from '../Card/Card';
import './Util.css';

function SideBar() {
  return (
    <>
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
    </>
  )
}

export default SideBar