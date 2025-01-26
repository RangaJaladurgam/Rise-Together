import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../Util.css";

function Question6() {
  // Function to render the content for the right side
  const renderContent = () => {
    return (
      <div>
        <h3>Java Arrays - Hands on 1</h3>
    <h3>Problem 1: Find Docs with Odd Pages</h3>
    <p>Create class <code>Document</code> with the below attributes:</p>
    <ul>
      <li><code>id</code> - <code>int</code></li>
      <li><code>title</code> - <code>String</code></li>
      <li><code>folderName</code> - <code>String</code></li>
      <li><code>pages</code> - <code>int</code></li>
    </ul>
    <p>Write getters, setters, and a parameterized constructor as required.</p>
    <p>Create class <code>Solution</code> with the <code>main</code> method.</p>
    <p>
      Implement the static method <code>docsWithOddPages</code> in the 
      <code>Solution</code> class.
    </p>
    <p>
      This method will take an array of <code>Document</code> objects and return 
      another array with <code>Document</code> objects that have an odd number of pages.
    </p>
    <p>
      This method should be called from the <code>main</code> method and display 
      the values of the returned objects as shared in the sample 
      (in ascending order of the <code>id</code> attribute).
    </p>
    <p>
      Before calling this method, use the <code>Scanner</code> object to read values 
      for four <code>Document</code> objects referring to attributes in the above sequence.
    </p>
    <p>Next, call the method and display the result.</p>

    <h3>Sample Input and Output</h3>
    <h3>Input:</h3>
    <pre>1
resume <br />
personal<br />
50<br />
2<br />
question1<br />
exams<br />
55<br />
3<br />
question2<br />
exams<br />
45<br />
4<br />
India<br />
misc<br />
40</pre>

    <h3>Output:</h3>
    <pre>2 <br />question1 <br />exams <br />55<br />
3 <br />question2<br /> exams<br /> 45</pre>
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
      Document[] docsArray=new Document[4];
      Document[] res=new Document[4];
      for(int i=0;i<docsArray.length;i++){
        docsArray[i]=new Document();
        res[i]=new Document();
      }
      for(int i=0;i<docsArray.length;i++){
        docsArray[i].id=scn.nextInt();
        docsArray[i].title=scn.next();
        docsArray[i].folderName=scn.next();
        docsArray[i].pages=scn.nextInt();
      }
      res= docsWithOddPages(docsArray);
      for(int i=0;i<res.length;i++){
        if(res[i].getTitle()!=null)
        System.out.println(res[i].getId()+" "\n+res[i].getTitle()"+" "+res[i].getFolderName()+" "+res[i].getPages());
      }
    }
    public static Document[] docsWithOddPages(Document[]docsArray){
      Document[] oddDocs=new Document[4];
      for(int i=0;i<docsArray.length;i++){
        oddDocs[i]=new Document();
      }
      int k=0;
      for(int i=0;i<docsArray.length;i++){
        if(docsArray[i].pages%2!=0){
          oddDocs[k++]=docsArray[i];
        }
      }
      int p=oddDocs.length;
      for(int i=0;i<p-1;i++){
          for(int j=0;j<p-i-1;j++){
              if(oddDocs[j].id>oddDocs[j+1].id){
                  Document t=oddDocs[j];
                  oddDocs[j]=oddDocs[j+1];
                  oddDocs[j+1]=t;
              }
          }
      }
      return oddDocs;
    }
}
class Document{
    int id,pages;
    String title,folderName;
    public void setId(int id){
        this.id=id;
    }
    public void setTitle(String title){
        this.title=title;
    }
    public void setFolderName(String folderName){
        this.folderName=folderName;
    }
    public void setPages(int pages){
        this.pages=pages;
    }
    public int getId(){
        return this.id;
    }
    public String getTitle(){
        return this.title;
    }
    public String getFolderName(){
        return this.folderName;
    }
    public int getPages(){
        return this.pages;
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

export default Question6;
