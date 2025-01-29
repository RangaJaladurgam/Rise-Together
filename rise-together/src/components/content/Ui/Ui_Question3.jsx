import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../Util.css";

function Ui_Question3() {
  // Function to render the content for the right side
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const codeString = `Solution :
    
<! DOCTYPE html>
<html>
    <head>
        <title>Form For Adding Books</title>
        <style>
            button{
            background-color:#2345E4;
            }
        </style>
    </head>
    <body>
        <h2>Add Book</h2>
        <form name="addBook">
        Book Id
            <input name="bookId" type="text">
            Book Name
            <input name="bookName" type="text">
            Category
            <select id="category">
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Children">Childrens</option>
            </select>
            <input type="radio" name="availability" value="available">Available
            <input type="radio" name="availability" value="not available">Not Available
            <button type="reset" name="cancel">Cancel</button>
            <button type="submit" name="add">Add</button>
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
      <h2>Xplore HandsOn (Ui) - Handson 3</h2>
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

export default Ui_Question3;
