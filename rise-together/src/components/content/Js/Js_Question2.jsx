import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../Util.css";

function Js_Question2() {
  // Function to render the content for the right side
  
  const codeString1 = 
  `index.html

<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript Array</title>
        <script></script>
    </head>
    <body>
        <div id="app">Please Choose a Car to get its Details:
        <select id="SelectCar" onchange="displayCarDetails()">
            <option value="Innova">Innova</option>
            <option value="Dzire">Dzire</option>
            <option value="i20">i20</option>
            <option value="i10">i10</option>
        </select>
        <p id="CarDetail"></p>
        </div>
    </body>
</html> `;

 const codeString2 = 
  `index.js
  
let carDetails = [
    {
      carName:"Innova" ,
      onRoadPrice:900000,
      yearOfModel:2016
    },
    {
      carName:"Dzire" ,
      onRoadPrice:700000,
      yearOfModel:2017
    },
    {
      carName:"i20" ,
      onRoadPrice:500000, 
      yearOfModel:2013
    },
    {
      carName:"i10" ,
      onRoadPrice:400000, 
      yearOfModel:2016
    }
  ];
function displayCarDetails(){
var x = document.getElementById("SelectCar").value;
if(x=="Innova"){
document.getElementById("CarDetail").innerHTML =
 carDetails[0].carName+"-"+carDetails[0].onRoadPrice
 +"-"+carDetails[0].yearOfModel;}
else if(x=="Dzire"){
document.getElementById("CarDetail").innerHTML =
carDetails[1].carName+"-"+carDetails[1].onRoadPrice+
"-"+carDetails[1].yearOfModel;}
else if(x=="i20"){
document.getElementById("CarDetail").innerHTML =
carDetails[2].carName+"-"+carDetails[2].onRoadPrice+
"-"+carDetails[2].yearOfModel;}
else{
document.getElementById("CarDetail").innerHTML =
carDetails[3].carName+"-"+carDetails[3].onRoadPrice+
"-"+carDetails[3].yearOfModel;}
}`
  return (
    <div className="content">
      <Link to="/java/js-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (javascript) - Handson 2</h2>
      <div className="content-container">
        {/* Left Half */}
        <div className="card-container content-half half1 handson-code">
        <div className="render-content">
            <div className="code-block">
              <SyntaxHighlighter language="html">
                {codeString1}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        {/* Right Half */}
        <div className="card-container content-half half2 handson-code">
          <div className="render-content">
            <div className="code-block">
              <SyntaxHighlighter language="javascript">
                {codeString2}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Js_Question2;
