import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../Util.css";

function Question3() {
  // Function to render the content for the right side
  const renderContent = () => {
    return (
      <div>
        <h3>Conditional Operands - Hands on 1</h3>
    <p>
      Compare 2D points for distance from origin. 
      Write a program to check 
      distance of 2D points from origin and print the point with highest distance.
    </p>
    <br />
    <p>
      Create class <code>Point</code> with attributes as below:
    </p>
    <ul>
      <li><code>double x</code></li>
      <li><code>double y</code></li>
    </ul>
    <p>
      In Solution class, define main method to read values for three point objects.
    </p>
    <p>
      Next, create below method in Solution class which will take three point 
      objects as input parameters and return the point with highest distance 
      from origin.
    </p>
public static Point 
pointWithHighestOriginDistance(Point p1, Point p2, Point p3)
    

    <h3>Sample Input</h3>
    <pre>2 2 3 3 -4 -4</pre>

    <h3>Output</h3>
    <pre>-4.0
-4.0</pre>
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
                double x1,y1,x2,y2,x3,y3;
                Scanner scn=new Scanner(System.in);
                x1=scn.nextDouble();
                y1=scn.nextDouble();
                x2=scn.nextDouble();
                y2=scn.nextDouble();
                x3=scn.nextDouble();
                y3=scn.nextDouble();
                Point p1=new Point(x1, y1);
                Point p2=new Point(x2, y2);
                Point p3=new Point(x3, y3);
                Point highest=pointWithHighestOriginDistance(p1, p2, p3);
                System.out.format("%.1f ",highest.x);
                System.out.format("%.1f",highest.y);
        }
        public static Point pointWithHighestOriginDistance(Point p1, Point p2, Point p3)
        {
                double d1=Math.sqrt(p1.x*p1.x+p1.y*p1.y);
                double d2=Math.sqrt(p2.x*p2.x+p2.y*p2.y);
                double d3=Math.sqrt(p3.x*p3.x+p3.y*p3.y);
                return d1>d2?(d1>d3?p1:p3):(d2>d3?p2:p3);
        }
}
class Point
{
    double x,y;

    Point(double x, double y)
    {
    this.x=x;
    this.y=y;
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

export default Question3;
