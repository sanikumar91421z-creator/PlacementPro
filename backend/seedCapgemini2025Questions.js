require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [

  // =========================================================
  // PSEUDOCODE / OUTPUT / BITWISE Q960-Q974
  // =========================================================

  {
    questionId: 960,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `Predict the output:

a = 5
b = 3
PRINT a & b`,
    options: ["1", "2", "3", "7"],
    answer: "1",
    solution:
      "5 in binary is 101 and 3 is 011. Bitwise AND compares corresponding bits: 101 & 011 = 001. Therefore the output is 1.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 bitwise pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 961,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `Predict the output:

a = 5
b = 3
PRINT a | b`,
    options: ["1", "5", "7", "8"],
    answer: "7",
    solution:
      "5 = 101 and 3 = 011. Bitwise OR gives 111 because a bit becomes 1 whenever either input bit is 1. Binary 111 equals decimal 7.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 bitwise pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 962,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `Predict the output:

a = 6
b = 3
PRINT a ^ b`,
    options: ["3", "5", "6", "7"],
    answer: "5",
    solution:
      "6 = 110 and 3 = 011. XOR returns 1 when corresponding bits are different: 110 XOR 011 = 101. Binary 101 is decimal 5.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 bitwise pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 963,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `Predict the output:

x = 4
PRINT x << 2`,
    options: ["8", "12", "16", "32"],
    answer: "16",
    solution:
      "A left shift by one position generally multiplies a non-overflowing integer by 2. Therefore 4 << 2 = 4 × 2² = 16.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 bitwise-shift assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 964,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `Predict the output:

x = 20
PRINT x >> 2`,
    options: ["2", "4", "5", "10"],
    answer: "5",
    solution:
      "20 in binary is 10100. Shifting two positions to the right produces 00101, which is decimal 5.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 bitwise-shift assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 965,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `Predict the output:

sum = 0

FOR i = 1 TO 5
    IF i % 2 == 0
        sum = sum + i
    END IF
END FOR

PRINT sum`,
    options: ["5", "6", "9", "15"],
    answer: "6",
    solution:
      "Only even values are added. Between 1 and 5, those values are 2 and 4. Therefore sum = 2 + 4 = 6.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 looping pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 966,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `Predict the output:

arr = [2, 4, 6, 8, 10]
sum = 0

FOR i = 0 TO 4
    IF arr[i] > 5
        sum = sum + arr[i]
    END IF
END FOR

PRINT sum`,
    options: ["18", "20", "24", "30"],
    answer: "24",
    solution:
      "Values greater than 5 are 6, 8 and 10. Their sum is 6 + 8 + 10 = 24.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 array-output assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 967,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `A stack is initially empty.

PUSH(10)
PUSH(20)
PUSH(30)
POP()
PUSH(40)

PRINT TOP()`,
    options: ["10", "20", "30", "40"],
    answer: "40",
    solution:
      "After pushing 10, 20 and 30, the top is 30. POP removes 30. PUSH(40) places 40 above 20. Therefore TOP() returns 40.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 stack pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 968,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `A queue is initially empty.

ENQUEUE(10)
ENQUEUE(20)
ENQUEUE(30)
DEQUEUE()
ENQUEUE(40)

PRINT FRONT()`,
    options: ["10", "20", "30", "40"],
    answer: "20",
    solution:
      "A queue follows FIFO. After inserting 10, 20 and 30, DEQUEUE removes 10. Adding 40 produces 20, 30, 40. Therefore FRONT() is 20.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 queue pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 969,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `Predict the output:

count = 0

FOR i = 1 TO 3
    FOR j = 1 TO i
        count = count + 1
    END FOR
END FOR

PRINT count`,
    options: ["3", "5", "6", "9"],
    answer: "6",
    solution:
      "The inner loop runs 1 time when i=1, 2 times when i=2 and 3 times when i=3. Total executions = 1 + 2 + 3 = 6.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 nested-loop pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 970,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `Predict the output:

FUNCTION fun(n)
    IF n <= 1
        RETURN 1
    END IF

    RETURN n * fun(n - 1)
END FUNCTION

PRINT fun(4)`,
    options: ["4", "12", "24", "120"],
    answer: "24",
    solution:
      "fun(4) = 4 × fun(3) = 4 × 3 × fun(2) = 4 × 3 × 2 × fun(1). fun(1)=1, so the result is 24.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 recursion pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 971,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `Predict the output:

arr = [5, 2, 9, 1, 7]
max = arr[0]

FOR i = 1 TO 4
    IF arr[i] > max
        max = arr[i]
    END IF
END FOR

PRINT max`,
    options: ["5", "7", "9", "24"],
    answer: "9",
    solution:
      "max begins as 5. Value 2 does not change it. Value 9 becomes the new maximum. Neither 1 nor 7 exceeds 9. Therefore output = 9.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 array pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 972,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `Predict the output:

x = 1

FOR i = 1 TO 4
    x = x * 2
END FOR

PRINT x`,
    options: ["8", "12", "16", "32"],
    answer: "16",
    solution:
      "Starting with 1, the four iterations produce 2, 4, 8 and 16. Therefore the final output is 16.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 arithmetic pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 973,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `Assume C/Java-style post-increment semantics.

x = 5
y = x++

PRINT x
PRINT y`,
    options: ["5 5", "6 5", "5 6", "6 6"],
    answer: "6 5",
    solution:
      "Post-increment uses the current value first and increments afterward. Therefore y receives 5, and then x becomes 6.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 post-increment assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 974,
    companyId: 6,
    year: 2025,
    category: "pseudocode",
    question: `Assume C/Java-style pre-increment semantics.

x = 5
y = ++x

PRINT x
PRINT y`,
    options: ["5 5", "6 5", "5 6", "6 6"],
    answer: "6 6",
    solution:
      "Pre-increment increments x before its value is used. x first becomes 6, and that value is then assigned to y. Therefore both are 6.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 pre-increment assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // DSA / TECHNICAL MCQ Q975-Q984
  // =========================================================

  {
    questionId: 975,
    companyId: 6,
    year: 2025,
    category: "java",
    question:
      "Which data structure follows the Last-In-First-Out principle?",
    options: ["Queue", "Stack", "Linked List", "Graph"],
    answer: "Stack",
    solution:
      "A stack follows LIFO. The most recently inserted item is the first item removed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 DSA technical-assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 976,
    companyId: 6,
    year: 2025,
    category: "java",
    question:
      "Which data structure normally follows First-In-First-Out ordering?",
    options: ["Stack", "Queue", "Heap", "Tree"],
    answer: "Queue",
    solution:
      "A queue follows FIFO: the first item inserted is normally the first item removed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 DSA technical-assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 977,
    companyId: 6,
    year: 2025,
    category: "java",
    question:
      "What is the time complexity of binary search on a sorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(log n)",
    solution:
      "Binary search discards approximately half of the remaining search space after each comparison, resulting in logarithmic time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 algorithms assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 978,
    companyId: 6,
    year: 2025,
    category: "java",
    question:
      "Which traversal of a Binary Search Tree produces keys in sorted order?",
    options: ["Preorder", "Inorder", "Postorder", "Level order"],
    answer: "Inorder",
    solution:
      "Inorder traversal visits left subtree, node and right subtree. Because a BST stores smaller keys on the left and larger keys on the right, this produces sorted order.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 DSA assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 979,
    companyId: 6,
    year: 2025,
    category: "java",
    question:
      "Which algorithm is commonly used to find the shortest path in an unweighted graph?",
    options: ["DFS", "BFS", "Quick Sort", "Binary Search"],
    answer: "BFS",
    solution:
      "BFS explores vertices level by level. In an unweighted graph, the first time a vertex is reached corresponds to a path using the minimum number of edges.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 DSA assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 980,
    companyId: 6,
    year: 2025,
    category: "java",
    question:
      "What is the worst-case time complexity of Bubble Sort?",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(n²)"],
    answer: "O(n²)",
    solution:
      "Bubble Sort may perform roughly n passes with up to n comparisons per pass, giving O(n²) worst-case time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 algorithms assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 981,
    companyId: 6,
    year: 2025,
    category: "java",
    question:
      "Which data structure is normally used internally to support recursion?",
    options: ["Queue", "Stack", "Hash table", "Graph"],
    answer: "Stack",
    solution:
      "Function calls are stored in the call stack. Each recursive call creates another stack frame until the base case is reached.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 programming-fundamentals assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 982,
    companyId: 6,
    year: 2025,
    category: "java",
    question:
      "Which data structure provides expected O(1) lookup by key when hashing behaves well?",
    options: ["ArrayList", "HashMap", "Stack", "LinkedList"],
    answer: "HashMap",
    solution:
      "HashMap uses hashing to locate the bucket associated with a key, providing expected constant-time get and put operations under normal conditions.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 programming/DSA assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 983,
    companyId: 6,
    year: 2025,
    category: "java",
    question:
      "Which sorting algorithm has O(n log n) worst-case time among these options?",
    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
    answer: "Merge Sort",
    solution:
      "Merge Sort repeatedly divides the input and performs linear-time merging at each of logarithmically many levels, producing O(n log n) worst-case time.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 algorithms assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 984,
    companyId: 6,
    year: 2025,
    category: "java",
    question:
      "Which traversal normally uses a queue?",
    options: ["DFS", "BFS", "Recursive inorder only", "Recursive postorder only"],
    answer: "BFS",
    solution:
      "BFS places discovered vertices in a queue so they are processed in discovery order, producing level-by-level exploration.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 DSA assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // ENGLISH / COMMUNICATION Q985-Q992
  // =========================================================

  {
    questionId: 985,
    companyId: 6,
    year: 2025,
    category: "grammar",
    question: "Choose the grammatically correct sentence.",
    options: [
      "She have completed the assignment.",
      "She has completed the assignment.",
      "She has complete the assignment.",
      "She having completed the assignment."
    ],
    answer: "She has completed the assignment.",
    solution:
      "With the singular subject 'she', present perfect uses 'has' followed by the past participle 'completed'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 English proficiency assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 986,
    companyId: 6,
    year: 2025,
    category: "grammar",
    question: "Choose the synonym of 'rapid'.",
    options: ["Slow", "Quick", "Weak", "Late"],
    answer: "Quick",
    solution:
      "Rapid means happening very quickly or moving at high speed. 'Quick' is the closest synonym.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 English proficiency assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 987,
    companyId: 6,
    year: 2025,
    category: "grammar",
    question: "Choose the antonym of 'scarce'.",
    options: ["Rare", "Limited", "Abundant", "Small"],
    answer: "Abundant",
    solution:
      "Scarce means insufficient or limited. Abundant means available in large quantities, making it the opposite.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 English proficiency assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 988,
    companyId: 6,
    year: 2025,
    category: "grammar",
    question:
      "Fill in the blank: He has worked at this company ___ five years.",
    options: ["since", "for", "from", "at"],
    answer: "for",
    solution:
      "'For' is used with a duration of time. Five years is a duration, so 'for five years' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 English proficiency assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 989,
    companyId: 6,
    year: 2025,
    category: "grammar",
    question:
      "Fill in the blank: By the time we reached the station, the train ___ .",
    options: ["leaves", "has left", "had left", "leaving"],
    answer: "had left",
    solution:
      "The train departed before another event in the past—our arrival. Past perfect 'had left' expresses the earlier past action.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 English proficiency assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 990,
    companyId: 6,
    year: 2025,
    category: "grammar",
    question:
      "Identify the incorrect word: 'Each of the developers have completed the task.'",
    options: ["Each", "developers", "have", "task"],
    answer: "have",
    solution:
      "'Each' is singular, so the verb should be 'has': Each of the developers has completed the task.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 English proficiency assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 991,
    companyId: 6,
    year: 2025,
    category: "grammar",
    question:
      "Choose the correct passive voice: 'The team completed the project.'",
    options: [
      "The project was completed by the team.",
      "The project completed the team.",
      "The project is complete by the team.",
      "The team was completed by the project."
    ],
    answer: "The project was completed by the team.",
    solution:
      "The original sentence is simple past. Passive simple past uses was/were + past participle, giving 'was completed'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 English proficiency assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 992,
    companyId: 6,
    year: 2025,
    category: "grammar",
    question:
      "Choose the correct sentence.",
    options: [
      "Neither the manager nor the employees is ready.",
      "Neither the manager nor the employees are ready.",
      "Neither manager nor employees am ready.",
      "Neither the manager or the employees are ready."
    ],
    answer: "Neither the manager nor the employees are ready.",
    solution:
      "With neither...nor, the verb generally agrees with the nearer subject. The nearer subject 'employees' is plural, so 'are' is appropriate.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 English proficiency assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // LOGICAL / COGNITIVE Q993-Q997
  // =========================================================

  {
    questionId: 993,
    companyId: 6,
    year: 2025,
    category: "reasoning",
    question: "Find the next number: 3, 8, 15, 24, 35, ?",
    options: ["46", "48", "50", "52"],
    answer: "48",
    solution:
      "Differences are 5, 7, 9 and 11. The next difference is 13. Therefore 35 + 13 = 48.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 cognitive/reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 994,
    companyId: 6,
    year: 2025,
    category: "reasoning",
    question:
      "A person walks 8 m north, 6 m east and then 8 m south. Where is the person relative to the starting point?",
    options: ["6 m East", "6 m West", "8 m North", "14 m East"],
    answer: "6 m East",
    solution:
      "The 8 m north and 8 m south movements cancel. The remaining displacement is 6 m east.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 cognitive/reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 995,
    companyId: 6,
    year: 2025,
    category: "reasoning",
    question:
      "A is B's brother. B is C's daughter. C is D's son. How is A related to C?",
    options: ["Son", "Brother", "Father", "Uncle"],
    answer: "Son",
    solution:
      "B is C's daughter. Since A is B's brother, A is another child of C and is male. Therefore A is C's son.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 cognitive/reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 996,
    companyId: 6,
    year: 2025,
    category: "reasoning",
    question:
      "If CODE is written as DPEF by shifting every letter one position forward, how is JAVA written?",
    options: ["KBWB", "KBVB", "JBWB", "KAWA"],
    answer: "KBWB",
    solution:
      "J→K, A→B, V→W and A→B. Therefore JAVA becomes KBWB.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 cognitive/reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 997,
    companyId: 6,
    year: 2025,
    category: "reasoning",
    question: "Find the odd one out: 8, 27, 64, 100, 125",
    options: ["27", "64", "100", "125"],
    answer: "100",
    solution:
      "8=2³, 27=3³, 64=4³ and 125=5³. 100 is not a perfect cube.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 cognitive/reasoning pattern",
    sourceUrl: null,
  },

  // =========================================================
  // CODING / PROGRAMMING Q998-Q1005
  // =========================================================

  {
    questionId: 998,
    companyId: 6,
    year: 2025,
    category: "programming",
    question:
      "Given a positive integer n, determine whether it is a palindrome.",
    options: [],
    answer:
      "Reverse the number and compare the reversed value with the original number.",
    solution: `public class Main {

    static boolean isPalindrome(int n) {
        int original = n;
        int reversed = 0;

        while (n > 0) {
            int digit = n % 10;
            reversed = reversed * 10 + digit;
            n /= 10;
        }

        return original == reversed;
    }

    public static void main(String[] args) {
        int n = 1221;

        System.out.println(
            isPalindrome(n) ? "Palindrome" : "Not Palindrome"
        );
    }
}

For 1221:
reverse = 1221.

Since original == reversed, it is a palindrome.

Time complexity: O(d), where d is the number of digits.
Space complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 palindrome reported coding/interview topic",
    sourceUrl: null,
  },

  {
    questionId: 999,
    companyId: 6,
    year: 2025,
    category: "programming",
    question:
      "Given N, print the first N terms of the Fibonacci sequence.",
    options: [],
    answer:
      "Maintain the previous two Fibonacci values and repeatedly calculate their sum.",
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

Time complexity: O(n).
Space complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 Fibonacci reported coding/interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1000,
    companyId: 6,
    year: 2025,
    category: "programming",
    question:
      "Given an integer n, determine whether it is a prime number.",
    options: [],
    answer:
      "Check divisibility from 2 through the square root of n.",
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

If n has a factor greater than sqrt(n), it must have a corresponding
factor smaller than sqrt(n). Therefore checking through sqrt(n)
is sufficient.

Time complexity: O(sqrt(n)).
Space complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 prime-number reported coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1001,
    companyId: 6,
    year: 2025,
    category: "programming",
    question:
      "Given a string, reverse it without using StringBuilder.reverse().",
    options: [],
    answer:
      "Traverse the string from the final character toward the first character.",
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "Capgemini";

        StringBuilder result = new StringBuilder();

        for (int i = str.length() - 1; i >= 0; i--) {
            result.append(str.charAt(i));
        }

        System.out.println(result);
    }
}

