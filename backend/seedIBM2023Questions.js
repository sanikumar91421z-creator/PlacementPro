require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const questions = [
  {
    questionId: 1800,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Convert an integer to its Roman numeral representation.

Example:

Input:
58

Output:
LVIII`,
    options: [],
    answer:
      "Repeatedly subtract the largest possible Roman numeral value and append its symbol.",
    solution: `Java Solution:

class Solution {
    public String intToRoman(int num) {
        int[] values = {
            1000, 900, 500, 400,
            100, 90, 50, 40,
            10, 9, 5, 4, 1
        };

        String[] symbols = {
            "M", "CM", "D", "CD",
            "C", "XC", "L", "XL",
            "X", "IX", "V", "IV", "I"
        };

        StringBuilder result = new StringBuilder();

        for (int i = 0; i < values.length; i++) {
            while (num >= values[i]) {
                num -= values[i];
                result.append(symbols[i]);
            }
        }

        return result.toString();
    }
}

For 58:

50 = L
5 = V
3 = III

Result = LVIII

Time Complexity: O(1) for the bounded Roman numeral range.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "IBM ASE On-Campus 2023 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-associate-systems-engineer-on-campus-2023-2/",
  },

  {
    questionId: 1801,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Convert a Roman numeral to an integer.

Example:

Input:
"MCMXCIV"

Output:
1994`,
    options: [],
    answer:
      "Add values normally, but subtract a numeral when it is smaller than the numeral immediately to its right.",
    solution: `Java Solution:

import java.util.*;

class Solution {
    public int romanToInt(String s) {
        Map<Character, Integer> map = new HashMap<>();

        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            int current = map.get(s.charAt(i));

            if (
                i + 1 < s.length() &&
                current < map.get(s.charAt(i + 1))
            ) {
                result -= current;
            } else {
                result += current;
            }
        }

        return result;
    }
}

MCMXCIV = 1994.

Time Complexity: O(n)
Space Complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "IBM ASE On-Campus 2023 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-ase-on-campus/",
  },

  {
    questionId: 1802,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Decode Linux-style permissions into an octal value.

Given:

r = 4
w = 2
x = 1

Input:
"rwxr--r--"

Output:
744`,
    options: [],
    answer:
      "Split permissions into groups of three and add the values of r, w and x in each group.",
    solution: `For:

rwx r-- r--

First group:

r + w + x
= 4 + 2 + 1
= 7

Second group:

r--
= 4

Third group:

r--
= 4

Therefore:

744

Java Solution:

class Solution {
    public String permissionsToOctal(String s) {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < s.length(); i += 3) {
            int value = 0;

            if (s.charAt(i) == 'r') value += 4;
            if (s.charAt(i + 1) == 'w') value += 2;
            if (s.charAt(i + 2) == 'x') value += 1;

            result.append(value);
        }

        return result.toString();
    }
}

