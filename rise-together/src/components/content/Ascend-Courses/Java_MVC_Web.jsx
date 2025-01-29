import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import "../Util.css";
function Java_MVC_Web() {
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
        <h2>AsCEnD Java MVC and Web Development</h2>
        <h3>Java MVC and Web Development Assessment</h3>
<div className="kyt-questions">
  <div className="question">
    <p>Q1. Select all options which are true about the welcome-file-list</p>
    <p className="answer">Answer: When the only specified item is welcome.html, the server still treats index.html as a backup. If not specified, the default landing page is index.html.</p>
  </div>

  <div className="question">
    <p>Q2. GenericServlet class is encapsulated inside ____ package?</p>
    <p className="answer">Answer: javax.servlet</p>
  </div>

  <div className="question">
    <p>Q3. Which method is used to retrieve a form value in a JSP or Servlet?</p>
    <p className="answer">Answer: request.getParameter(String)</p>
  </div>

  <div className="question">
    <p>Q4. When doPost() method of servlet gets called?</p>
    <p className="answer">Answer: Both of the above</p>
  </div>

  <div className="question">
    <p>Q5. Which class provide implementation for service() method?</p>
    <p className="answer">Answer: HttpServlet</p>
  </div>

  <div className="question">
    <p>Q6. The _____ object is used to forward the request processing from one servlet to another?</p>
    <p className="answer">Answer: RequestDispatcher</p>
  </div>

  <div className="question">
    <p>Q7. When init() method of servlet gets called?</p>
    <p className="answer">Answer: The init() method is called when the servlet is first created.</p>
  </div>

  <div className="question">
    <p>Q8. Given request is an HttpServletRequest, which code snippets will create a session if one doesn't exist?</p>
    <p className="answer">Answer: request.getSession();</p>
  </div>

  <div className="question">
    <p>Q9. Which of the following attribute is used to have uncaught run-time exceptions automatically forwarded to an error processing page?</p>
    <p className="answer">Answer: errorPage</p>
  </div>

  <div className="question">
    <p>Q10. What file specifies the default welcome page?</p>
    <p className="answer">Answer: Web.xml</p>
  </div>

  <div className="question">
    <p>Q11. Which method of HttpServletResponse is used to redirect an HTTP request to another URL?</p>
    <p className="answer">Answer: sendRedirect()</p>
  </div>

  <div className="question">
    <p>Q12. Which of the following code is used to get a HTTP Session object in servlets?</p>
    <p className="answer">Answer: request.getSession()</p>
  </div>

  <div className="question">
    <p>Q13. How do you switch between Java code and HTML code in a jsp file?</p>
    <p className="answer">Answer: Java code is the default; HTML code is kept inside {` <% %> `} brackets.</p>
  </div>

  <div className="question">
    <p>Q14. What is javax.servlet.http.HttpServlet?</p>
    <p className="answer">Answer: abstract class</p>
  </div>

  <div className="question">
    <p>Q15. JSP pages are processed on the server</p>
    <p className="answer">Answer: TRUE</p>
  </div>

  <div className="question">
    <p>Q16. What are the different techniques for managing a session?</p>
    <p className="answer">Answer: All of the above</p>
  </div>

  <div className="question">
    <p>Q17. What is the return type of getAttribute(String name) in ServletRequest?</p>
    <p className="answer">Answer: Object</p>
  </div>

  <div className="question">
    <p>Q18. Which of the below methods returns a string containing information about the servlet, such as its author, version, and copyright?</p>
    <p className="answer">Answer: getServletInfo()</p>
  </div>

  <div className="question">
    <p>Q19. Which of the following attribute is used to mark a page as error processing page?</p>
    <p className="answer">Answer: isErrorPage</p>
  </div>

  <div className="question">
    <p>Q20. Which of the following statement is not correct about HTTP method?</p>
    <p className="answer">Answer: A POST request appends data to the end of the URL</p>
  </div>

  <div className="question">
    <p>Q21. Session is an instance of which class?</p>
    <p className="answer">Answer: HttpSession</p>
  </div>

  <div className="question">
    <p>Q22. Choose the statement that best describes the relationship between JSP and servlets:</p>
    <p className="answer">Answer: Servlets are built on JSP semantics, and all servlets are compiled to JSP pages for runtime usage</p>
  </div>

  <div className="question">
    <p>Q23. Which tag in the JSP is used to define a page as an error page?</p>
    <p className="answer">Answer:{` <%@page isErrorPage="true" %> `}</p>
  </div>

  <div className="question">
    <p>Q24. Which of these classes define the getWriter() method that returns an object of type PrintWriter?</p>
    <p className="answer">Answer: HttpServletResponse</p>
  </div>

  <div className="question">
    <p>Q25. Consider the following JSP page with an error in the Java code. What will happen when we try to access this JSP file on the server?</p>
    <p className="answer">Answer: The page will load normally, and the Java errors which happen will be skipped.</p>
  </div>

  <div className="question">
    <p>Q26. Which of the following is not an implicit object?</p>
    <p className="answer">Answer: cookie</p>
  </div>

  <div className="question">
    <p>Q27. Get is faster than POST method</p>
    <p className="answer">Answer: TRUE</p>
  </div>

  <div className="question">
    <p>Q28. Which of the following is true about the Initialization phase in JSP life cycle?</p>
    <p className="answer">Answer: When a container loads a JSP, it invokes the jspInit() method before servicing any requests</p>
  </div>

  <div className="question">
    <p>Q29. The servlet-mapping element defines</p>
    <p className="answer">Answer: a mapping between a servlet and a URL pattern</p>
  </div>

  <div className="question">
    <p>Q30. If no method attribute is specified in a form tag, what function will be run?</p>
    <p className="answer">Answer: doGet</p>
  </div>
</div>

      </div>
    </>
  );
}

export default Java_MVC_Web;
