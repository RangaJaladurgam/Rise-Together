import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../Util.css";

function Unix_Question4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Function to render the content for the right side
  const renderContent = () => {
    return (
      <div>
        <h3>Unix : Highest Score
        </h3>
        <p>
        Student details are stored in a file in the following order with space as the delimiter:
 <br />
RollNo Name Score
  <br />        <strong>
            {" "}
            Write a unix command to find the name of the Student who has the highest score.</strong>{" "} The file will be given as a command line argument when the script containing your command will run.
        <br />
          <strong> For example,</strong> <br /> If the input file has the below content
          <br />
          RollNo Name Score <br />
234 ABC 70  <br />
567 QWE 12 <br />
457 RTE 56 <br />
234 XYZ 80 <br />
456 ERT 45 <br />
The <strong>output</strong> will be

 
<br />
XYZ
        </p>
      </div>
    );
  };

  const codeString = `Solution :
    
  sort -k3,3 -rn -t" " | head -n1 | awk '{print $2}'`;

  return (
    <div className="content">
      <Link to="/java/unix-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (Unix) - Handson 4</h2>
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

export default Unix_Question4;