Time Complexity: O(n).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "IBM ASE On-Campus 2023 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-ase-on-campus/",
  },

  {
    questionId: 1803,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Convert a phrase into camelCase.

Example:

Input:
"placement pro platform"

Output:
"placementProPlatform"`,
    options: [],
    answer:
      "Keep the first word lowercase and capitalize the first character of each following word.",
    solution: `Java Solution:

class Solution {
    public String toCamelCase(String text) {
        String[] words = text.trim().split("\\\\s+");

        if (words.length == 0) {
            return "";
        }

        StringBuilder result =
            new StringBuilder(words[0].toLowerCase());

        for (int i = 1; i < words.length; i++) {
            String word = words[i].toLowerCase();

            if (!word.isEmpty()) {
                result.append(
                    Character.toUpperCase(word.charAt(0))
                );

                result.append(word.substring(1));
            }
        }

        return result.toString();
    }
}

Output:

placementProPlatform`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "IBM ASE On-Campus 2023 Case Conversion Assessment",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-associate-systems-engineer-on-campus-2023/",
  },

  {
    questionId: 1804,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Convert a phrase into PascalCase.

Example:

Input:
"placement pro"

Output:
"PlacementPro"`,
    options: [],
    answer:
      "Capitalize the first character of every word and remove separators.",
    solution: `Java Solution:

class Solution {
    public String toPascalCase(String text) {
        String[] words = text.trim().split("\\\\s+");
        StringBuilder result = new StringBuilder();

        for (String word : words) {
            word = word.toLowerCase();

            if (!word.isEmpty()) {
                result.append(
                    Character.toUpperCase(word.charAt(0))
                );

                result.append(word.substring(1));
            }
        }

        return result.toString();
    }
}

placement pro

becomes:

PlacementPro`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "IBM ASE On-Campus 2023 Case Conversion Assessment",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-associate-systems-engineer-on-campus-2023/",
  },

  {
    questionId: 1805,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Implement Binary Search on a sorted integer array.

Example:

nums = [1, 3, 5, 7, 9]
target = 7

Output:
3`,
    options: [],
    answer:
      "Repeatedly compare the target with the middle element and discard half of the search range.",
    solution: `Java Solution:

class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid =
                left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            }

            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}

