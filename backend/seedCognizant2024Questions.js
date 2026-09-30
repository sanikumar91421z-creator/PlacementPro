require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [

  // =========================================================
  // APTITUDE & REASONING Q840-Q849
  // =========================================================

  {
    questionId: 840,
    companyId: 5,
    year: 2024,
    category: "aptitude",
    question:
      "A salary is increased by 20% and then decreased by 10%. What is the net percentage change?",
    options: ["8% increase", "10% increase", "8% decrease", "No change"],
    answer: "8% increase",
    solution:
      "Assume the original salary is 100. After a 20% increase it becomes 120. A 10% decrease on 120 is 12, so the final salary is 108. Therefore the net change is an 8% increase.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 841,
    companyId: 5,
    year: 2024,
    category: "aptitude",
    question:
      "A can complete a task in 12 days and B in 18 days. How long will they take working together?",
    options: ["6 days", "7.2 days", "8 days", "9 days"],
    answer: "7.2 days",
    solution:
      "A's one-day work = 1/12 and B's = 1/18. Combined work = 1/12 + 1/18 = 5/36. Required time = 36/5 = 7.2 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 842,
    companyId: 5,
    year: 2024,
    category: "aptitude",
    question:
      "The average of 6 numbers is 18. If one number is removed, the average of the remaining 5 numbers becomes 16. What number was removed?",
    options: ["24", "26", "28", "30"],
    answer: "28",
    solution:
      "Total of 6 numbers = 6 × 18 = 108. Total of remaining 5 = 5 × 16 = 80. Removed number = 108 - 80 = 28.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 843,
    companyId: 5,
    year: 2024,
    category: "aptitude",
    question:
      "A train travels 300 km in 5 hours. If its speed increases by 20%, how much time will it take to travel the same distance?",
    options: ["4 hours", "4 hours 10 minutes", "4 hours 30 minutes", "5 hours"],
    answer: "4 hours 10 minutes",
    solution:
      "Original speed = 300/5 = 60 km/h. New speed = 60 × 1.20 = 72 km/h. Time = 300/72 = 25/6 hours = 4 hours 10 minutes.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 844,
    companyId: 5,
    year: 2024,
    category: "aptitude",
    question:
      "The ratio of two numbers is 3:5 and their sum is 64. Find the larger number.",
    options: ["24", "32", "40", "48"],
    answer: "40",
    solution:
      "Total ratio parts = 3 + 5 = 8. One part = 64/8 = 8. Larger number = 5 × 8 = 40.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 845,
    companyId: 5,
    year: 2024,
    category: "reasoning",
    question: "Find the next number: 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "44"],
    answer: "42",
    solution:
      "The terms follow n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30. Therefore the next term is 6×7 = 42.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 846,
    companyId: 5,
    year: 2024,
    category: "reasoning",
    question:
      "If SOUTH is written as TPVUI by shifting every letter one position forward, how is NORTH written?",
    options: ["OPSUI", "OPSTI", "NPSUI", "OQSVI"],
    answer: "OPSUI",
    solution:
      "Shift each letter one position forward: N→O, O→P, R→S, T→U, H→I. Therefore NORTH becomes OPSUI.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 847,
    companyId: 5,
    year: 2024,
    category: "reasoning",
    question:
      "A is the father of B. C is the sister of B. D is the mother of A. How is D related to C?",
    options: ["Mother", "Grandmother", "Aunt", "Sister"],
    answer: "Grandmother",
    solution:
      "A is C's father because B and C are siblings. D is A's mother. Therefore D is C's grandmother.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 848,
    companyId: 5,
    year: 2024,
    category: "reasoning",
    question:
      "A person walks 5 km north, turns right and walks 4 km, then turns right and walks 5 km. Where is the person relative to the starting point?",
    options: ["4 km East", "4 km West", "5 km North", "5 km South"],
    answer: "4 km East",
    solution:
      "The first 5 km north and final 5 km south cancel each other. The person remains 4 km east of the starting point.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 849,
    companyId: 5,
    year: 2024,
    category: "reasoning",
    question:
      "Statements: All Java developers are programmers. Some programmers are testers. Which conclusion is definitely true?",
    options: [
      "All testers are Java developers",
      "Some Java developers are testers",
      "All Java developers are programmers",
      "No programmer is a tester"
    ],
    answer: "All Java developers are programmers",
    solution:
      "The first statement directly establishes that every Java developer is a programmer. The second statement does not establish a definite relationship between Java developers and testers.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 reasoning-pattern practice",
    sourceUrl: null,
  },

  // =========================================================
  // ENGLISH / COMMUNICATION Q850-Q854
  // =========================================================

  {
    questionId: 850,
    companyId: 5,
    year: 2024,
    category: "grammar",
    question: "Choose the grammatically correct sentence.",
    options: [
      "He don't understand Java.",
      "He doesn't understands Java.",
      "He doesn't understand Java.",
      "He not understand Java."
    ],
    answer: "He doesn't understand Java.",
    solution:
      "With third-person singular 'he', use 'does not/doesn't'. After 'doesn't', the main verb remains in its base form: understand.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2024 communication-assessment practice",
    sourceUrl: null,
  },

  {
    questionId: 851,
    companyId: 5,
    year: 2024,
    category: "grammar",
    question: "Choose the antonym of 'scarce'.",
    options: ["Rare", "Limited", "Abundant", "Insufficient"],
    answer: "Abundant",
    solution:
      "Scarce means insufficient or available only in small quantities. Abundant means plentiful, making it the opposite.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2024 communication-assessment practice",
    sourceUrl: null,
  },

  {
    questionId: 852,
    companyId: 5,
    year: 2024,
    category: "grammar",
    question:
      "Fill in the blank: She has been working at the company ___ 2021.",
    options: ["for", "since", "from", "by"],
    answer: "since",
    solution:
      "'Since' is used with a specific starting point in time. 2021 is a starting point, so 'since 2021' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2024 communication-assessment practice",
    sourceUrl: null,
  },

  {
    questionId: 853,
    companyId: 5,
    year: 2024,
    category: "grammar",
    question:
      "Choose the correct passive voice: 'The developer fixed the bug.'",
    options: [
      "The bug fixed the developer.",
      "The bug was fixed by the developer.",
      "The bug is fixed by the developer.",
      "The developer was fixed by the bug."
    ],
    answer: "The bug was fixed by the developer.",
    solution:
      "The original sentence is in simple past. Passive simple past uses was/were + past participle, giving 'The bug was fixed by the developer.'",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2024 communication-assessment practice",
    sourceUrl: null,
  },

  {
    questionId: 854,
    companyId: 5,
    year: 2024,
    category: "grammar",
    question:
      "Identify the incorrect word: 'Neither of the two solutions are correct.'",
    options: ["Neither", "two", "solutions", "are"],
    answer: "are",
    solution:
      "'Neither' is singular in this construction. Therefore the verb should be 'is': Neither of the two solutions is correct.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2024 communication-assessment practice",
    sourceUrl: null,
  },

  // =========================================================
  // JAVA / OOP Q855-Q864
  // =========================================================

  {
    questionId: 855,
    companyId: 5,
    year: 2024,
    category: "java",
    question:
      "Which OOP concept hides an object's internal data and controls access through methods?",
    options: ["Inheritance", "Encapsulation", "Polymorphism", "Overloading"],
    answer: "Encapsulation",
    solution:
      "Encapsulation combines data and related behavior inside a class and restricts direct access to internal state, commonly using private fields with controlled methods.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 OOP interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 856,
    companyId: 5,
    year: 2024,
    category: "java",
    question:
      "What is the main difference between method overloading and method overriding?",
    options: [
      "Overloading requires inheritance but overriding does not",
      "Overloading uses the same method name with different parameter lists; overriding redefines an inherited method",
      "They are exactly the same",
      "Overriding happens only with static methods"
    ],
    answer:
      "Overloading uses the same method name with different parameter lists; overriding redefines an inherited method",
    solution:
      "Overloading is resolved using method signatures, usually at compile time. Overriding occurs when a subclass provides its own implementation of an inherited instance method and supports runtime polymorphism.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 OOP interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 857,
    companyId: 5,
    year: 2024,
    category: "java",
    question:
      "Why is Java commonly described as platform independent?",
    options: [
      "Java programs contain no machine instructions",
      "Java source code runs directly on every CPU",
      "Java compiles to bytecode that can run on compatible JVM implementations",
      "Java does not require an operating system"
    ],
    answer:
      "Java compiles to bytecode that can run on compatible JVM implementations",
    solution:
      "The Java compiler produces platform-neutral bytecode. A JVM implemented for the target operating system and architecture executes that bytecode, enabling the same compiled Java program to run across platforms.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 core-Java interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 858,
    companyId: 5,
    year: 2024,
    category: "java",
    question:
      "Which Java keyword is used when one class inherits from another class?",
    options: ["implements", "inherits", "extends", "super"],
    answer: "extends",
    solution:
      "A class uses the extends keyword to inherit from another class. 'implements' is used when a class implements an interface.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 Java interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 859,
    companyId: 5,
    year: 2024,
    category: "java",
    question:
      "Which statement about Java constructors is correct?",
    options: [
      "A constructor must have a return type",
      "A constructor has the same name as its class and has no return type",
      "Constructors cannot be overloaded",
      "Constructors are inherited like normal methods"
    ],
    answer:
      "A constructor has the same name as its class and has no return type",
    solution:
      "A constructor initializes newly created objects. Its name matches the class name and it declares no return type, not even void. Constructors can also be overloaded.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 core-Java interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 860,
    companyId: 5,
    year: 2024,
    category: "java",
    question:
      "Which collection should be considered when unique elements are required and insertion order should be preserved?",
    options: ["HashSet", "LinkedHashSet", "ArrayList", "PriorityQueue"],
    answer: "LinkedHashSet",
    solution:
      "LinkedHashSet maintains set semantics, so duplicate elements are rejected, while also maintaining insertion order through its linked structure.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 Java collections practice",
    sourceUrl: null,
  },

  {
    questionId: 861,
    companyId: 5,
    year: 2024,
    category: "java",
    question:
      "What is the purpose of the finally block in Java exception handling?",
    options: [
      "It executes only when no exception occurs",
      "It normally executes after try/catch whether an exception occurs or not",
      "It creates a new exception",
      "It prevents compilation errors"
    ],
    answer:
      "It normally executes after try/catch whether an exception occurs or not",
    solution:
      "The finally block is intended for cleanup logic that should normally run regardless of whether the try block completes normally or an exception is handled.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC Next 2024 exception-handling topic practice",
    sourceUrl: null,
  },

  {
    questionId: 862,
    companyId: 5,
    year: 2024,
    category: "java",
    question:
      "Which data structure follows the Last-In-First-Out principle?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    answer: "Stack",
    solution:
      "A stack follows LIFO: the most recently inserted element is the first one removed.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 CS-fundamentals practice",
    sourceUrl: null,
  },

  {
    questionId: 863,
    companyId: 5,
    year: 2024,
    category: "java",
    question:
      "Which access modifier restricts a Java member so that it is directly accessible only within the same class?",
    options: ["public", "protected", "private", "default"],
    answer: "private",
    solution:
      "A private member is directly accessible only inside its declaring class. It is commonly used to support encapsulation.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 core-Java practice",
    sourceUrl: null,
  },

  {
    questionId: 864,
    companyId: 5,
    year: 2024,
    category: "java",
    question:
      "A Parent reference points to a Child object and both classes override display(). Which display() executes?",
    options: [
      "Parent display()",
      "Child display()",
      "Both automatically",
      "Compilation error"
    ],
    answer: "Child display()",
    solution:
      "Java uses dynamic method dispatch for overridden instance methods. Because the runtime object is Child, Child.display() executes.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 polymorphism interview-topic practice",
    sourceUrl: null,
  },

  // =========================================================
  // DEBUGGING / PSEUDOCODE Q865-Q869
  // =========================================================

  {
    questionId: 865,
    companyId: 5,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

TRY
    PRINT "A"
    x = 10 / 0
    PRINT "B"
CATCH ArithmeticException
    PRINT "C"
FINALLY
    PRINT "D"

PRINT "E"`,

    options: ["A B D E", "A C D E", "A C E", "C D E"],
    answer: "A C D E",
    solution:
      "A is printed first. 10/0 throws ArithmeticException, so B is skipped. The matching catch prints C. The finally block prints D. Execution then continues after the exception structure and prints E. Final output: A C D E.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Cognizant GenC Next 2024 try-catch-finally reported-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 866,
    companyId: 5,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

TRY
    arr = [5, 10, 15]
    PRINT arr[1]
    PRINT arr[4]
CATCH ArrayIndexOutOfBoundsException
    PRINT "Error"
FINALLY
    PRINT "Done"`,

    options: ["10 Error Done", "5 Error Done", "Error Done", "10 15 Done"],
    answer: "10 Error Done",
    solution:
      "arr[1] is valid and prints 10. arr[4] is invalid because valid indices are 0, 1 and 2. The exception transfers control to the catch block, which prints Error. Finally then prints Done.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Cognizant GenC Next 2024 exception-handling reported-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 867,
    companyId: 5,
    year: 2024,
    category: "debugging",
    question: `What is printed?

count = 0

FOR i = 1 TO 5
    IF i == 3
        CONTINUE
    END IF

    count = count + i
END FOR

PRINT count`,

    options: ["9", "12", "15", "18"],
    answer: "12",
    solution:
      "The loop adds 1, 2, 4 and 5. When i=3, CONTINUE skips the addition. Therefore count = 1 + 2 + 4 + 5 = 12.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2024 code-tracing practice",
    sourceUrl: null,
  },

  {
    questionId: 868,
    companyId: 5,
    year: 2024,
    category: "debugging",
    question: `Predict the output:

FUNCTION fun(n)
    IF n == 0
        RETURN 1
    END IF

    RETURN n * fun(n - 1)
END FUNCTION

PRINT fun(4)`,

    options: ["4", "12", "24", "120"],
    answer: "24",
    solution:
      "fun(4) = 4×fun(3) = 4×3×fun(2) = 4×3×2×fun(1) = 4×3×2×1×fun(0). fun(0)=1, so the result is 24.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2024 recursion/code-tracing practice",
    sourceUrl: null,
  },

  {
    questionId: 869,
    companyId: 5,
    year: 2024,
    category: "debugging",
    question: `Predict the output:

map = empty HashMap
map["A"] = 10
map["B"] = 20
map["A"] = 30

PRINT map["A"]
PRINT map.size()`,

    options: ["10 3", "30 2", "30 3", "10 2"],
    answer: "30 2",
    solution:
      "A map keeps one value per key. Setting A to 30 replaces its previous value 10. The keys are still only A and B, so map['A']=30 and the size is 2.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2024 Java collections/code-tracing practice",
    sourceUrl: null,
  },

  // =========================================================
  // SQL / DBMS Q870-Q879
  // =========================================================

  {
    questionId: 870,
    companyId: 5,
    year: 2024,
    category: "sql",
    question:
      "Which SQL clause filters rows before grouping or aggregation?",
    options: ["HAVING", "WHERE", "ORDER BY", "GROUP BY"],
    answer: "WHERE",
    solution:
      "WHERE filters individual rows before grouping occurs. HAVING is primarily used to filter groups after GROUP BY and aggregate calculations.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 SQL WHERE-clause reported-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 871,
    companyId: 5,
    year: 2024,
    category: "sql",
    question:
      "Which query returns employee names together with their department names when Employee.dept_id references Department.dept_id?",
    options: [
      "SELECT e.name, d.dept_name FROM Employee e JOIN Department d ON e.dept_id = d.dept_id;",
      "SELECT name, dept_name FROM Employee;",
      "SELECT * FROM Employee, Department;",
      "SELECT dept_name FROM Department WHERE Employee = Department;"
    ],
    answer:
      "SELECT e.name, d.dept_name FROM Employee e JOIN Department d ON e.dept_id = d.dept_id;",
    solution:
      "The JOIN condition connects Employee and Department using their common dept_id. This produces matching employee and department information without an unintended Cartesian product.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 SQL JOIN reported-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 872,
    companyId: 5,
    year: 2024,
    category: "sql",
    question:
      "Which query finds employees whose salary is greater than the average employee salary?",
    options: [
      "SELECT * FROM Employee WHERE salary > AVG(salary);",
      "SELECT * FROM Employee WHERE salary > (SELECT AVG(salary) FROM Employee);",
      "SELECT AVG(salary) FROM Employee WHERE salary;",
      "SELECT * FROM Employee HAVING salary > AVG(salary);"
    ],
    answer:
      "SELECT * FROM Employee WHERE salary > (SELECT AVG(salary) FROM Employee);",
    solution:
      "The subquery calculates the average salary first. The outer query then compares each employee's salary against that single calculated value.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 SQL subquery reported-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 873,
    companyId: 5,
    year: 2024,
    category: "dbms",
    question:
      "Which of the following is a DDL command?",
    options: ["INSERT", "UPDATE", "CREATE", "SELECT"],
    answer: "CREATE",
    solution:
      "CREATE defines a database object such as a table and belongs to Data Definition Language. INSERT and UPDATE modify data rather than database structure.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 DDL/DML reported interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 874,
    companyId: 5,
    year: 2024,
    category: "dbms",
    question:
      "Which ACID property ensures that committed transaction changes survive a later system failure?",
    options: ["Atomicity", "Consistency", "Isolation", "Durability"],
    answer: "Durability",
    solution:
      "Durability guarantees that once a transaction is committed, its changes are permanently recorded and should survive subsequent failures.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 ACID-properties reported interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 875,
    companyId: 5,
    year: 2024,
    category: "sql",
    question:
      "What is the main purpose of COMMIT in a database transaction?",
    options: [
      "Delete the database",
      "Permanently save the current transaction's changes",
      "Undo all changes",
      "Create a table"
    ],
    answer: "Permanently save the current transaction's changes",
    solution:
      "COMMIT successfully completes the current transaction and makes its changes persistent. This was among the SQL concepts specifically reported in a Cognizant GenC 2024 interview.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 COMMIT reported interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 876,
    companyId: 5,
    year: 2024,
    category: "dbms",
    question:
      "Which key uniquely identifies each row in a relational table?",
    options: ["Foreign key", "Primary key", "Composite value", "Index only"],
    answer: "Primary key",
    solution:
      "A primary key uniquely identifies each table row and does not permit duplicate key values.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 DBMS fundamentals practice",
    sourceUrl: null,
  },

  {
    questionId: 877,
    companyId: 5,
    year: 2024,
    category: "sql",
    question:
      "Which SQL query returns the second-highest distinct salary?",
    options: [
      "SELECT MAX(salary) FROM Employee;",
      "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
      "SELECT MIN(salary) FROM Employee;",
      "SELECT salary FROM Employee WHERE salary = 2;"
    ],
    answer:
      "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
    solution:
      "The inner query obtains the maximum salary. The outer query excludes that value and obtains the maximum of the remaining salaries, producing the second-highest distinct salary.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 SQL subquery practice",
    sourceUrl: null,
  },

  {
    questionId: 878,
    companyId: 5,
    year: 2024,
    category: "sql",
    question:
      "Which clause is used to filter grouped results based on COUNT(), SUM(), AVG() or another aggregate?",
    options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],
    answer: "HAVING",
    solution:
      "HAVING applies conditions to groups after grouping and aggregation. For example: GROUP BY dept_id HAVING COUNT(*) > 5.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 SQL practice",
    sourceUrl: null,
  },

  {
    questionId: 879,
    companyId: 5,
    year: 2024,
    category: "dbms",
    question:
      "Which normal form removes partial dependency of a non-key attribute on part of a composite candidate key?",
    options: ["1NF", "2NF", "3NF", "4NF"],
    answer: "2NF",
    solution:
      "A relation in 2NF must already satisfy 1NF and must not contain partial dependencies of non-prime attributes on only part of a candidate key.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 DBMS practice",
    sourceUrl: null,
  },

  // =========================================================
  // PROGRAMMING Q880-Q887
  // =========================================================

  {
    questionId: 880,
    companyId: 5,
    year: 2024,
    category: "programming",
    question:
      "Given an integer array, remove duplicate values while preserving the first occurrence of each value.",
    options: [],
    answer:
      "Use a LinkedHashSet or a HashSet combined with ordered traversal to retain each value only once.",
    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        int[] arr = {4, 2, 4, 1, 2, 5};

        Set<Integer> unique = new LinkedHashSet<>();

        for (int value : arr) {
            unique.add(value);
        }

        for (int value : unique) {
            System.out.print(value + " ");
        }
    }
}

