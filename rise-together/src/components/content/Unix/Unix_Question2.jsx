import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../Util.css";

function Unix_Question2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Function to render the content for the right side
  const renderContent = () => {
    return (
      <div>
        
        <h3>Unix : Word Count </h3>
        <p>
          <strong>
            {" "}
            Write the unix command to count the number of
        words in the first 3 lines of a file.
          </strong>{" "}
          <br /> The file will be given as a
          command line argument when the script containing your command will run. <br /> Note : The search
          for "Unix" should be case-insensitive. <br />{" "}
          <strong> For example,</strong> <br /> If the input file contains the
          following lines Unix is an multi-user,multi-tasking system. It is a
          command based operating system.
          <br /> We will learn unix architecture and the unix commands in this
          module.
          <br /> The <strong>output</strong> will be, <br /> 19
        </p>
      </div>
    );
  };

  const codeString = `Solution :
    
  head -3|wc -w`;

  return (
    <div className="content">
      <Link to="/java/unix-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (Unix) - Handson 2</h2>
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

export default Unix_Question2;
