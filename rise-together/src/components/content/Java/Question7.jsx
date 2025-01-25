import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../Util.css";

function Question7() {
  // Function to render the content for the right side
  const renderContent = () => {
    return (
      <div>
        <h3>Java Arrays - Hands on 1</h3>
    <h3>Problem 2: Sort Books by Price</h3>
    <p>Create a class <code>Book</code> with the below attributes:</p>
    <ul>
      <li><code>id</code> - <code>int</code></li>
      <li><code>title</code> - <code>String</code></li>
      <li><code>author</code> - <code>String</code></li>
      <li><code>price</code> - <code>double</code></li>
    </ul>
    <p>Write getters, setters, and a parameterized constructor.</p>
    <p>Create a class <code>Solution</code> with the <code>main</code> method.</p>
    <p>
      Implement the static method <code>sortBooksByPrice</code> in the 
      <code>Solution</code> class. This method will take an array of 
      <code>Book</code> objects as a parameter and return an array of books 
      sorted in ascending order of book price.
    </p>
    <p><strong>Note:</strong> Assume that no two books will have the same price.</p>
    <p>
      This method should be called from the <code>main</code> method, and the 
      values of the returned objects should be displayed as shown in the sample.
    </p>
    <p>
      Before calling this method, use the <code>Scanner</code> object to read 
      values for four <code>Book</code> objects, referring to attributes in 
      the above sequence.
    </p>
    <p>Next, call the method and display the result.</p>

    <h2>Sample Input and Output</h2>
    <h3>Input:</h3>
    <pre>1 <br />
hello<br />
writer1<br />
50<br />
2<br />
cup<br />
writer2<br />
55<br />
3<br />
Planet<br />
writer3<br />
45<br />
4<br />
India<br />
writer4<br />
40</pre>

    <h3>Output:</h3>
    <pre>4<br /> India<br /> writer4<br /> 40.0<br />
3<br /> Planet<br /> writer3<br /> 45.0<br />
1 <br />hello <br />writer1 <br />50.0<br />
2<br /> cup<br /> writer2 <br />55.0</pre>
      </div>
    );
  };

  const codeString = `import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
public class Solution {
        public static void main(String args[] ) throws Exception {
                /* Enter your code here. Read input from STDIN. Print output to STDOUT */
                Scanner scn=new Scanner(System.in);
                Book[] booksArray=new Book[4];
                Book[] sorted=new Book[4];
                for(int i=0;i<booksArray.length;i++){
                    booksArray[i]=new Book();
                    sorted[i]=new Book();
                }
                for(int i=0;i<booksArray.length;i++){
                    booksArray[i].id=scn.nextInt();
                    booksArray[i].title=scn.next();
                    booksArray[i].author=scn.next();
                    booksArray[i].price=scn.nextDouble();
                }
                sorted=sortBooksByPrice(booksArray);
                for(int i=0;i<sorted.length;i++){
                    System.out.println(sorted[i].id+" "+sorted[i].title+" "+sorted[i].author+"
                    "+sorted[i].price);
                }
        }
        public static Book[] sortBooksByPrice(Book[]booksArray){
                int n=booksArray.length;
                for(int i=0;i<n-1;i++){
                    for(int j=0;j<n-i-1;j++){
                        if(booksArray[j].price>booksArray[j+1].price){
                            Book temp=booksArray[j];
                            booksArray[j]=booksArray[j+1];
                            booksArray[j+1]=temp;
                        }
                    }
                }
                return booksArray;
        }
}
class Book{
        int id;
        String title,author;
        double price;
}`;

  return (
    <div className="content">
      <Link to="/java/java-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (Java)</h2>
      <div className="content-container">
        {/* Left Half */}
        <div className="card-container content-half half1 handson-question">
          {renderContent()}
        </div>

        {/* Right Half */}
        <div className="card-container content-half half2 handson-code">
          <div className="render-content">
            <div className="code-block">
              <SyntaxHighlighter language="java">
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question7;
