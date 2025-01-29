import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Util.css";
function Devops() {
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
        <h2>AsCEnD DevOps</h2>
        <h3>AsCEnD DevOps Assessment</h3>
        <div className="kyt-questions">
          <div className="question">
            <p>Q1. DevOps is focused on ________.</p>
            <p className="answer">Answer: Test Automation</p>
          </div>

          <div className="question">
            <p>
              Q2. Which automation practice helps in quick identification of any
              problem in production environment
            </p>
            <p className="answer">Answer: Continuous Deployment</p>
          </div>

          <div className="question">
            <p>
              Q3. In DevOps, how often should you deploy your code to the
              production environment?
            </p>
            <p className="answer">Answer: Daily</p>
          </div>

          <div className="question">
            <p>Q4. In DevOps, which team gets priority?</p>
            <p className="answer">Answer: Development</p>
          </div>

          <div className="question">
            <p>
              Q5. The process of frequently merging of codes automatically is
              called
            </p>
            <p className="answer">Answer: Continuous Integration</p>
          </div>

          <div className="question">
            <p>Q6. Continuous Delivery is the process of __________.</p>
            <p className="answer">Answer: Frequent deployment to production</p>
          </div>

          <div className="question">
            <p>Q7. CICD stands for ___________.</p>
            <p className="answer">
              Answer: Continuous Integration, Continuous Delivery
            </p>
          </div>

          <div className="question">
            <p>Q8. Infrastructure As A Code (IAAC) refers to</p>
            <p className="answer">
              Answer: Managing Infrastructure As Code using Automation
            </p>
          </div>

          <div className="question">
            <p>Q9. The Benefit of CI</p>
            <p className="answer">Answer: Early Detection of Bugs</p>
          </div>

          <div className="question">
            <p>Q10. The key pain area prior to DevOps was</p>
            <p className="answer">
              Answer: Collaboration between Development and Operation
            </p>
          </div>

          <div className="question">
            <p>Q11. DevOps is a ___________.</p>
            <p className="answer">Answer: Culture</p>
          </div>

          <div className="question">
            <p>Q12. DevOps stands for _________________. </p>
            <p className="answer">Answer: Development Operations</p>
          </div>

          <div className="question">
            <p>Q13. Jenkins is a _________.</p>
            <p className="answer">Answer: CI Tool</p>
          </div>

          <div className="question">
            <p>Q14. DevOps is an extension of ________.</p>
            <p className="answer">Answer: Agile</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Devops;
