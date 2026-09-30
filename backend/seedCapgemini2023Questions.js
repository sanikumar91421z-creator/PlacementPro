require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [

  // =========================================================
  // PSEUDOCODE / OUTPUT / DSA Q1080-Q1094
  // =========================================================

  {
    questionId: 1080,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `Predict the output:

a = 10
b = 6

PRINT a & b`,
    options: ["2", "4", "6", "14"],
    answer: "2",
    solution:
      "10 = 1010 and 6 = 0110. Bitwise AND gives 0010 because only one corresponding bit is 1 in both numbers. 0010 is decimal 2.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 bitwise/output assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1081,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `Predict the output:

x = 5
PRINT x << 2`,
    options: ["10", "15", "20", "25"],
    answer: "20",
    solution:
      "Left shifting 5 by two positions multiplies it by 2², assuming no overflow. Therefore 5 × 4 = 20.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 bitwise-shifting assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1082,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `Predict the output:

x = 32
PRINT x >> 3`,
    options: ["2", "4", "8", "16"],
    answer: "4",
    solution:
      "32 is 100000 in binary. Shifting it three positions to the right produces 000100, which is decimal 4.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 bitwise-shifting assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1083,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `Predict the output:

sum = 0

FOR i = 1 TO 5
    sum = sum + i
END FOR

PRINT sum`,
    options: ["10", "15", "20", "25"],
    answer: "15",
    solution:
      "The loop adds 1 + 2 + 3 + 4 + 5. The total is 15.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 loop/output assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1084,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `Predict the output:

sum = 0

FOR i = 1 TO 8
    IF i % 2 != 0
        sum = sum + i
    END IF
END FOR

PRINT sum`,
    options: ["12", "16", "20", "36"],
    answer: "16",
    solution:
      "Odd numbers from 1 through 8 are 1, 3, 5 and 7. Their sum is 1 + 3 + 5 + 7 = 16.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 loops/conditionals assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1085,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `Predict the output:

count = 0

FOR i = 1 TO 3
    FOR j = 1 TO 4
        count = count + 1
    END FOR
END FOR

PRINT count`,
    options: ["7", "10", "12", "16"],
    answer: "12",
    solution:
      "The outer loop runs 3 times. During every outer iteration the inner loop runs 4 times. Total executions = 3 × 4 = 12.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 nested-loop assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1086,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `Predict the output:

FUNCTION fun(n)
    IF n == 0
        RETURN 1
    END IF

    RETURN n * fun(n - 1)
END FUNCTION

PRINT fun(5)`,
    options: ["25", "60", "120", "125"],
    answer: "120",
    solution:
      "The recursive function calculates factorial. fun(5) = 5 × 4 × 3 × 2 × 1 × fun(0). Since fun(0)=1, the answer is 120.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 recursion assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1087,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `A stack initially contains no elements.

PUSH(4)
PUSH(8)
PUSH(12)
POP()
PUSH(16)

PRINT TOP()`,
    options: ["4", "8", "12", "16"],
    answer: "16",
    solution:
      "After the first three pushes the stack is [4,8,12]. POP removes 12. PUSH(16) gives [4,8,16]. Therefore TOP() is 16.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 stack assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1088,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `A queue is initially empty.

ENQUEUE(5)
ENQUEUE(10)
ENQUEUE(15)
DEQUEUE()
ENQUEUE(20)

PRINT FRONT()`,
    options: ["5", "10", "15", "20"],
    answer: "10",
    solution:
      "A queue uses FIFO. DEQUEUE removes the first inserted value, 5. The queue becomes [10,15,20], so FRONT() is 10.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 queue assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1089,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `Predict the output:

arr = [7, 3, 11, 5, 9]
max = arr[0]

FOR i = 1 TO 4
    IF arr[i] > max
        max = arr[i]
    END IF
END FOR

PRINT max`,
    options: ["7", "9", "11", "35"],
    answer: "11",
    solution:
      "max starts at 7. 3 does not replace it. 11 becomes the maximum. Neither 5 nor 9 exceeds 11. Therefore the output is 11.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 array/data-structure assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1090,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `Predict the output:

x = 3

IF x > 5
    PRINT "A"
ELSE IF x > 2
    PRINT "B"
ELSE
    PRINT "C"
END IF`,
    options: ["A", "B", "C", "No output"],
    answer: "B",
    solution:
      "3 > 5 is false, but 3 > 2 is true. Therefore the second branch executes and prints B.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 conditional assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1091,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `Predict the output:

sum = 0

FOR i = 1 TO 7
    IF i == 4
        CONTINUE
    END IF

    sum = sum + i
END FOR

PRINT sum`,
    options: ["21", "24", "28", "32"],
    answer: "24",
    solution:
      "Normally 1+2+3+4+5+6+7 = 28. CONTINUE skips the addition when i=4. Therefore 28 - 4 = 24.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 loops/control-flow assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1092,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `Predict the output:

x = 1

WHILE x < 20
    x = x * 2
END WHILE

PRINT x`,
    options: ["16", "20", "24", "32"],
    answer: "32",
    solution:
      "The values of x become 1 → 2 → 4 → 8 → 16 → 32. At 32, x < 20 becomes false, so the output is 32.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 loop/output assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1093,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `Predict the output:

arr = [1, 2, 3, 4, 5]

FOR i = 0 TO 1
    temp = arr[i]
    arr[i] = arr[4 - i]
    arr[4 - i] = temp
END FOR

PRINT arr`,
    options: [
      "[1,2,3,4,5]",
      "[5,4,3,2,1]",
      "[5,2,3,4,1]",
      "[4,5,3,1,2]"
    ],
    answer: "[5,4,3,2,1]",
    solution:
      "At i=0, positions 0 and 4 are swapped: [5,2,3,4,1]. At i=1, positions 1 and 3 are swapped: [5,4,3,2,1].",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 array/output assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1094,
    companyId: 6,
    year: 2023,
    category: "pseudocode",
    question: `A singly linked list is:

10 -> 20 -> 30 -> NULL

A new node containing 5 is inserted at the beginning.

What is the resulting list?`,
    options: [
      "10 -> 20 -> 30 -> 5",
      "5 -> 10 -> 20 -> 30",
      "10 -> 5 -> 20 -> 30",
      "30 -> 20 -> 10 -> 5"
    ],
    answer: "5 -> 10 -> 20 -> 30",
    solution:
      "Insertion at the beginning makes the new node point to the old head. The new node containing 5 therefore becomes the head.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 linked-list assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // DSA / ALGORITHMS / CS FUNDAMENTALS Q1095-Q1104
  // =========================================================

  {
    questionId: 1095,
    companyId: 6,
    year: 2023,
    category: "java",
    question:
      "Which data structure follows LIFO?",
    options: ["Queue", "Stack", "Graph", "Tree"],
    answer: "Stack",
    solution:
      "Stack follows Last-In-First-Out. The most recently pushed element is removed first.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 data-structures assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1096,
    companyId: 6,
    year: 2023,
    category: "java",
    question:
      "Which data structure follows FIFO?",
    options: ["Stack", "Queue", "BST", "Heap"],
    answer: "Queue",
    solution:
      "Queue follows First-In-First-Out: the element inserted first is removed first.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 data-structures assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1097,
    companyId: 6,
    year: 2023,
    category: "java",
    question:
      "Which graph traversal normally uses a queue?",
    options: ["DFS", "BFS", "Inorder", "Postorder"],
    answer: "BFS",
    solution:
      "Breadth-First Search processes vertices level by level. A queue preserves the order in which discovered vertices should be processed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 BFS/DFS reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1098,
    companyId: 6,
    year: 2023,
    category: "java",
    question:
      "Which graph traversal is naturally implemented using recursion or an explicit stack?",
    options: ["BFS", "DFS", "Binary search", "Level-order only"],
    answer: "DFS",
    solution:
      "Depth-First Search explores one path deeply before backtracking. Recursion uses the call stack, while an iterative DFS can use an explicit stack.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 BFS/DFS reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1099,
    companyId: 6,
    year: 2023,
    category: "java",
    question:
      "Which Binary Search Tree traversal returns keys in ascending order?",
    options: ["Preorder", "Inorder", "Postorder", "Level order"],
    answer: "Inorder",
    solution:
      "Inorder traversal visits left subtree, root and right subtree. In a BST this produces the keys in sorted order.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 tree-traversal reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1100,
    companyId: 6,
    year: 2023,
    category: "java",
    question:
      "What is the time complexity of binary search on a sorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(log n)",
    solution:
      "Each binary-search comparison removes approximately half of the remaining search space, resulting in logarithmic complexity.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 algorithms assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1101,
    companyId: 6,
    year: 2023,
    category: "java",
    question:
      "Which data structure provides O(1) indexed access to an element?",
    options: ["Array", "Singly linked list", "Queue implemented as linked nodes", "Binary tree"],
    answer: "Array",
    solution:
      "An array stores elements in contiguous indexed positions, so an element can be accessed directly using its index in constant time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 array-vs-linked-list interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1102,
    companyId: 6,
    year: 2023,
    category: "java",
    question:
      "Which OOP feature allows multiple constructors with different parameter lists in the same class?",
    options: [
      "Constructor overloading",
      "Constructor overriding",
      "Encapsulation only",
      "Normalization"
    ],
    answer: "Constructor overloading",
    solution:
      "Constructor overloading means defining multiple constructors in the same class with different parameter lists. This was among the topics reported in a 2023 Capgemini Analyst interview.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 constructor-overloading reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1103,
    companyId: 6,
    year: 2023,
    category: "java",
    question:
      "Which OOP concept hides internal object state and controls access through methods?",
    options: ["Encapsulation", "Recursion", "Sorting", "Indexing"],
    answer: "Encapsulation",
    solution:
      "Encapsulation bundles data and behavior and restricts direct access to internal state, commonly using private fields and controlled public methods.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 OOP reported interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1104,
    companyId: 6,
    year: 2023,
    category: "java",
    question:
      "What is the worst-case time complexity of searching for a value in an unsorted array using linear search?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n)",
    solution:
      "In the worst case the target is at the final position or absent, requiring examination of all n elements.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 algorithms assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // VERBAL / COMMUNICATION Q1105-Q1112
  // =========================================================

  {
    questionId: 1105,
    companyId: 6,
    year: 2023,
    category: "grammar",
    question: "Choose the synonym of 'accurate'.",
    options: ["Incorrect", "Precise", "Uncertain", "Careless"],
    answer: "Precise",
    solution:
      "Accurate means correct or exact. 'Precise' is the closest option.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1106,
    companyId: 6,
    year: 2023,
    category: "grammar",
    question: "Choose the antonym of 'optimistic'.",
    options: ["Positive", "Hopeful", "Pessimistic", "Confident"],
    answer: "Pessimistic",
    solution:
      "Optimistic means expecting favorable outcomes. Pessimistic means tending to expect unfavorable outcomes.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1107,
    companyId: 6,
    year: 2023,
    category: "grammar",
    question: "Choose the grammatically correct sentence.",
    options: [
      "She have finished her work.",
      "She has finished her work.",
      "She has finish her work.",
      "She finishing her work."
    ],
    answer: "She has finished her work.",
    solution:
      "The present perfect for third-person singular uses has + past participle. Therefore 'has finished' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1108,
    companyId: 6,
    year: 2023,
    category: "grammar",
    question:
      "Fill in the blank: The manager insisted ___ reviewing the report again.",
    options: ["on", "at", "to", "for"],
    answer: "on",
    solution:
      "The standard construction is 'insist on' followed by a noun or gerund: insisted on reviewing.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1109,
    companyId: 6,
    year: 2023,
    category: "grammar",
    question:
      "Identify the incorrect word: 'Each of the candidates have received an email.'",
    options: ["Each", "candidates", "have", "email"],
    answer: "have",
    solution:
      "'Each' is singular. Therefore the verb should be 'has': Each of the candidates has received an email.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1110,
    companyId: 6,
    year: 2023,
    category: "grammar",
    question:
      "Choose the correct passive voice: 'The developer fixed the bug.'",
    options: [
      "The bug was fixed by the developer.",
      "The bug is fixing by the developer.",
      "The developer was fixed by the bug.",
      "The bug has fix by the developer."
    ],
    answer: "The bug was fixed by the developer.",
    solution:
      "The original is simple past. Passive simple past uses was/were + past participle, so 'was fixed' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1111,
    companyId: 6,
    year: 2023,
    category: "comprehension",
    question:
      "A company moved some services to the cloud. Hardware maintenance decreased, but engineers required additional cloud-security training. Which conclusion is best supported?",
    options: [
      "Cloud adoption removed every technical challenge.",
      "Cloud adoption reduced some maintenance while creating a training requirement.",
      "The company stopped using software.",
      "Cloud computing requires no security knowledge."
    ],
    answer:
      "Cloud adoption reduced some maintenance while creating a training requirement.",
    solution:
      "The passage states both effects directly: reduced hardware maintenance and an increased need for cloud-security training.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 verbal/comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 1112,
    companyId: 6,
    year: 2023,
    category: "grammar",
    question:
      "Choose the correctly spelled word.",
    options: ["Recieve", "Receive", "Receeve", "Receve"],
    answer: "Receive",
    solution:
      "The correct spelling is 'receive'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 verbal assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // DBMS / SQL INTERVIEW Q1113-Q1119
  // =========================================================

  {
    questionId: 1113,
    companyId: 6,
    year: 2023,
    category: "dbms",
    question:
      "What is the primary purpose of database normalization?",
    options: [
      "Increase unnecessary duplication",
      "Reduce redundancy and undesirable data dependencies",
      "Delete all relationships",
      "Convert SQL into Java"
    ],
    answer:
      "Reduce redundancy and undesirable data dependencies",
    solution:
      "Normalization organizes relational data to reduce unnecessary duplication and update anomalies. Normalization and its types were specifically reported in a Capgemini 2023 interview.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 normalization reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1114,
    companyId: 6,
    year: 2023,
    category: "dbms",
    question:
      "Which normal form requires atomic values and removes repeating groups?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "1NF",
    solution:
      "First Normal Form requires each attribute value to be atomic rather than storing repeating groups or multiple independent values in one field.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 normalization interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1115,
    companyId: 6,
    year: 2023,
    category: "sql",
    question:
      "Which query finds the second-highest distinct salary from Employee?",
    options: [
      "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
      "SELECT MIN(salary) FROM Employee;",
      "SELECT salary FROM Employee;",
      "SELECT COUNT(salary) FROM Employee;"
    ],
    answer:
      "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
    solution:
      "The inner query obtains the maximum salary. The outer query finds the largest salary strictly below that maximum, giving the second-highest distinct salary. This SQL problem was specifically reported in a Capgemini 2023 interview.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 second-highest-salary reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1116,
    companyId: 6,
    year: 2023,
    category: "sql",
    question:
      "Which query returns the maximum employee salary for each department?",
    options: [
      "SELECT department_id, MAX(salary) FROM Employee GROUP BY department_id;",
      "SELECT MAX(salary) FROM Employee;",
      "SELECT department_id FROM Employee;",
      "SELECT salary, COUNT(*) FROM Employee;"
    ],
    answer:
      "SELECT department_id, MAX(salary) FROM Employee GROUP BY department_id;",
    solution:
      "GROUP BY creates one group for each department. MAX(salary) then calculates the highest salary within each group. This was specifically reported as a Capgemini 2023 interview SQL question.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName:
      "Capgemini 2023 maximum-salary-by-department reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1117,
    companyId: 6,
    year: 2023,
    category: "sql",
    question:
      "What is the key difference between DELETE and TRUNCATE in SQL?",
    options: [
      "DELETE can remove selected rows using WHERE, while TRUNCATE removes all rows from the table",
      "TRUNCATE supports WHERE but DELETE does not",
      "DELETE can only delete tables",
      "They are identical in every DBMS"
    ],
    answer:
      "DELETE can remove selected rows using WHERE, while TRUNCATE removes all rows from the table",
    solution:
      "DELETE is a row-removal statement and can normally use a WHERE condition. TRUNCATE removes all table rows and does not use WHERE. Exact transaction/logging behavior can vary by DBMS. DELETE vs TRUNCATE was reported in a 2023 Capgemini Analyst interview.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 DELETE-vs-TRUNCATE reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1118,
    companyId: 6,
    year: 2023,
    category: "dbms",
    question:
      "What is the main role of a primary key?",
    options: [
      "Uniquely identify each row",
      "Allow unlimited duplicate identifiers",
      "Store only floating-point values",
      "Replace every foreign key"
    ],
    answer: "Uniquely identify each row",
    solution:
      "A primary key provides a unique identifier for each row in a relational table.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 DBMS interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1119,
    companyId: 6,
    year: 2023,
    category: "dbms",
    question:
      "What does a foreign key primarily represent?",
    options: [
      "A relationship to a candidate/primary key in a related table",
      "An automatically duplicated primary key",
      "A programming loop",
      "A sorting algorithm"
    ],
    answer:
      "A relationship to a candidate/primary key in a related table",
    solution:
      "A foreign key references a candidate key, commonly the primary key, in a related table and helps enforce referential integrity.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 DBMS interview practice",
    sourceUrl: null,
  },

  // =========================================================
  // PROGRAMMING / INTERVIEW CODING Q1120-Q1129
  // =========================================================

  {
    questionId: 1120,
    companyId: 6,
    year: 2023,
    category: "programming",
    question:
      "Given a string, determine whether it is a palindrome while ignoring letter case.",
    options: [],
    answer:
      "Use two pointers, one at each end, and compare corresponding characters.",
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

        System.out.println(
            isPalindrome(str) ? "Palindrome" : "Not Palindrome"
        );
    }
}

Output:
Palindrome

After converting "Madam" to "madam", corresponding characters
from both ends match.

Time complexity: O(n)
Space complexity: O(n) because toLowerCase() creates a normalized string.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Capgemini 2023 palindrome explicitly reported technical-interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1121,
    companyId: 6,
    year: 2023,
    category: "programming",
    question:
      "Given an integer n, determine whether it is a prime number.",
    options: [],
    answer:
      "Check divisibility from 2 through sqrt(n).",
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

        System.out.println(
            isPrime(n) ? "Prime" : "Not Prime"
        );
    }
}

Output:
Prime

A composite number must have a factor not greater than its
square root.

Time complexity: O(sqrt(n))
Space complexity: O(1)`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 prime-number reported interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1122,
    companyId: 6,
    year: 2023,
    category: "programming",
    question:
      "Given an integer array, find its largest element.",
    options: [],
    answer:
      "Traverse once while maintaining the largest value encountered.",
    solution: `public class Main {
    public static void main(String[] args) {

        int[] arr = {10, 7, 25, 12, 18};

        int max = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        System.out.println(max);
    }
}

Output:
25

Time complexity: O(n)
Space complexity: O(1)`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 array/coding assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1123,
    companyId: 6,
    year: 2023,
    category: "programming",
    question:
      "Reverse an integer array in-place.",
    options: [],
    answer:
      "Use two pointers and swap elements from opposite ends until the pointers meet.",
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
    sourceName: "Capgemini 2023 array/DSA coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1124,
    companyId: 6,
    year: 2023,
    category: "programming",
    question:
      "Implement an iterative binary search for a sorted integer array.",
    options: [],
    answer:
      "Maintain left and right boundaries and repeatedly compare the target with the middle element.",
    solution: `public class Main {

    static int binarySearch(int[] arr, int target) {

        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {

            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                return mid;
            }

            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    public static void main(String[] args) {

        int[] arr = {2, 5, 8, 12, 16, 23};

        System.out.println(binarySearch(arr, 12));
    }
}

Output:
3

Time complexity: O(log n)
Space complexity: O(1)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 algorithms/coding assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1125,
    companyId: 6,
    year: 2023,
    category: "programming",
    question:
      "Given an integer array, remove duplicate values while preserving their first-occurrence order.",
    options: [],
    answer:
      "Insert the values into a LinkedHashSet, which keeps unique elements in insertion order.",
    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        int[] arr = {1, 2, 2, 3, 1, 4};

        Set<Integer> unique = new LinkedHashSet<>();

        for (int value : arr) {
            unique.add(value);
        }

        System.out.println(unique);
    }
}

Output:
[1, 2, 3, 4]

LinkedHashSet removes duplicate values while preserving
the order of their first occurrence.

Time complexity: O(n) expected
Space complexity: O(n)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 array/DSA coding practice",
    sourceUrl: null,
  },

  {
    questionId: 1126,
    companyId: 6,
    year: 2023,
    category: "programming",
    question:
      "Given N, print the first N Fibonacci numbers.",
    options: [],
    answer:
      "Maintain two previous values and repeatedly generate their sum.",
    solution: `public class Main {
    public static void main(String[] args) {

        int n = 7;

        long a = 0;
        long b = 1;

        for (int i = 0; i < n; i++) {

            System.out.print(a + " ");

            long next = a + b;
            a = b;
            b = next;
        }
    }
}

Output:
0 1 1 2 3 5 8

Time complexity: O(n)
Space complexity: O(1)`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 basic coding/interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1127,
    companyId: 6,
    year: 2023,
    category: "programming",
    question:
      "Given a string, count the frequency of every character while preserving the order of first appearance.",
    options: [],
    answer:
      "Use a LinkedHashMap to store each character and its frequency.",
    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        String str = "banana";

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

            System.out.println(
                entry.getKey() + " -> " + entry.getValue()
            );
        }
    }
}

Output:
b -> 1
a -> 3
n -> 2

Time complexity: O(n) expected
Space complexity: O(k), where k is the number of distinct characters.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 string/DSA coding practice",
    sourceUrl: null,
  },

  {
    questionId: 1128,
    companyId: 6,
    year: 2023,
    category: "programming",
    question:
      "Implement Breadth-First Search for a graph represented by an adjacency list.",
    options: [],
    answer:
      "Use a queue and a visited array. Mark each discovered vertex and process vertices in FIFO order.",
    solution: `import java.util.*;

public class Main {

    static void bfs(
        List<List<Integer>> graph,
        int start
    ) {
        boolean[] visited =
            new boolean[graph.size()];

        Queue<Integer> queue =
            new LinkedList<>();

        visited[start] = true;
        queue.offer(start);

        while (!queue.isEmpty()) {

            int node = queue.poll();

            System.out.print(node + " ");

            for (int next : graph.get(node)) {

                if (!visited[next]) {
                    visited[next] = true;
                    queue.offer(next);
                }
            }
        }
    }

    public static void main(String[] args) {

        List<List<Integer>> graph =
            new ArrayList<>();

        for (int i = 0; i < 4; i++) {
            graph.add(new ArrayList<>());
        }

        graph.get(0).add(1);
        graph.get(0).add(2);
        graph.get(1).add(3);

        bfs(graph, 0);
    }
}

One possible output for this adjacency order:
0 1 2 3

BFS visits nodes level by level using a queue.

Time complexity: O(V + E)
Space complexity: O(V)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2023 BFS explicitly reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1129,
    companyId: 6,
    year: 2023,
    category: "programming",
    question:
      "Implement inorder traversal of a binary tree.",
    options: [],
    answer:
      "Recursively traverse the left subtree, visit the current node, and then traverse the right subtree.",
    solution: `public class Main {

    static class Node {
        int data;
        Node left;
        Node right;

        Node(int data) {
            this.data = data;
        }
    }

    static void inorder(Node root) {

        if (root == null) {
            return;
        }

        inorder(root.left);

        System.out.print(root.data + " ");

        inorder(root.right);
    }

    public static void main(String[] args) {

        Node root = new Node(2);

        root.left = new Node(1);
        root.right = new Node(3);

        inorder(root);
    }
}

Output:
1 2 3

Inorder order is:
Left -> Root -> Right

For a Binary Search Tree this visits keys in sorted order.

Time complexity: O(n)
Space complexity: O(h) recursion stack, where h is tree height.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Capgemini 2023 tree-traversal explicitly reported interview topic",
    sourceUrl: null,
  },
];

async function seedCapgemini2023Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 6,
      year: 2023,
    });

    console.log("Old Capgemini 2023 questions deleted");

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Capgemini 2023 questions seeded successfully`
    );

    process.exit(0);
  } catch (error) {
    console.error(
      "Error seeding Capgemini 2023 questions:",
      error
    );

    process.exit(1);
  }
}

seedCapgemini2023Questions();