import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../Util.css";

function Js_Question3() {
  // Function to render the content for the right side
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const codeString1 = 
  `index.html

<!DOCTYPE html>
<html>
    <head></head>
    <body>
    <div id="app">
        <form onsubmit="return getAge()">
            <label>Enter your DOB:</label>
            <input type="date" id="dob" name="dob">
            <input type="submit" value="submit">
            <p id="showresults"></p>
        </form>
    </div>
    <script src="index.js" type="text/javascript"></script>
    </body>
</html> `;

 const codeString2 = 
  `index.js

function getAge() {
var age=document.getElementById("dob").value;
var l=age.toString();
var kk= l.substring(0,4);
var year=parseInt(kk);
var d= new Date();
var n=d.getFullYear();
var k=n.toString();
var m=parseInt(k);
if(year>=m){
document.getElementById("showresults").innerText=
"Wrong date!!";
}
else{
document.getElementById("showresults").innerText=
"You are "+(m-year)+" year(s) old!!";
}
}`
  return (
    <div className="content">
      <Link to="/java/js-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (javascript) - Handson 3</h2>
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

export default Js_Question3;
