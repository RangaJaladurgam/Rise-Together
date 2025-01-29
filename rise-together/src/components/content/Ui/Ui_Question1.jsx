import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../Util.css";

function Ui_Question1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Function to render the content for the right side

  const codeString = `Solution :
    
<! DOCTYPE html>
<html>
    <head>
        <title>Question1</title>
    </head>
    <body>
        <!-- Design & Develop your code here -->
        <div style="background-color:red; color: white;" id="head" width="600"
        height="200">
            <h1>My Application</h1>
        </div>
        <div id="body" width="600px" height="400px">
            <span style="background-color:#00FF00" id="span1" width="300px"
            height="300px">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
            </span>
            <span id="span2" width="300px" height="300px" style="background-color:
            #0000FF">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
            </span>
        </div>
    </body>
</html>`;

  return (
    <div className="content">
      <Link to="/java/ui-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (Ui) - Handson 1 - Format Div</h2>
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

export default Ui_Question1;
