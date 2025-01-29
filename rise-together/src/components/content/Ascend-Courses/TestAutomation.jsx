import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Util.css";
function TestAutomation() {
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
        <h2>AsCEnD Test Automation</h2>
        <h3>Test Automation Assessment</h3>
        <div className="kyt-questions">
          <div className="question">
            <p>Q1. By Default, time for WAITFOR command is _____.</p>
            <p className="answer">Answer: 30sec</p>
          </div>

          <div className="question">
            <p>Q2. In case of selenium IDE, source view shows your script in</p>
            <p className="answer">Answer: XML format</p>
          </div>

          <div className="question">
            <p>
              Q3. If you wanted to access the element that has the text "This
              element has an ID that changes every time the page is loaded" in
              it, then which of the following is used?
            </p>
            <p className="answer">Answer: //div[contains(@id,'time_')]</p>
          </div>

          <div className="question">
            <p>
              Q4. Assert command will check whether the element is on the page,
              if it is not then the test will carry on executing
            </p>
            <p className="answer">Answer: TRUE</p>
          </div>

          <div className="question">
            <p>Q5. The method used to find a web element is ______.</p>
            <p className="answer">Answer: findElement()</p>
          </div>

          <div className="question">
            <p>
              Q6. In webdriver which of the following is/are a valid select
              statement that selects a value from a drop-down element?
            </p>
            <p className="answer">
              Answer:
              <ul>
                <li>selectByVisibleText()</li>
                <li>selectByIndex()</li>
                <li>selectByValue()</li>
              </ul>
            </p>
          </div>

          <div className="question">
            <p>
              Q7. What can be used to configure the number of browsers that can
              be used parallel in the remote system?
            </p>
            <p className="answer">Answer: max Session</p>
          </div>

          <div className="question">
            <p>Q8. What is the default port number used by hub in selenium?</p>
            <p className="answer">Answer: 4444</p>
          </div>

          <div className="question">
            <p>Q9. Test types supported by selenium are</p>
            <p className="answer">
              Answer:
              <ul>
                <li>functional testing</li>
                <li>regression testing</li>
              </ul>
            </p>
          </div>

          <div className="question">
            <p>
              Q10. Which of the following is not a driver available in selenium
              webdriver?
            </p>
            <p className="answer">Answer: MicrosoftDriver</p>
          </div>

          <div className="question">
            <p>
              Q11. The method used to enter text in a textbox in Selenium
              WebDriver is
            </p>
            <p className="answer">Answer: sendKeys()</p>
          </div>

          <div className="question">
            <p>Q12. Selenium variables are stored in ___________.</p>
            <p className="answer">Answer: storedVars</p>
          </div>

          <div className="question">
            <p>Q13. Which two commands you use to validate a button?</p>
            <p className="answer">
              Answer:
              <ul>
                <li>VerifyElementPresent</li>
                <li>assertElementPresent</li>
              </ul>
            </p>
          </div>

          <div className="question">
            <p>Q14. What does below code snippet represent?</p>
            <p className="answer">
              driver.findElement(By.xpath("//input[@id='search']")).click();
            </p>
            <p>
              Answer: finds the web element based on relative xpath and clicks
              on the same
            </p>
          </div>

          <div className="question">
            <p>Q15. What does the below code snippet imply?</p>
            <p className="answer">
              boolean sample = driver.findElement(By.xpath("radio button
              Xpath"));
            </p>
            <p>Answer: checks the state of a radio button</p>
          </div>

          <div className="question">
            <p>Q16. submit() method can be used to</p>
            <p className="answer">Answer: Submit the button</p>
          </div>

          <div className="question">
            <p>
              Q17. In webdriver, what is the method that counts the number of
              elements?
            </p>
            <p className="answer">
              Answer: driver.findElements(By.id("search")).size()
            </p>
          </div>

          <div className="question">
            <p>
              Q18. Selenium Grid allows us to run multiple instances of
              WebDriver or Selenium Remote Control in parallel
            </p>
            <p className="answer">Answer: True</p>
          </div>

          <div className="question">
            <p>
              Q19. Which command can be used to retrieve the innerText value
              contained within an element in webdriver?
            </p>
            <p className="answer">Answer: getText()</p>
          </div>

          <div className="question">
            <p>Q20. In webdriver, selectAllOptions() is an invalid command</p>
            <p className="answer">Answer: False</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestAutomation;
