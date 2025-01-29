import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Util.css";
function BigData() {
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
        <h2>AsCEnD BigData</h2>
        <h3>AsCEnD BigData Assessment</h3>
        <div className="kyt-questions">
          <div className="question">
            <p>Q1. Which of the following is a component of Hadoop?</p>
            <p className="answer">Answer: All Are Correct</p>
          </div>

          <div className="question">
            <p>
              Q2. Which of the following is a common reason to restart the
              Hadoop process?
            </p>
            <p className="answer">Answer: All Are Correct</p>
          </div>

          <div className="question">
            <p>
              Q3. The output key of the Mapper must be identical to the Input
              key of the reducer.
            </p>
            <p className="answer">Answer: FALSE</p>
          </div>

          <div className="question">
            <p>
              Q4. Which file contains the configuration settings for HDFS
              daemons?
            </p>
            <p className="answer">Answer: All Are Connected</p>
          </div>

          <div className="question">
            <p>Q5. What is a combiner?</p>
            <p className="answer">
              Answer: Runs Locally on a single Mapper's output
            </p>
          </div>

          <div className="question">
            <p>Q6. The archive file created in Hadoop has the extension of?</p>
            <p className="answer">Answer: har</p>
          </div>

          <div className="question">
            <p>
              Q7. Which command is used to copy files or directories recursively
              in Hadoop?
            </p>
            <p className="answer">Answer: dcp</p>
          </div>

          <div className="question">
            <p>Q8. Hadoop works in which model?</p>
            <p className="answer">Answer: Master-slave fashion</p>
          </div>

          <div className="question">
            <p>
              Q9. Which of the following is a column-oriented database that runs
              on top of HDFS?
            </p>
            <p className="answer">Answer: Hbase</p>
          </div>

          <div className="question">
            <p>
              Q10. The client reading the data from HDFS file system in Hadoop
              does which of the following?
            </p>
            <p className="answer">
              Answer: Get only the block locations for the namenode
            </p>
          </div>

          <div className="question">
            <p>Q11. Secondary Name Node is the backup of Name Node?</p>
            <p className="answer">Answer: FALSE</p>
          </div>

          <div className="question">
            <p>
              Q12. How many keys will be passed to the Reducer given the
              following Map output?
            </p>
            <p className="answer">Answer: 5</p>
          </div>

          <div className="question">
            <p>Q13. Zero reducers are allowed in MapReduce?</p>
            <p className="answer">Answer: TRUE</p>
          </div>

          <div className="question">
            <p>Q14. What is Replication Factor?</p>
            <p className="answer">
              Answer: Replication factor controls how many times each individual
              block can be replicated
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BigData;
