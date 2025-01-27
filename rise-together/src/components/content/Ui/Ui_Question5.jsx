import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../Util.css";

function Ui_Question5() {
  // Function to render the content for the right side

  const codeString = `Solution :
    
<! DOCTYPE html>
<html>
    <head>
        <title>Question3</title>
        <style>
            #custList{
            border: 1;
            width: 80%;
            align: center;
            }
            th{
            backgroundcolor:#42aaf4;
            }
        </style>
    </head>
    <body>
        <!-- Design & Develop your code here -->
        <h2>Customer Listing</h2>
        <table id="custList">
            <tr>
                <th>Customer Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>City</th>
            </tr>
            <tr>
                <td>100001</td>
                <td>Akshay Kumar</td>
                <td>Male</td>
                <td>Chennai</td>
            </tr>
            <tr>
                <td>100002</td>
                <td>Shyama P</td>
                <td>Female</td>
                <td>Trivandrum</td>
            </tr>
            <tr>
                <td>100003</td>
                <td>Nalini Kumari</td>
                <td>Female</td>
                <td>Bangalore</td>
            </tr>
            <tr>
                <td>100004</td>
                <td>Raj Shyam</td>
                <td>Male</td>
                <td>Chennai</td>
            </t>
            <tr>
                <td>100005</td>
                <td>Sundar G</td>
                <td>Male</td>
                <td>Mangalore</td>
            </tr>
        </table>
    </body>
</html>`;

  return (
    <div className="content">
      <Link to="/java/ui-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (Ui) - Handson 5</h2>
      <div className="content-container">
        {/* Right Half */}
        <div className="card-container content-half half2 handson-code">
          <div className="render-content">
            <div className="code-block">
              <SyntaxHighlighter language="html">
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui_Question5;
