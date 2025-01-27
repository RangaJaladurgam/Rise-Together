import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../Util.css";

function Unix_Question5() {
  // Function to render the content for the right side
  const renderContent = () => {
    return (
      <div>
        <h3>Unix : Average Salary
        </h3>
        <p>
        Employee Details are stored in a file in the following format:
 <br />
 EmpID;EmpName;Salary
  <br />        <strong>
            {" "}
            <br />
            Write a shell script to find the count of employees whose salary is less than the average salary of all employees.</strong>{" "} <br />The file will be given as a command line argument when the script containing your command will run.
        <br />
          <strong> For example,</strong> <br /> If the input file contains the following employee records
          <br />
          EmpID;EmpName;Salary<br />
          100;A;30000<br />
          102;B;45000
          <br />
          103;C;15000 <br />
          104;D;40000<br />
The <strong>output</strong> will be

 
<br />
2
        </p>
      </div>
    );
  };

  const codeString = `Solution :
    
  read
  awk 'BEGIN{ FS=";";Total;count;i;num}
     { 
       sum+=$3;num+=1;a[i++]=$3;
         
     }
     END{ avg=sum/num;
     for(j=0;j<i;j++){
          if(a[j]<avg){
              count++
          }
     } 
       {print count} 
    }'`;

  return (
    <div className="content">
      <Link to="/java/unix-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (Unix) - Handson 5</h2>
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

export default Unix_Question5;
