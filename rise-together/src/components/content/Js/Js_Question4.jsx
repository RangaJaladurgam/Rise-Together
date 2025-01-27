import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../Util.css";

function Js_Question4() {
  // Function to render the content for the right side
  
  const codeString1 = 
  `index.html

<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript Loop</title>
        <script src="index.js"></script>
    </head>
    <body>
        <input type="button" id="generate" value="Generate Series"
        onclick="SumOfSeries()">
        <p id="result"></p>
    </body>
</html> `;

 const codeString2 = 
  `index.js

function SumOfSeries(){
var a=0;
var b=1;
var sum=0;
var tmp;
while((a<100)&&(b<100)){
    sum=sum+b;
    tmp=a;
    a=b;
    b=b+tmp;
}
document.getElementById("result").innerText=sum;

}`
  return (
    <div className="content">
      <Link to="/java/js-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (javascript) - Handson 4</h2>
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

export default Js_Question4;
