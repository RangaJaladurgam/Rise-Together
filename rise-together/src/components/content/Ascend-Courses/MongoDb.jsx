import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Util.css";
function MongoDb() {
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
        <h2>AsCEnD Mongo DB</h2>
        <h3>Mongo DB Fundamentals Assessment</h3>
        <div className="kyt-questions">
          <div className="question">
            <p>Q1. Which of the following are popular columnar databases?</p>
            <p className="answer">Answer: All are correct</p>
          </div>

          <div className="question">
            <p>
              Q2. Collection and a document in MongoDB is equivalent to which of
              the SL concepts respectively?
            </p>
            <p className="answer">Answer: Table and Row</p>
          </div>

          <div className="question">
            <p>
              Q3. is the command in mongodb that is equivalent of SQL's
              truncate?
            </p>
            <p className="answer">Answer: db.col.remove()</p>
          </div>

          <div className="question">
            <p>Q4. What is the name of default storage engine in MongoDB?</p>
            <p className="answer">Answer: MMAPV1</p>
          </div>

          <div className="question">
            <p>
              Q5. The following statement is True or False? NoSQL database is
              not viewed as a replacement to RDBMS but Rather, a complementary
              addition to RDBMS and SQL.
            </p>
            <p className="answer">Answer: FALSE</p>
          </div>

          <div className="question">
            <p>
              Q6. What does the following query do when performed on the posts
              collection?
            </p>
            <p className="answer">Answer: Both B & C</p>
          </div>

          <div className="question">
            <p>
              Q7. _________ is the method used to limit the records in mongoDB.
            </p>
            <p className="answer">Answer: Limit()</p>
          </div>

          <div className="question">
            <p>
              Q8. Objectid is a 12-byte BSON type in which the last 3 bytes
              represent?
            </p>
            <p className="answer">Answer: The machine identifier</p>
          </div>

          <div className="question">
            <p>
              Q9. MongoDB is a leading NoSQL classified as a document-oriented
              database. State True or False?
            </p>
            <p className="answer">Answer: TRUE</p>
          </div>

          <div className="question">
            <p>
              Q10. ________ is the method used to display results in a formatted
              way.
            </p>
            <p className="answer">Answer: Preety()</p>
          </div>

          <div className="question">
            <p>
              Q11. Which of the following is equivalent operator on NoSQL for
              SQL SELECT operator?
            </p>
            <p className="answer">Answer: $out</p>
          </div>

          <div className="question">
            <p>
              Q12. You want to return maximum 10 matching documents that will
              return with only the id, name, and address fields. Which of the
              following queries will you use?
            </p>
            <p className="answer">
              Answer: db.users.find({`{age: {$gt:18}}, {name:1, address:1}`}
              ).limit(10)
            </p>
          </div>

          <div className="question">
            <p>Q13. Which of the following are NoSQL Traits?</p>
            <p className="answer">Answer: All are correct</p>
          </div>

          <div className="question">
            <p>
              Q14. Which of the following are correct classifications of NoSQL
              databases?
            </p>
            <p className="answer">Answer: All are correct</p>
          </div>

          <div className="question">
            <p>
              Q15. Which among the following is the way to access the different
              documents in the result set?
            </p>
            <p className="answer">Answer: Sort</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MongoDb;