Time Complexity: O(log n)
Space Complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "IBM ASE 2023 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-ase-2023/",
  },

  {
    questionId: 1806,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Implement a stack from scratch using an array.`,
    options: [],
    answer:
      "Maintain an array and a top index for push, pop and peek operations.",
    solution: `Java Solution:

class MyStack {
    private int[] stack;
    private int top;

    MyStack(int capacity) {
        stack = new int[capacity];
        top = -1;
    }

    public void push(int value) {
        if (top == stack.length - 1) {
            throw new RuntimeException("Stack overflow");
        }

        stack[++top] = value;
    }

    public int pop() {
        if (top == -1) {
            throw new RuntimeException("Stack underflow");
        }

        return stack[top--];
    }

    public int peek() {
        if (top == -1) {
            throw new RuntimeException("Stack is empty");
        }

        return stack[top];
    }

    public boolean isEmpty() {
        return top == -1;
    }
}

Push and pop are O(1).`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "IBM Software Developer Internship On-Campus 2023",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1807,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Determine whether a singly linked list is circular.

A list is considered circular here if following next references eventually returns to the head.`,
    options: [],
    answer:
      "Traverse from head.next and check whether traversal returns to head before reaching null.",
    solution: `Java Solution:

class ListNode {
    int val;
    ListNode next;
}

class Solution {
    public boolean isCircular(ListNode head) {
        if (head == null) {
            return true;
        }

        ListNode current = head.next;

        while (
            current != null &&
            current != head
        ) {
            current = current.next;
        }

        return current == head;
    }
}

Time Complexity: O(n)
Space Complexity: O(1).`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "IBM Software Developer Internship On-Campus 2023",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1808,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Compress consecutive repeated characters.

Example:

Input:
"aaabbccccd"

Output:
"a3b2c4d"`,
    options: [],
    answer:
      "Count each consecutive character group and append the count when it is greater than one.",
    solution: `Java Solution:

class Solution {
    public String compress(String s) {
        StringBuilder result = new StringBuilder();

        int i = 0;

        while (i < s.length()) {
            int j = i;

            while (
                j < s.length() &&
                s.charAt(j) == s.charAt(i)
            ) {
                j++;
            }

            int count = j - i;

            result.append(s.charAt(i));

            if (count > 1) {
                result.append(count);
            }

            i = j;
        }

        return result.toString();
    }
}

Input:

aaabbccccd

Output:

a3b2c4d

Time Complexity: O(n).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "IBM ISDL Software 2023 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-isdl-software/",
  },

  {
    questionId: 1809,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Compare two strings lexicographically.

Return:
0 if equal,
a negative value if s1 comes before s2,
a positive value if s1 comes after s2.`,
    options: [],
    answer:
      "Compare corresponding characters until they differ; if all compared characters match, compare lengths.",
    solution: `Java Solution:

class Solution {
    public int compare(String a, String b) {
        int length =
            Math.min(a.length(), b.length());

        for (int i = 0; i < length; i++) {
            if (a.charAt(i) != b.charAt(i)) {
                return a.charAt(i) - b.charAt(i);
            }
        }

        return a.length() - b.length();
    }
}

Example:

apple
apply

At the first differing character:

'e' < 'y'

Therefore apple comes first.

Time Complexity: O(min(n,m)).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "IBM ISDL 2023 String Comparison Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-isdl-software/",
  },

  {
    questionId: 1810,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Which data structure follows LIFO order?`,
    options: ["Stack", "Queue", "Graph", "Heap"],
    answer: "Stack",
    solution: `LIFO means:

Last In, First Out.

The most recently inserted element is
removed first.

This is the behavior of a stack.

Correct Answer:

Stack.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 DSA Fundamentals Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1811,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Which memory region normally stores local variables and function-call information for active method calls?`,
    options: ["Stack", "Heap only", "Database", "Disk partition"],
    answer: "Stack",
    solution: `Each active method call normally has a
stack frame containing information such as
local variables, parameters and return
information.

Objects in Java are generally allocated
on the heap, subject to JVM optimization.

Correct Answer:

Stack.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "IBM Software Developer Internship On-Campus 2023",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1812,
    companyId: 10,
    year: 2023,
    category: "java",
    question: `Which Java collection stores unique elements and does not guarantee insertion order in its basic HashSet implementation?`,
    options: ["HashSet", "ArrayList", "LinkedList", "StringBuilder"],
    answer: "HashSet",
    solution: `HashSet stores unique elements.

Adding an element already present does not
create another equal entry.

HashSet does not guarantee insertion order.

Correct Answer:

HashSet.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "IBM 2023 Java Collections Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1813,
    companyId: 10,
    year: 2023,
    category: "java",
    question: `What is an interface in Java primarily used to define?`,
    options: [
      "A contract that implementing classes can follow",
      "A database table",
      "A CPU process",
      "A network address",
    ],
    answer: "A contract that implementing classes can follow",
    solution: `An interface can define behavior that
implementing classes agree to provide.

Example:

interface Payment {
    void pay();
}

class CardPayment implements Payment {
    public void pay() {
        System.out.println("Paid");
    }
}

Correct Answer:

A contract that implementing classes can
follow.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "IBM Software Developer Internship On-Campus 2023",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1814,
    companyId: 10,
    year: 2023,
    category: "java",
    question: `Can an abstract Java class have a constructor?`,
    options: [
      "Yes",
      "No",
      "Only if every method is static",
      "Only interfaces can have constructors",
    ],
    answer: "Yes",
    solution: `Yes.

An abstract class cannot normally be
instantiated directly, but its constructor
can initialize state used by subclasses.

Example:

abstract class Animal {
    Animal() {
        System.out.println("Animal constructor");
    }
}

A subclass constructor can invoke this
constructor.

Correct Answer:

Yes.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "IBM Software Developer Internship On-Campus 2023",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1815,
    companyId: 10,
    year: 2023,
    category: "java",
    question: `Why is Java commonly described as platform independent?`,
    options: [
      "Java source is compiled to bytecode that can run on compatible JVM implementations",
      "Java programs never require a runtime",
      "Java uses only HTML",
      "Java cannot access operating-system services",
    ],
    answer:
      "Java source is compiled to bytecode that can run on compatible JVM implementations",
    solution: `Java source code is compiled into JVM
bytecode.

A compatible JVM for the target platform
executes that bytecode.

This leads to the common phrase:

Write Once, Run Anywhere.

Correct Answer:

Java source is compiled to bytecode that
can run on compatible JVM implementations.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "IBM ASE On-Campus 2023 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-ase-on-campus/",
  },

  {
    questionId: 1816,
    companyId: 10,
    year: 2023,
    category: "java",
    question: `Which Java mechanism is used to handle exceptional conditions during program execution?`,
    options: ["try-catch", "GROUP BY", "chmod", "ping"],
    answer: "try-catch",
    solution: `Java uses exception handling constructs
such as:

try
catch
finally
throw
throws

Example:

try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Invalid operation");
}

Correct Answer:

try-catch.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "IBM ASE Off-Campus 2023 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-ase-off-campus-2023/",
  },

  {
    questionId: 1817,
    companyId: 10,
    year: 2023,
    category: "java",
    question: `What is method overloading in Java?`,
    options: [
      "Defining methods with the same name but different parameter lists",
      "Replacing a database table",
      "Calling a method recursively",
      "Creating two identical local variables",
    ],
    answer: "Defining methods with the same name but different parameter lists",
    solution: `Example:

class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

Both methods are named add but have
different parameter types.

Correct Answer:

Defining methods with the same name but
different parameter lists.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "IBM 2023 OOP Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-ase-off-campus-2023/",
  },

  {
    questionId: 1818,
    companyId: 10,
    year: 2023,
    category: "java",
    question: `Which OOP principle restricts direct access to internal object state and exposes controlled operations instead?`,
    options: ["Encapsulation", "Recursion", "Compilation", "Sorting"],
    answer: "Encapsulation",
    solution: `Encapsulation combines state and
behavior inside a class while controlling
access to internal data.

Example:

class Account {
    private double balance;

    public double getBalance() {
        return balance;
    }
}

Correct Answer:

Encapsulation.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "IBM 2023 OOP Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-ase-off-campus-2023/",
  },

  {
    questionId: 1819,
    companyId: 10,
    year: 2023,
    category: "dbms",
    question: `Which ACID property means a transaction is treated as an all-or-nothing unit?`,
    options: ["Atomicity", "Consistency", "Isolation", "Durability"],
    answer: "Atomicity",
    solution: `Atomicity means that the operations in a
transaction are treated as one logical unit.

Either the transaction completes
successfully or its partial effects are
rolled back according to the database's
transaction mechanisms.

Correct Answer:

Atomicity.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "IBM Software Developer Internship On-Campus 2023",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1820,
    companyId: 10,
    year: 2023,
    category: "sql",
    question: `Write an SQL statement to insert an employee with id 10 and name 'Rahul' into Employee(id, name).`,
    options: [],
    answer: "INSERT INTO Employee (id, name) VALUES (10, 'Rahul');",
    solution: `SQL:

INSERT INTO Employee (id, name)
VALUES (10, 'Rahul');

INSERT INTO adds a new row to a table.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "IBM ASE On-Campus 2023 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-associate-systems-engineer-on-campus-2023-2/",
  },

  {
    questionId: 1821,
    companyId: 10,
    year: 2023,
    category: "sql",
    question: `Write an SQL query to update the salary of employee id 10 to 60000.`,
    options: [],
    answer: "UPDATE Employee SET salary = 60000 WHERE id = 10;",
    solution: `SQL:

UPDATE Employee
SET salary = 60000
WHERE id = 10;

The WHERE clause is important because it
limits the update to the intended row.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "IBM ASE On-Campus 2023 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-associate-systems-engineer-on-campus-2023-2/",
  },

  {
    questionId: 1822,
    companyId: 10,
    year: 2023,
    category: "sql",
    question: `Which SQL JOIN returns rows that satisfy the join condition in both tables?`,
    options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "FULL OUTER JOIN"],
    answer: "INNER JOIN",
    solution: `INNER JOIN returns matching row
combinations according to the specified
join condition.

Example:

SELECT e.name, d.name
FROM Employee e
INNER JOIN Department d
ON e.department_id = d.id;

Correct Answer:

INNER JOIN.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "IBM ASE Off-Campus 2023 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-ase-off-campus-2023/",
  },

  {
    questionId: 1823,
    companyId: 10,
    year: 2023,
    category: "sql",
    question: `Which SQL function returns the number of rows?`,
    options: ["COUNT()", "AVG()", "MAX()", "ROUND()"],
    answer: "COUNT()",
    solution: `COUNT(*) counts rows.

