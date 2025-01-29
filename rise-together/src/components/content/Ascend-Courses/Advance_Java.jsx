import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import "../Util.css";
function Advance_Java() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <div className="content">
        <Link to="/" className="">
          {" "}
          <span>
            <i class="fa-solid fa-arrow-left"></i>
          </span>
        </Link>
        <h2>AsCEnD Advanced Java Programming</h2>
        <h3>Java Advanced & Java Part 1 Advanced Assessment</h3>
        <div className=" kyt-questions">
          <div className="question">
            <p>Q1. Which of the following statements are correct?</p>
            <ul>
              <li>Strings in Java are immutable.</li>
              <li>Every string is an object of class String.</li>
              <li>
                StringBuffer class is used to store strings in a buffer for
                later use.
              </li>
              <li>
                Java defines a peer class of String, called StringBuffer, which
                allows strings to be altered.
              </li>
            </ul>
            <p className="answer">Answer: All of the above.</p>
          </div>

          <div className="question">
            <p>Q2. Which of the following is not a wrapper class in Java?</p>
            <p className="answer">Answer: Char</p>
          </div>

          <div className="question">
            <p>
              Q3. Which collection class allows you to grow or shrink its size
              and provides indexed access to its elements, but whose methods are
              not synchronized?
            </p>
            <p className="answer">Answer: java.util.ArrayList</p>
          </div>

          <div className="question">
            <p>Q4. Which of these are runtime exceptions in Java?</p>
            <ul>
              <li>NullPointerException</li>
              <li>ArrayIndexOutOfBoundsException</li>
            </ul>
            <p className="answer">Answer: Both of the above.</p>
          </div>

          <div className="question">
            <p>Q5. Why are generics used?</p>
            <p className="answer">
              Answer: Generics add stability to your code by making more of your
              bugs detectable at compile time.
            </p>
          </div>

          <div className="question">
            <p>
              Q6. To explicitly throw an exception, the keyword _______ is used.
            </p>
            <p className="answer">Answer: throw</p>
          </div>

          <div className="question">
            <p>Q7. ArrayList is synchronized.</p>
            <p className="answer">Answer: false</p>
          </div>

          <div className="question">
            <p>Q8. Which of the following statement is incorrect?</p>
            <p className="answer">
              Answer: FileNotFoundException is a runtime exception.
            </p>
          </div>

          <div className="question">
            <p>Q9. Is it possible to do both of the following?</p>
            <ul>
              <li>Override protected method to public</li>
              <li>Override protected method to private</li>
            </ul>
            <p className="answer">
              Answer: Only option 1 is possible. You can override protected to
              public, but not protected to private.
            </p>
          </div>

          <div className="question">
            <p>Q10. Which of these interfaces only store unique elements?</p>
            <p className="answer">Answer: Set</p>
          </div>

          <div className="question">
            <p>Q11. Select one or more true statements.</p>
            <ul>
              <li>
                List implementation dynamically grows in size, allows
                duplicates, and is implicitly not sorted.
              </li>
              <li>A set does not store duplicate values.</li>
              <li>
                HashMap and Hashtable both store key-value pairs, Hashtable we
                would use in case of synchronization requirements.
              </li>
              <li>All Set implementations are sorted.</li>
            </ul>
            <p className="answer">
              Answer: All are correct except the last one.
            </p>
          </div>

          <div className="question">
            <p>Q12. Which of these is a correct statement?</p>
            <ul>
              <li>Abstract class can be inherited.</li>
              <li>
                Abstract class defines only the structure of the class, not its
                implementation.
              </li>
              <li>
                Every class containing an abstract method must be declared
                abstract.
              </li>
            </ul>
            <p className="answer">Answer: All are correct.</p>
          </div>

          <div className="question">
            <p>
              Q13. A method can specify its ability to throw an exception by
              using the ______ keyword.
            </p>
            <p cclassNamelass="answer">Answer: Throws</p>
          </div>

          <div className="question">
            <p>
              Q14. Is it possible to define a class so that it cannot be
              subclassed?
            </p>
            <p className="answer">Answer: Yes, by making the class final</p>
          </div>

          <div className="question">
            <p>Q15. Which of the following statement is incorrect?</p>
            <p className="answer">Answer: Final methods can be overridden</p>
          </div>

          <div className="question">
            <p>Q16. What would be the output of the below program?</p>
            <pre>
              {`
            public class Test {
                public static void main(String args[]) {
                    int k = 0;
                    try {
                        int i = 5 / k;
                    } catch (ArithmeticException e) {
                        System.out.println("1");
                    } catch (RuntimeException e) {
                        System.out.println("2");
                        return;
                    } catch (Exception e) {
                        System.out.println("3");
                    } finally {
                        System.out.println("4");
                    }
                    System.out.println("5");
                }
            `}
            </pre>
            <p className="answer">Answer: 145</p>
          </div>

          <div className="question">
            <p>Q17. Which statements are valid to use in our main method?</p>
            <pre>
              {`
            class ParentClass {
                int id;
            }

            class ChildClass extends ParentClass {
                String name;
            }

            public class MainClass {
                // Valid statements go here
            }
            `}
            </pre>
            <p className="answer">
              Answer: ChildClass x = new ChildClass(); ParentClass x = new
              ParentClass(); ParentClass x = new ChildClass();
            </p>
          </div>

          <div className="question">
            <p>Q18. Would this program compile?</p>
            <pre>
              {`
            interface A {
                public void method1();
            }
            interface B {
                public void method1();
            }
            public class Test implements A, B {
                public void method1() {
                }
            };
            `}
            </pre>
            <p className="answer">Answer: Yes, it will compile successfully.</p>
          </div>
          <div className="question">
            <p>Q19. What will be the output?</p>
            <pre>
              {`
            try {
                int x = 0;
                int y = 5 / x;
            } catch (Exception e) {
                System.out.println("Exception");
            } catch (ArithmeticException ae) {
                System.out.println("Arithmetic Exception");
            }
            System.out.println("Finished");
            `}
            </pre>
            <p className="answer">Answer: Compilation fails</p>
          </div>

          <div className="question">
            <p>Q20. What will be the output?</p>
            <pre>
              {`
            import java.util.*;
            class Output {
                public static void main(String args[]) {
                    ArrayList obj = new ArrayList();
                    obj.add("A");
                    obj.add("A");
                    System.out.println(obj.size());
                }
            }
            `}
            </pre>
            <p className="answer">Answer: 2</p>
          </div>

          <div className="question">
            <p>Q21. Select one or more true statements for the given code:</p>
            <pre>
              {`
            Map<String, String> obj = new HashMap<String, String>();
            obj.put("City", "Goa");
            obj.put("City", "Shimla");
            obj.put("City", "Pune");
            obj.put("CityName", "Shimla");
            `}
            </pre>
            <p className="answer">
              Answer: - Values in a Map can be duplicated. - Following values
              will be stored in HashMap:{` {CityName=Shimla, City=Pune} `}
            </p>
          </div>

          <div className="question">
            <p>Q22. What will be the output?</p>
            <pre>
              {`
            import java.util.HashMap;
            import java.util.Map;
            public class MapTest {
                public static void main(String args[]) {
                    Map m = new HashMap();
                    m.put(null, "Test");
                    m.put(null, "Fest");
                    System.out.println(m);
                }
            }
            `}
            </pre>
            <p className="answer">
              Answer: <pre>{`{null=Fest}`}</pre>
            </p>
          </div>

          <div className="question">
            <p>Q23. What is the output of the following code?</p>
            <pre>
              {`
            public static void main(String args[]) {
                ArrayList<String> myList = new ArrayList<String>();
                myList.add("item I");
                myList.add("Another Item");
                myList.add("Last Item");
                for (String s : myList) {
                    System.out.print(s.charAt(0));
                }
            }
            `}
            </pre>
            <p className="answer">Answer: IAL</p>
          </div>

          <div className="question">
            <p>Q24. What will be the output?</p>
            <pre>
              {`
            import java.util.*;
            class Output {
                public static void main(String args[]) {
                    ArrayList obj = new ArrayList();
                    obj.add("A");
                    obj.remove("A");
                    System.out.println(obj.size());
                }
            }
            `}
            </pre>
            <p className="answer">Answer: 0</p>
          </div>

          <div className="question">
            <p>Q25. What is the output of the following code?</p>
            <pre>
              {`
            public static void main(String args[]) {
                ArrayList myList = new ArrayList();
                myList.add("item I");
                myList.add("Another Item");
                myList.add("Last Item");
                for (String s : myList) {
                    System.out.print(s.charAt(0));
                }
            }
            `}
            </pre>
            <p className="answer">Answer: IAL</p>
          </div>

          <div className="question">
            <p>Q26. Consider the following class:</p>
            <pre>
              {`
            class Test {
                int x;
                public static void main(String[] args) {
                    this.x = 5; // Currently shows an error
                }
            }
            `}
            </pre>
            <p className="answer">Answer: main cannot access this.x</p>
          </div>

          <div className="question">
            <p>Q27. What will be the output?</p>
            <pre>
              {`
            class exception_handling {
                public static void main(String args[]) {
                    try {
                        int a = args.length;
                        int b = 10 / a;
                        System.out.print(a);
                        try {
                            if (a == 1)
                                a = a / a - a;
                            if (a == 2) {
                                int c = {1};
                                c[8] = 9;
                            }
                        } catch (ArrayIndexOutOfBoundsException e) {
                            System.out.println("Type");
                        } catch (ArithmeticException e) {
                            System.out.println("TypeB");
                        }
                    }
                }
            }
            `}
            </pre>
            <p className="answer">Answer: Compilation error</p>
          </div>

          <div className="question">
            <p>Q28. What will be the output of the following code?</p>
            <pre>
              {`
            public class Test {
                public static void main(String args[]) {
                    try {
                        int answer = 20 / 0;
                    } catch (ArithmeticException e) {
                        // some code
                    } catch (Exception e) {
                        // some code
                    } catch (NullPointerException e) {
                        // some code
                    }
                }
            }
            `}
            </pre>
            <p className="answer">
              Answer: We will get a compilation error for an unreachable catch
              block because `NullPointerException` is already handled by the
              catch block for `Exception`. A Try block can have multiple catch
              blocks, but the most generalized catch block should be the last
              one.
            </p>
          </div>

          <div className="question">
            <p>Q29. What will be the output?</p>
            <pre>
              {`
            public class Test {
                enum eColors {
                    Black(5), BLUE(10), GREEN(15);
                    int colorCode = 0;
                    eColors(int colorCode) {
                        this.colorCode = colorCode;
                    }
                }
                public static void main(String args[]) {
                    System.out.println(eColors.values()[1].colorCode);
                }
            }`}
            </pre>
            <p className="answer">Answer: 10</p>
          </div>

          <div className="question">
            <p>Q30. What will be the output?</p>
            <pre>
              {`
                    public class RTExcept {
                        public static void throwit() {
                            System.out.print("throw it");
                            throw new RuntimeException();
                        }
                        public static void main(String args[]) {
                            try {
                                System.out.println("hello");
                            } catch (Exception re) {
                                System.out.println("caught");
                            } finally {
                                System.out.print("finally");
                            }
                            System.out.println("after");
                        }
                    }
            `}
            </pre>
            <p className="answer">Answer: hello throwit caught finally after</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advance_Java;
