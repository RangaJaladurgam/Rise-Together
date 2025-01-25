import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../Util.css";

function Question5() {
  // Function to render the content for the right side
  const renderContent = () => {
    return (
      <div>
        <h3>Java Iterations - Hands on 2</h3>
        <h3>Factorials of Input Numbers</h3>
        <p>Write a program to read 5 numbers and print factorials of each.</p>
        <p>
          <strong>Note:</strong> Final answers should be non-decimal numbers.
        </p>

        <h3>Example</h3>
        <h3>Input:</h3>
        <pre>2 3 4 6 5</pre>

        <h3>Output:</h3>
        <pre>2 6 24 720 120</pre>
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
            int []num=new int[5];
            for(int i=0;i<5;i++){
                num[i]=scn.nextInt();
                String res=factorial(num[i]);
                System.out.println(res);
            }
        }
        public static String factorial(int n)
        {
        BigInteger fact=new BigInteger("1");
        for(int i=1;i<=n;i++){
        fact=fact.multiply(new BigInteger(i+""));
        }
        return fact.toString();
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

export default Question5;