Example:

SELECT COUNT(*)
FROM Employee;

Correct Answer:

COUNT().`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 SQL Aggregate Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1824,
    companyId: 10,
    year: 2023,
    category: "sql",
    question: `What is SQL injection?`,
    options: [
      "An attack in which untrusted input changes the intended structure of an SQL query",
      "A database backup technique",
      "A sorting algorithm",
      "A Java collection",
    ],
    answer:
      "An attack in which untrusted input changes the intended structure of an SQL query",
    solution: `SQL injection occurs when untrusted input
is incorporated unsafely into SQL.

Applications should use techniques such as
parameterized queries/prepared statements
rather than constructing queries by direct
string concatenation.

Correct Answer:

An attack in which untrusted input changes
the intended structure of an SQL query.`,
    difficulty: "Medium",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "IBM Software Developer Internship On-Campus 2023",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1825,
    companyId: 10,
    year: 2023,
    category: "dbms",
    question: `Which statement correctly describes a major difference between SQL and many NoSQL databases?`,
    options: [
      "SQL databases commonly use relational tables, while NoSQL includes models such as document, key-value, column-family and graph",
      "NoSQL means databases cannot store data",
      "SQL databases cannot use indexes",
      "Both terms always refer to exactly the same data model",
    ],
    answer:
      "SQL databases commonly use relational tables, while NoSQL includes models such as document, key-value, column-family and graph",
    solution: `Traditional SQL databases use the
