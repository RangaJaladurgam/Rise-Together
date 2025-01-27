import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../Util.css";

function Unix_Question1() {
  // Function to render the content for the right side
  const renderContent = () => {
    return (
      <div>
        <h3>Unix : Count occurrence of word</h3>
        <p><strong> Write the unix command to count the
        occurrence of the word "Unix" in a given file.</strong> <br /> The file will be given as
        command line argument while the script containing your command will be
        run. <br /> Note : The search for "Unix" should be case-insensitive. <br /> <strong> For
        example,</strong> <br /> If the input file contains the following lines Unix is an
        multi-user,multi-tasking system. It is a command based operating system.
        <br /> We will learn unix architecture and the unix commands in this module.
        <br />The <strong>output</strong>  will be, <br /> 3</p>
      </div>
    );
  };

  const codeString = `Solution :
    
  grep -o -i unix | wc -l`;

  return (
    <div className="content">
      <Link to="/java/unix-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (Unix) - Handson 1</h2>
      <div className="content-container">
        {/* Left Half */}
        <div className="card-container content-half half1 handson-question">
          {renderContent()}
        </div>

        {/* Right Half */}
        <div className="card-container content-half half2 handson-code">
          <div className="render-content">
            <div className="code-block">
              <SyntaxHighlighter language="unix">
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unix_Question1;
