import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Util.css";
function Java_Python_WebFlask() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content">
        <Link to="/" className="">
          {" "}
          <span>
            <i class="fa-solid fa-arrow-left"></i>
          </span>
        </Link>
        <h2>AsCEnD Python Web with Flask</h2>
        <h3>Python Web with Flask Assessment</h3>
        <div className="kyt-questions">
          <div className="question">
            <p>Q1. Which WSGI library implements requests and response objects in Flask?</p>
            <p className="answer">Answer: Werkzeug</p>
          </div>

  <div className="question">
    <p>Q2. Which HTTP methods are provided by Flask?</p>
    <p className="answer">Answer: GET, PUT, POST</p>
  </div>

  <div className="question">
    <p>Q3. ________ is the default port number in which a Flask application runs on localhost.</p>
    <p className="answer">Answer: 5000</p>
  </div>

  <div className="question">
    <p>Q4. Identify the correct syntax to install virtual environment in Python?</p>
    <p className="answer">Answer: pip install virtualenv</p>
  </div>

  <div className="question">
    <p>Q5. Which function of the Flask class is used to tell the application which URL should call the which function?</p>
    <p className="answer">Answer: route()</p>
  </div>

  <div className="question">
    <p>Q6. Output of the command: pip list</p>
    <p className="answer">Answer: All of these</p>
  </div>

  <div className="question">
    <p>Q7. What is the correct syntax to inherit an HTML page from a base HTML page with name base.html using Jinja template?</p>
    <p className="answer">Answer:{` {% extends "base.html" %} `}</p>
  </div>

  <div className="question">
    <p>Q8. Match the following delimiters with their use for Jinja templates.</p>
    <pre className="answer">
      i.{` {% ... %} `} a. Comments not included in the template output<br/>
      ii.{` {{ ... }} `} b. Statements<br/>
      iii.{` {# ... #} `} c. Expressions to print to the template output<br/>
      iv. # ...## d. Line Statements<br/>
    </pre>
    <p>Answer:</p>
    <pre className="answer">
      i      b<br/>
      ii     c<br/>
      iii     a<br/>
      iv     d<br/>
    </pre>
  </div>

  <div className="question">
    <p>Q9. Which of the below concept is applied to differentiate in any web application to output on the web page?</p>
    <p className="answer">Answer: decorator</p>
  </div>

  <div className="question">
    <p>Q10. Let's assume that there is an object/instance (of Flask class) named as ins, created in a web application. Which of the below statement you need to write in the web application project to start executing the project?</p>
    <p className="answer">Answer: run()</p>
  </div>

  <div className="question">
    <p>Q11. While running your Flask app during development, you run it as app.run(). However, you are facing a little inconvenience as every time you change something in the code, you have to stop the server and run it again. What can be done so that you need not restart the server to detect the changes in the code?</p>
    <p className="answer">Answer: AUTOLOAD mode can be set as TRUE</p>
  </div>

  <div className="question">
    <p>Q12. POST method is used to send HTML form data to the server in an unencrypted format</p>
    <p className="answer">Answer: FALSE</p>
  </div>

  <div className="question">
    <p>Q13. @Flask Instance.route('/Reports')<br/>
    If I want to display output (of the function linked to the above decorator), what is the URL I need to type in the browser to run the application? Assume the app is running on 127.0.0.1 under port 5500.</p>
    <p className="answer">Answer: 127.0.0.1:5500/Reports</p>
  </div>

  <div className="question">
    <p>Q14. Which Flask library needs to be imported to return a template as the response object?</p>
    <p className="answer">Answer: render_template</p>
  </div>

  <div className="question">
    <p>Q15. ObjectInstance = Flask(__name__)<br/>
    In the above snippet, what does the __name__ refer to?</p>
    <p className="answer">Answer: name of the current module / App to record</p>
  </div>
</div>

      </div>
    </>
  );
}

export default Java_Python_WebFlask;