relational model.

NoSQL is an umbrella term covering
multiple non-relational models such as:

Document
Key-value
Graph
Column-family

The appropriate choice depends on system
requirements.

Correct Answer:

SQL databases commonly use relational
tables, while NoSQL includes models such
as document, key-value, column-family and
graph.`,
    difficulty: "Medium",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "IBM Software Developer Internship On-Campus 2023",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1826,
    companyId: 10,
    year: 2023,
    category: "web",
    question: `What is a REST API?`,
    options: [
      "An API designed around REST architectural constraints and resource-oriented HTTP interactions",
      "A Java sorting algorithm",
      "A database index",
      "A CPU scheduling policy",
    ],
    answer:
      "An API designed around REST architectural constraints and resource-oriented HTTP interactions",
    solution: `REST is an architectural style.

RESTful HTTP APIs commonly model resources
through URIs and use HTTP methods such as:

GET
POST
PUT
PATCH
DELETE

Stateless interaction is one of REST's
architectural constraints.

Correct Answer:

An API designed around REST architectural
constraints and resource-oriented HTTP
interactions.`,
    difficulty: "Medium",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "IBM Software Developer Internship On-Campus 2023",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1827,
    companyId: 10,
    year: 2023,
    category: "web",
    question: `Which HTTP method is normally used to request deletion of a resource?`,
    options: ["DELETE", "GET", "HEAD", "OPTIONS"],
    answer: "DELETE",
    solution: `DELETE expresses a request to remove a
resource identified by the request target.

Example:

DELETE /api/users/10

Correct Answer:

