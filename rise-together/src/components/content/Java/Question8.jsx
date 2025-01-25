import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../Util.css";

function Question8() {
  // Function to render the content for the right side
  const renderContent = () => {
    return (
      <div>
        <h3>Java Arrays - Hands on 2</h3>
    <h3>Problem 1: Shirt Discount, Price</h3>
    <p>
      Class <code>Solution</code> has a predefined <code>main</code> <br />method to 
      read values and display the results.
    </p>
    <p>
      The <code>main</code> method reads values for five objects of class <code>Shirt</code>.
      <br />It also calls the methods <code>getDiscountPrice</code> and  <br />
      <code>getShirtWithMoreThanSpecificPrice</code>,<br /> which are defined in the same 
      <code>Solution</code> class.
    </p>
    <p><strong>Note:</strong> Code inside the <code>main</code> method should<br /> not be altered. Any changes might result in a score of zero.</p>
    <p>
      You may copy the code from the <code>main</code><br /> method into Eclipse to verify 
      your implementation.
    </p>

    <h2>Guidelines to Implement the Code</h2>
    <p>Create class <code>Shirt</code> with the following attributes:</p>
    <ul>
      <li><code>int tag</code></li>
      <li><code>String brand</code></li>
      <li><code>double price</code></li>
      <li><code>char gender</code></li>
    </ul>
    <p>
      Create a constructor that takes parameters<br /> in the above sequence. 
      Create getters and setters<br /> for these attributes.
    </p>

    <h3>Define Two Static Methods in the Solution Class:</h3>
    <ul>
      <li>
        <code>public static double getDiscountPrice(Shirt s):</code>
        <p>
          This method will return the<br /> discounted price based on the gender <br />of the 
          <code>Shirt</code> object passed as an input parameter.
        </p>
        <ul>
          <li>If gender is <code>'m'</code>, the discount is 10%.</li>
          <li>If gender is <code>'f'</code>, the discount is 20%.</li>
          <li>If gender is <code>'u'</code>, the discount is 30%.</li>
        </ul>
      </li>
      <li>
        public static Shirt[] <br />
            getShirtWithMoreThanSpecificPrice(Shirt[] shirts, double price):
        <p>
          This method takes an array of <br /><code>Shirt</code> objects and a price value 
          as input. It returns an array <br />of <code>Shirt</code> objects with prices 
          greater than the specified value,<br /> sorted in ascending order of price.
        </p>
      </li>
    </ul>

    <p>The <code>main</code> method already has the Scanner<br /> code to read values, create objects, and test the above methods.</p>
    <p>
      The <code>main</code> method reads<br /> values for five <code>Shirt</code> objects, 
      followed by the price.<br /> The price will be input for <br />the 
      <code>getShirtWithMoreThanSpecificPrice</code> method.
    </p>

    <h3>Sample Input and Output</h3>
    <h3>Sample Input:</h3>
    <pre>1 <br />
arrow <br />
500 <br />
m <br />
2 <br />
bare <br />
600 <br />
f <br />
3 <br />
arrow <br />
400 <br />
m <br />
4 <br />
bare <br />
300 <br />
m <br />
5 <br />
arrow <br />
1000 <br />
u <br />
500</pre>

    <h3>Sample Output:</h3>
    <pre>450.0 <br />
480.0 <br />
360.0 <br />
270.0 <br />
700.0 <br />
2 <br /> 600.0 <br /> bare <br />
5 <br /> 1000.0 <br /> arrow</pre>
      </div>
    );
  };

  const codeString = `import java.util.Scanner;
public class Solution {
    public static void main(String args[] ) throws Exception {
        /* Do not alter code in main method */
       Shirt[] shirts = new Shirt[5];
        
        Scanner sc = new Scanner(System.in);
        
        for(int i = 0;i<5;i++)
        {
            int tag = sc.nextInt();sc.nextLine();
            String brand = sc.nextLine();
            double price = sc.nextDouble();sc.nextLine();
            char g = sc.nextLine().charAt(0);
            shirts[i] = new Shirt(tag,brand,price,g);
        }
        
        
       
        double price = sc.nextDouble();
        
        for(Shirt s: shirts)
        {
            System.out.println(getDiscountPrice(s));            
        }
        
        Shirt[] result = getShirtWithMoreThanSpecificPrice(shirts,price);
        
        for(Shirt s: result)
        {  if(s.tag!=0)
            System.out.println(s.tag+" "+s.price+ " " + s.brand);
        }
    }
    
    public static Double getDiscountPrice(Shirt s){
        char ge=s.g;
        int f=0;
        if(ge=='m')
           f=10;
        if(ge=='f')
           f=20;
        if(ge=='u')
           f=30;
        double p=s.price;
        return p-((p*f)/100);
    }
    public static Shirt[] getShirtWithMoreThanSpecificPrice(Shirt[] shirts,double price){
        Shirt[] r=new Shirt[5];
        for(int i=0;i<r.length;i++){
            r[i]=new Shirt(0,"",0.0,'f');
        }
        int k=0;
        for(int i=0;i<r.length;i++){
            if(shirts[i].price>price)
                r[k++]=shirts[i];
        }
        int n=r.length;
        for(int i=0;i<n-1;i++){
            for(int j=0;j<n-i-1;j++){
                if(r[j].price>r[j+1].price){
                    Shirt t=r[j];
                    r[j]=r[j+1];
                    r[j+1]=t;
                }
            }
        }
        return r;
    }
}
class Shirt
{    int tag;
     String brand;
     double price;
     char g;
     Shirt(int tag,String brand,double price, char g){
         this.tag=tag;
         this.brand=brand;
         this.price=price;
         this.g=g;
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

export default Question8;
