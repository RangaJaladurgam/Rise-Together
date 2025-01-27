import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../Util.css";

function Ui_Question6() {
  // Function to render the content for the right side

  const codeString = `Solution :
    
<!DOCTYPE html>
<html>
    <head>
        <title>Question6</title>
        <style>
            table{
            text-align: center;
            }
            th{
            background-color:#45E078;
            }
            button{
            background-color: #FF0000;
            }
        </style>
    </head>
    <body>
        <!-- Design & Develop your code here -->
        <h1 id="header">Uni Sales</h1>
        <div id="body">
            <h2>My Cart</h2>
            <input type="text" name="customerId" maxlength="6" required<br>
            Customer Name
            <input type="text" name="customerName" required><br>
            <input id="button" type="submit" name="create" value="Create">
            <input id="button" type="reset" name="cancel" value="Cancel">
            <table id="myCarts" width="80%">
                <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>Surf Excel</td>
                    <td>Washing Powder</td>
                    <td>85.00</td>
                    <td>1</td>
                    <td>85.00</td>
                </tr>
                <tr>
                    <td>Harpic</td>
                    <td>Toilet Cleaner</td>
                    <td>48.00</td>
                    <td>2</td>
                    <td>96.00</td>
                </tr>
            </table>
        </div>
        <button style="background-color:#FF0000" type="button"
        id="continue">Continue</button>
        <button style="background-color:#FF0000" type="submit"
        id="checkout">Checkout</button>
    </body>
</html>`;

  return (
    <div className="content">
      <Link to="/java/ui-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (Ui) - Handson 6</h2>
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

export default Ui_Question6;
