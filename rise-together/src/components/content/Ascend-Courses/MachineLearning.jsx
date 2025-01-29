import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Util.css";
function MachineLearning() {
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
        <h2>AsCEnD Machine Learning</h2>
        <h3>Machine Learning Assessment</h3>
        <div className="kyt-questions">
          <div className="question">
            <p>
              Q1. 100 articles need to be divided based on content like sports,
              business, entertainment. Which ML model is used?
            </p>
            <p className="answer">Answer: Clustering</p>
          </div>

          <div className="question">
            <p>Q2. Target Variable is also called as in Machine Learning?</p>
            <p className="answer">Answer: All are correct</p>
          </div>

          <div className="question">
            <p>Q3. How do you handle missing or corrupted data in a dataset?</p>
            <p className="answer">
              Answer: Replace missing values with mean/median/mode
            </p>
          </div>

          <div className="question">
            <p>
              Q4. Identify which of the following is/are preprocessing steps?
            </p>
            <p className="answer">Answer: All are correct</p>
          </div>

          <div className="question">
            <p>Q5. Which of the following is a Machine Learning Type?</p>
            <p className="answer">Answer: Both</p>
          </div>

          <div className="question">
            <p>Q6. Which of the following approach is supervised learning?</p>
            <p className="answer">Answer: All are correct</p>
          </div>

          <div className="question">
            <p>
              Q7. Clustering approach is an example of which type of learning?
            </p>
            <p className="answer">Answer: Unsupervised Learning</p>
          </div>

          <div className="question">
            <p>
              Q8. A feature G1 can take certain values A, B, C, D, E & F and
              represents the grade of students from a University. Which of the
              following statement is true in the following case?
            </p>
            <p className="answer">
              Answer: Feature G1 is an example of ordinal variable
            </p>
          </div>

          <div className="question">
            <p>
              Q9. Please identify what is the purpose of the below code?
              <br />
              {` >>> `}from sklearn.preprocessing import Imputer
              <br />
              {` >>> `}imp = Imputer(missing_values=0, strategy='mean', axis=0)
              <br />
              {` >>> `}imp.fit_transform(X_train)
            </p>
            <p className="answer">
              Answer: Code replacing missing values in dataset with mean
            </p>
          </div>

          <div className="question">
            <p>
              Q10. Which of the following is a good test dataset characteristic?
            </p>
            <p className="answer">Answer: All are correct</p>
          </div>

          <div className="question">
            <p>Q11. What is the input to the Machine Learning Model?</p>
            <p className="answer">Answer: Data and Output</p>
          </div>

          <div className="question">
            <p>Q12. What is the purpose of performing cross-validation?</p>
            <p className="answer">Answer: All are correct</p>
          </div>

          <div className="question">
            <p>Q13. Machine Learning is a subset of?</p>
            <p className="answer">Answer: Artificial Intelligence</p>
          </div>

          <div className="question">
            <p>Q14. What is Machine Learning?</p>
            <p className="answer">Answer: All are correct</p>
          </div>

          <div className="question">
            <p>
              Q15. Identify the outlier in the below data?
              <br />
              5, 7, 10, 13, 15, 18, 99, 9, 8.
            </p>
            <p className="answer">Answer: 99</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MachineLearning;