Output:
inimegpaC

Time complexity: O(n).
Space complexity: O(n).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 string-reversal reported coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1002,
    companyId: 6,
    year: 2025,
    category: "programming",
    question:
      "Given an array containing distinct integers from 1 to n with one value missing, find the missing number.",
    options: [],
    answer:
      "Calculate the expected sum from 1 to n and subtract the sum of the supplied array.",
    solution: `public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5};
        int n = 5;

        int expected = n * (n + 1) / 2;
        int actual = 0;

        for (int value : arr) {
            actual += value;
        }

        int missing = expected - actual;

        System.out.println(missing);
    }
}

Expected sum:
1 + 2 + 3 + 4 + 5 = 15

Actual sum:
1 + 2 + 4 + 5 = 12

Missing number:
15 - 12 = 3

Time complexity: O(n).
Space complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 missing-number reported coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1003,
    companyId: 6,
    year: 2025,
    category: "programming",
    question:
      "Given two integers, swap their values without using a third variable.",
    options: [],
    answer:
      "Use arithmetic or XOR operations to exchange the values.",
    solution: `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;

        a = a + b;
        b = a - b;
        a = a - b;

        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}

Initially:
a = 10
b = 20

After a = a + b:
a = 30

After b = a - b:
b = 10

After a = a - b:
a = 20

