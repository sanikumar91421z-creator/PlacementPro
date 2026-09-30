require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [

  // =========================================================
  // QUANTITATIVE APTITUDE Q1320-Q1327
  // =========================================================

  {
    questionId: 1320,
    companyId: 8,
    year: 2025,
    category: "aptitude",
    question:
      "A product marked at Rs. 2500 is sold at a discount of 12%. What is the selling price?",
    options: ["Rs. 2100", "Rs. 2150", "Rs. 2200", "Rs. 2250"],
    answer: "Rs. 2200",
    solution:
      "Discount = 12% of 2500 = 300. Selling price = 2500 - 300 = Rs. 2200.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1321,
    companyId: 8,
    year: 2025,
    category: "aptitude",
    question:
      "A can complete a job in 15 days and B can complete it in 10 days. How long will they take together?",
    options: ["5 days", "6 days", "7 days", "8 days"],
    answer: "6 days",
    solution:
      "A's one-day work is 1/15 and B's is 1/10. Together = 1/15 + 1/10 = 5/30 = 1/6. Therefore they require 6 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1322,
    companyId: 8,
    year: 2025,
    category: "aptitude",
    question:
      "The ratio of two numbers is 4:7 and their sum is 99. What is the larger number?",
    options: ["36", "54", "63", "72"],
    answer: "63",
    solution:
      "Total ratio parts = 4 + 7 = 11. One part = 99/11 = 9. Larger number = 7 × 9 = 63.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1323,
    companyId: 8,
    year: 2025,
    category: "aptitude",
    question:
      "A train covers 360 km in 4.5 hours. What is its average speed?",
    options: ["70 km/h", "75 km/h", "80 km/h", "90 km/h"],
    answer: "80 km/h",
    solution:
      "Average speed = Distance / Time = 360 / 4.5 = 80 km/h.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1324,
    companyId: 8,
    year: 2025,
    category: "aptitude",
    question:
      "The average of six numbers is 25. If five of them are 18, 22, 24, 30 and 31, find the sixth number.",
    options: ["20", "23", "25", "27"],
    answer: "25",
    solution:
      "Total sum = 25 × 6 = 150. Sum of given numbers = 18 + 22 + 24 + 30 + 31 = 125. Sixth number = 150 - 125 = 25.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1325,
    companyId: 8,
    year: 2025,
    category: "aptitude",
    question:
      "A shopkeeper buys an item for Rs. 1600 and sells it for Rs. 1840. What is the profit percentage?",
    options: ["10%", "12%", "15%", "20%"],
    answer: "15%",
    solution:
      "Profit = 1840 - 1600 = 240. Profit percentage = (240/1600) × 100 = 15%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1326,
    companyId: 8,
    year: 2025,
    category: "aptitude",
    question:
      "What is the simple interest on Rs. 6000 at 10% per annum for 2 years?",
    options: ["Rs. 600", "Rs. 1000", "Rs. 1200", "Rs. 1400"],
    answer: "Rs. 1200",
    solution:
      "SI = (P × R × T)/100 = (6000 × 10 × 2)/100 = Rs. 1200.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1327,
    companyId: 8,
    year: 2025,
    category: "aptitude",
    question:
      "A bag contains 6 red, 5 blue and 4 green balls. What is the probability of selecting a blue ball?",
    options: ["1/3", "2/5", "5/11", "5/9"],
    answer: "1/3",
    solution:
      "Total balls = 6 + 5 + 4 = 15. Blue balls = 5. Probability = 5/15 = 1/3.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 quantitative aptitude pattern",
    sourceUrl: null,
  },

  // =========================================================
  // LOGICAL REASONING Q1328-Q1335
  // =========================================================

  {
    questionId: 1328,
    companyId: 8,
    year: 2025,
    category: "reasoning",
    question:
      "Find the next number: 5, 11, 23, 47, 95, ?",
    options: ["181", "189", "191", "193"],
    answer: "191",
    solution:
      "Each term is previous term × 2 + 1. Therefore 95 × 2 + 1 = 191.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1329,
    companyId: 8,
    year: 2025,
    category: "reasoning",
    question:
      "If SYSTEM is coded as TZTUFN by shifting each letter forward by one, how is CODE coded?",
    options: ["DPEF", "DPDF", "EPDF", "CPED"],
    answer: "DPEF",
    solution:
      "C -> D, O -> P, D -> E and E -> F. Therefore CODE becomes DPEF.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1330,
    companyId: 8,
    year: 2025,
    category: "reasoning",
    question:
      "A person walks 8 km north, turns right and walks 6 km, then turns right and walks 8 km. Where is the person relative to the starting point?",
    options: ["6 km East", "6 km West", "8 km North", "8 km South"],
    answer: "6 km East",
    solution:
      "The 8 km north and 8 km south movements cancel. The person remains 6 km east of the starting point.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1331,
    companyId: 8,
    year: 2025,
    category: "reasoning",
    question:
      "Statements: All coders are problem solvers. Some students are coders. Which conclusion follows?",
    options: [
      "Some students are problem solvers",
      "All students are coders",
      "No student is a problem solver",
      "All problem solvers are coders"
    ],
    answer: "Some students are problem solvers",
    solution:
      "Some students belong to the coder set, and every coder belongs to the problem-solver set. Therefore some students are problem solvers.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1332,
    companyId: 8,
    year: 2025,
    category: "reasoning",
    question:
      "Find the odd one out: 16, 25, 36, 49, 63, 64",
    options: ["25", "49", "63", "64"],
    answer: "63",
    solution:
      "16, 25, 36, 49 and 64 are perfect squares. 63 is not a perfect square.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1333,
    companyId: 8,
    year: 2025,
    category: "reasoning",
    question:
      "Find the next term: AB, DE, GH, JK, ?",
    options: ["LM", "MN", "NO", "OP"],
    answer: "MN",
    solution:
      "The pairs begin at A, D, G, J and M, increasing the starting letter by three each time. Therefore the next pair is MN.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1334,
    companyId: 8,
    year: 2025,
    category: "reasoning",
    question:
      "P is the father of Q. R is the sister of Q. How is P related to R?",
    options: ["Brother", "Father", "Uncle", "Grandfather"],
    answer: "Father",
    solution:
      "Q and R are siblings. Since P is Q's father, P is also R's father.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1335,
    companyId: 8,
    year: 2025,
    category: "reasoning",
    question:
      "If 1 January is Wednesday, what day will 10 January be?",
    options: ["Thursday", "Friday", "Saturday", "Sunday"],
    answer: "Friday",
    solution:
      "10 January is 9 days after 1 January. 9 mod 7 = 2. Two days after Wednesday is Friday.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 logical reasoning pattern",
    sourceUrl: null,
  },

  // =========================================================
  // ENGLISH / GRAMMAR Q1336-Q1341
  // =========================================================

  {
    questionId: 1336,
    companyId: 8,
    year: 2025,
    category: "grammar",
    question:
      "Choose the grammatically correct sentence.",
    options: [
      "Each of the students has submitted the assignment.",
      "Each of the students have submitted the assignment.",
      "Each students has submitted the assignment.",
      "Each of students have submit the assignment."
    ],
    answer: "Each of the students has submitted the assignment.",
    solution:
      "'Each' is singular, so the singular auxiliary verb 'has' is required.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 English assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1337,
    companyId: 8,
    year: 2025,
    category: "grammar",
    question:
      "Choose the synonym of 'concise'.",
    options: ["Lengthy", "Brief", "Unclear", "Complex"],
    answer: "Brief",
    solution:
      "Concise means expressing information clearly using relatively few words. 'Brief' is the closest option.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 English assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1338,
    companyId: 8,
    year: 2025,
    category: "grammar",
    question:
      "Choose the antonym of 'optimistic'.",
    options: ["Hopeful", "Positive", "Pessimistic", "Confident"],
    answer: "Pessimistic",
    solution:
      "Optimistic means expecting favorable outcomes. Pessimistic means expecting unfavorable outcomes.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 English assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1339,
    companyId: 8,
    year: 2025,
    category: "grammar",
    question:
      "Fill in the blank: The manager insisted ___ completing the work before Friday.",
    options: ["at", "on", "for", "with"],
    answer: "on",
    solution:
      "The correct expression is 'insist on doing something'. Therefore 'insisted on completing' is correct.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 English assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1340,
    companyId: 8,
    year: 2025,
    category: "grammar",
    question:
      "Choose the correctly spelled word.",
    options: ["Maintenance", "Maintainance", "Maintanence", "Maintenence"],
    answer: "Maintenance",
    solution:
      "The correct spelling is 'Maintenance'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 English assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1341,
    companyId: 8,
    year: 2025,
    category: "grammar",
    question:
      "Choose the correct passive form of: 'The developer fixed the bug.'",
    options: [
      "The bug was fixed by the developer.",
      "The bug is fixed by developer yesterday.",
      "The developer was fixed by the bug.",
      "The bug fixed the developer."
    ],
    answer: "The bug was fixed by the developer.",
    solution:
      "The original sentence is in simple past tense, so the passive construction uses 'was + past participle': was fixed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 English assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // PSEUDOCODE / DSA Q1342-Q1349
  // =========================================================

  {
    questionId: 1342,
    companyId: 8,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

SET x = 2

FOR i = 1 TO 4
    x = x * 2
END FOR

PRINT x`,
    options: ["8", "16", "32", "64"],
    answer: "32",
    solution:
      "x starts at 2 and doubles four times: 4, 8, 16, 32. Therefore the output is 32.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1343,
    companyId: 8,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

SET a = 6
SET b = 3

PRINT a AND b

Assume AND means bitwise AND.`,
    options: ["1", "2", "3", "6"],
    answer: "2",
    solution:
      "6 in binary is 110 and 3 is 011. 110 AND 011 = 010, which is decimal 2.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 pseudocode/programming pattern",
    sourceUrl: null,
  },

  {
    questionId: 1344,
    companyId: 8,
    year: 2025,
    category: "pseudocode",
    question: `What is printed?

SET arr = [8, 3, 12, 5, 10]
SET max = arr[0]

FOR i = 1 TO 4
    IF arr[i] > max
        max = arr[i]
    END IF
END FOR

PRINT max`,
    options: ["8", "10", "12", "5"],
    answer: "12",
    solution:
      "The algorithm tracks the largest element. max starts as 8, becomes 12 when 12 is encountered and remains 12.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 pseudocode/DSA pattern",
    sourceUrl: null,
  },

  {
    questionId: 1345,
    companyId: 8,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

FUNCTION fun(n)
    IF n == 0
        RETURN 0
    END IF

    RETURN n + fun(n - 1)
END FUNCTION

PRINT fun(4)`,
    options: ["4", "6", "10", "24"],
    answer: "10",
    solution:
      "fun(4) = 4 + 3 + 2 + 1 + fun(0). Since fun(0) = 0, the result is 10.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 pseudocode/DSA pattern",
    sourceUrl: null,
  },

  {
    questionId: 1346,
    companyId: 8,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

SET count = 0

FOR i = 1 TO 4
    FOR j = 1 TO i
        count = count + 1
    END FOR
END FOR

PRINT count`,
    options: ["4", "8", "10", "16"],
    answer: "10",
    solution:
      "The inner loop runs 1 + 2 + 3 + 4 times. Therefore count = 10.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 pseudocode/DSA pattern",
    sourceUrl: null,
  },

  {
    questionId: 1347,
    companyId: 8,
    year: 2025,
    category: "pseudocode",
    question:
      "What is the time complexity of binary search on a sorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(log n)",
    solution:
      "Binary search eliminates approximately half of the remaining search space after every comparison. Therefore its time complexity is O(log n).",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 DSA assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1348,
    companyId: 8,
    year: 2025,
    category: "pseudocode",
    question:
      "Which data structure is normally used by breadth-first search?",
    options: ["Stack", "Queue", "Heap only", "HashSet only"],
    answer: "Queue",
    solution:
      "BFS explores vertices level by level. A queue maintains the order in which discovered vertices should be processed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 DSA assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1349,
    companyId: 8,
    year: 2025,
    category: "pseudocode",
    question:
      "Which sorting algorithm has O(n log n) worst-case time complexity among these options?",
    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
    answer: "Merge Sort",
    solution:
      "Merge Sort recursively divides the input and performs linear-time merging at each level, resulting in O(n log n) worst-case time.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 DSA/time-complexity pattern",
    sourceUrl: null,
  },

  // =========================================================
  // CORE TECHNICAL Q1350-Q1355
  // =========================================================

  {
    questionId: 1350,
    companyId: 8,
    year: 2025,
    category: "dbms",
    question:
      "What is the main purpose of normalization in a relational database?",
    options: [
      "Reduce redundancy and undesirable data dependencies",
      "Increase duplicate data",
      "Replace SQL with Java",
      "Increase table size"
    ],
    answer: "Reduce redundancy and undesirable data dependencies",
    solution:
      "Normalization organizes relational data to reduce unnecessary duplication and avoid anomalies during insert, update and delete operations.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 DBMS assessment/interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1351,
    companyId: 8,
    year: 2025,
    category: "sql",
    question:
      "Which SQL clause is used to filter rows before grouping?",
    options: ["WHERE", "HAVING", "ORDER BY", "GROUP BY"],
    answer: "WHERE",
    solution:
      "WHERE filters individual rows before grouping occurs. HAVING is commonly used to filter groups after GROUP BY.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 SQL/DBMS pattern",
    sourceUrl: null,
  },

  {
    questionId: 1352,
    companyId: 8,
    year: 2025,
    category: "java",
    question:
      "Which OOP concept allows a subclass to provide its own implementation of an inherited method?",
    options: [
      "Method overriding",
      "Encapsulation only",
      "Constructor chaining only",
      "Normalization"
    ],
    answer: "Method overriding",
    solution:
      "Method overriding occurs when a subclass supplies an implementation of an inherited method with an appropriate matching signature, enabling runtime polymorphic behavior.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 OOP assessment/interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1353,
    companyId: 8,
    year: 2025,
    category: "java",
    question:
      "What is a deadlock in an operating system?",
    options: [
      "A state in which processes wait indefinitely for resources held by one another",
      "A CPU sorting technique",
      "A database JOIN",
      "A Java inheritance rule"
    ],
    answer:
      "A state in which processes wait indefinitely for resources held by one another",
    solution:
      "A deadlock occurs when processes or threads cannot proceed because each is waiting for resources held by another participant in the waiting cycle.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 OS assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1354,
    companyId: 8,
    year: 2025,
    category: "web",
    question:
      "Which protocol provides reliable and connection-oriented transport?",
    options: ["TCP", "UDP", "ARP", "ICMP"],
    answer: "TCP",
    solution:
      "TCP establishes a logical connection and provides ordered, reliable delivery using mechanisms including sequence numbers, acknowledgements and retransmissions.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 computer-network assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1355,
    companyId: 8,
    year: 2025,
    category: "java",
    question:
      "What is encapsulation in object-oriented programming?",
    options: [
      "Bundling data and related behavior while controlling access to internal state",
      "Sorting an array",
      "Connecting two databases",
      "Allocating an IP address"
    ],
    answer:
      "Bundling data and related behavior while controlling access to internal state",
    solution:
      "Encapsulation combines data and operations in a class and uses access control to protect implementation details. Encapsulation was among the OOP concepts reported in Tech Mahindra technical assessments.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 OOP assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // PROGRAMMING Q1356-Q1363
  // =========================================================

  {
    questionId: 1356,
    companyId: 8,
    year: 2025,
    category: "programming",
    question:
      "Given a non-negative decimal integer, convert it to its binary representation without using a built-in decimal-to-binary conversion function.",
    options: [],
    answer:
      "Repeatedly divide the number by 2, collect the remainders and reverse their order.",
    solution: `public class Main {

    static String decimalToBinary(int n) {

        if (n == 0) {
            return "0";
        }

        StringBuilder binary = new StringBuilder();

        while (n > 0) {

            binary.append(n % 2);
            n /= 2;
        }

        return binary.reverse().toString();
    }

    public static void main(String[] args) {

        int n = 13;

        System.out.println(decimalToBinary(n));
    }
}

Output:
1101

Explanation:

13 / 2 = 6 remainder 1
6 / 2  = 3 remainder 0
3 / 2  = 1 remainder 1
1 / 2  = 0 remainder 1

The remainders are produced from least significant
to most significant bit, so reversing 1011 gives 1101.

Time complexity: O(log n)
Space complexity: O(log n)

Decimal-to-binary conversion was specifically reported
as a Tech Mahindra coding problem in a 2025 candidate
experience.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2025 coding problem - Decimal to Binary",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-3/",
  },

  {
    questionId: 1357,
    companyId: 8,
    year: 2025,
    category: "programming",
    question:
      "Find the largest element in an integer array.",
    options: [],
    answer:
      "Traverse the array and maintain the maximum value seen so far.",
    solution: `public class Main {

    static int largest(int[] arr) {

        int max = arr[0];

        for (int i = 1; i < arr.length; i++) {

            if (arr[i] > max) {
                max = arr[i];
            }
        }

        return max;
    }

    public static void main(String[] args) {

        int[] arr = {12, 7, 25, 9, 18};

        System.out.println(largest(arr));
    }
}

Output:
25

Start with the first element as max.
Compare every remaining element and update max whenever
a larger element is found.

Time complexity: O(n)
Space complexity: O(1)`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 array/DSA coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1358,
    companyId: 8,
    year: 2025,
    category: "programming",
    question:
      "Determine whether a given string is a palindrome.",
    options: [],
    answer:
      "Compare characters from both ends using two pointers.",
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

        System.out.println(isPalindrome("level"));
    }
}

Output:
true

The first and last characters are compared while the
two pointers move toward the center.

Time complexity: O(n)
Space complexity: O(1)`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 string/DSA coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1359,
    companyId: 8,
    year: 2025,
    category: "programming",
    question:
      "Find the second-largest distinct element in an integer array.",
    options: [],
    answer:
      "Track the largest and second-largest distinct values during one traversal.",
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

        int[] arr = {10, 20, 20, 8, 15};

        System.out.println(secondLargest(arr));
    }
}

Output:
15

20 is the largest distinct value.
The next smaller distinct value is 15.

Time complexity: O(n)
Space complexity: O(1)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 array/DSA coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1360,
    companyId: 8,
    year: 2025,
    category: "programming",
    question:
      "Given an integer array and a target, determine whether two distinct elements have a sum equal to the target.",
    options: [],
    answer:
      "Use a HashSet to check whether target - currentValue has already appeared.",
    solution: `import java.util.HashSet;
import java.util.Set;

public class Main {

    static boolean hasPair(int[] arr, int target) {

        Set<Integer> seen = new HashSet<>();

        for (int value : arr) {

            int needed = target - value;

            if (seen.contains(needed)) {
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

When the current value is 7, the required complement
is 2. Since 2 has already been stored, a valid pair
exists.

Expected time complexity: O(n)
Space complexity: O(n)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 DSA coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1361,
    companyId: 8,
    year: 2025,
    category: "programming",
    question:
      "Count the frequency of every character in a string while preserving the order in which characters first appear.",
    options: [],
    answer:
      "Use LinkedHashMap<Character, Integer> to maintain insertion order and frequency.",
    solution: `import java.util.LinkedHashMap;
import java.util.Map;

public class Main {

    static void frequency(String str) {

        Map<Character, Integer> map =
            new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {

            map.put(
                ch,
                map.getOrDefault(ch, 0) + 1
            );
        }

        for (Map.Entry<Character, Integer> entry :
                map.entrySet()) {

            System.out.println(
                entry.getKey() + " -> " + entry.getValue()
            );
        }
    }

    public static void main(String[] args) {

        frequency("tech");
    }
}

Output:
t -> 1
e -> 1
c -> 1
h -> 1

LinkedHashMap preserves the insertion order of keys.

Expected time complexity: O(n)
Space complexity: O(k), where k is the number of
distinct characters.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 string/DSA coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1362,
    companyId: 8,
    year: 2025,
    category: "programming",
    question:
      "Reverse an integer array in place.",
    options: [],
    answer:
      "Use two pointers and swap the elements at the left and right positions until the pointers meet.",
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

Each iteration swaps two elements.

Time complexity: O(n)
Extra space complexity: O(1)`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 array/DSA coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1363,
    companyId: 8,
    year: 2025,
    category: "programming",
    question:
      "Find the first non-repeating character in a string.",
    options: [],
    answer:
      "Count frequencies in insertion order and return the first character whose frequency is one.",
    solution: `import java.util.LinkedHashMap;
import java.util.Map;

public class Main {

    static Character firstNonRepeating(String str) {

        Map<Character, Integer> map =
            new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {

            map.put(
                ch,
                map.getOrDefault(ch, 0) + 1
            );
        }

        for (Map.Entry<Character, Integer> entry :
                map.entrySet()) {

            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }

        return null;
    }

    public static void main(String[] args) {

        System.out.println(
            firstNonRepeating("aabbcddee")
        );
    }
}

Output:
c

Frequencies are:

a = 2
b = 2
c = 1
d = 2
e = 2

Therefore c is the first non-repeating character.

Expected time complexity: O(n)
Space complexity: O(k)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 string/DSA coding pattern",
    sourceUrl: null,
  },

  // =========================================================
  // TECHNICAL INTERVIEW Q1364-Q1369
  // =========================================================

  {
    questionId: 1364,
    companyId: 8,
    year: 2025,
    category: "java",
    question:
      "In a technical interview, how should you explain the architecture of a project you worked on?",
    options: [
      "Explain the problem, major components, data flow, technologies, your contribution and important design decisions",
      "Only state the project name",
      "Only mention the programming language",
      "Avoid explaining your own contribution"
    ],
    answer:
      "Explain the problem, major components, data flow, technologies, your contribution and important design decisions",
    solution:
      "Tech Mahindra's 2024-25 campus report describes project-focused technical interviews asking candidates about their recent project, its problem statement and their contribution. A useful project explanation therefore needs both the overall architecture and your individual work.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024-25 technical interview - project discussion",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-2024-25/",
  },

  {
    questionId: 1365,
    companyId: 8,
    year: 2025,
    category: "java",
    question:
      "What is runtime polymorphism in object-oriented programming?",
    options: [
      "The overridden method that executes is determined using the actual object at runtime",
      "A database table is created at runtime",
      "All methods execute simultaneously",
      "A compiler removes inheritance"
    ],
    answer:
      "The overridden method that executes is determined using the actual object at runtime",
    solution:
      "Runtime polymorphism is commonly achieved through method overriding. A parent-type reference can refer to a child object, and the overridden implementation associated with the actual object is selected at runtime. OOP was reported as part of Tech Mahindra's technical assessment.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2025 OOP technical interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1366,
    companyId: 8,
    year: 2025,
    category: "sql",
    question:
      "Write the SQL query that returns the first three characters of FIRST_NAME from a Student table.",
    options: [
      "SELECT SUBSTRING(FIRST_NAME, 1, 3) FROM Student;",
      "SELECT FIRST_NAME(3) FROM Student;",
      "SELECT FIRST 3 FIRST_NAME FROM Student;",
      "SELECT LENGTH(FIRST_NAME, 3) FROM Student;"
    ],
    answer:
      "SELECT SUBSTRING(FIRST_NAME, 1, 3) FROM Student;",
    solution:
      "SUBSTRING extracts part of a string. Starting at position 1 and requesting length 3 returns the first three characters. This SQL task was specifically reported in a Tech Mahindra technical interview associated with the 2024-25 hiring process.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra technical interview - SQL substring query",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-associate-software-engineer-supercoder-full-time/",
  },

  {
    questionId: 1367,
    companyId: 8,
    year: 2025,
    category: "java",
    question:
      "What are the average time complexities of Merge Sort and Quick Sort?",
    options: [
      "Merge Sort O(n log n), Quick Sort O(n log n)",
      "Merge Sort O(n²), Quick Sort O(n)",
      "Both O(1)",
      "Merge Sort O(log n), Quick Sort O(1)"
    ],
    answer:
      "Merge Sort O(n log n), Quick Sort O(n log n)",
    solution:
      "Merge Sort has O(n log n) time in its standard best, average and worst cases. Quick Sort has O(n log n) expected/average time, although poor pivot choices can produce O(n²) worst-case time. Sorting time complexities were reported in Tech Mahindra technical interviews.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra technical interview - sorting complexity",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-associate-software-engineer-supercoder-full-time/",
  },

  {
    questionId: 1368,
    companyId: 8,
    year: 2025,
    category: "java",
    question:
      "What is an important difference between Java and C++ regarding memory management?",
    options: [
      "Java provides automatic garbage collection, while C++ also allows explicit/manual resource management",
      "Java has no memory management",
      "C++ always uses a JVM",
      "Java requires delete for every object"
    ],
    answer:
      "Java provides automatic garbage collection, while C++ also allows explicit/manual resource management",
    solution:
      "Java objects are generally managed by garbage collection. C++ gives programmers more direct control over object lifetimes and resources through mechanisms such as automatic storage duration, RAII and explicit dynamic allocation/deallocation. Java versus C++ was reported in Tech Mahindra technical interviews.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra technical interview - Java vs C++",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-associate-software-engineer-supercoder-full-time/",
  },

  {
    questionId: 1369,
    companyId: 8,
    year: 2025,
    category: "java",
    question:
      "If an interviewer asks how flexible you are about switching technologies, what is the strongest technical response?",
    options: [
      "Explain that your fundamentals transfer across technologies and give an example of how you learn and adapt",
      "Say you will never learn another technology",
      "Say technology does not matter",
      "Avoid answering"
    ],
    answer:
      "Explain that your fundamentals transfer across technologies and give an example of how you learn and adapt",
    solution:
      "A 2024-25 Tech Mahindra campus technical interview specifically included a question about flexibility in switching technologies. A strong response demonstrates adaptability while explaining how programming, DSA, databases and software-engineering fundamentals transfer between stacks.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2024-25 technical interview - technology adaptability",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-2024-25/",
  },
];

async function seedTechMahindra2025Questions() {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 8,
      year: 2025,
    });

    console.log(
      "Old Tech Mahindra 2025 questions deleted"
    );

    await CompanyQuestion.insertMany(
      companyQuestions
    );

    console.log(
      `${companyQuestions.length} Tech Mahindra 2025 questions seeded successfully`
    );

    process.exit(0);

  } catch (error) {

    console.error(
      "Error seeding Tech Mahindra 2025 questions:",
      error
    );

    process.exit(1);
  }
}

seedTechMahindra2025Questions();