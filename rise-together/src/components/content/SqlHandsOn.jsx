import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./Util.css";

function SqlHandsOn() {
  return (
    <>
      
  
      <div className="content-line">
        <h4>Handson-1</h4>
        <code>
          select Departments.deptName,COUNT(Employees.eDeptId) From departments
          LEFT Join Employees on Departments.deptId=Employees.eDeptId Group By
          Departments.deptId,Departments.deptName Order by
          count(Employees.eDeptId) Desc, departments.deptName;
        </code>
      </div>   
      <div className="content-line">
        <h4>Handson-2</h4>
        <code>
          
select Dept_Id,Dept_Name from Department where Dept_Location='Ground Floor';
        </code>
      </div>
      <div className="content-line">
        <h4>Handson-3</h4>
        <code>
        select distinct Dept_name from Departments,Employees where Dept_ID=Emp_Dept_Id and Dept_name not in (select distinct Dept_name from Departments,Employees where Dept_id=Emp_Dept_Id and Emp_Skill like'Programmer');
        </code>
      </div>
      <div className="content-line">
        <h4>Handson-4</h4>
        <code>
        select distinct Dept_name,Emp_skill from Departments,Employees where Dept_ID=Emp_Dept_Id order by Dept_Name desc,Emp_Skill;
        </code>
      </div>
      <div className="content-line">
        <h4>Handson-5</h4>
        <code>
        select distinct Item_Name from Items where Item_id not in(select distinct Item_Id from orders);
        </code>
      </div>
    </>
  );
}

export default SqlHandsOn;
