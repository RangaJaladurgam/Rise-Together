import React from 'react';
import {Link } from 'react-router-dom';
import Card from '../Card/Card';
import './Util.css';

function SideBar({isActive}) {
  return (
    <>
        <Link to="/java/java-handson" className={`nav-link ${isActive("/java/java-handson") ? "active" : ""}`}>
            <Card title="Java HandsOn" />
          </Link>
          <Link to="/java/sql-handson" className={`nav-link ${isActive("/java/sql-handson") ? "active" : ""}`}>
            <Card title="SQL HandsOn" />
          </Link>
          <Link to="/java/unix-handson" className={`nav-link ${isActive("/java/unix-handson") ? "active" : ""}`}>
            <Card title="Unix HandsOn" />
          </Link>
          <Link to="/java/ui-handson" className={`nav-link ${isActive("/java/ui-handson") ? "active" : ""}`}>
            <Card title="HTML&CSS HandsOn" />
          </Link>
          <Link to="/java/js-handson" className={`nav-link ${isActive("/java/js-handson") ? "active" : ""}`}>
            <Card title="JavaScript HandsOn" />
          </Link>
    </>
  )
}

export default SideBar