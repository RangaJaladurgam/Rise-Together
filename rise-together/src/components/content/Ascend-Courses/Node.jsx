import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Util.css";
function Node() {
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
        <h2>AsCEnD Node JS</h2>
        <h3>Node JS Fundamentals Assessment</h3>
        <div className="kyt-questions">
          <div className="question">
            <p>Q1. What is Node.JS?</p>
            <p className="answer">
              Answer: Node.js is a JavaScript based framework/platform built on
              Google Chrome's JavaScript V8 Engine.
            </p>
          </div>

          <div className="question">
            <p>Q2. Which of the following command starts a REPL session?</p>
            <p className="answer">Answer: $ node</p>
          </div>

          <div className="question">
            <p>
              Q3. Which of the following module is required for exception
              handling in Node?
            </p>
            <p className="answer">Answer: domain module</p>
          </div>

          <div className="question">
            <p>Q4. Each type of Stream is an EventEmitter</p>
            <p className="answer">Answer: TRUE</p>
          </div>

          <div className="question">
            <p>Q5. Which method of fs module is used to close a file?</p>
            <p className="answer">Answer: fs.close(fd, callback)</p>
          </div>

          <div className="question">
            <p>Q6. Which of the following is true about readable stream?</p>
            <p className="answer">Answer: Both</p>
          </div>

          <div className="question">
            <p>Q7. What is use of Underscore Variable in REPL session?</p>
            <p className="answer">Answer: to get the last result</p>
          </div>

          <div className="question">
            <p>Q8. Which of the following is not a valid HTTP method?</p>
            <p className="answer">Answer: header</p>
          </div>

          <div className="question">
            <p>Q9. What is Callback?</p>
            <p className="answer">
              Answer: Callback is an asynchronous equivalent for a function
            </p>
          </div>

          <div className="question">
            <p>
              Q10. Which of the following command will show all the modules
              installed globally?
            </p>
            <p className="answer">Answer: $ npm ls -g</p>
          </div>

          <div className="question">
            <p>
              Q11. Which of the following is true about RESTful web services?
            </p>
            <p className="answer">Answer: Both of the above</p>
          </div>

          <div className="question">
            <p>
              Q12. Why code written in Node JS is pretty fast although being
              written in JavaScript?
            </p>
            <p className="answer">
              Answer: Being built on Google Chrome's V8 JavaScript Engine
            </p>
          </div>

          <div className="question">
            <p>
              Q13. How Node based web servers are different from traditional web
              servers?
            </p>
            <p className="answer">
              Answer: Node based server uses a single threaded model and can
              service much larger number of requests than traditional servers
              like Apache HTTP Server
            </p>
          </div>

          <div className="question">
            <p>
              Q14. A stream fires end event when there is no more data to read
            </p>
            <p className="answer">Answer: TRUE</p>
          </div>

          <div className="question">
            <p>
              Q15. Which of the following statement is valid to use a Node
              module http in a Node based application?
            </p>
            <p className="answer">Answer: var http = require("http")</p>
          </div>

          <div className="question">
            <p>
              Q16. Node js is a single threaded application but supports
              concurrency
            </p>
            <p className="answer">Answer: TRUE</p>
          </div>

          <div className="question">
            <p>
              Q17. Which of the following is true about __filename global
              object?
            </p>
            <p className="answer">Answer: Both</p>
          </div>

          <div className="question">
            <p>
              Q18. Which of the following is true about File I/O in Node
              applications?
            </p>
            <p className="answer">Answer: Both</p>
          </div>

          <div className="question">
            <p>
              Q19. Which of the following is true about EventEmitter emit
              property?
            </p>
            <p className="answer">
              Answer: emit property is used to fire an event
            </p>
          </div>

          <div className="question">
            <p>Q20. REPL stands for?</p>
            <p className="answer">Answer: Read Eval Print Loop</p>
          </div>

          <div className="question">
            <p>Q21. All APIs of Node JS are?</p>
            <p className="answer">Answer: Asynchronous</p>
          </div>

          <div className="question">
            <p>
              Q22. Which of the following is true about global objects in Node
              applications?
            </p>
            <p className="answer">Answer: Both</p>
          </div>

          <div className="question">
            <p>
              Q23. In which of the following areas, Node.js is perfect to use?
            </p>
            <p className="answer">Answer: All of these options</p>
          </div>

          <div className="question">
            <p>Q24. Which of the following is true about package.json?</p>
            <p className="answer">Answer: All of these options</p>
          </div>

          <div className="question">
            <p>Q25. Is console a global object?</p>
            <p className="answer">Answer: TRUE</p>
          </div>

          <div className="question">
            <p>Q26. Which of the following is true about Node JS?</p>
            <p className="answer">Answer: All of these options</p>
          </div>

          <div className="question">
            <p>
              Q27. Which of the following is true about __dirname global object?
            </p>
            <p className="answer">
              Answer: The __dirname represents the name of the directory that
              the currently executing script resides in
            </p>
          </div>

          <div className="question">
            <p>
              Q28. Which of the following module is required for operating
              system specific operation?
            </p>
            <p className="answer">Answer: None of these options</p>
          </div>

          <div className="question">
            <p>
              Q29. In which of the following areas, Node.js is not advised to be
              used?
            </p>
            <p className="answer">Answer: CPU intensive applications</p>
          </div>

          <div className="question">
            <p>
              Q30. By default, npm installs any dependency in the global mode.
            </p>
            <p className="answer">Answer: FALSE</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Node;