Output:
4 2 1 5

LinkedHashSet rejects duplicates while preserving insertion order.

Time complexity: O(n) expected.
Space complexity: O(n).`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Cognizant GenC 2024 remove-duplicates reported interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 881,
    companyId: 5,
    year: 2024,
    category: "programming",
    question:
      "Given a string, reverse it without using a built-in reverse() method.",
    options: [],
    answer:
      "Traverse the string from the last character to the first and append each character to the result.",
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "Cognizant";

        StringBuilder result = new StringBuilder();

        for (int i = str.length() - 1; i >= 0; i--) {
            result.append(str.charAt(i));
        }

        System.out.println(result);
    }
}

Output:
tnazing oC without the space would be incorrect.

Correct output:
tnazing oC is NOT correct.

For "Cognizant", characters are:
C o g n i z a n t

Reversed:
t n a z i n g o C

Therefore:
tnazingoC

Time complexity: O(n).
Space complexity: O(n).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Cognizant GenC 2024 reverse-string reported interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 882,
    companyId: 5,
    year: 2024,
    category: "programming",
    question:
      "Generate the first N terms of the Fibonacci sequence.",
    options: [],
    answer:
      "Start with 0 and 1; every subsequent term is the sum of the previous two.",
    solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        long a = 0;
        long b = 1;

        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");

            long next = a + b;
            a = b;
            b = next;
        }

        sc.close();
    }
}

For N = 7:
0 1 1 2 3 5 8

Time complexity: O(n).
Space complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Cognizant GenC Next 2024 Fibonacci reported interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 883,
    companyId: 5,
    year: 2024,
    category: "programming",
    question:
      "Given a password string, consider it valid when it has at least 8 characters and contains at least one uppercase letter, one lowercase letter, one digit and one special character. Determine whether the password is valid.",
    options: [],
    answer:
      "Scan the string and track whether uppercase, lowercase, digit and special-character requirements have all been satisfied.",
    solution: `public class Main {

    static boolean isValid(String password) {
        if (password == null || password.length() < 8) {
            return false;
        }

        boolean upper = false;
        boolean lower = false;
        boolean digit = false;
        boolean special = false;

        for (char ch : password.toCharArray()) {
            if (Character.isUpperCase(ch)) {
                upper = true;
            } else if (Character.isLowerCase(ch)) {
                lower = true;
            } else if (Character.isDigit(ch)) {
                digit = true;
            } else {
                special = true;
            }
        }

        return upper && lower && digit && special;
    }

    public static void main(String[] args) {
        String password = "Cognizant@24";

        System.out.println(
            isValid(password) ? "Valid" : "Invalid"
        );
    }
}

