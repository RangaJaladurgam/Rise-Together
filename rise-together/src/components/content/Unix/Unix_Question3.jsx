import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../Util.css";

function Unix_Question3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Function to render the content for the right side
  const renderContent = () => {
    return (
      <div>
        <h3>Unix : Find sum of even numbers</h3>
        <p>
          <strong>
            {" "}
            Write a shell script to find the sum of all even numbers from a list
            of given numbers.</strong>{" "} The script should first of all take the count of
            numbers to be added as user input followed by the numbers one by
            one.
          
          <br /> The output should print the following : Total = &lt;Sum&gt;{" "}
          <br /> Note : The search for "Unix" should be case-insensitive. <br />{" "}
          <strong>Console Input :</strong>
          <br />
          The input needs to be provided as - <br />
          The first line contains the count of numbers to be added. <br />
          The second line contains the 1st number to be added. <br />
          The third line contains the 2nd number to be added. and so on. <br />
          <strong> For example,</strong> <br /> if we want to provide 10, 20 and
          30 as the numbers then provide the input as
          <br />
          3 <br />
          10 <br />
          11 <br />
          30
          <br />
          The output for this example will be
          <br />
          Total = 40 <br />
          <strong>Sample Test Cases</strong>
          <br />
          1. <br />
          <strong>Input : </strong> <br />
          4 <br />
          20 <br />
          10 <br />
          5 <br />
          5 <br />
          <strong>Output : </strong> 
          <br />
          Total = 30
          <br />
          2. <br />
          <strong>Input : </strong><br />
          2 <br />
          50 <br />
          11 <br />
          <strong>Output : </strong> <br />
          Total = 50 <br />
        </p>
      </div>
    );
  };

  const codeString = `Solution :
    
  read n
  awk '
    BEGIN {
        sum=0;
        }
     { if ( $0%2==0 ){
         sum+=$0;
     }
     }
     END { print "Total","=",sum}'`;

  return (
    <div className="content">
      <Link to="/java/unix-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (Unix) - Handson 3</h2>
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

export default Unix_Question3;
