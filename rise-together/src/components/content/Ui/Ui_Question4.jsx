import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../Util.css";

function Ui_Question4() {
  // Function to render the content for the right side
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const codeString = `Solution :
    
<! DOCTYPE html>
<html>
    <head>
        <title>Question4</title>
        <style>
          #button{
          background-color:#2345E4;
          }
        </style>
    </head>
    <body>
        <!-- Design & Develop your code here -->
        <form id="registerCustomer">
            <h1>Customer Registration</h1>
            Customer Id
            <input type="text" name="customerId" maxlength="6" required><br>
            Customer Name
            <input type="text" name="customerName" required><br>
            City
            <select id="city" required>
                <option value="chennai">Chennai</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="trivandrum">Trivandrum</option>
            </select><br>
            <label>Gender</label>
            <input type="radio" name="gender" value="Male" required="required">Male
            <input type="radio" name="gender" value="Female"
            required="required">Female
            <br>
            <input id="button" type="submit" name="create" value="Create">
            <input id="button" type="reset" name="cancel" value="Cancel">
        </form>
    </body>
</html>`;

  return (
    <div className="content">
      <Link to="/java/ui-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (Ui) - Handson 4</h2>
      <div className="content-container">
        {/* Right Half */}
        <div className="card-container content-half half2 handson-code">
          <div className="render-content">
            <div className="code-block">
              <SyntaxHighlighter language="html">
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ui_Question4;
