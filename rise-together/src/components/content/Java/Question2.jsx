import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../Util.css";

function Question2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Function to render the content for the right side
  const codeString = 
  `import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
public class Solution {
    public static void main(String args[] ) throws Exception {
            int x1,y1,x2,y2;
            Scanner scn=new Scanner(System.in);
            x1=scn.nextInt();
            y1=scn.nextInt();
            x2=scn.nextInt();
            y2=scn.nextInt();
            Point p1=new Point(x1, y1);
            Point p2=new Point(x2, y2);
            double distance=findDistance(p1, p2);
            System.out.format("%.3f",distance);
    }
    public static double findDistance(Point p1, Point p2){
            double distance=Math.sqrt((p2.x-p1.x)*(p2.x-p1.x)+(p2.y-p1.y)*(p2.y-p1.y));
            return distance;
    }
}
class Point{
    int x,y;
    Point(int x,int y){
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
      <h2>Xplore HandsOn (Java) - Handson 1</h2>
      <div className="content-container">
        {/* Left Half */}
        <div className="card-container content-half half1 handson-question">
            <h3>Classes and Objects - Hands on 1</h3>
            <p>(question not available)</p>
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

export default Question2;
