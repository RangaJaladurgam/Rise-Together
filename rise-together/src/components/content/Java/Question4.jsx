import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../Util.css";

function Question4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Function to render the content for the right side
  const renderContent = () => {
    return (
      <div>
        <h3>Java Iterations - Hands on 1</h3>
    <p>Write the <code>main</code> method in the <code>Solution</code> class.</p>
    <p>
      The method will read a String value and print the minimum valued character 
      (as per alphabet and ASCII sequence).
    </p>

    <h3>Sample Input and Output</h3>
    <h3>Input:</h3>
    <pre>HellO</pre>

    <h3>Output:</h3>
    <pre>H</pre>
      </div>
    );
  };

  const codeString = `Important: Answer is not 'e' since 'H' has lower ASCII value then 'e'

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
public class Solution {
        public static void main(String args[] ) throws Exception {
                /* Enter your code here. Read input from STDIN. Print output to STDOUT */
                String str;
                Scanner scn=new Scanner(System.in);
                str=scn.next();
                int[] values=new int[str.length()];
                for(int i=0;i<str.length();i++){
                    values[i]=(int)(str.charAt(i));
                }
                int min=values[0];
                for(int i=0;i<values.length;i++){
                    if(values[i]<=min)
                        min=values[i];
                }
                char c=(char)min;
                System.out.print(c);
        }
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

export default Question4;
