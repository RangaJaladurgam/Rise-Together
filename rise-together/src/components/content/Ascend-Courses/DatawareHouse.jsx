import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Util.css";
function Datawarehouse() {
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
        <h2>AsCEnD Datawarehouse</h2>
        <h3>AsCEnD Datawarehouse Assessment</h3>
        <div className="kyt-questions">
          <div className="question">
            <p>
              Q1. Interactive computer-based systems intended to help
              decision-makers utilize data and solve problems to make faster
              decisions
            </p>
            <p className="answer">Answer: Business Intelligence</p>
          </div>

          <div className="question">
            <p>
              Q2. A temporary area where data is stored after extraction from
              the source
            </p>
            <p className="answer">Answer: Staging area</p>
          </div>

          <div className="question">
            <p>Q3. Railway Reservation is an example of which system</p>
            <p className="answer">Answer: OLTP</p>
          </div>

          <div className="question">
            <p>
              Q4. Dimension tables can be connected via foreign key in which of
              these schemas
            </p>
            <p className="answer">Answer: Star</p>
          </div>

          <div className="question">
            <p>
              Q5. Database Tables in a star schema are typically denormalized
            </p>
            <p className="answer">Answer: TRUE</p>
          </div>

          <div className="question">
            <p>Q6. Data marts in top-down approach are called</p>
            <p className="answer">Answer: Top-down data marts</p>
          </div>

          <div className="question">
            <p>
              Q7. The data warehouse approach in which EDW is built first and
              data marts are derived from it later is called
            </p>
            <p className="answer">Answer: Top-down approach</p>
          </div>

          <div className="question">
            <p>Q8. Which of the following is not an ETL tool</p>
            <p className="answer">Answer: Tableau</p>
          </div>

          <div className="question">
            <p>Q9. Critical metrics for measuring performance of a business</p>
            <p className="answer">Answer: Ad Hoc reports</p>
          </div>

          <div className="question">
            <p>
              Q10. Data from a single source only can be moved to a data
              warehouse
            </p>
            <p className="answer">Answer: FALSE</p>
          </div>

          <div className="question">
            <p>Q11. A dimension without any associated attribute is called</p>
            <p className="answer">Answer: Degenerate dimension</p>
          </div>

          <div className="question">
            <p>Q12. Datastore used to analyze near real-time data</p>
            <p className="answer">Answer: ODS</p>
          </div>

          <div className="question">
            <p>Q13. R in ROLAP stands for __________.</p>
            <p className="answer">Answer: Relational</p>
          </div>

          <div className="question">
            <p>
              Q14. Miniature data warehouse that supports the requirement of a
              particular department or business process
            </p>
            <p className="answer">Answer: DSS</p>
          </div>

          <div className="question">
            <p>
              Q15. ________ is a process that transforms raw data into
              meaningful and useful information for business purposes
            </p>
            <p className="answer">Answer: Business Intelligence</p>
          </div>

          <div className="question">
            <p>
              Q16. Overall management of the availability, usability, integrity,
              and security of the data employed in an enterprise...
            </p>
            <p className="answer">Answer: Data Governance</p>
          </div>

          <div className="question">
            <p>Q17. The dimensions which contribute to the grain are called</p>
            <p className="answer">Answer: Primary dimension</p>
          </div>

          <div className="question">
            <p>
              Q18. Fact table which has dimension keys but no measures is called
            </p>
            <p className="answer">Answer: Factless fact table</p>
          </div>

          <div className="question">
            <p>Q19. Which of the following are the types of facts</p>
            <p className="answer">Answer: Additive facts</p>
          </div>

          <div className="question">
            <p>
              Q20. Systems used to handle complex queries to discover trends and
              patterns
            </p>
            <p className="answer">Answer: OLAP</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Datawarehouse;
