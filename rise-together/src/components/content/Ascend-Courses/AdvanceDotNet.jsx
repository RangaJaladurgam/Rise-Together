import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Util.css";
function AdvanceDotNet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content">
        <Link to="/" className="">
          {" "}
          <span>
            <i className="fa-solid fa-arrow-left"></i>
          </span>
        </Link>
        <h2>AsCEnD Advanced DotNet</h2>
        <h3>DotNet Advanced Concepts Assessment</h3>
        <div className="kyt-questions">
          <div className="question">
            <p>
              Q1. Number of threads that exists for each of the processes that
              occurs in the program
            </p>
            <p className="answer">Answer: At least 1</p>
          </div>

          <div className="question">
            <p>Q2. Which of the following statement is correct?</p>
            <p className="answer">
              Answer: Anonymous types are class types that derive directly from
              object.
            </p>
          </div>

          <div className="question">
            <p>Q3. We can create nested anonymous type</p>
            <p className="answer">Answer: TRUE</p>
          </div>

          <div className="question">
            <p>
              Q4. Choose the namespace which supports multithreading program
            </p>
            <p className="answer">Answer: System Threading</p>
          </div>

          <div className="question">
            <p>Q5. What is the correct statement about lambda expression?</p>
            <p className="answer">
              Answer: The return type of lambda expression can be neglected in
              some cases
            </p>
          </div>

          <div className="question">
            <p>
              Q6. Which of these methods of Thread class is used to Suspend a
              thread for a period of time?
            </p>
            <p className="answer">Answer: sleep()</p>
          </div>

          <div className="question">
            <p>Q7. Select the type of multitasking methods that exist</p>
            <p className="answer">Answer: Process-based and thread-based</p>
          </div>

          <div className="question">
            <p>
              Q8. Choose the correct statement about process-based multitasking
            </p>
            <p className="answer">Answer: Both</p>
          </div>

          <div className="question">
            <p>Q9. What types of Objects can you query using LINQ?</p>
            <p className="answer">Answer: All of the above</p>
          </div>

          <div className="question">
            <p>Q10. LINQ is ____________.</p>
            <p className="answer">Answer: Language Integrated Query</p>
          </div>

          <div className="question">
            <p>Q11. Which of the following supports LINQ queries?</p>
            <p className="answer">Answer: All of the above</p>
          </div>

          <div className="question">
            <p>
              Q12. What LINQ expressions are used to shape results in a query
            </p>
            <p className="answer">Answer: Group & Select</p>
          </div>

          <div className="question">
            <p>Q13. Correct syntax for declaring anonymous type</p>
            <p className="answer">
              Answer: var Emp = new {`{ID = 106, Name = "Priya"}; `}
            </p>
          </div>

          <div className="question">
            <p>
              Q14. Which LINQ keyword is used to categorize results in a query?
            </p>
            <p className="answer">Answer: group</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvanceDotNet;
