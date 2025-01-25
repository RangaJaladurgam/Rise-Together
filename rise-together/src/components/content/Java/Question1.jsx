import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../Util.css";

function Question1() {
  // Function to render the content for the right side
  const renderContent = () => {
    return (
      <div>
        <h3>Problem Statement:</h3>
        <p>Find the interest value for the given account details.</p>
        <h4>Requirements:</h4>
        <ol>
          <li>
            <strong>
              Create a class <code>Account</code>
            </strong>{" "}
            with the following attributes:
            <ul>
              <li>
                <code>int id</code> - Account ID
              </li>
              <li>
                <code>double balance</code> - Account balance
              </li>
              <li>
                <code>double interestRate</code> - Interest rate for the account
              </li>
            </ul>
            The class should have getters, setters, and a constructor with
            parameters in the above sequence of attributes.
          </li>
          <li>
            <strong>
              Create a class <code>Solution</code>
            </strong>{" "}
            with the <code>main</code> method to:
            <ul>
              <li>
                Read an integer and two double values using the{" "}
                <code>Scanner</code> object and create an <code>Account</code>{" "}
                object.
              </li>
              <li>
                Map these values to <code>id</code>, <code>balance</code>, and{" "}
                <code>interestRate</code> attributes of the <code>Account</code>{" "}
                object.
              </li>
              <li>
                Read one more integer value and store it in{" "}
                <code>noOfYears</code>.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Write a method <code>calculateInterest</code>
            </strong>{" "}
            to:
            <ul>
              <li>
                Takes the <code>Account</code> object and <code>noOfYears</code>{" "}
                as input parameters.
              </li>
              <li>Return the interest amount.</li>
            </ul>
            <h5>Interest Calculation Logic:</h5>
            <ul>
              <li>
                Find the percentage value based on the specified{" "}
                <code>interestRate</code> for the given <code>noOfYears</code>.
              </li>
              <li>
                Example: If <code>noOfYears</code> is 5 and{" "}
                <code>interestRate</code> is 10%, then 10% of 5 is 0.5, making
                the final interest rate 10.5%.
              </li>
            </ul>
            <h5>Output:</h5>
            <p>
              The interest amount should be displayed rounded to three decimal
              places, even if there are no decimals (e.g., 105.000).
            </p>
          </li>
        </ol>

        <h4>Sample Input:</h4>
        <pre>1\n1000\n10\n5</pre>

        <h4>Sample Output:</h4>
        <pre>105.000</pre>

        <h5>Explanation:</h5>
        <p>The final interest is calculated as follows:</p>
        <ul>
          <li>Interest rate = 10% and years = 5</li>
          <li>Final interest rate = 10 + (10% of 5) = 10 + 0.5 = 10.5%</li>
          <li>
            Interest amount = <code>1000 * 10.5 / 100 = 105.000</code>
          </li>
        </ul>
      </div>
    );
  };

  const codeString = 
  `  import java.io.*;
  import java.util.*;
  import java.text.*;
  import java.math.*;
  import java.util.regex.*;
  
  public class Solution {
        public static void main(String args[]) throws Exception {
            int a;
            double b, c;
            Scanner sc = new Scanner(System.in);
            b = sc.nextDouble();
            a = sc.nextInt();
            c = sc.nextDouble();
            Account account = new Account(a, b, c);
            int noOfYear;
            noOfYear = sc.nextInt();
            double answer = calculateInterest(account, noOfYear);
            System.out.format("%.3f", answer);
        }
  
        public static double calculateInterest(Account account, int noOfYear) {
            double temp = noOfYear * account.getInterestRate() / 100;
            return (account.getBalance() * (account.getInterestRate() + temp) / 100);
        }
  }
  
  class Account {
    private int id;
    private double balance;
    private double interestRate;
  
    Account(int id, double balance, double interestRate) {
      this.id = id;
      this.balance = balance;
      this.interestRate = interestRate;
    }
  
    public int getId() {
      return this.id;
    }
  
    public void setId(int id) {
      this.id = id;
    }
  
    public double getBalance() {
      return this.balance;
    }
  
    public void setBalance(double balance) {
      this.balance = balance;
    }
  
    public double getInterestRate() {
      return this.interestRate;
    }
  
    public void setInterestRate(double interestRate) {
      this.interestRate = interestRate;
    }
  }`;

  return (
    <div className="content">
      <Link to="/java/java-handson" className="">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </Link>
      <h2>Xplore HandsOn (Java) - Handson 1 - Question 1</h2>
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

export default Question1;
