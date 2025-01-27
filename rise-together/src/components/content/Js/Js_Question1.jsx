import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../Util.css";

function Js_Question1() {
  // Function to render the content for the right side
  
  const codeString1 = 
  `index.html

<!DOCTYPE html>
<html>
    <head>
        <script src="index.js"></script>
    </head>
    <body>
        <input type="button" value="show"
         onclick="callMe()">
    </body>
</html> `;

 const codeString2 = 
  `index.js

function callMe() {
var Passenger=new Object();
Passenger.name="Arun";
Passenger.age=28;
Passenger.reservedStatus='true';
document.write('<div id="name">'+Passenger.name+'</div>');
document.write('<div id="age">'+Passenger.age+'</div>');
document.write('<div id="reservedStatus">'
+Passenger.reservedStatus+'</div>'); ;
}`
  return (
    <div className="content">
      <Link to="/java/js-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (javascript) - Handson 1</h2>
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

export default Js_Question1;
