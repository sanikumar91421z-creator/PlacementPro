require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [

  // =========================================================
  // JAVA / OOP INTERVIEW Q1140-Q1149
  // =========================================================

  {
    questionId: 1140,
    companyId: 7,
    year: 2025,
    category: "java",
    question: "What are the four main pillars of Object-Oriented Programming?",
    options: [
      "Encapsulation, Inheritance, Polymorphism, Abstraction",
      "Compilation, Execution, Testing, Debugging",
      "Array, Stack, Queue, Tree",
      "Class, Loop, Function, Variable"
    ],
    answer: "Encapsulation, Inheritance, Polymorphism, Abstraction",
    solution:
      "The four major OOP principles are encapsulation, inheritance, polymorphism and abstraction. Encapsulation protects object state, inheritance supports reuse, polymorphism allows different implementations through a common interface, and abstraction hides unnecessary implementation details.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 GET candidate-reported OOP interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1141,
    companyId: 7,
    year: 2025,
    category: "java",
    question: "What is encapsulation in Java?",
    options: [
      "Bundling data and methods together and controlling access to internal state",
      "Creating many main methods",
      "Executing multiple SQL queries",
      "Converting source code into machine code"
    ],
    answer:
      "Bundling data and methods together and controlling access to internal state",
    solution:
      "Encapsulation places data and related methods inside a class while restricting direct access to internal data. A common Java approach uses private fields with public getters/setters or other controlled methods.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 OOP interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1142,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "What is the main difference between abstraction and encapsulation?",
    options: [
      "Abstraction hides implementation complexity, while encapsulation controls access to object state",
      "They are exactly the same",
      "Abstraction is only for databases",
      "Encapsulation is only used for inheritance"
    ],
    answer:
      "Abstraction hides implementation complexity, while encapsulation controls access to object state",
    solution:
      "Abstraction focuses on what an object exposes while hiding unnecessary implementation details. Encapsulation bundles state and behavior and restricts direct access to that state.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 OOP interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1143,
    companyId: 7,
    year: 2025,
    category: "java",
    question: "What is inheritance in Java?",
    options: [
      "A mechanism through which a class can acquire accessible behavior from another class",
      "A technique for deleting objects",
      "A database relationship only",
      "A sorting technique"
    ],
    answer:
      "A mechanism through which a class can acquire accessible behavior from another class",
    solution:
      "Inheritance allows a subclass to extend another class. For example, if Dog extends Animal, Dog can inherit accessible fields and methods from Animal and add or override behavior.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 Java/OOP interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1144,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "What is the difference between method overloading and method overriding?",
    options: [
      "Overloading uses the same method name with different parameter lists; overriding provides a subclass implementation of an inherited method",
      "They are identical",
      "Overloading happens only in SQL",
      "Overriding requires methods to have different names"
    ],
    answer:
      "Overloading uses the same method name with different parameter lists; overriding provides a subclass implementation of an inherited method",
    solution:
      "Method overloading is generally resolved at compile time and uses different parameter lists. Method overriding occurs when a subclass provides its own compatible implementation of an inherited instance method and supports runtime polymorphism.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "HCLTech 2025 method-overriding candidate-reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1145,
    companyId: 7,
    year: 2025,
    category: "java",
    question: `What is the output?

class Animal {
    void sound() {
        System.out.println("Animal");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
    }
}`,
    options: ["Animal", "Dog", "Compilation Error", "No output"],
    answer: "Dog",
    solution:
      "The reference type is Animal, but the actual runtime object is Dog. Because sound() is overridden, Java dynamically dispatches the call to Dog.sound(). This demonstrates runtime polymorphism.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "HCLTech 2025 polymorphism/overriding candidate-reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1146,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "Which statement about an abstract class in Java is correct?",
    options: [
      "It can contain both abstract and concrete methods",
      "It can never contain methods",
      "It must always be final",
      "Objects must always be created directly from it"
    ],
    answer: "It can contain both abstract and concrete methods",
    solution:
      "An abstract class may contain abstract methods without implementations as well as concrete methods with implementations. An abstract class itself cannot be instantiated directly.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 abstraction interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1147,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "How can Java achieve multiple inheritance of type/behavior contracts?",
    options: [
      "Using interfaces",
      "By extending multiple concrete classes",
      "Using constructors only",
      "Using packages only"
    ],
    answer: "Using interfaces",
    solution:
      "A Java class cannot extend multiple classes, but it can implement multiple interfaces. Interfaces therefore allow a class to satisfy multiple contracts and can also provide default methods subject to conflict-resolution rules.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech Java/OOP interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1148,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "What is the difference between an instance variable and a static class variable?",
    options: [
      "Each object has its own instance variable, while a static variable belongs to the class",
      "Both always belong to individual objects",
      "Static variables cannot store values",
      "Instance variables exist only inside methods"
    ],
    answer:
      "Each object has its own instance variable, while a static variable belongs to the class",
    solution:
      "An instance field belongs to an individual object, so different instances can hold different values. A static field belongs to the class and is shared across its instances.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 Java fundamentals interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1149,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "Why is String immutable in Java?",
    options: [
      "A String object's value cannot be changed after creation",
      "Strings cannot contain characters",
      "Strings cannot be stored in variables",
      "Java does not support String objects"
    ],
    answer: "A String object's value cannot be changed after creation",
    solution:
      "String is immutable: operations that appear to modify a String create or return another String instead of changing the original object. Immutability also supports safe sharing, string pooling and predictable hashing.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech Java fundamentals interview practice",
    sourceUrl: null,
  },

  // =========================================================
  // DBMS / SQL Q1150-Q1157
  // =========================================================

  {
    questionId: 1150,
    companyId: 7,
    year: 2025,
    category: "dbms",
    question:
      "What is the difference between a primary key and a foreign key?",
    options: [
      "A primary key uniquely identifies a row; a foreign key references a key in a related table",
      "Both always perform exactly the same function",
      "Foreign keys must always be unique",
      "Primary keys allow duplicate values"
    ],
    answer:
      "A primary key uniquely identifies a row; a foreign key references a key in a related table",
    solution:
      "A primary key uniquely identifies rows in its table. A foreign key establishes a relationship by referencing a primary or candidate key in a related table. Primary and foreign keys were specifically reported in an HCLTech GET interview.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName:
      "HCLTech 2025 primary/foreign-key candidate-reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1151,
    companyId: 7,
    year: 2025,
    category: "sql",
    question:
      "Which SQL JOIN returns only rows that satisfy the join condition in both tables?",
    options: ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "CROSS JOIN"],
    answer: "INNER JOIN",
    solution:
      "INNER JOIN returns rows where the join condition matches between the participating tables. SQL JOINs were specifically reported in an HCLTech 2025 GET technical interview.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 SQL JOIN candidate-reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1152,
    companyId: 7,
    year: 2025,
    category: "sql",
    question:
      "What does LEFT JOIN return?",
    options: [
      "All rows from the left table and matching rows from the right table",
      "Only matching rows",
      "Only rows from the right table",
      "No rows when one right-side match is missing"
    ],
    answer:
      "All rows from the left table and matching rows from the right table",
    solution:
      "LEFT JOIN preserves every row from the left table. When no corresponding right-table row exists, columns from the right side are returned as NULL.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 SQL JOIN interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1153,
    companyId: 7,
    year: 2025,
    category: "sql",
    question:
      "Which query finds the second-highest distinct salary in Employee?",
    options: [
      "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
      "SELECT MIN(salary) FROM Employee;",
      "SELECT salary FROM Employee;",
      "SELECT COUNT(*) FROM Employee;"
    ],
    answer:
      "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
    solution:
      "The inner query obtains the maximum salary. The outer query selects the greatest salary below that value, producing the second-highest distinct salary.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech SQL interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1154,
    companyId: 7,
    year: 2025,
    category: "dbms",
    question:
      "What is normalization in DBMS primarily used for?",
    options: [
      "Reducing unnecessary redundancy and update anomalies",
      "Increasing duplicate data",
      "Deleting every relationship",
      "Converting Java into SQL"
    ],
    answer: "Reducing unnecessary redundancy and update anomalies",
    solution:
      "Normalization organizes relational tables to reduce redundant data and undesirable insertion, deletion and update anomalies.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech DBMS interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1155,
    companyId: 7,
    year: 2025,
    category: "dbms",
    question:
      "What do the ACID properties of a database transaction stand for?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Access, Control, Index, Data",
      "Array, Class, Interface, Database",
      "Atomicity, Compilation, Inheritance, Dependency"
    ],
    answer: "Atomicity, Consistency, Isolation, Durability",
    solution:
      "Atomicity means a transaction completes as a unit; consistency preserves valid database rules; isolation controls interactions among concurrent transactions; durability ensures committed changes survive failures.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech DBMS interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1156,
    companyId: 7,
    year: 2025,
    category: "sql",
    question:
      "What is the difference between WHERE and HAVING?",
    options: [
      "WHERE filters rows before grouping, while HAVING filters groups after aggregation",
      "They are always identical",
      "HAVING can only create tables",
      "WHERE can only be used with INSERT"
    ],
    answer:
      "WHERE filters rows before grouping, while HAVING filters groups after aggregation",
    solution:
      "WHERE applies row-level filtering before grouping. HAVING is commonly used to filter grouped or aggregated results after GROUP BY.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech SQL interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1157,
    companyId: 7,
    year: 2025,
    category: "sql",
    question:
      "Which SQL clause groups rows that share the same values so aggregate functions can be applied per group?",
    options: ["GROUP BY", "ORDER BY", "WHERE", "DISTINCT only"],
    answer: "GROUP BY",
    solution:
      "GROUP BY forms groups based on one or more columns. Aggregate functions such as COUNT, SUM, AVG, MIN and MAX can then operate on each group.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech SQL interview practice",
    sourceUrl: null,
  },

  // =========================================================
  // OS / THREADS Q1158-Q1163
  // =========================================================

  {
    questionId: 1158,
    companyId: 7,
    year: 2025,
    category: "java",
    question: "What is a thread?",
    options: [
      "A lightweight unit of execution within a process",
      "A database table",
      "A network address",
      "A Java package"
    ],
    answer: "A lightweight unit of execution within a process",
    solution:
      "A thread is a unit of execution inside a process. Threads belonging to the same process share resources such as the process address space while maintaining their own execution state. Threads were directly reported as an HCLTech GET 2025 interview topic.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 threads candidate-reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1159,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "What is a major difference between a process and a thread?",
    options: [
      "Threads of the same process share address-space resources, while separate processes normally have separate address spaces",
      "Processes and threads are identical",
      "Threads cannot execute code",
      "Processes never use memory"
    ],
    answer:
      "Threads of the same process share address-space resources, while separate processes normally have separate address spaces",
    solution:
      "A process is an independent execution environment with its own address space. Threads inside one process share many process resources, which makes communication cheaper but requires synchronization when accessing shared mutable data.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 threads interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1160,
    companyId: 7,
    year: 2025,
    category: "java",
    question: "What is a race condition?",
    options: [
      "A result that depends on unpredictable timing of concurrent accesses to shared state",
      "A sorting algorithm",
      "A SQL JOIN",
      "A compiler error only"
    ],
    answer:
      "A result that depends on unpredictable timing of concurrent accesses to shared state",
    solution:
      "A race condition can occur when multiple threads access shared mutable state and at least one modifies it without adequate synchronization, making the result dependent on execution timing.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech threading interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1161,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "Which Java keyword can be used to provide intrinsic-lock synchronization for a method or block?",
    options: ["synchronized", "extends", "package", "import"],
    answer: "synchronized",
    solution:
      "The synchronized keyword associates execution with an object's monitor lock, helping coordinate access to shared mutable resources.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech threading interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1162,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "Which of the following is one of the necessary conditions associated with deadlock?",
    options: [
      "Circular wait",
      "Binary search",
      "Method overloading",
      "Database normalization"
    ],
    answer: "Circular wait",
    solution:
      "The classic Coffman conditions are mutual exclusion, hold-and-wait, no preemption and circular wait. If all can hold simultaneously, deadlock is possible.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech OS/thread interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1163,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "What is context switching?",
    options: [
      "Saving the execution state of one task and restoring another task's state",
      "Changing an SQL table name",
      "Overloading a constructor",
      "Reversing an array"
    ],
    answer:
      "Saving the execution state of one task and restoring another task's state",
    solution:
      "During a context switch, the system preserves the execution context of one running task and restores another so CPU execution can move between tasks.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech OS interview practice",
    sourceUrl: null,
  },

  // =========================================================
  // DSA Q1164-Q1169
  // =========================================================

  {
    questionId: 1164,
    companyId: 7,
    year: 2025,
    category: "java",
    question: "Which data structure follows LIFO?",
    options: ["Stack", "Queue", "Graph", "HashMap"],
    answer: "Stack",
    solution:
      "Stack follows Last-In-First-Out. The most recently inserted element is the first one removed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 DSA candidate-reported interview area",
    sourceUrl: null,
  },

  {
    questionId: 1165,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "What is the time complexity of binary search on a sorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(log n)",
    solution:
      "Binary search halves the remaining search interval after each comparison, producing logarithmic time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 DSA interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1166,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "Which data structure is normally used for Breadth-First Search?",
    options: ["Queue", "Stack", "Heap only", "Array only"],
    answer: "Queue",
    solution:
      "BFS processes vertices level by level. A queue maintains discovered vertices in the order in which they should be processed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 DSA interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1167,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "Which Binary Search Tree traversal returns keys in sorted order?",
    options: ["Inorder", "Preorder", "Postorder", "Level order"],
    answer: "Inorder",
    solution:
      "Inorder traversal visits left subtree, root and right subtree. In a BST, this produces keys in ascending order.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 DSA interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1168,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "What is the average/expected lookup complexity of a HashMap under normal hashing conditions?",
    options: ["O(1)", "O(log n) always", "O(n²)", "O(2^n)"],
    answer: "O(1)",
    solution:
      "Hashing maps a key to a bucket, giving expected constant-time lookup when keys are well distributed. Worst-case behavior can be worse depending on collisions and implementation details.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 DSA interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1169,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "What is the worst-case time complexity of linear search?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n)",
    solution:
      "If the target is at the last position or does not exist, linear search may examine every element, resulting in O(n) time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 DSA interview pattern",
    sourceUrl: null,
  },

  // =========================================================
  // CODING QUESTIONS Q1170-Q1175
  // =========================================================

  {
    questionId: 1170,
    companyId: 7,
    year: 2025,
    category: "programming",
    question:
      "Given an integer array, find the second-largest distinct element without sorting it.",
    options: [],
    answer:
      "Maintain the largest and second-largest distinct values during one traversal.",
    solution: `public class Main {

    static Integer secondLargest(int[] arr) {

        Integer largest = null;
        Integer second = null;

        for (int value : arr) {

            if (largest == null || value > largest) {
                second = largest;
                largest = value;
            } else if (
                value != largest &&
                (second == null || value > second)
            ) {
                second = value;
            }
        }

        return second;
    }

    public static void main(String[] args) {

        int[] arr = {10, 5, 20, 20, 8, 15};

        Integer answer = secondLargest(arr);

        if (answer == null) {
            System.out.println(
                "No second-largest distinct element"
            );
        } else {
            System.out.println(answer);
        }
    }
}

Output:
15

The largest distinct value is 20.
The next-largest distinct value is 15.

Time complexity: O(n)
Space complexity: O(1)

Finding the second-largest value in an array was specifically
reported in an HCLTech GET technical interview.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "HCLTech 2025 second-largest-array candidate-reported interview question",
    sourceUrl: null,
  },

  {
    questionId: 1171,
    companyId: 7,
    year: 2025,
    category: "programming",
    question:
      "Given a string, determine whether it is a palindrome while ignoring case.",
    options: [],
    answer:
      "Compare characters using two pointers moving inward from both ends.",
    solution: `public class Main {

    static boolean isPalindrome(String str) {

        str = str.toLowerCase();

        int left = 0;
        int right = str.length() - 1;

        while (left < right) {

            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    public static void main(String[] args) {

        String str = "Madam";

        System.out.println(isPalindrome(str));
    }
}

Output:
true

After converting Madam to madam, characters at opposite
positions match.

Time complexity: O(n)
Space complexity: O(n) because the lowercase conversion
creates a normalized String.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 basic coding interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1172,
    companyId: 7,
    year: 2025,
    category: "programming",
    question:
      "Reverse an integer array in-place without creating another array.",
    options: [],
    answer:
      "Use two pointers and swap the values at the left and right ends.",
    solution: `import java.util.Arrays;

public class Main {

    static void reverse(int[] arr) {

        int left = 0;
        int right = arr.length - 1;

        while (left < right) {

            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }
    }

    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 4, 5};

        reverse(arr);

        System.out.println(Arrays.toString(arr));
    }
}

Output:
[5, 4, 3, 2, 1]

Time complexity: O(n)
Space complexity: O(1)`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 DSA/basic coding interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1173,
    companyId: 7,
    year: 2025,
    category: "programming",
    question:
      "Given an integer n, determine whether it is a prime number.",
    options: [],
    answer:
      "Test divisibility from 2 through the square root of n.",
    solution: `public class Main {

    static boolean isPrime(int n) {

        if (n < 2) {
            return false;
        }

        for (int i = 2; i * i <= n; i++) {

            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        int n = 29;

        System.out.println(isPrime(n));
    }
}

Output:
true

A composite number must have at least one factor not greater
than its square root.

Time complexity: O(sqrt(n))
Space complexity: O(1)`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 basic coding interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1174,
    companyId: 7,
    year: 2025,
    category: "programming",
    question:
      "Given an array and a target, determine whether two different elements have a sum equal to the target.",
    options: [],
    answer:
      "Use a HashSet. For every number, check whether target - number has already been encountered.",
    solution: `import java.util.HashSet;
import java.util.Set;

public class Main {

    static boolean hasPair(int[] arr, int target) {

        Set<Integer> seen = new HashSet<>();

        for (int value : arr) {

            int required = target - value;

            if (seen.contains(required)) {
                return true;
            }

            seen.add(value);
        }

        return false;
    }

    public static void main(String[] args) {

        int[] arr = {2, 7, 11, 15};

        System.out.println(hasPair(arr, 9));
    }
}

Output:
true

When value = 7, required = 2.
2 has already been stored in the set.

Time complexity: O(n) expected
Space complexity: O(n)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 DSA coding interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1175,
    companyId: 7,
    year: 2025,
    category: "programming",
    question:
      "Given a string, find the first non-repeating character.",
    options: [],
    answer:
      "Count characters using a LinkedHashMap and return the first character whose frequency is one.",
    solution: `import java.util.*;

public class Main {

    static Character firstNonRepeating(String str) {

        Map<Character, Integer> frequency =
            new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {
            frequency.put(
                ch,
                frequency.getOrDefault(ch, 0) + 1
            );
        }

        for (Map.Entry<Character, Integer> entry :
                frequency.entrySet()) {

            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }

        return null;
    }

    public static void main(String[] args) {

        String str = "aabbcdde";

        System.out.println(firstNonRepeating(str));
    }
}

Output:
c

Frequencies:
a = 2
b = 2
c = 1
d = 2
e = 1

The first character with frequency 1 is c.

Time complexity: O(n) expected
Space complexity: O(k), where k is the number of distinct characters.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 DSA coding interview pattern",
    sourceUrl: null,
  },

  // =========================================================
  // BACKEND / API / WEB / CS Q1176-Q1181
  // =========================================================

  {
    questionId: 1176,
    companyId: 7,
    year: 2025,
    category: "web",
    question:
      "What is the difference between authentication and authorization?",
    options: [
      "Authentication verifies identity; authorization determines permitted actions/resources",
      "They are always identical",
      "Authentication creates databases",
      "Authorization verifies Java syntax"
    ],
    answer:
      "Authentication verifies identity; authorization determines permitted actions/resources",
    solution:
      "Authentication answers 'Who are you?' Authorization answers 'What are you allowed to do?' An HCLTech GET candidate in 2025 specifically reported being asked how a backend handles authorized API calls.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName:
      "HCLTech 2025 authorized-API candidate-reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1177,
    companyId: 7,
    year: 2025,
    category: "web",
    question:
      "How is a JWT commonly used when calling a protected backend API?",
    options: [
      "The client commonly sends it in an Authorization Bearer header and the server validates it",
      "It is used only as CSS",
      "It replaces the database",
      "It is a sorting algorithm"
    ],
    answer:
      "The client commonly sends it in an Authorization Bearer header and the server validates it",
    solution:
      "After authentication, a server may issue a signed JWT. The client sends it with later protected requests, commonly as 'Authorization: Bearer <token>'. The backend verifies its signature and claims before allowing protected operations.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 backend authorization interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1178,
    companyId: 7,
    year: 2025,
    category: "web",
    question:
      "Which HTTP method is conventionally used to retrieve a resource without requesting a state change?",
    options: ["GET", "POST", "DELETE", "PATCH only"],
    answer: "GET",
    solution:
      "GET is conventionally used to retrieve a representation of a resource and is defined as a safe HTTP method.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech backend/API interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1179,
    companyId: 7,
    year: 2025,
    category: "web",
    question:
      "Which HTTP status code normally means that authentication credentials are missing or invalid?",
    options: ["200", "201", "401", "500"],
    answer: "401",
    solution:
      "HTTP 401 Unauthorized indicates that the request lacks valid authentication credentials. HTTP 403 is generally used when the server understands the request but refuses access.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech backend/API interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1180,
    companyId: 7,
    year: 2025,
    category: "web",
    question: "What does REST commonly use to identify resources?",
    options: ["URIs", "Java constructors", "CPU registers", "Stack frames"],
    answer: "URIs",
    solution:
      "REST-style APIs expose resources identified through URIs and interact with them using standard HTTP semantics such as GET, POST, PUT/PATCH and DELETE.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech backend/API interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1181,
    companyId: 7,
    year: 2025,
    category: "web",
    question:
      "Why should user passwords normally be hashed rather than stored as plain text?",
    options: [
      "Hashing reduces exposure of original passwords if the credential database is compromised",
      "Hashing makes every password publicly readable",
      "Plain text is always more secure",
      "Passwords cannot be stored in databases"
    ],
    answer:
      "Hashing reduces exposure of original passwords if the credential database is compromised",
    solution:
      "Applications should use an appropriate password-hashing function with salts rather than storing plaintext passwords. During login, the submitted password is verified against the stored hash.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech backend/security interview practice",
    sourceUrl: null,
  },

  // =========================================================
  // PROJECT-BASED INTERVIEW Q1182-Q1185
  // =========================================================

  {
    questionId: 1182,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "When an interviewer asks you to explain your project, which answer structure is strongest?",
    options: [
      "Problem -> your role -> architecture/technology -> implementation -> challenge -> result",
      "Only say the project name",
      "Only list programming languages",
      "Say you do not remember the implementation"
    ],
    answer:
      "Problem -> your role -> architecture/technology -> implementation -> challenge -> result",
    solution:
      "A structured project explanation demonstrates both technical understanding and ownership. HCLTech GET candidate reports from 2025 specifically mention interviewers asking about projects and drilling into project/internship details.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 candidate-reported project interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1183,
    companyId: 7,
    year: 2025,
    category: "web",
    question:
      "If an interviewer asks how login works in a full-stack application, which sequence is most appropriate?",
    options: [
      "Client sends credentials -> server validates them -> password hash is verified -> authenticated session/token is created -> protected requests are validated",
      "Browser directly edits the database",
      "CSS verifies the password",
      "The database sends the user's password to every client"
    ],
    answer:
      "Client sends credentials -> server validates them -> password hash is verified -> authenticated session/token is created -> protected requests are validated",
    solution:
      "This describes a standard authentication flow. Exact implementations differ, but password verification belongs on the trusted backend and protected requests require subsequent authentication validation.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 project/backend interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1184,
    companyId: 7,
    year: 2025,
    category: "dbms",
    question:
      "If an interviewer asks why you used a database in your project, which technical explanation is most appropriate?",
    options: [
      "To persist application data so it can be queried and retained beyond a single process execution",
      "To change CSS colors",
      "To compile Java",
      "To replace all backend code"
    ],
    answer:
      "To persist application data so it can be queried and retained beyond a single process execution",
    solution:
      "A database provides persistent storage and query capabilities for application entities such as users, submissions, products or transactions. A good interview answer should then explain why the project's chosen database matched its data model and requirements.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 project interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1185,
    companyId: 7,
    year: 2025,
    category: "web",
    question:
      "During a project interview, what is the best way to explain a technical challenge?",
    options: [
      "Describe the problem, root cause, alternatives considered, solution and what you learned",
      "Say nothing ever failed",
      "Blame another team member",
      "Only mention the project title"
    ],
    answer:
      "Describe the problem, root cause, alternatives considered, solution and what you learned",
    solution:
      "Interviewers use project questions to test whether you actually understand and contributed to the system. Explaining diagnosis and trade-offs demonstrates stronger technical ownership than merely describing features.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 project interview practice",
    sourceUrl: null,
  },

  // =========================================================
  // TECHNICAL + HR CROSSOVER Q1186-Q1189
  // =========================================================

  {
    questionId: 1186,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "If you do not know the exact answer to a technical interview question, what is the strongest response?",
    options: [
      "State what you know, reason carefully, and clearly acknowledge the part you are unsure about",
      "Invent an answer confidently",
      "Immediately end the interview",
      "Change the subject without responding"
    ],
    answer:
      "State what you know, reason carefully, and clearly acknowledge the part you are unsure about",
    solution:
      "Technical interviews evaluate reasoning as well as recall. Separating what you know from what you are uncertain about avoids confidently giving false information and allows the interviewer to follow your thought process.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 technical-interview preparation",
    sourceUrl: null,
  },

  {
    questionId: 1187,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "When explaining the time complexity of a single loop that processes every element once, what is normally the correct complexity?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(n)",
    solution:
      "If the loop performs constant work for each of n elements, the total amount of work grows linearly with n, giving O(n).",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 coding-interview fundamentals",
    sourceUrl: null,
  },

  {
    questionId: 1188,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "What should you emphasize when an interviewer asks about your individual contribution to a team project?",
    options: [
      "The specific components you implemented, decisions you made, problems you solved and how your work integrated with the team",
      "Claim that you built everything alone even when you did not",
      "Only describe what your teammates built",
      "Avoid discussing implementation"
    ],
    answer:
      "The specific components you implemented, decisions you made, problems you solved and how your work integrated with the team",
    solution:
      "Project interviews commonly probe ownership. Clearly separating your own work from the team's overall work gives the interviewer a better picture of your actual technical experience.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 project/interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1189,
    companyId: 7,
    year: 2025,
    category: "java",
    question:
      "Why might an interviewer ask follow-up questions about technologies listed on your resume?",
    options: [
      "To verify that your stated skills match your actual understanding and project experience",
      "Because resume technologies are never relevant",
      "Only to test typing speed",
      "Only to ask HR questions"
    ],
    answer:
      "To verify that your stated skills match your actual understanding and project experience",
    solution:
      "A 2025 HCLTech GET report says the interview focused on fundamentals of the candidate's selected programming language and topics from the resume. You should therefore be prepared to explain every major skill and technology you list.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2025 resume/project candidate-reported interview pattern",
    sourceUrl: null,
  },
];

async function seedHCLTech2025Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 7,
      year: 2025,
    });

    console.log("Old HCLTech 2025 questions deleted");

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} HCLTech 2025 questions seeded successfully`
    );

    process.exit(0);
  } catch (error) {
    console.error(
      "Error seeding HCLTech 2025 questions:",
      error
    );

    process.exit(1);
  }
}

seedHCLTech2025Questions();