Final values:
a = 20
b = 10

Space complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 swapping reported interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1004,
    companyId: 6,
    year: 2025,
    category: "programming",
    question:
      "Given a string text and another string pattern, determine whether pattern occurs inside text without using contains().",
    options: [],
    answer:
      "Try every valid starting position in text and compare pattern characters sequentially.",
    solution: `public class Main {

    static boolean containsPattern(String text, String pattern) {

        if (pattern.length() > text.length()) {
            return false;
        }

        for (int i = 0;
             i <= text.length() - pattern.length();
             i++) {

            int j;

            for (j = 0; j < pattern.length(); j++) {
                if (text.charAt(i + j) != pattern.charAt(j)) {
                    break;
                }
            }

            if (j == pattern.length()) {
                return true;
            }
        }

        return false;
    }

    public static void main(String[] args) {
        String text = "placementpro";
        String pattern = "ment";

        System.out.println(
            containsPattern(text, pattern)
        );
    }
}

For "placementpro" and "ment", the characters m-e-n-t occur
consecutively, so the result is true.

Worst-case time complexity: O(n × m).
Space complexity: O(1).`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 string-pattern reported coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1005,
    companyId: 6,
    year: 2025,
    category: "programming",
    question:
      "Given a sorted array that has been rotated, find its minimum element in O(log n) time.",
    options: [],
    answer:
      "Use binary search. Compare the middle element with the rightmost element to determine which half contains the minimum.",
    solution: `public class Main {

    static int findMinimum(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return nums[left];
    }

    public static void main(String[] args) {
        int[] nums = {4, 5, 6, 7, 0, 1, 2};

        System.out.println(findMinimum(nums));
    }
}

Output:
0

When nums[mid] > nums[right], the rotation point and minimum
must lie to the right of mid.

Otherwise, the minimum lies at mid or to its left.

Time complexity: O(log n).
Space complexity: O(1).`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 rotated-array candidate-reported coding pattern",
    sourceUrl: null,
  },

  // =========================================================
  // INTERVIEW: OOP / SQL / DBMS / SDLC Q1006-Q1009
  // =========================================================

  {
    questionId: 1006,
    companyId: 6,
    year: 2025,
    category: "java",
    question:
      "Which OOP concept allows the same method call to execute different implementations depending on the runtime object?",
    options: [
      "Encapsulation",
      "Runtime polymorphism",
      "Compilation",
      "Aggregation only"
    ],
    answer: "Runtime polymorphism",
    solution:
      "When a subclass overrides an instance method, a parent reference can refer to different subclass objects. Java selects the overridden implementation according to the runtime object's type. This is runtime polymorphism.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 OOP reported technical-interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1007,
    companyId: 6,
    year: 2025,
    category: "dbms",
    question:
      "What is the main difference between a primary key and a foreign key?",
    options: [
      "There is no difference",
      "A primary key uniquely identifies a row, while a foreign key references a key in a related table",
      "A foreign key must always be unique",
      "A primary key may contain unlimited duplicate values"
    ],
    answer:
      "A primary key uniquely identifies a row, while a foreign key references a key in a related table",
    solution:
      "A primary key identifies rows uniquely in its own table. A foreign key establishes a relationship by referencing a primary or candidate key in another or related table. Primary-key versus foreign-key differences were specifically reported in a Capgemini 2025 technical interview.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 primary-vs-foreign-key reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1008,
    companyId: 6,
    year: 2025,
    category: "sql",
    question:
      "What is the difference between UNION and UNION ALL in SQL?",
    options: [
      "UNION retains duplicates while UNION ALL removes them",
      "UNION removes duplicate result rows while UNION ALL retains them",
      "Both always produce different column counts",
      "UNION works only with one table"
    ],
    answer:
      "UNION removes duplicate result rows while UNION ALL retains them",
    solution:
      "Both operators combine compatible query results. UNION performs duplicate elimination, while UNION ALL returns all result rows including duplicates. This distinction was specifically reported among Capgemini 2025 technical-interview questions.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 UNION-vs-UNION-ALL reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1009,
    companyId: 6,
    year: 2025,
    category: "java",
    question:
      "Which statement best describes Agile compared with the traditional Waterfall model?",
    options: [
      "Agile normally uses iterative development and frequent feedback, while Waterfall follows more sequential phases",
      "Agile never allows requirement changes",
      "Waterfall has no development phase",
      "Agile and Waterfall are identical"
    ],
    answer:
      "Agile normally uses iterative development and frequent feedback, while Waterfall follows more sequential phases",
    solution:
      "Agile approaches commonly deliver work iteratively and incorporate feedback throughout development. Traditional Waterfall progresses through more sequential stages such as requirements, design, implementation, testing and deployment. Agile, Waterfall, Spiral and SDLC stages were among the topics reported in a Capgemini 2025 interview.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2025 SDLC/Agile reported technical-interview topic",
    sourceUrl: null,
  },
];

async function seedCapgemini2025Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 6,
      year: 2025,
    });

    console.log("Old Capgemini 2025 questions deleted");

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Capgemini 2025 questions seeded successfully`
    );

    process.exit(0);
  } catch (error) {
    console.error(
      "Error seeding Capgemini 2025 questions:",
      error
    );

    process.exit(1);
  }
}

seedCapgemini2025Questions();