DELETE.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 REST API Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1828,
    companyId: 10,
    year: 2023,
    category: "cloud",
    question: `What is Kubernetes primarily used for?`,
    options: [
      "Orchestrating containerized applications",
      "Editing HTML manually",
      "Replacing every programming language",
      "Sorting arrays",
    ],
    answer: "Orchestrating containerized applications",
    solution: `Kubernetes provides capabilities for
deploying and managing containerized
workloads.

Features include:

Scheduling
Service discovery
Scaling
Rollouts
Self-healing mechanisms

Correct Answer:

Orchestrating containerized applications.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "IBM Software Developer Internship On-Campus 2023",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1829,
    companyId: 10,
    year: 2023,
    category: "cloud",
    question: `What does IAM generally stand for in cloud computing?`,
    options: [
      "Identity and Access Management",
      "Internet Array Memory",
      "Integrated Application Machine",
      "Internal Algorithm Mapping",
    ],
    answer: "Identity and Access Management",
    solution: `IAM stands for:

Identity and Access Management.

It is used to control identities,
authentication and permissions to
resources.

Correct Answer:

Identity and Access Management.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "IBM Software Developer Internship On-Campus 2023",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1830,
    companyId: 10,
    year: 2023,
    category: "cloud",
    question: `Which cloud service model delivers complete applications to users over a network?`,
    options: ["SaaS", "IaaS", "RAM", "DNS"],
    answer: "SaaS",
    solution: `SaaS means:

Software as a Service.

Users consume an application provided and
managed by the service provider.

Correct Answer:

SaaS.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 Cloud Fundamentals Practice",
    sourceUrl: null,
  },

  {
    questionId: 1831,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `What is recursion?`,
    options: [
      "A technique in which a function solves a problem by calling itself on smaller or simpler instances",
      "A database JOIN",
      "A CSS property",
      "A network protocol",
    ],
    answer:
      "A technique in which a function solves a problem by calling itself on smaller or simpler instances",
    solution: `A recursive function calls itself and
requires a base case to stop further
recursive calls.

Example:

factorial(n)
= n * factorial(n - 1)

with:

factorial(0) = 1.

Correct Answer:

