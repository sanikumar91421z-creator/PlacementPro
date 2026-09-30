require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [

  // =========================================================
  // QUANTITATIVE APTITUDE Q1440-Q1445
  // =========================================================

  {
    questionId: 1440,
    companyId: 8,
    year: 2023,
    category: "aptitude",
    question:
      "A number is increased by 20% and becomes 360. What was the original number?",
    options: ["280", "300", "320", "340"],
    answer: "300",
    solution:
      "Let the original number be x. Then 120% of x = 360. Therefore 1.2x = 360 and x = 300.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 aptitude assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1441,
    companyId: 8,
    year: 2023,
    category: "aptitude",
    question:
      "A can complete a job in 12 days and B can complete it in 18 days. How long will they take together?",
    options: ["6 days", "7.2 days", "8 days", "9 days"],
    answer: "7.2 days",
    solution:
      "Combined work = 1/12 + 1/18 = 5/36 per day. Time = 36/5 = 7.2 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 aptitude assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1442,
    companyId: 8,
    year: 2023,
    category: "aptitude",
    question:
      "A product costing Rs. 800 is sold for Rs. 920. What is the profit percentage?",
    options: ["10%", "12%", "15%", "20%"],
    answer: "15%",
    solution:
      "Profit = 920 - 800 = 120. Profit percentage = (120/800) × 100 = 15%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 aptitude assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1443,
    companyId: 8,
    year: 2023,
    category: "aptitude",
    question:
      "The ratio of two numbers is 3:5 and their sum is 64. Find the larger number.",
    options: ["24", "32", "40", "48"],
    answer: "40",
    solution:
      "Total ratio parts = 8. One part = 64/8 = 8. Larger number = 5 × 8 = 40.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 aptitude assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1444,
    companyId: 8,
    year: 2023,
    category: "aptitude",
    question:
      "A train travels 240 km in 3 hours. What is its average speed?",
    options: ["60 km/h", "70 km/h", "80 km/h", "90 km/h"],
    answer: "80 km/h",
    solution:
      "Average speed = Distance / Time = 240 / 3 = 80 km/h.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 aptitude assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1445,
    companyId: 8,
    year: 2023,
    category: "aptitude",
    question:
      "What is the probability of getting an even number when a fair die is rolled?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    answer: "1/2",
    solution:
      "The even outcomes are 2, 4 and 6. Probability = 3/6 = 1/2.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 aptitude assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // LOGICAL REASONING Q1446-Q1451
  // =========================================================

  {
    questionId: 1446,
    companyId: 8,
    year: 2023,
    category: "reasoning",
    question:
      "Find the next number: 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "48"],
    answer: "42",
    solution:
      "The differences are 4, 6, 8 and 10. The next difference is 12. Therefore 30 + 12 = 42.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 logical ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 1447,
    companyId: 8,
    year: 2023,
    category: "reasoning",
    question:
      "If CAT is coded as DBU by shifting every letter forward by one, how is JAVA coded?",
    options: ["KBWB", "KAWA", "JBWB", "LBWB"],
    answer: "KBWB",
    solution:
      "J becomes K, A becomes B, V becomes W and A becomes B. Therefore JAVA becomes KBWB.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 logical ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 1448,
    companyId: 8,
    year: 2023,
    category: "reasoning",
    question:
      "A person walks 5 km north and then 12 km east. What is the shortest distance from the starting point?",
    options: ["13 km", "15 km", "17 km", "7 km"],
    answer: "13 km",
    solution:
      "Using the Pythagorean theorem, distance = sqrt(5² + 12²) = sqrt(169) = 13 km.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 logical ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 1449,
    companyId: 8,
    year: 2023,
    category: "reasoning",
    question:
      "All developers are graduates. Some engineers are developers. Which conclusion definitely follows?",
    options: [
      "Some engineers are graduates",
      "All engineers are graduates",
      "All graduates are developers",
      "No engineer is a graduate"
    ],
    answer: "Some engineers are graduates",
    solution:
      "Some engineers are developers and every developer is a graduate. Therefore those engineers are graduates.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 logical ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 1450,
    companyId: 8,
    year: 2023,
    category: "reasoning",
    question:
      "Find the odd one out: 8, 27, 64, 100, 125",
    options: ["27", "64", "100", "125"],
    answer: "100",
    solution:
      "8 = 2³, 27 = 3³, 64 = 4³ and 125 = 5³. 100 is not a perfect cube.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 logical ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 1451,
    companyId: 8,
    year: 2023,
    category: "reasoning",
    question:
      "If today is Tuesday, what day will it be after 100 days?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    answer: "Thursday",
    solution:
      "100 mod 7 = 2. Two days after Tuesday is Thursday.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 logical ability pattern",
    sourceUrl: null,
  },

  // =========================================================
  // ENGLISH Q1452-Q1455
  // =========================================================

  {
    questionId: 1452,
    companyId: 8,
    year: 2023,
    category: "grammar",
    question:
      "Choose the grammatically correct sentence.",
    options: [
      "She has completed her assignment.",
      "She have completed her assignment.",
      "She has complete her assignment.",
      "She having completed her assignment."
    ],
    answer: "She has completed her assignment.",
    solution:
      "With the singular subject 'she', present perfect uses 'has + past participle'. Therefore 'has completed' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 English assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1453,
    companyId: 8,
    year: 2023,
    category: "grammar",
    question:
      "Choose the synonym of 'accurate'.",
    options: ["Precise", "Incorrect", "Careless", "Random"],
    answer: "Precise",
    solution:
      "Accurate means correct or exact. 'Precise' is the closest option.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 English assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1454,
    companyId: 8,
    year: 2023,
    category: "grammar",
    question:
      "Fill in the blank: He is responsible ___ maintaining the database.",
    options: ["at", "for", "on", "with"],
    answer: "for",
    solution:
      "The correct expression is 'responsible for'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 English assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1455,
    companyId: 8,
    year: 2023,
    category: "grammar",
    question:
      "Choose the antonym of 'complex'.",
    options: ["Difficult", "Simple", "Complicated", "Advanced"],
    answer: "Simple",
    solution:
      "Complex means complicated or consisting of many interconnected parts. Simple is the opposite.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 English assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // DBMS Q1456-Q1460
  // =========================================================

  {
    questionId: 1456,
    companyId: 8,
    year: 2023,
    category: "dbms",
    question:
      "What is a primary key in a relational database?",
    options: [
      "An attribute or set of attributes that uniquely identifies each row",
      "A column that must contain duplicate values",
      "A command used to delete a database",
      "A network address"
    ],
    answer:
      "An attribute or set of attributes that uniquely identifies each row",
    solution:
      "A primary key uniquely identifies each record and cannot contain duplicate key values. DBMS was explicitly reported as part of Tech Mahindra's 2023 technical assessment.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 DBMS technical assessment pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1457,
    companyId: 8,
    year: 2023,
    category: "dbms",
    question:
      "Which normal form removes partial dependency on a composite candidate key?",
    options: ["1NF", "2NF", "3NF", "4NF"],
    answer: "2NF",
    solution:
      "Second Normal Form requires 1NF and removes partial dependency of non-prime attributes on part of a candidate key.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 DBMS technical assessment pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1458,
    companyId: 8,
    year: 2023,
    category: "sql",
    question:
      "Which SQL command is used to retrieve records from a table?",
    options: ["SELECT", "DELETE", "DROP", "ALTER"],
    answer: "SELECT",
    solution:
      "SELECT retrieves data from one or more tables. For example: SELECT * FROM Employee;",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 DBMS/SQL assessment pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1459,
    companyId: 8,
    year: 2023,
    category: "dbms",
    question:
      "Which ACID property ensures that a transaction is completed entirely or not performed at all?",
    options: ["Atomicity", "Consistency", "Isolation", "Durability"],
    answer: "Atomicity",
    solution:
      "Atomicity treats the transaction as one indivisible unit. If part of the transaction fails, its changes can be rolled back.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 DBMS technical assessment pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1460,
    companyId: 8,
    year: 2023,
    category: "sql",
    question:
      "Which SQL JOIN returns rows having matching values in both joined tables?",
    options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "SELF JOIN only"],
    answer: "INNER JOIN",
    solution:
      "INNER JOIN returns rows satisfying the specified join condition in both tables.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 DBMS/SQL assessment pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  // =========================================================
  // OS / COMPUTER NETWORKS Q1461-Q1465
  // =========================================================

  {
    questionId: 1461,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "What is a process in an operating system?",
    options: [
      "A program currently being executed",
      "A database table",
      "A network cable",
      "A Java class only"
    ],
    answer: "A program currently being executed",
    solution:
      "A process is an executing instance of a program with associated resources and execution state. Operating Systems was explicitly listed in Tech Mahindra's 2023 technical assessment.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 OS technical assessment pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1462,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "What is a deadlock?",
    options: [
      "A situation where processes wait indefinitely for resources held by one another",
      "A database sorting operation",
      "A network routing algorithm",
      "A compiler optimization"
    ],
    answer:
      "A situation where processes wait indefinitely for resources held by one another",
    solution:
      "A deadlock can occur when processes form a circular resource dependency and none can proceed.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 OS technical assessment pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1463,
    companyId: 8,
    year: 2023,
    category: "web",
    question:
      "Which transport-layer protocol provides reliable and connection-oriented communication?",
    options: ["TCP", "UDP", "IP", "ARP"],
    answer: "TCP",
    solution:
      "TCP provides reliable, ordered and connection-oriented transport using acknowledgements, sequence numbers and retransmission mechanisms.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 Computer Networks assessment pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1464,
    companyId: 8,
    year: 2023,
    category: "web",
    question:
      "At which OSI layer does IP primarily operate?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer"
    ],
    answer: "Network Layer",
    solution:
      "IP provides logical addressing and packet routing, functions associated with the Network layer of the OSI model.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 Computer Networks assessment pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1465,
    companyId: 8,
    year: 2023,
    category: "web",
    question:
      "Which protocol is commonly used to translate a domain name into an IP address?",
    options: ["DNS", "FTP", "ARP", "SMTP"],
    answer: "DNS",
    solution:
      "The Domain Name System resolves domain names such as example.com into IP addresses.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 Computer Networks assessment pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  // =========================================================
  // DSA / COMPLEXITY Q1466-Q1470
  // =========================================================

  {
    questionId: 1466,
    companyId: 8,
    year: 2023,
    category: "pseudocode",
    question:
      "What is the time complexity of Binary Search on a sorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(log n)",
    solution:
      "Binary Search halves the remaining search interval after each comparison, producing logarithmic time complexity.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName:
      "Tech Mahindra 2023 candidate-reported DSA time/space complexity assessment",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1467,
    companyId: 8,
    year: 2023,
    category: "pseudocode",
    question:
      "What is the worst-case time complexity of Merge Sort?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
    answer: "O(n log n)",
    solution:
      "Merge Sort has O(log n) levels of recursive division and O(n) merging work per level, giving O(n log n).",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName:
      "Tech Mahindra 2023 candidate-reported DSA complexity assessment",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1468,
    companyId: 8,
    year: 2023,
    category: "pseudocode",
    question:
      "Which data structure follows LIFO order?",
    options: ["Queue", "Stack", "Linked List only", "Graph"],
    answer: "Stack",
    solution:
      "LIFO means Last In, First Out. A stack removes the most recently inserted element first.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 DSA assessment pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1469,
    companyId: 8,
    year: 2023,
    category: "pseudocode",
    question:
      "Which data structure is typically used by Breadth-First Search?",
    options: ["Stack", "Queue", "Heap only", "HashMap only"],
    answer: "Queue",
    solution:
      "BFS explores nodes level by level. A FIFO queue preserves the required processing order.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 DSA assessment pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1470,
    companyId: 8,
    year: 2023,
    category: "pseudocode",
    question:
      "What is the extra space complexity of an iterative array reversal using two pointers?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(1)",
    solution:
      "The algorithm swaps elements using a constant number of variables regardless of array size, so extra space is O(1).",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName:
      "Tech Mahindra 2023 candidate-reported time/space complexity assessment",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  // =========================================================
  // EXACTLY REPORTED CODING AREAS Q1471-Q1473
  // =========================================================

  {
    questionId: 1471,
    companyId: 8,
    year: 2023,
    category: "programming",
    question:
      "Convert a given non-negative decimal integer to its binary representation.",
    options: [],
    answer:
      "Repeatedly divide the number by 2, collect each remainder and reverse the remainder sequence.",
    solution: `public class Main {

    static String decimalToBinary(int n) {

        if (n == 0) {
            return "0";
        }

        StringBuilder result =
            new StringBuilder();

        while (n > 0) {

            result.append(n % 2);

            n /= 2;
        }

        return result.reverse().toString();
    }

    public static void main(String[] args) {

        System.out.println(
            decimalToBinary(13)
        );
    }
}

Output:
1101

13 / 2 = 6 remainder 1
6 / 2  = 3 remainder 0
3 / 2  = 1 remainder 1
1 / 2  = 0 remainder 1

The remainders are generated from least significant
to most significant bit, so reverse them.

Time complexity: O(log n)
Space complexity: O(log n)

Decimal-to-binary conversion was explicitly reported
as the first coding problem in a Tech Mahindra 2023
Associate Software Engineer assessment.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 coding question - Decimal to Binary",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1472,
    companyId: 8,
    year: 2023,
    category: "programming",
    question:
      "Given a string s, find its longest palindromic substring.",
    options: [],
    answer:
      "Expand around every possible palindrome center and keep the longest interval found.",
    solution: `public class Main {

    static String longestPalindrome(String s) {

        if (s == null || s.length() < 2) {
            return s;
        }

        int start = 0;
        int end = 0;

        for (int i = 0; i < s.length(); i++) {

            int len1 = expand(s, i, i);

            int len2 = expand(
                s,
                i,
                i + 1
            );

            int len = Math.max(len1, len2);

            if (len > end - start + 1) {

                start =
                    i - (len - 1) / 2;

                end =
                    i + len / 2;
            }
        }

        return s.substring(
            start,
            end + 1
        );
    }

    static int expand(
        String s,
        int left,
        int right
    ) {

        while (
            left >= 0 &&
            right < s.length() &&
            s.charAt(left) ==
            s.charAt(right)
        ) {

            left--;
            right++;
        }

        return right - left - 1;
    }

    public static void main(String[] args) {

        System.out.println(
            longestPalindrome("babad")
        );
    }
}

Possible Output:
bab

"aba" is also a valid longest answer.

Every palindrome has a center.

For an odd-length palindrome, the center is one
character.

For an even-length palindrome, the center lies
between two characters.

We expand around both possibilities for every index.

Time complexity: O(n^2)
Space complexity: O(1), excluding the returned string.

Longest palindromic substring was explicitly reported
as the second coding problem in the Tech Mahindra
2023 Associate Software Engineer assessment.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 coding question - Longest Palindromic Substring",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1473,
    companyId: 8,
    year: 2023,
    category: "programming",
    question:
      "Given two strings, determine whether they are valid anagrams of each other.",
    options: [],
    answer:
      "Count the frequency of each character in both strings and verify that all frequencies match.",
    solution: `public class Main {

    static boolean isAnagram(
        String a,
        String b
    ) {

        if (a.length() != b.length()) {
            return false;
        }

        int[] frequency = new int[256];

        for (int i = 0; i < a.length(); i++) {

            frequency[a.charAt(i)]++;

            frequency[b.charAt(i)]--;
        }

        for (int count : frequency) {

            if (count != 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        System.out.println(
            isAnagram(
                "listen",
                "silent"
            )
        );
    }
}

Output:
true

Both strings contain exactly the same characters
with the same frequencies.

Time complexity: O(n)
Space complexity: O(1) for a fixed character set.

A valid-anagram program was explicitly reported
during a Tech Mahindra 2023 technical interview.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 technical interview - Valid Anagram",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  // =========================================================
  // TECHNICAL INTERVIEW Q1474-Q1489
  // =========================================================

  {
    questionId: 1474,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "What are the four main pillars of Object-Oriented Programming?",
    options: [
      "Encapsulation, Abstraction, Inheritance, Polymorphism",
      "Stack, Queue, Tree, Graph",
      "Process, Thread, CPU, Memory",
      "HTML, CSS, JavaScript, SQL"
    ],
    answer:
      "Encapsulation, Abstraction, Inheritance, Polymorphism",
    solution:
      "The four commonly taught OOP pillars are encapsulation, abstraction, inheritance and polymorphism. This was explicitly reported as a Tech Mahindra 2023 technical interview question.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 interview - Four pillars of OOP",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1475,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "What is the main difference between abstraction and encapsulation?",
    options: [
      "Abstraction hides unnecessary implementation details, while encapsulation bundles data and behavior and controls access",
      "They are exactly the same concept",
      "Abstraction is only a database concept",
      "Encapsulation is a sorting algorithm"
    ],
    answer:
      "Abstraction hides unnecessary implementation details, while encapsulation bundles data and behavior and controls access",
    solution:
      "Abstraction focuses on exposing essential behavior while hiding implementation complexity. Encapsulation groups data with related operations and restricts direct access to internal state. This distinction was explicitly asked in a Tech Mahindra 2023 interview.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 interview - Abstraction vs Encapsulation",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1476,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "How can compile-time polymorphism commonly be achieved in C++?",
    options: [
      "Function overloading and operator overloading",
      "Only method overriding",
      "Database normalization",
      "Process scheduling"
    ],
    answer:
      "Function overloading and operator overloading",
    solution:
      "The compiler can resolve overloaded functions or operators based on their signatures and operands. Compile-time polymorphism was explicitly discussed in the 2023 Tech Mahindra technical interview report.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 interview - Compile-time polymorphism",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1477,
    companyId: 8,
    year: 2023,
    category: "web",
    question:
      "What is the primary purpose of an HTML form?",
    options: [
      "To collect and submit user input",
      "To compile Java programs",
      "To schedule operating-system processes",
      "To normalize a database"
    ],
    answer: "To collect and submit user input",
    solution:
      "HTML forms contain controls such as input fields, buttons and selections used to collect user information and submit it for processing. HTML Forms were explicitly reported as a Tech Mahindra 2023 interview question.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 interview - HTML Forms",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1478,
    companyId: 8,
    year: 2023,
    category: "web",
    question:
      "Which HTML element is normally used to create a hyperlink?",
    options: ["<a>", "<p>", "<table>", "<input>"],
    answer: "<a>",
    solution:
      "The anchor element <a> creates hyperlinks. CSS can then be used to style links. CSS links were among the web topics explicitly reported in a Tech Mahindra 2023 technical interview.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 interview - CSS/HTML Links",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1479,
    companyId: 8,
    year: 2023,
    category: "web",
    question:
      "Why is JavaScript form validation commonly used?",
    options: [
      "To check user input before it is submitted",
      "To replace the database permanently",
      "To create CPU processes",
      "To compile CSS"
    ],
    answer:
      "To check user input before it is submitted",
    solution:
      "Client-side JavaScript validation can detect missing or incorrectly formatted input before a request is sent. Server-side validation is still necessary for security and correctness. JavaScript validation was explicitly reported in the Tech Mahindra 2023 interview.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 interview - JavaScript Validation",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1480,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "What is method overloading?",
    options: [
      "Defining methods with the same name but different parameter lists",
      "Replacing a database table",
      "Running multiple operating systems",
      "Creating two identical variables"
    ],
    answer:
      "Defining methods with the same name but different parameter lists",
    solution:
      "Method/function overloading allows multiple operations to share a name while differing in parameters. The compiler selects the appropriate overload based on the call.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Tech Mahindra 2023 candidate-reported compile-time polymorphism topic",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1481,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "What is runtime polymorphism?",
    options: [
      "Selecting an overridden method based on the actual object at runtime",
      "Selecting an SQL table at compile time",
      "Sorting an array at runtime only",
      "Creating a network connection"
    ],
    answer:
      "Selecting an overridden method based on the actual object at runtime",
    solution:
      "Runtime polymorphism is commonly associated with method overriding and dynamic dispatch.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Tech Mahindra 2023 OOP interview pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1482,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "What is inheritance in object-oriented programming?",
    options: [
      "A mechanism allowing a class to derive behavior or state from another class",
      "A database JOIN",
      "A CPU scheduling technique",
      "A network protocol"
    ],
    answer:
      "A mechanism allowing a class to derive behavior or state from another class",
    solution:
      "Inheritance creates relationships between parent and child classes and supports reuse and specialization. It is one of the four OOP pillars explicitly discussed in the 2023 interview report.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName: "Tech Mahindra 2023 candidate-reported OOP interview topic",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1483,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "What is encapsulation?",
    options: [
      "Bundling data with related methods while controlling access to internal state",
      "Breaking a program into network packets",
      "Sorting records in SQL",
      "Allocating CPU time"
    ],
    answer:
      "Bundling data with related methods while controlling access to internal state",
    solution:
      "Encapsulation groups state and behavior within an object and commonly uses access modifiers to protect implementation details.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName: "Tech Mahindra 2023 candidate-reported OOP interview topic",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1484,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "When an interviewer asks you to explain your project, what should your answer include?",
    options: [
      "Problem statement, architecture, technologies, your role, implementation and challenges",
      "Only the project name",
      "Only the programming language",
      "Only your college name"
    ],
    answer:
      "Problem statement, architecture, technologies, your role, implementation and challenges",
    solution:
      "Both 2023 candidate reports explicitly describe project-related technical interview questions. Candidates were asked about the project and their personal role, so the answer should clearly separate the overall project from your own contribution.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 technical interview - Project explanation",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-2/",
  },

  {
    questionId: 1485,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "Why might an interviewer ask 'What was your role in the project?'",
    options: [
      "To understand your actual contribution and technical ownership",
      "Only to know the project title",
      "To test mathematical probability",
      "To determine your network IP"
    ],
    answer:
      "To understand your actual contribution and technical ownership",
    solution:
      "The question separates work you personally performed from work completed by other team members. Project-role questions appear directly in multiple Tech Mahindra 2023 candidate reports.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 interview - Role in project",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-2/",
  },

  {
    questionId: 1486,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "When asked for your favorite programming language and why, what makes a technically strong answer?",
    options: [
      "Name a language you genuinely know and explain its features using examples from your work",
      "Choose a language you have never used",
      "Say all programming languages are identical",
      "Avoid explaining your choice"
    ],
    answer:
      "Name a language you genuinely know and explain its features using examples from your work",
    solution:
      "A 2023 Tech Mahindra technical interview report explicitly lists 'What is your favorite programming language and why?' A strong answer should allow you to handle follow-up technical questions.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 interview - Favorite programming language",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-2/",
  },

  {
    questionId: 1487,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "Which statement best describes abstraction in OOP?",
    options: [
      "Showing essential behavior while hiding unnecessary implementation details",
      "Making every variable public",
      "Copying a database",
      "Sorting every object"
    ],
    answer:
      "Showing essential behavior while hiding unnecessary implementation details",
    solution:
      "Abstraction focuses on what an object exposes rather than all details of how it performs the operation. It was directly discussed in the 2023 Tech Mahindra OOP interview.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName: "Tech Mahindra 2023 candidate-reported abstraction interview topic",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1488,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "During a technical interview, why should you be able to explain difficulties faced during your project?",
    options: [
      "It demonstrates problem solving, ownership and how you handled real implementation challenges",
      "It proves that the project failed",
      "It replaces the need to explain your contribution",
      "It is unrelated to technical work"
    ],
    answer:
      "It demonstrates problem solving, ownership and how you handled real implementation challenges",
    solution:
      "A 2023 Tech Mahindra Associate Software Engineer interview explicitly asked the candidate about difficulties faced during the project. Explain the problem, why it occurred, what you tried and how it was resolved.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 interview - Project difficulties",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-for-associate-software-engineer/",
  },

  {
    questionId: 1489,
    companyId: 8,
    year: 2023,
    category: "java",
    question:
      "A Tech Mahindra interviewer asks you to write a basic program in your preferred language. What is most important?",
    options: [
      "Write correct readable logic and explain the approach and complexity",
      "Use the maximum number of lines possible",
      "Avoid explaining the code",
      "Use a language you do not know"
    ],
    answer:
      "Write correct readable logic and explain the approach and complexity",
    solution:
      "A May 2023 Tech Mahindra on-campus report explicitly states that the interviewer asked the candidate to write a basic program. For an interview solution, explain the algorithm, handle relevant edge cases and state complexity where appropriate.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Tech Mahindra 2023 technical interview - Basic program",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tech-mahindra-interview-experience-on-campus-2/",
  },
];

async function seedTechMahindra2023Questions() {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 8,
      year: 2023,
    });

    console.log(
      "Old Tech Mahindra 2023 questions deleted"
    );

    await CompanyQuestion.insertMany(
      companyQuestions
    );

    console.log(
      `${companyQuestions.length} Tech Mahindra 2023 questions seeded successfully`
    );

    process.exit(0);

  } catch (error) {

    console.error(
      "Error seeding Tech Mahindra 2023 questions:",
      error
    );

    process.exit(1);
  }
}

seedTechMahindra2023Questions();