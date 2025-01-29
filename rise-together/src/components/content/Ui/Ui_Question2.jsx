import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../Util.css";

function Ui_Question2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Function to render the content for the right side

  const codeString = `Solution :
    
<! DOCTYPE html>
<html>
    <head>
        <title>Question2</title>
    </head>
    <body>
        <!-- Design & Develop your code here -->
        <h1>Inventory Management System</h1>
        <hr id="rule1" width="100%">
        <p id="menu" style="text-align: center">
        </p>
        <a id="menu1" href="page1.html">Registration</a>
        <a id="menu2" href="page2.html">List</a>
        <a id="menu3" href="page3.html">Search</a>
        <hr id="rule2" width="100%">
        <footer>
        <h4>&copy; My App 2019-20.</h4>
        </footer>
    </body>
</html>`;

  return (
    <div className="content">
      <Link to="/java/ui-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (Ui) - Handson 2</h2>
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

export default Ui_Question2;