A technique in which a function solves a
problem by calling itself on smaller or
simpler instances.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "IBM Software Developer Internship On-Campus 2023",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1832,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `What is the time complexity of Binary Search on a sorted array?`,
    options: ["O(log n)", "O(n)", "O(n²)", "O(2^n)"],
    answer: "O(log n)",
    solution: `Binary Search discards approximately half
of the remaining search interval after
each comparison.

Therefore:

Time Complexity = O(log n).

Correct Answer:

O(log n).`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 Binary Search Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-ase-2023/",
  },

  {
    questionId: 1833,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Which technique uses two pointers moving at different speeds to detect a cycle in a linked list?`,
    options: [
      "Floyd's cycle detection algorithm",
      "Bubble Sort",
      "Merge Sort",
      "Linear probing",
    ],
    answer: "Floyd's cycle detection algorithm",
    solution: `Floyd's algorithm uses:

slow pointer -> one step
fast pointer -> two steps

If a cycle exists, the two pointers
eventually meet.

Correct Answer:

Floyd's cycle detection algorithm.`,
    difficulty: "Medium",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "IBM Software Developer Internship On-Campus 2023",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1834,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Merge two unsorted integer arrays and return all values in sorted order.

Example:

a = [4, 1, 7]
b = [3, 6, 2]

Output:
[1, 2, 3, 4, 6, 7]`,
    options: [],
    answer: "Combine both arrays and sort the resulting array.",
    solution: `Java Solution:

import java.util.*;

class Solution {
    public int[] mergeAndSort(
        int[] a,
        int[] b
    ) {
        int[] result =
            new int[a.length + b.length];

        int index = 0;

        for (int value : a) {
            result[index++] = value;
        }

        for (int value : b) {
            result[index++] = value;
        }

        Arrays.sort(result);

        return result;
    }
}

For comparison-based sorting:

Time Complexity:
O((n + m) log(n + m))

Space Complexity:
O(n + m) for the result.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "IBM 2023 Merge Unsorted Collections Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },

  {
    questionId: 1835,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Which traversal normally uses a queue to visit graph vertices level by level?`,
    options: ["BFS", "DFS", "Binary Search", "Quick Sort"],
    answer: "BFS",
    solution: `Breadth-First Search uses a queue.

A vertex is added to the queue when
discovered and processed in FIFO order.

This causes traversal level by level.

Correct Answer:

BFS.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 DSA Practice",
    sourceUrl: null,
  },

  {
    questionId: 1836,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `What is the worst-case time complexity of Merge Sort?`,
    options: ["O(n log n)", "O(n²)", "O(log n)", "O(1)"],
    answer: "O(n log n)",
    solution: `Merge Sort divides the input into
subproblems and merges sorted halves.

There are approximately:

log n levels

and each level performs:

O(n)

work.

Therefore:

O(n log n).

Correct Answer:

O(n log n).`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 Algorithms Practice",
    sourceUrl: null,
  },

  {
    questionId: 1837,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Which data structure is commonly used to implement a min-priority queue efficiently?`,
    options: [
      "Min-heap",
      "Stack",
      "Singly linked list without ordering",
      "Plain string",
    ],
    answer: "Min-heap",
    solution: `A binary min-heap supports operations such
as:

Insert -> O(log n)
Remove minimum -> O(log n)
Peek minimum -> O(1)

Java's PriorityQueue uses a heap-based
implementation.

Correct Answer:

Min-heap.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 DSA Practice",
    sourceUrl: null,
  },

  {
    questionId: 1838,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Which Linux command changes file permission bits?`,
    options: ["chmod", "grep", "pwd", "mkdir"],
    answer: "chmod",
    solution: `chmod means:

change mode.

Example:

chmod 755 script.sh

changes permission bits according to the
specified mode.

Correct Answer:

chmod.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM ISDL 2023 Linux Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-isdl-software/",
  },

  {
    questionId: 1839,
    companyId: 10,
    year: 2023,
    category: "programming",
    question: `Which Linux command displays the manual documentation for another command?`,
    options: ["man", "rm", "cd", "touch"],
    answer: "man",
    solution: `The man command displays manual pages.

Example:

man chmod

shows documentation for chmod.

Correct Answer:

man.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM ISDL 2023 Linux Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-isdl-software/",
  },

  {
    questionId: 1840,
    companyId: 10,
    year: 2023,
    category: "grammar",
    question: `Choose the correctly spelled word.`,
    options: ["Necessary", "Necesary", "Neccessary", "Necesarry"],
    answer: "Necessary",
    solution: `The correct spelling is:

Necessary

Correct Answer:

Necessary.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 English Assessment Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-associate-systems-engineer-on-campus-2023-2/",
  },

  {
    questionId: 1841,
    companyId: 10,
    year: 2023,
    category: "grammar",
    question: `Choose the synonym of "brief".`,
    options: ["Concise", "Lengthy", "Permanent", "Distant"],
    answer: "Concise",
    solution: `Brief can mean short in duration or
concise in expression.

Among the options:

Concise

is the closest synonym.

Correct Answer:

Concise.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 English Assessment Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-associate-systems-engineer-on-campus-2023-2/",
  },

  {
    questionId: 1842,
    companyId: 10,
    year: 2023,
    category: "grammar",
    question: `Choose the grammatically correct sentence.`,
    options: [
      "They have completed the assignment.",
      "They has completed the assignment.",
      "They have complete the assignment.",
      "They is completed the assignment.",
    ],
    answer: "They have completed the assignment.",
    solution: `Present perfect:

have/has + past participle

With "they", use:

have

Past participle of complete:

completed

Therefore:

They have completed the assignment.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 English Assessment Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-ase-on-campus/",
  },

  {
    questionId: 1843,
    companyId: 10,
    year: 2023,
    category: "reasoning",
    question: `Find the next number:

5, 10, 20, 40, 80, ?`,
    options: ["100", "120", "140", "160"],
    answer: "160",
    solution: `Each term is multiplied by 2.

5 × 2 = 10
10 × 2 = 20
20 × 2 = 40
40 × 2 = 80

Next:

80 × 2 = 160.

Correct Answer:

160.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 Cognitive Practice",
    sourceUrl: null,
  },

  {
    questionId: 1844,
    companyId: 10,
    year: 2023,
    category: "reasoning",
    question: `A is north of B. B is east of C. In which direction is A from C?`,
    options: ["North-East", "North-West", "South-East", "South-West"],
    answer: "North-East",
    solution: `Let C be at:

(0, 0)

B is east of C:

(1, 0)

A is north of B:

(1, 1)

Therefore A is north-east of C.

Correct Answer:

North-East.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 Cognitive Practice",
    sourceUrl: null,
  },

  {
    questionId: 1845,
    companyId: 10,
    year: 2023,
    category: "aptitude",
    question: `A number is increased from 200 to 250. What is the percentage increase?`,
    options: ["20%", "25%", "30%", "50%"],
    answer: "25%",
    solution: `Increase:

250 - 200 = 50

Percentage increase:

(50 / 200) × 100

= 25%.

Correct Answer:

25%.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 Quantitative Practice",
    sourceUrl: null,
  },

  {
    questionId: 1846,
    companyId: 10,
    year: 2023,
    category: "aptitude",
    question: `The average of 10, 20, 30, 40 and 50 is:`,
    options: ["25", "30", "35", "40"],
    answer: "30",
    solution: `Sum:

10 + 20 + 30 + 40 + 50
= 150

Number of values:

5

Average:

150 / 5
= 30.

Correct Answer:

30.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 Quantitative Practice",
    sourceUrl: null,
  },

  {
    questionId: 1847,
    companyId: 10,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

x = 1

for i = 1 to 4
    x = x * 2

print x`,
    options: ["8", "16", "32", "4"],
    answer: "16",
    solution: `Initially:

x = 1

Iteration 1:
x = 2

Iteration 2:
x = 4

Iteration 3:
x = 8

Iteration 4:
x = 16

Correct Answer:

16.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 Programming Logic Practice",
    sourceUrl: null,
  },

  {
    questionId: 1848,
    companyId: 10,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

a = 10
b = 20

temp = a
a = b
b = temp

print a, b`,
    options: ["20 10", "10 20", "20 20", "10 10"],
    answer: "20 10",
    solution: `Initially:

a = 10
b = 20

temp = a
temp = 10

a = b
a = 20

b = temp
b = 10

Output:

20 10.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 Programming Logic Practice",
    sourceUrl: null,
  },

  {
    questionId: 1849,
    companyId: 10,
    year: 2023,
    category: "cloud",
    question: `What is the main purpose of encryption?`,
    options: [
      "Transform readable data into a protected form that requires appropriate cryptographic means to recover",
      "Sort an integer array",
      "Increase CPU clock speed",
      "Create SQL tables",
    ],
    answer:
      "Transform readable data into a protected form that requires appropriate cryptographic means to recover",
    solution: `Encryption transforms plaintext into
ciphertext using a cryptographic algorithm
and key.

Authorized parties can recover the
plaintext using the appropriate
decryption process and key material.

Correct Answer:

Transform readable data into a protected
form that requires appropriate
cryptographic means to recover.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "IBM 2023 Security Fundamentals Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-for-software-developer-internship-on-campus-2023/",
  },
];

async function seedIBM2023Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 10,
      year: 2023,
    });

    console.log("Old IBM 2023 questions deleted");

    await CompanyQuestion.insertMany(questions);

    console.log(`${questions.length} IBM 2023 questions seeded successfully`);
  } catch (error) {
    console.error("Error seeding IBM 2023 questions:", error);
  } finally {
    await mongoose.disconnect();

    console.log("MongoDB disconnected");
  }
}

seedIBM2023Questions();
