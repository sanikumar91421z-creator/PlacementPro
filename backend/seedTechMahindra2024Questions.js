require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [

  // =========================================================
  // APTITUDE / REASONING / VERBAL Q1380-Q1391
  // =========================================================

  {
    questionId: 1380,
    companyId: 8,
    year: 2024,
    category: "aptitude",
    question:
      "A number is increased by 25% and becomes 500. What was the original number?",
    options: ["375", "400", "425", "450"],
    answer: "400",
    solution:
      "Let the original number be x. After a 25% increase, 1.25x = 500. Therefore x = 500 / 1.25 = 400.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 quantitative aptitude assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1381,
    companyId: 8,
    year: 2024,
    category: "aptitude",
    question:
      "A can complete a task in 20 days and B in 30 days. How many days will they take together?",
    options: ["10", "12", "15", "18"],
    answer: "12",
    solution:
      "Combined work per day = 1/20 + 1/30 = 5/60 = 1/12. Therefore they require 12 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 quantitative aptitude assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1382,
    companyId: 8,
    year: 2024,
    category: "aptitude",
    question:
      "A fair coin is tossed three times. What is the probability of obtaining exactly two heads?",
    options: ["1/8", "1/4", "3/8", "1/2"],
    answer: "3/8",
    solution:
      "There are 2^3 = 8 equally likely outcomes. Exactly two heads occur in HHT, HTH and THH, giving probability 3/8.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 quantitative aptitude assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1383,
    companyId: 8,
    year: 2024,
    category: "aptitude",
    question:
      "The average of five numbers is 36. If four numbers are 28, 32, 40 and 45, find the fifth number.",
    options: ["30", "35", "40", "45"],
    answer: "35",
    solution:
      "Total = 36 × 5 = 180. Sum of the four numbers = 145. Fifth number = 180 - 145 = 35.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 quantitative aptitude assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1384,
    companyId: 8,
    year: 2024,
    category: "reasoning",
    question:
      "Find the next number: 4, 9, 19, 39, 79, ?",
    options: ["119", "139", "159", "169"],
    answer: "159",
    solution:
      "Each number is previous × 2 + 1. Therefore 79 × 2 + 1 = 159.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 logical reasoning assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1385,
    companyId: 8,
    year: 2024,
    category: "reasoning",
    question:
      "A person walks 10 m north, 5 m east and then 10 m south. Where is the person relative to the starting point?",
    options: ["5 m East", "5 m West", "10 m North", "10 m South"],
    answer: "5 m East",
    solution:
      "The north and south movements cancel. Only the 5 m east movement remains.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 logical reasoning assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1386,
    companyId: 8,
    year: 2024,
    category: "reasoning",
    question:
      "If COMPUTER is coded by shifting every letter one position forward, what will the first four coded letters be?",
    options: ["DPNQ", "DPNP", "CPNQ", "EPNQ"],
    answer: "DPNQ",
    solution:
      "C->D, O->P, M->N and P->Q. Therefore the first four coded letters are DPNQ.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 logical reasoning assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1387,
    companyId: 8,
    year: 2024,
    category: "reasoning",
    question:
      "All programmers are logical thinkers. Some engineers are programmers. Which conclusion follows?",
    options: [
      "Some engineers are logical thinkers",
      "All engineers are programmers",
      "No engineer is logical",
      "All logical thinkers are engineers"
    ],
    answer: "Some engineers are logical thinkers",
    solution:
      "Some engineers belong to the programmer set, and all programmers are logical thinkers. Therefore those engineers are logical thinkers.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 logical reasoning assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1388,
    companyId: 8,
    year: 2024,
    category: "grammar",
    question:
      "Choose the grammatically correct sentence.",
    options: [
      "Neither of the candidates was selected.",
      "Neither of the candidates were selected.",
      "Neither candidates was selected.",
      "Neither candidates were selected."
    ],
    answer: "Neither of the candidates was selected.",
    solution:
      "In standard formal usage, 'neither' is singular here, so 'was' is appropriate.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 verbal ability assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1389,
    companyId: 8,
    year: 2024,
    category: "grammar",
    question:
      "Choose the synonym of 'prudent'.",
    options: ["Careless", "Wise", "Rapid", "Angry"],
    answer: "Wise",
    solution:
      "Prudent means careful and sensible in making decisions. 'Wise' is the closest option.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 verbal ability assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1390,
    companyId: 8,
    year: 2024,
    category: "grammar",
    question:
      "Fill in the blank: The software is compatible ___ the latest operating system.",
    options: ["to", "with", "at", "for"],
    answer: "with",
    solution:
      "The standard expression is 'compatible with'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 verbal ability assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1391,
    companyId: 8,
    year: 2024,
    category: "grammar",
    question:
      "Choose the antonym of 'temporary'.",
    options: ["Brief", "Permanent", "Limited", "Short"],
    answer: "Permanent",
    solution:
      "Temporary means lasting for a limited time. Permanent is its opposite.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 verbal ability assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // COMPUTER PROGRAMMING / DSA Q1392-Q1401
  // =========================================================

  {
    questionId: 1392,
    companyId: 8,
    year: 2024,
    category: "web",
    question:
      "Which of the following is the largest WAN in the world?",
    options: ["Internet", "LAN", "Bluetooth network", "PAN"],
    answer: "Internet",
    solution:
      "The Internet connects networks across the world and is the largest example of a Wide Area Network.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 Computer Programming MCQ - largest WAN",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-full-time-2024/",
  },

  {
    questionId: 1393,
    companyId: 8,
    year: 2024,
    category: "pseudocode",
    question:
      "A full binary tree has n leaves. How many total nodes does it contain?",
    options: ["n", "n + 1", "2n - 1", "2n + 1"],
    answer: "2n - 1",
    solution:
      "In a full binary tree every internal node has exactly two children. If there are n leaves, there are n - 1 internal nodes. Total nodes = n + (n - 1) = 2n - 1.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 Computer Programming MCQ - full binary tree",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-full-time-2024/",
  },

  {
    questionId: 1394,
    companyId: 8,
    year: 2024,
    category: "sql",
    question:
      "Which SQL statement is used to modify existing values in rows of a table?",
    options: ["UPDATE", "ALTER", "CREATE", "SELECT"],
    answer: "UPDATE",
    solution:
      "UPDATE changes values in existing rows. For example: UPDATE Employee SET salary = 50000 WHERE id = 1;",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 Computer Programming MCQ - SQL UPDATE",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-full-time-2024/",
  },

  {
    questionId: 1395,
    companyId: 8,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

SET x = 1

FOR i = 1 TO 5
    x = x * 2
END FOR

PRINT x`,
    options: ["16", "32", "64", "10"],
    answer: "32",
    solution:
      "Starting with 1, five doublings produce 2, 4, 8, 16 and 32.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1396,
    companyId: 8,
    year: 2024,
    category: "pseudocode",
    question: `What is printed?

SET sum = 0

FOR i = 1 TO 5
    IF i MOD 2 == 0
        sum = sum + i
    END IF
END FOR

PRINT sum`,
    options: ["5", "6", "9", "15"],
    answer: "6",
    solution:
      "The even values from 1 through 5 are 2 and 4. Their sum is 6.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1397,
    companyId: 8,
    year: 2024,
    category: "pseudocode",
    question:
      "Which data structure follows Last-In-First-Out order?",
    options: ["Queue", "Stack", "Graph", "Hash table"],
    answer: "Stack",
    solution:
      "A stack follows LIFO: the most recently inserted element is removed first.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 DSA assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1398,
    companyId: 8,
    year: 2024,
    category: "pseudocode",
    question:
      "What is the worst-case time complexity of binary search on a sorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(log n)",
    solution:
      "Each comparison eliminates approximately half of the remaining search interval, giving logarithmic time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 DSA assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1399,
    companyId: 8,
    year: 2024,
    category: "pseudocode",
    question:
      "Which data structure is typically used to implement Breadth-First Search?",
    options: ["Stack", "Queue", "Priority queue only", "Binary search tree"],
    answer: "Queue",
    solution:
      "BFS processes vertices in discovery order, which is naturally supported by a FIFO queue.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 DSA assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1400,
    companyId: 8,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

FUNCTION f(n)
    IF n <= 1
        RETURN 1
    END IF

    RETURN n * f(n - 1)
END FUNCTION

PRINT f(5)`,
    options: ["25", "60", "100", "120"],
    answer: "120",
    solution:
      "f(5) = 5 × 4 × 3 × 2 × 1 = 120.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1401,
    companyId: 8,
    year: 2024,
    category: "pseudocode",
    question:
      "What is the average time complexity of Merge Sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(n log n)",
    solution:
      "Merge Sort creates logarithmically many levels of division, while merging across each level processes O(n) elements. Therefore the complexity is O(n log n).",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2024 algorithms assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // COMPUTER SCIENCE FUNDAMENTALS Q1402-Q1409
  // =========================================================

  {
    questionId: 1402,
    companyId: 8,
    year: 2024,
    category: "web",
    question:
      "In which network topology are all workstations connected to a single common communication cable?",
    options: ["Star", "Bus", "Ring", "Mesh"],
    answer: "Bus",
    solution:
      "In a bus topology, devices share a common backbone cable.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 Computer Science MCQ - bus topology",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-full-time-2024/",
  },

  {
    questionId: 1403,
    companyId: 8,
    year: 2024,
    category: "java",
    question:
      "When a computer system uses more than one processor/CPU for processing, what is it called?",
    options: ["Multiprocessing", "Multitasking", "Spooling", "Paging"],
    answer: "Multiprocessing",
    solution:
      "Multiprocessing refers to a system using multiple processors or processing units to execute work.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 Computer Science MCQ - multiprocessing",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-full-time-2024/",
  },

  {
    questionId: 1404,
    companyId: 8,
    year: 2024,
    category: "debugging",
    question:
      "What is generally considered the first level of software testing?",
    options: [
      "Unit testing",
      "System testing",
      "Acceptance testing",
      "Regression testing"
    ],
    answer: "Unit testing",
    solution:
      "Unit testing verifies individual components or units and is normally considered the earliest testing level before integration, system and acceptance testing.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 Computer Science MCQ - testing level",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-full-time-2024/",
  },

  {
    questionId: 1405,
    companyId: 8,
    year: 2024,
    category: "debugging",
    question:
      "Structural testing is commonly known as:",
    options: [
      "White-box testing",
      "Black-box testing",
      "Acceptance testing",
      "Alpha testing"
    ],
    answer: "White-box testing",
    solution:
      "Structural or white-box testing designs tests with knowledge of the internal code structure, control flow or implementation.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 Computer Science MCQ - structural testing",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-full-time-2024/",
  },

  {
    questionId: 1406,
    companyId: 8,
    year: 2024,
    category: "java",
    question:
      "Which of the following is an example of a desktop operating system?",
    options: ["Windows 11", "HTTP", "MySQL", "HTML"],
    answer: "Windows 11",
    solution:
      "Windows 11 is a desktop operating system. HTTP is a protocol, MySQL is a DBMS and HTML is a markup language.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 Computer Science MCQ - desktop OS",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-full-time-2024/",
  },

  {
    questionId: 1407,
    companyId: 8,
    year: 2024,
    category: "dbms",
    question:
      "In the relational model, a tuple refers to:",
    options: ["A row", "A column", "A database server", "A primary key only"],
    answer: "A row",
    solution:
      "A tuple represents one record or row in a relation. An attribute corresponds to a column.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 Computer Science MCQ - RDBMS tuple",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-full-time-2024/",
  },

  {
    questionId: 1408,
    companyId: 8,
    year: 2024,
    category: "dbms",
    question:
      "Which normal form removes partial dependency of non-prime attributes on a candidate key?",
    options: ["1NF", "2NF", "3NF", "BCNF only"],
    answer: "2NF",
    solution:
      "Second Normal Form requires 1NF and eliminates partial dependencies of non-prime attributes on a proper subset of a candidate key. Normal forms were explicitly reported in a Tech Mahindra 2024 technical interview.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 interview - DBMS normal forms",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-6/",
  },

  {
    questionId: 1409,
    companyId: 8,
    year: 2024,
    category: "java",
    question:
      "Which statement correctly describes a static variable in C/C++?",
    options: [
      "It has static storage duration and retains its value across function calls when declared locally",
      "It is recreated with an undefined value after every statement",
      "It can only store strings",
      "It is the same as a SQL column"
    ],
    answer:
      "It has static storage duration and retains its value across function calls when declared locally",
    solution:
      "A local static variable is initialized once and its lifetime extends for the duration of the program, so its value can persist across calls. Static variables were specifically reported in a 2024 Tech Mahindra technical interview.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - static variable",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus/",
  },

  // =========================================================
  // AUTOMATA / CODING Q1410-Q1417
  // =========================================================

  {
    questionId: 1410,
    companyId: 8,
    year: 2024,
    category: "programming",
    question:
      "Given an integer, reverse its digits. For example, 12345 should become 54321.",
    options: [],
    answer:
      "Repeatedly extract the last digit using modulo 10 and append it to the reversed number.",
    solution: `public class Main {

    static int reverseNumber(int n) {

        int reverse = 0;

        while (n != 0) {

            int digit = n % 10;

            reverse = reverse * 10 + digit;

            n /= 10;
        }

        return reverse;
    }

    public static void main(String[] args) {

        System.out.println(reverseNumber(12345));
    }
}

Output:
54321

At each iteration:
digit = n % 10
reverse = reverse * 10 + digit
n = n / 10

Time complexity: O(d), where d is the number of digits.
Space complexity: O(1).

Reverse a number was specifically reported as one of
the two Automata coding problems in a Tech Mahindra
2024 fresher assessment.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 Automata problem - Reverse a Number",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-full-time-2024/",
  },

  {
    questionId: 1411,
    companyId: 8,
    year: 2024,
    category: "programming",
    question:
      "A packaging company stores the required temperatures of n items in an array. Count how many items require a storage temperature below 0.",
    options: [],
    answer:
      "Traverse the array and increment a counter whenever the temperature is less than zero.",
    solution: `public class Main {

    static int countBelowZero(int[] temperature) {

        int count = 0;

        for (int value : temperature) {

            if (value < 0) {
                count++;
            }
        }

        return count;
    }

    public static void main(String[] args) {

        int[] temperature = {
            5, -3, -10, 8, 0, -2
        };

        System.out.println(
            countBelowZero(temperature)
        );
    }
}

Output:
3

The negative temperatures are:
-3, -10 and -2.

Therefore 3 items require storage below zero.

Time complexity: O(n)
Space complexity: O(1)

This array-temperature problem was specifically
reported as the second Automata coding problem in a
Tech Mahindra 2024 fresher assessment.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 Automata problem - temperatures below zero",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-full-time-2024/",
  },

  {
    questionId: 1412,
    companyId: 8,
    year: 2024,
    category: "programming",
    question:
      "Write a program to determine whether a string is a palindrome.",
    options: [],
    answer:
      "Use two pointers at opposite ends and compare characters while moving toward the center.",
    solution: `public class Main {

    static boolean isPalindrome(String str) {

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

        System.out.println(
            isPalindrome("madam")
        );
    }
}

Output:
true

The characters at corresponding positions from
the two ends are equal.

Time complexity: O(n)
Space complexity: O(1)

Palindrome-string coding was explicitly reported
in a Tech Mahindra technical interview published
in October 2024.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - palindrome string",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus/",
  },

  {
    questionId: 1413,
    companyId: 8,
    year: 2024,
    category: "programming",
    question:
      "Write a program to determine whether a positive integer is prime.",
    options: [],
    answer:
      "Check divisibility from 2 through the square root of the number.",
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

        System.out.println(isPrime(29));
    }
}

Output:
true

If n has a factor larger than sqrt(n), it must
also have a corresponding factor smaller than
sqrt(n). Therefore checking through sqrt(n) is
sufficient.

Time complexity: O(sqrt(n))
Space complexity: O(1)

Prime-number coding was explicitly reported in a
Tech Mahindra 2024 technical interview.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - prime number",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus/",
  },

  {
    questionId: 1414,
    companyId: 8,
    year: 2024,
    category: "programming",
    question:
      "Write a program to calculate the factorial of a non-negative integer.",
    options: [],
    answer:
      "Multiply all integers from 1 through n.",
    solution: `public class Main {

    static long factorial(int n) {

        long result = 1;

        for (int i = 2; i <= n; i++) {
            result *= i;
        }

        return result;
    }

    public static void main(String[] args) {

        System.out.println(factorial(5));
    }
}

Output:
120

5! = 5 × 4 × 3 × 2 × 1 = 120.

Time complexity: O(n)
Space complexity: O(1)

Factorial coding was explicitly reported in a
Tech Mahindra 2024 technical interview.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - factorial",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus/",
  },

  {
    questionId: 1415,
    companyId: 8,
    year: 2024,
    category: "programming",
    question:
      "Reverse a singly linked list.",
    options: [],
    answer:
      "Iteratively redirect each node's next reference to its previous node using prev, current and next pointers.",
    solution: `class Node {

    int data;
    Node next;

    Node(int data) {
        this.data = data;
    }
}

public class Main {

    static Node reverse(Node head) {

        Node previous = null;
        Node current = head;

        while (current != null) {

            Node next = current.next;

            current.next = previous;

            previous = current;
            current = next;
        }

        return previous;
    }

    public static void main(String[] args) {

        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);

        head = reverse(head);

        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
    }
}

Output:
3 2 1

At every step we save the original next node,
reverse the current node's link and advance.

Time complexity: O(n)
Space complexity: O(1)

Reversing a linked list was explicitly reported
as a coding challenge in a Tech Mahindra
on-campus technical interview in May 2024.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - reverse linked list",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-6/",
  },

  {
    questionId: 1416,
    companyId: 8,
    year: 2024,
    category: "programming",
    question:
      "Write a program to reverse a string.",
    options: [],
    answer:
      "Traverse the string from the last character to the first and append each character to the result.",
    solution: `public class Main {

    static String reverse(String str) {

        StringBuilder result =
            new StringBuilder();

        for (
            int i = str.length() - 1;
            i >= 0;
            i--
        ) {
            result.append(str.charAt(i));
        }

        return result.toString();
    }

    public static void main(String[] args) {

        System.out.println(
            reverse("TechMahindra")
        );
    }
}

Output:
ardnihaMhceT

Time complexity: O(n)
Space complexity: O(n)

String reversal was explicitly reported in a
Tech Mahindra 2024 technical interview.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - string reverse",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus/",
  },

  {
    questionId: 1417,
    companyId: 8,
    year: 2024,
    category: "programming",
    question:
      "Write a program to determine whether a number is an Armstrong number.",
    options: [],
    answer:
      "Raise every digit to the power equal to the number of digits, add the results and compare the sum with the original number.",
    solution: `public class Main {

    static boolean isArmstrong(int n) {

        int original = n;

        int digits =
            String.valueOf(n).length();

        int sum = 0;

        while (n > 0) {

            int digit = n % 10;

            sum += (int) Math.pow(
                digit,
                digits
            );

            n /= 10;
        }

        return sum == original;
    }

    public static void main(String[] args) {

        System.out.println(
            isArmstrong(153)
        );
    }
}

Output:
true

153 has three digits:

1^3 + 5^3 + 3^3
= 1 + 125 + 27
= 153

Therefore 153 is an Armstrong number.

Armstrong-number implementation was explicitly
reported in a Tech Mahindra 2024 technical
interview.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - Armstrong number",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus/",
  },

  // =========================================================
  // TECHNICAL INTERVIEW Q1418-Q1429
  // =========================================================

  {
    questionId: 1418,
    companyId: 8,
    year: 2024,
    category: "pseudocode",
    question:
      "Explain Binary Search and state its time complexity.",
    options: [
      "Search a sorted collection by repeatedly halving the search range; O(log n)",
      "Search every element; O(log n)",
      "Sort the collection; O(1)",
      "Use a queue; O(n²)"
    ],
    answer:
      "Search a sorted collection by repeatedly halving the search range; O(log n)",
    solution:
      "Binary Search compares the target with the middle element of a sorted search interval. Based on the comparison, one half is discarded. This produces O(log n) time. Binary Search was explicitly reported in a Tech Mahindra 2024 technical interview.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - Binary Search",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-6/",
  },

  {
    questionId: 1419,
    companyId: 8,
    year: 2024,
    category: "java",
    question:
      "What is a Map data structure?",
    options: [
      "A structure that associates keys with values",
      "A structure that stores only duplicate keys",
      "A network topology",
      "A sorting algorithm"
    ],
    answer:
      "A structure that associates keys with values",
    solution:
      "A map stores key-value associations. Implementations differ in ordering and performance characteristics. The Map data structure was explicitly reported in a Tech Mahindra 2024 technical interview.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - Map data structure",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-6/",
  },

  {
    questionId: 1420,
    companyId: 8,
    year: 2024,
    category: "java",
    question:
      "Which are the four fundamental pillars commonly associated with object-oriented programming?",
    options: [
      "Encapsulation, Abstraction, Inheritance, Polymorphism",
      "Stack, Queue, Tree, Graph",
      "HTML, CSS, SQL, HTTP",
      "Process, Thread, CPU, RAM"
    ],
    answer:
      "Encapsulation, Abstraction, Inheritance, Polymorphism",
    solution:
      "The commonly taught OOP pillars are encapsulation, abstraction, inheritance and polymorphism. OOP concepts were explicitly reported in Tech Mahindra's 2024 technical interviews.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - OOP concepts",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus/",
  },

  {
    questionId: 1421,
    companyId: 8,
    year: 2024,
    category: "java",
    question:
      "What is inheritance in object-oriented programming?",
    options: [
      "A mechanism through which a class derives properties or behavior from another class",
      "A SQL sorting operation",
      "A network protocol",
      "A memory allocation algorithm"
    ],
    answer:
      "A mechanism through which a class derives properties or behavior from another class",
    solution:
      "Inheritance establishes a parent-child relationship between classes and can support reuse and specialization. Inheritance and its types were specifically reported in Tech Mahindra's 2024 technical interview.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 interview - inheritance and types",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus/",
  },

  {
    questionId: 1422,
    companyId: 8,
    year: 2024,
    category: "java",
    question:
      "What is the primary purpose of a constructor?",
    options: [
      "Initialize a newly created object",
      "Delete a database",
      "Sort an array automatically",
      "Create an operating-system process"
    ],
    answer: "Initialize a newly created object",
    solution:
      "A constructor runs as part of object creation and establishes the object's initial state. Constructors were specifically reported in Tech Mahindra's 2024 technical interview.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - constructor",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus/",
  },

  {
    questionId: 1423,
    companyId: 8,
    year: 2024,
    category: "sql",
    question:
      "Which SQL query displays Employee rows in descending order of salary?",
    options: [
      "SELECT * FROM Employee ORDER BY salary DESC;",
      "SELECT * FROM Employee ORDER salary DOWN;",
      "SELECT DESC salary FROM Employee;",
      "SELECT * FROM Employee SORT salary;"
    ],
    answer:
      "SELECT * FROM Employee ORDER BY salary DESC;",
    solution:
      "ORDER BY selects the sort column and DESC requests descending order. SQL descending-order queries were specifically reported in a Tech Mahindra 2024 technical interview.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - SQL descending order",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus/",
  },

  {
    questionId: 1424,
    companyId: 8,
    year: 2024,
    category: "web",
    question:
      "In a full-stack application, how does the frontend commonly communicate with a backend service?",
    options: [
      "Through HTTP/API requests",
      "By directly executing CPU instructions on the server",
      "By replacing the operating system",
      "Only through CSS"
    ],
    answer: "Through HTTP/API requests",
    solution:
      "A frontend commonly sends HTTP requests to backend API endpoints. The backend processes the request, interacts with services or databases, and returns a response. Frontend/backend integration was explicitly discussed in a Tech Mahindra 2024 technical interview.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - frontend/backend integration",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-6/",
  },

  {
    questionId: 1425,
    companyId: 8,
    year: 2024,
    category: "web",
    question:
      "What is Node.js?",
    options: [
      "A JavaScript runtime built on the V8 engine that can execute JavaScript outside the browser",
      "A relational database",
      "A CSS framework",
      "An operating-system scheduling algorithm"
    ],
    answer:
      "A JavaScript runtime built on the V8 engine that can execute JavaScript outside the browser",
    solution:
      "Node.js provides a runtime environment for JavaScript outside the browser and is commonly used to build servers and backend applications. Node.js was directly reported as a Tech Mahindra 2024 interview topic.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - Node.js",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-6/",
  },

  {
    questionId: 1426,
    companyId: 8,
    year: 2024,
    category: "web",
    question:
      "An interviewer asks why you selected React instead of Angular for your project. What should a technically strong answer do?",
    options: [
      "Explain requirements and compare relevant trade-offs such as architecture, ecosystem, learning curve and project needs",
      "Say React is always better for every application",
      "Say Angular cannot build web applications",
      "Say there is no difference"
    ],
    answer:
      "Explain requirements and compare relevant trade-offs such as architecture, ecosystem, learning curve and project needs",
    solution:
      "Technology choices should be justified against project requirements rather than treated as universally superior. A Tech Mahindra 2024 candidate was explicitly asked why React was preferred over Angular.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 interview - React versus Angular project choice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-6/",
  },

  {
    questionId: 1427,
    companyId: 8,
    year: 2024,
    category: "java",
    question:
      "What is compile-time polymorphism commonly associated with in C++?",
    options: [
      "Function overloading and operator overloading",
      "Only method overriding",
      "Database normalization",
      "Dynamic memory allocation only"
    ],
    answer:
      "Function overloading and operator overloading",
    solution:
      "Overload resolution can be performed by the compiler based on function signatures or operators. Polymorphism syntax/types were among the reported C++ interview areas in the Tech Mahindra 2024 process.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 technical interview - polymorphism",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus/",
  },

  {
    questionId: 1428,
    companyId: 8,
    year: 2024,
    category: "java",
    question:
      "When discussing a project in a technical interview, which information is most important?",
    options: [
      "Problem statement, architecture, your contribution, implementation, challenges and technology choices",
      "Only the project title",
      "Only your college name",
      "Only the number of files"
    ],
    answer:
      "Problem statement, architecture, your contribution, implementation, challenges and technology choices",
    solution:
      "Multiple Tech Mahindra 2024 reports describe detailed project questioning, including technologies, the candidate's contribution and implementation choices. You should therefore be prepared to explain what you personally built and why.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024 project-focused technical interview",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-6/",
  },

  {
    questionId: 1429,
    companyId: 8,
    year: 2024,
    category: "java",
    question:
      "If asked whether you are comfortable learning or switching to a new technology required by a project, what is the strongest technical response?",
    options: [
      "Explain your willingness to adapt and give an example of learning a new technology using transferable fundamentals",
      "Refuse to use technologies outside your current stack",
      "Say programming fundamentals do not transfer",
      "Avoid discussing learning"
    ],
    answer:
      "Explain your willingness to adapt and give an example of learning a new technology using transferable fundamentals",
    solution:
      "Tech Mahindra's 2024-25 candidate report explicitly records a technical-interview question about flexibility in switching technologies. A strong response connects adaptability with transferable programming and software-engineering fundamentals.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024-25 interview - technology flexibility",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-2024-25/",
  },
];

async function seedTechMahindra2024Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 8,
      year: 2024,
    });

    console.log(
      "Old Tech Mahindra 2024 questions deleted"
    );

    await CompanyQuestion.insertMany(
      companyQuestions
    );

    console.log(
      `${companyQuestions.length} Tech Mahindra 2024 questions seeded successfully`
    );

    process.exit(0);

  } catch (error) {

    console.error(
      "Error seeding Tech Mahindra 2024 questions:",
      error
    );

    process.exit(1);
  }
}

seedTechMahindra2024Questions();