Each character is inspected once.

Time complexity: O(n).
Space complexity: O(1).`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Cognizant GenC 2024 Valid Password reported coding-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 884,
    companyId: 5,
    year: 2024,
    category: "programming",
    question:
      "Given an array of daily Arctic temperatures, find the minimum temperature, maximum temperature and average temperature.",
    options: [],
    answer:
      "Traverse the temperatures once while maintaining minimum, maximum and total sum.",
    solution: `public class Main {
    public static void main(String[] args) {
        int[] temperatures = {-12, -8, -15, -5, -10};

        int min = temperatures[0];
        int max = temperatures[0];
        int sum = 0;

        for (int temp : temperatures) {
            min = Math.min(min, temp);
            max = Math.max(max, temp);
            sum += temp;
        }

        double average =
            (double) sum / temperatures.length;

        System.out.println("Minimum: " + min);
        System.out.println("Maximum: " + max);
        System.out.println("Average: " + average);
    }
}

For the example:
Minimum = -15
Maximum = -5
Average = -10.0

Time complexity: O(n).
Space complexity: O(1).`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Cognizant GenC 2024 Arctic Temperature Tracker reported coding-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 885,
    companyId: 5,
    year: 2024,
    category: "programming",
    question:
      "Given an integer array, find the second-largest distinct element.",
    options: [],
    answer:
      "Maintain the largest and second-largest distinct values while traversing the array once.",
    solution: `public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 40, 20, 40, 30};

        Integer largest = null;
        Integer second = null;

        for (int value : arr) {
            if (largest == null || value > largest) {
                if (largest == null || value != largest) {
                    second = largest;
                    largest = value;
                }
            } else if (
                value != largest &&
                (second == null || value > second)
            ) {
                second = value;
            }
        }

        if (second == null) {
            System.out.println("No second largest");
        } else {
            System.out.println(second);
        }
    }
}

