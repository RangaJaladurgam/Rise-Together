import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../Util.css";

function Question9() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Function to render the content for the right side
  const renderContent = () => {
    return (
      <div>
        <h3>Java Arrays - Hands on 2</h3>
    <h3>Problem 2: Search Books by Title</h3>
    <p>Create class <code>Book</code> with the following attributes:</p>
    <ul>
      <li><code>id</code> - <code>int</code></li>
      <li><code>title</code> - <code>String</code></li>
      <li><code>author</code> - <code>String</code></li>
      <li><code>price</code> - <code>double</code></li>
    </ul>
    <p>Write getters, setters, and a parameterized constructor as required.</p>
    <p>Create a class <code>Solution</code> with the <code>main</code> method.</p>
    <p>
      Implement the static method <code>searchTitle</code> in the 
      <code>Solution</code> class.
    </p>
    <p>
      This method will take a parameter of <code>String</code> value along with another 
      parameter as an array of <code>Book</code> objects. It will return an array 
      of books where the <code>String</code> value parameter appears in the 
      <code>title</code> attribute (with case-insensitive search).
    </p>
    <p>
      This method should be called from the <code>main</code> method and display the 
      <code>id</code> of returned objects in ascending order.
    </p>
    <p>
      Before calling this method, use the <code>Scanner</code> object to read values 
      for four <code>Book</code> objects, referring to attributes in the above sequence. 
      Next, read the value of the search parameter.
    </p>
    <p>Next, call the method and display the result.</p>

    <h3>Sample Input and Output</h3>
    <h3>Sample Input:</h3>
    <pre>1      <br />
hello world  <br />
aaa writer  <br />
50  <br />
2  <br />
World cup  <br />
bbb writer  <br />
55  <br />
3  <br />
Planet earth  <br />
ccc writer  <br />
45  <br />
4  <br />
India's history  <br />
ddd writer  <br />
40  <br />
WORLD</pre>

    <h3>Sample Output:</h3>
    <pre>1 <br />
2</pre>
      </div>
    );
  };

  const codeString = `import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
import java.util.*;
public class Solution {
    public static void main(String args[] ) throws Exception {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */
        Scanner scn=new Scanner(System.in);
        Book[] booksArray=new Book[4];
        Book[] res=new Book[4];
        for(int i=0;i<booksArray.length;i++){
          booksArray[i]=new Book();
          res[i]=new Book();
        }
        for(int i = 0;i<4;i++){
          booksArray[i].id = scn.nextInt();scn.nextLine();
          booksArray[i].title = scn.nextLine();
          booksArray[i].author = scn.nextLine();
          booksArray[i].price = scn.nextDouble();
        }
        String value=scn.next();
        res=searchTitle(value, booksArray);
        int [] matchedId=new int[4];
        int j=0;
        for(int i=0;i<res.length;i++){
          if(res[i].id!=0){
            matchedId[j++]=res[i].id;
          }
        }
        Arrays.sort(matchedId);
        for(int i=0;i<matchedId.length;i++){
          if(matchedId[i]!=0)
            System.out.println(matchedId[i]);
        }
    }
    public static Book[] searchTitle(String value, Book[] books){
        int k=0;
        Book[] matching=new Book[4];
        for(int i=0;i<matching.length;i++)
        matching[i]=new Book();
        for(int i=0;i<books.length;i++){
            String val=value.toLowerCase();
            String bookTitle=books[i].title.toLowerCase();
            if(bookTitle.contains(val)){
              matching[k++]=books[i];
            }
        }
        return matching;
    }
}
class Book{
    int id;
    String title;
    String author;
    double price;
    public int getId()
    {
      return this.id;
    }
    public void setId(int id)
    {
    this.id=id;
    }
    public String getTitle()
    {
    return this.title;
    }
    public void setTitle(String title)
    {
    this.title=title;
    }
    public String getAuthor()
    {
    return this.author;
    }
    public void setAuthor(String author)
    {
    this.author=author;
    }
    public double getPrice()
    {
    return this.price;
    }
    public void setPrice(double price)
    {
    this.price=price;
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

export default Question9;