For the example, the distinct values are 10, 20, 30 and 40.
Largest = 40.
Second largest = 30.

Time complexity: O(n).
Space complexity: O(1).`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 array/coding practice",
    sourceUrl: null,
  },

  {
    questionId: 886,
    companyId: 5,
    year: 2024,
    category: "programming",
    question:
      "Given a string, find the first character that appears more than once when scanning from left to right.",
    options: [],
    answer:
      "Maintain a HashSet of previously seen characters and return the first character already present in the set.",
    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        String str = "abcaed";

        Set<Character> seen = new HashSet<>();

        Character answer = null;

        for (char ch : str.toCharArray()) {
            if (!seen.add(ch)) {
                answer = ch;
                break;
            }
        }

        if (answer == null) {
            System.out.println("No repeating character");
        } else {
            System.out.println(answer);
        }
    }
}

For "abcaed":
a, b and c are first occurrences.
The next a has already been seen.

Therefore the first repeating character is:
a

Time complexity: O(n) expected.
Space complexity: O(n).`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 string/coding practice",
    sourceUrl: null,
  },

  {
    questionId: 887,
    companyId: 5,
    year: 2024,
    category: "programming",
    question:
      "Given an integer array, sort it in ascending order using Bubble Sort.",
    options: [],
    answer:
      "Repeatedly compare adjacent elements and swap them whenever the left element is greater than the right element.",
    solution: `public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8};

        for (int i = 0; i < arr.length - 1; i++) {
            boolean swapped = false;

            for (int j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }

            if (!swapped) {
                break;
            }
        }

        for (int value : arr) {
            System.out.print(value + " ");
        }
    }
}

Output:
1 2 4 5 8

Worst-case time complexity: O(n²).
Best case with the swapped optimization: O(n).`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 sorting interview-pattern practice",
    sourceUrl: null,
  },

  // =========================================================
  // WEB / TECHNICAL FUNDAMENTALS Q888-Q889
  // =========================================================

  {
    questionId: 888,
    companyId: 5,
    year: 2024,
    category: "web",
    question:
      "Which HTTP method is normally used to retrieve a resource without requesting a state-changing operation?",
    options: ["GET", "POST", "DELETE", "PATCH"],
    answer: "GET",
    solution:
      "GET is the standard HTTP method for retrieving a representation of a resource. It is defined as a safe method, meaning its intended semantics are read-only.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2024 HTTP reported interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 889,
    companyId: 5,
    year: 2024,
    category: "web",
    question:
      "Which JavaScript DOM method selects an HTML element using its unique id?",
    options: [
      "document.getElementById()",
      "document.getElementsByClassName()",
      "document.createElement()",
      "document.writeElement()"
    ],
    answer: "document.getElementById()",
    solution:
      "document.getElementById(id) returns the element whose id matches the supplied value. Since HTML ids should be unique, it is appropriate for selecting a specific element.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName:
      "Cognizant GenC 2024 web-development skill-cluster practice",
    sourceUrl: null,
  },
];

async function seedCognizant2024Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 5,
      year: 2024,
    });

    console.log("Old Cognizant 2024 questions deleted");

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Cognizant 2024 questions seeded successfully`,
    );

    process.exit(0);
  } catch (error) {
    console.error(
      "Error seeding Cognizant 2024 questions:",
      error
    );

    process.exit(1);
  }
}

seedCognizant2024Questions();