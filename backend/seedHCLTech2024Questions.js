require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [

  // =========================================================
  // QUANTITATIVE APTITUDE Q1200-Q1207
  // =========================================================

  {
    questionId: 1200,
    companyId: 7,
    year: 2024,
    category: "aptitude",
    question:
      "A number is increased by 20% and then decreased by 20%. What is the overall percentage change?",
    options: ["No change", "4% decrease", "4% increase", "8% decrease"],
    answer: "4% decrease",
    solution:
      "Assume the number is 100. After a 20% increase it becomes 120. A 20% decrease on 120 is 24, so the final value is 96. Therefore the overall decrease is 4%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1201,
    companyId: 7,
    year: 2024,
    category: "aptitude",
    question:
      "A can complete a job in 12 days and B can complete it in 18 days. How long will they take working together?",
    options: ["6 days", "7.2 days", "8 days", "9 days"],
    answer: "7.2 days",
    solution:
      "A completes 1/12 of the work per day and B completes 1/18. Together they complete 1/12 + 1/18 = 5/36 per day. Time = 36/5 = 7.2 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1202,
    companyId: 7,
    year: 2024,
    category: "aptitude",
    question:
      "A train travels 240 km in 4 hours. What is its average speed?",
    options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
    answer: "60 km/h",
    solution:
      "Average speed = total distance / total time = 240 / 4 = 60 km/h.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1203,
    companyId: 7,
    year: 2024,
    category: "aptitude",
    question:
      "The ratio of the ages of A and B is 3:5. If their total age is 48 years, what is B's age?",
    options: ["18", "24", "30", "32"],
    answer: "30",
    solution:
      "Total ratio parts = 3 + 5 = 8. One part = 48/8 = 6. B's age = 5 × 6 = 30 years.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1204,
    companyId: 7,
    year: 2024,
    category: "aptitude",
    question:
      "An item is purchased for Rs. 800 and sold for Rs. 920. What is the profit percentage?",
    options: ["10%", "12%", "15%", "20%"],
    answer: "15%",
    solution:
      "Profit = 920 - 800 = 120. Profit percentage = (120/800) × 100 = 15%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1205,
    companyId: 7,
    year: 2024,
    category: "aptitude",
    question:
      "What is the simple interest on Rs. 5000 at 8% per annum for 2 years?",
    options: ["Rs. 400", "Rs. 600", "Rs. 800", "Rs. 1000"],
    answer: "Rs. 800",
    solution:
      "Simple Interest = (P × R × T)/100 = (5000 × 8 × 2)/100 = Rs. 800.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1206,
    companyId: 7,
    year: 2024,
    category: "aptitude",
    question:
      "The average of five numbers is 24. If four of the numbers are 18, 20, 25 and 27, what is the fifth number?",
    options: ["28", "30", "32", "35"],
    answer: "30",
    solution:
      "Total of five numbers = 24 × 5 = 120. Sum of the four given numbers = 18 + 20 + 25 + 27 = 90. Fifth number = 120 - 90 = 30.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 1207,
    companyId: 7,
    year: 2024,
    category: "aptitude",
    question:
      "A bag contains 5 red and 3 blue balls. What is the probability of selecting a blue ball at random?",
    options: ["3/5", "3/8", "5/8", "1/2"],
    answer: "3/8",
    solution:
      "There are 8 balls in total and 3 favorable blue balls. Probability = 3/8.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET quantitative aptitude pattern",
    sourceUrl: null,
  },

  // =========================================================
  // LOGICAL / ANALYTICAL REASONING Q1208-Q1215
  // =========================================================

  {
    questionId: 1208,
    companyId: 7,
    year: 2024,
    category: "reasoning",
    question:
      "Find the next number in the series: 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "44"],
    answer: "42",
    solution:
      "Differences are 4, 6, 8 and 10. The next difference is 12, so 30 + 12 = 42.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1209,
    companyId: 7,
    year: 2024,
    category: "reasoning",
    question:
      "If CAT is coded as DBU by shifting every letter forward by one, how is DOG coded?",
    options: ["EPH", "EOH", "FPH", "DNG"],
    answer: "EPH",
    solution:
      "D becomes E, O becomes P and G becomes H. Therefore DOG becomes EPH.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1210,
    companyId: 7,
    year: 2024,
    category: "reasoning",
    question:
      "A person walks 5 km north, turns right and walks 3 km, then turns right and walks 5 km. In which direction is the person from the starting point?",
    options: ["North", "South", "East", "West"],
    answer: "East",
    solution:
      "The 5 km north and 5 km south movements cancel. The person remains 3 km east of the starting point.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1211,
    companyId: 7,
    year: 2024,
    category: "reasoning",
    question:
      "Statements: All programmers are logical. Some students are programmers. Which conclusion definitely follows?",
    options: [
      "Some students are logical",
      "All students are logical",
      "No student is logical",
      "All logical people are programmers"
    ],
    answer: "Some students are logical",
    solution:
      "Some students belong to the programmer set. Since every programmer is logical, those students must also be logical.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 analytical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1212,
    companyId: 7,
    year: 2024,
    category: "reasoning",
    question:
      "Find the odd one out: 8, 27, 64, 100, 125",
    options: ["8", "27", "100", "125"],
    answer: "100",
    solution:
      "8 = 2³, 27 = 3³, 64 = 4³ and 125 = 5³. 100 is not a perfect cube.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1213,
    companyId: 7,
    year: 2024,
    category: "reasoning",
    question:
      "If A is taller than B, B is taller than C, and C is taller than D, who is the shortest?",
    options: ["A", "B", "C", "D"],
    answer: "D",
    solution:
      "The ordering is A > B > C > D. Therefore D is the shortest.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1214,
    companyId: 7,
    year: 2024,
    category: "reasoning",
    question:
      "Find the next term: AZ, BY, CX, DW, ?",
    options: ["EV", "EU", "FV", "EX"],
    answer: "EV",
    solution:
      "The first letters move forward A, B, C, D, E while the second letters move backward Z, Y, X, W, V. Therefore the answer is EV.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 analytical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1215,
    companyId: 7,
    year: 2024,
    category: "reasoning",
    question:
      "Ravi is the brother of Neha. Neha is the mother of Aman. How is Ravi related to Aman?",
    options: ["Father", "Uncle", "Brother", "Grandfather"],
    answer: "Uncle",
    solution:
      "Ravi is the brother of Aman's mother, Neha. Therefore Ravi is Aman's maternal uncle.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 logical reasoning pattern",
    sourceUrl: null,
  },

  // =========================================================
  // VERBAL ABILITY Q1216-Q1221
  // =========================================================

  {
    questionId: 1216,
    companyId: 7,
    year: 2024,
    category: "grammar",
    question:
      "Choose the grammatically correct sentence.",
    options: [
      "She has been working here for five years.",
      "She have been working here for five years.",
      "She is working here since five years.",
      "She has working here for five years."
    ],
    answer: "She has been working here for five years.",
    solution:
      "The present perfect continuous tense is appropriate for an action that started in the past and continues to the present: 'has been working'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1217,
    companyId: 7,
    year: 2024,
    category: "grammar",
    question:
      "Choose the word closest in meaning to 'meticulous'.",
    options: ["Careless", "Careful", "Angry", "Rapid"],
    answer: "Careful",
    solution:
      "Meticulous describes someone who is very careful and pays close attention to details.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1218,
    companyId: 7,
    year: 2024,
    category: "grammar",
    question:
      "Choose the correct word: Neither the manager nor the employees ___ available.",
    options: ["was", "were", "is", "be"],
    answer: "were",
    solution:
      "With neither...nor, the verb commonly agrees with the nearer subject. The nearer subject is the plural noun 'employees', so 'were' is appropriate.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1219,
    companyId: 7,
    year: 2024,
    category: "grammar",
    question:
      "Choose the antonym of 'scarce'.",
    options: ["Rare", "Limited", "Abundant", "Insufficient"],
    answer: "Abundant",
    solution:
      "Scarce means insufficient or limited in quantity. Abundant means available in large quantity and is its opposite.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1220,
    companyId: 7,
    year: 2024,
    category: "grammar",
    question:
      "Choose the correctly spelled word.",
    options: ["Accomodation", "Accommodation", "Acommodation", "Accommadation"],
    answer: "Accommodation",
    solution:
      "The correct spelling is 'Accommodation', containing double c and double m.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1221,
    companyId: 7,
    year: 2024,
    category: "grammar",
    question:
      "Fill in the blank: The developers completed the task ___ the deadline.",
    options: ["before", "between", "among", "during to"],
    answer: "before",
    solution:
      "'Before the deadline' correctly means the task was completed earlier than the specified deadline.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 verbal assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // PSEUDOCODE / OUTPUT Q1222-Q1231
  // =========================================================

  {
    questionId: 1222,
    companyId: 7,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

SET x = 5
SET y = 3
SET z = x * y + 2
PRINT z`,
    options: ["15", "17", "21", "10"],
    answer: "17",
    solution:
      "First x × y = 5 × 3 = 15. Then 2 is added. Therefore z = 17.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1223,
    companyId: 7,
    year: 2024,
    category: "pseudocode",
    question: `What is printed?

SET sum = 0
FOR i = 1 TO 5
    sum = sum + i
END FOR
PRINT sum`,
    options: ["5", "10", "15", "20"],
    answer: "15",
    solution:
      "The loop calculates 1 + 2 + 3 + 4 + 5 = 15.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1224,
    companyId: 7,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

SET x = 10

IF x > 5
    IF x < 15
        PRINT "A"
    ELSE
        PRINT "B"
    END IF
ELSE
    PRINT "C"
END IF`,
    options: ["A", "B", "C", "No output"],
    answer: "A",
    solution:
      "10 > 5 is true and 10 < 15 is also true, so the inner true branch prints A.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1225,
    companyId: 7,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

SET x = 1

FOR i = 1 TO 4
    x = x * 2
END FOR

PRINT x`,
    options: ["8", "16", "32", "4"],
    answer: "16",
    solution:
      "Starting from 1, the value doubles four times: 2, 4, 8, 16. Therefore the output is 16.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1226,
    companyId: 7,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

SET a = 5
SET b = 3

PRINT a AND b`,
    options: ["1", "3", "5", "8"],
    answer: "1",
    solution:
      "Treat AND as bitwise AND. 5 in binary is 101 and 3 is 011. 101 AND 011 = 001, which equals 1.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET pseudocode/technical pattern",
    sourceUrl: null,
  },

  {
    questionId: 1227,
    companyId: 7,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

SET a = 5
SET b = 3

PRINT a XOR b`,
    options: ["1", "6", "7", "8"],
    answer: "6",
    solution:
      "5 = 101 and 3 = 011. XOR produces 1 where the bits differ: 101 XOR 011 = 110, which is decimal 6.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET pseudocode/technical pattern",
    sourceUrl: null,
  },

  {
    questionId: 1228,
    companyId: 7,
    year: 2024,
    category: "pseudocode",
    question: `What is printed?

SET arr = [4, 7, 2, 9, 5]
SET max = arr[0]

FOR i = 1 TO 4
    IF arr[i] > max
        max = arr[i]
    END IF
END FOR

PRINT max`,
    options: ["4", "7", "9", "5"],
    answer: "9",
    solution:
      "The algorithm keeps the largest value seen so far. Starting with 4, max becomes 7 and then 9. Neither 2 nor 5 exceeds 9, so the output is 9.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1229,
    companyId: 7,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

FUNCTION fun(n)
    IF n <= 1
        RETURN 1
    END IF

    RETURN n * fun(n - 1)
END FUNCTION

PRINT fun(4)`,
    options: ["4", "10", "24", "120"],
    answer: "24",
    solution:
      "fun(4) = 4 × fun(3) = 4 × 3 × fun(2) = 4 × 3 × 2 × fun(1). fun(1) returns 1, so the result is 24.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1230,
    companyId: 7,
    year: 2024,
    category: "pseudocode",
    question: `What is printed?

SET count = 0

FOR i = 1 TO 3
    FOR j = 1 TO 2
        count = count + 1
    END FOR
END FOR

PRINT count`,
    options: ["3", "5", "6", "9"],
    answer: "6",
    solution:
      "The outer loop executes 3 times and the inner loop executes 2 times for each outer iteration. Therefore count increases 3 × 2 = 6 times.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1231,
    companyId: 7,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

SET x = 20
SET count = 0

WHILE x > 1
    x = x / 2
    count = count + 1
END WHILE

PRINT count

Assume integer division.`,
    options: ["3", "4", "5", "20"],
    answer: "4",
    solution:
      "Integer division gives x values 20 -> 10 -> 5 -> 2 -> 1. Four loop iterations are executed, so count is 4.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET pseudocode assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // COMPUTER NETWORKS / TECHNICAL Q1232-Q1237
  // =========================================================

  {
    questionId: 1232,
    companyId: 7,
    year: 2024,
    category: "web",
    question:
      "Which protocol is connection-oriented and provides reliable byte-stream delivery?",
    options: ["TCP", "UDP", "ARP", "ICMP"],
    answer: "TCP",
    solution:
      "TCP is connection-oriented and provides reliable, ordered byte-stream delivery using mechanisms such as acknowledgements and retransmission.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET networking/domain assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1233,
    companyId: 7,
    year: 2024,
    category: "web",
    question:
      "Which protocol maps an IPv4 address to a MAC address on a local network?",
    options: ["ARP", "HTTP", "FTP", "DNS"],
    answer: "ARP",
    solution:
      "ARP, or Address Resolution Protocol, is used on IPv4 local networks to resolve a known IP address to the corresponding link-layer MAC address.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET networking/domain assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1234,
    companyId: 7,
    year: 2024,
    category: "web",
    question:
      "Which OSI layer is primarily responsible for routing packets between networks?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Presentation Layer"
    ],
    answer: "Network Layer",
    solution:
      "The Network Layer, Layer 3 of the OSI model, handles logical addressing and routing between networks.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET networking/domain assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1235,
    companyId: 7,
    year: 2024,
    category: "web",
    question:
      "What is the primary purpose of DNS?",
    options: [
      "Translate domain names to IP addresses",
      "Encrypt every network packet",
      "Assign MAC addresses",
      "Compile source code"
    ],
    answer: "Translate domain names to IP addresses",
    solution:
      "DNS provides name resolution. For example, it can resolve a human-readable hostname to an IP address that network software can use.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET networking/domain assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1236,
    companyId: 7,
    year: 2024,
    category: "web",
    question:
      "What is the default port number for HTTPS?",
    options: ["21", "25", "80", "443"],
    answer: "443",
    solution:
      "HTTPS conventionally uses TCP port 443.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET networking/domain assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1237,
    companyId: 7,
    year: 2024,
    category: "web",
    question:
      "Which device primarily forwards packets between different IP networks?",
    options: ["Router", "Repeater", "Hub", "Keyboard"],
    answer: "Router",
    solution:
      "A router examines network-layer addressing and forwards packets between networks according to its routing information.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 GET networking/domain assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // SQL / DBMS INTERVIEW Q1238-Q1241
  // =========================================================

  {
    questionId: 1238,
    companyId: 7,
    year: 2024,
    category: "sql",
    question:
      "Which SQL query returns every row from Employee where salary is greater than 50000?",
    options: [
      "SELECT * FROM Employee WHERE salary > 50000;",
      "SELECT Employee WHERE salary > 50000;",
      "GET * Employee salary > 50000;",
      "SELECT * FROM Employee HAVING salary;"
    ],
    answer: "SELECT * FROM Employee WHERE salary > 50000;",
    solution:
      "SELECT * retrieves all columns, FROM identifies Employee, and WHERE salary > 50000 filters the rows. SQL was explicitly reported in a 2024 HCLTech GET technical interview.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 candidate-reported SQL interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1239,
    companyId: 7,
    year: 2024,
    category: "sql",
    question:
      "Which query finds the second-highest distinct salary from Employee?",
    options: [
      "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
      "SELECT MIN(salary) FROM Employee;",
      "SELECT COUNT(salary) FROM Employee;",
      "DELETE FROM Employee;"
    ],
    answer:
      "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
    solution:
      "The inner query finds the maximum salary. The outer query finds the greatest salary below that maximum, producing the second-highest distinct salary.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 SQL interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1240,
    companyId: 7,
    year: 2024,
    category: "dbms",
    question:
      "What is the primary purpose of a primary key?",
    options: [
      "Uniquely identify each row in a table",
      "Allow duplicate identification values",
      "Sort every table automatically",
      "Delete duplicate tables"
    ],
    answer: "Uniquely identify each row in a table",
    solution:
      "A primary key uniquely identifies each row. Its values must satisfy uniqueness and cannot be NULL.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 DBMS/SQL interview practice",
    sourceUrl: null,
  },

  {
    questionId: 1241,
    companyId: 7,
    year: 2024,
    category: "sql",
    question:
      "What does an INNER JOIN return?",
    options: [
      "Rows satisfying the join condition in both tables",
      "Every row from the left table regardless of a match",
      "Only rows containing NULL",
      "Every possible pair of rows by definition"
    ],
    answer: "Rows satisfying the join condition in both tables",
    solution:
      "INNER JOIN combines rows from the participating tables when the specified join condition evaluates to a match.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2024 SQL interview practice",
    sourceUrl: null,
  },

  // =========================================================
  // DSA / SORTING / CODING Q1242-Q1246
  // =========================================================

  {
    questionId: 1242,
    companyId: 7,
    year: 2024,
    category: "programming",
    question:
      "Write Bubble Sort to sort an integer array in ascending order.",
    options: [],
    answer:
      "Repeatedly compare adjacent elements and swap them when they are in the wrong order.",
    solution: `public class Main {

    static void bubbleSort(int[] arr) {

        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {

            boolean swapped = false;

            for (int j = 0; j < n - 1 - i; j++) {

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
    }

    public static void main(String[] args) {

        int[] arr = {5, 1, 4, 2, 8};

        bubbleSort(arr);

        for (int value : arr) {
            System.out.print(value + " ");
        }
    }
}

Output:
1 2 4 5 8

Bubble Sort repeatedly compares neighboring values.
If the left value is larger, they are swapped.

After each complete pass, the largest remaining
unsorted element reaches its correct position.

Worst-case time complexity: O(n^2)
Best case with the swapped optimization: O(n)
Space complexity: O(1)

Writing Bubble Sort was explicitly reported in a 2024
HCLTech technical round.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2024 technical interview - Bubble Sort",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcltech-interview-experience-ftp/",
  },

  {
    questionId: 1243,
    companyId: 7,
    year: 2024,
    category: "programming",
    question:
      "Explain and implement Merge Sort for an integer array.",
    options: [],
    answer:
      "Divide the array into halves, recursively sort each half and merge the sorted halves.",
    solution: `import java.util.Arrays;

public class Main {

    static void mergeSort(int[] arr, int left, int right) {

        if (left >= right) {
            return;
        }

        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }

    static void merge(
        int[] arr,
        int left,
        int mid,
        int right
    ) {

        int[] temp = new int[right - left + 1];

        int i = left;
        int j = mid + 1;
        int k = 0;

        while (i <= mid && j <= right) {

            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
            }
        }

        while (i <= mid) {
            temp[k++] = arr[i++];
        }

        while (j <= right) {
            temp[k++] = arr[j++];
        }

        for (int x = 0; x < temp.length; x++) {
            arr[left + x] = temp[x];
        }
    }

    public static void main(String[] args) {

        int[] arr = {38, 27, 43, 3, 9, 82, 10};

        mergeSort(arr, 0, arr.length - 1);

        System.out.println(Arrays.toString(arr));
    }
}

Output:
[3, 9, 10, 27, 38, 43, 82]

Merge Sort divides the problem until each subarray
contains one element and then merges sorted subarrays.

Time complexity: O(n log n)
Auxiliary space: O(n)

Merge Sort and its algorithm/details were explicitly
reported in a 2024 HCLTech technical interview.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2024 technical interview - Merge Sort",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcltech-interview-experience-ftp/",
  },

  {
    questionId: 1244,
    companyId: 7,
    year: 2024,
    category: "programming",
    question:
      "Implement Quick Sort for an integer array and explain its partitioning process.",
    options: [],
    answer:
      "Choose a pivot, partition values around it, then recursively sort the left and right partitions.",
    solution: `import java.util.Arrays;

public class Main {

    static void quickSort(int[] arr, int low, int high) {

        if (low < high) {

            int pivotIndex = partition(arr, low, high);

            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }

    static int partition(int[] arr, int low, int high) {

        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {

            if (arr[j] <= pivot) {

                i++;

                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

    public static void main(String[] args) {

        int[] arr = {10, 7, 8, 9, 1, 5};

        quickSort(arr, 0, arr.length - 1);

        System.out.println(Arrays.toString(arr));
    }
}

Output:
[1, 5, 7, 8, 9, 10]

This implementation chooses the final element as pivot.
Partitioning places values <= pivot to its left and
larger values to its right.

Average time complexity: O(n log n)
Worst-case time complexity: O(n^2)

Quick Sort and its algorithm/details were explicitly
reported in a 2024 HCLTech technical round.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2024 technical interview - Quick Sort",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcltech-interview-experience-ftp/",
  },

  {
    questionId: 1245,
    companyId: 7,
    year: 2024,
    category: "programming",
    question:
      "Given a sorted array that has been rotated, determine whether it is still a valid rotation of a non-decreasing sorted array.",
    options: [],
    answer:
      "Count positions where an element is greater than the next element, treating the array as circular. There can be at most one such drop.",
    solution: `public class Main {

    static boolean isRotatedSorted(int[] arr) {

        int drops = 0;
        int n = arr.length;

        for (int i = 0; i < n; i++) {

            if (arr[i] > arr[(i + 1) % n]) {
                drops++;
            }

            if (drops > 1) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        int[] arr = {3, 4, 5, 1, 2};

        System.out.println(isRotatedSorted(arr));
    }
}

Output:
true

For a sorted array considered circularly, there can be
at most one position where arr[i] > arr[i + 1].

For [3,4,5,1,2], the only drop is 5 -> 1.

Time complexity: O(n)
Space complexity: O(1)

A rotated-and-sorted-array problem was reported in a
2024 HCLTech on-campus technical interview.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2024 on-campus interview - rotated sorted array",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-3/",
  },

  {
    questionId: 1246,
    companyId: 7,
    year: 2024,
    category: "programming",
    question:
      "Given the root of a Binary Search Tree and a target value, determine whether the target exists in the tree.",
    options: [],
    answer:
      "Compare the target with the current node and move left for a smaller target or right for a larger target.",
    solution: `class Node {

    int data;
    Node left;
    Node right;

    Node(int data) {
        this.data = data;
    }
}

public class Main {

    static boolean search(Node root, int target) {

        while (root != null) {

            if (root.data == target) {
                return true;
            }

            if (target < root.data) {
                root = root.left;
            } else {
                root = root.right;
            }
        }

        return false;
    }

    public static void main(String[] args) {

        Node root = new Node(8);
        root.left = new Node(3);
        root.right = new Node(10);
        root.left.left = new Node(1);
        root.left.right = new Node(6);

        System.out.println(search(root, 6));
    }
}

Output:
true

BST ordering lets us discard one subtree after every
comparison.

Average complexity in a reasonably balanced BST:
O(log n)

Worst case in a highly skewed BST:
O(n)

Searching for an element in a BST was reported in a
2024 HCLTech on-campus technical interview.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2024 on-campus interview - BST search",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-3/",
  },

  // =========================================================
  // OOP / PROJECT / TECHNICAL INTERVIEW Q1247-Q1249
  // =========================================================

  {
    questionId: 1247,
    companyId: 7,
    year: 2024,
    category: "java",
    question:
      "Explain the four major pillars of Object-Oriented Programming with an example of each.",
    options: [
      "Encapsulation, Abstraction, Inheritance and Polymorphism",
      "Stack, Queue, Tree and Graph",
      "HTML, CSS, SQL and HTTP",
      "Process, Thread, CPU and RAM"
    ],
    answer:
      "Encapsulation, Abstraction, Inheritance and Polymorphism",
    solution:
      "Encapsulation bundles state and behavior and controls access to internal state. Abstraction exposes essential behavior while hiding implementation details. Inheritance allows a class to derive behavior from another class. Polymorphism allows a common interface or parent reference to represent different implementations. OOP pillars were explicitly reported in a 2024 HCLTech technical round.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2024 technical interview - OOP pillars",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcltech-interview-experience-ftp/",
  },

  {
    questionId: 1248,
    companyId: 7,
    year: 2024,
    category: "java",
    question:
      "What is one fundamental difference between C and C++?",
    options: [
      "C is primarily procedural, while C++ supports procedural as well as object-oriented programming features",
      "C supports classes but C++ does not",
      "C++ cannot use functions",
      "C and C++ have no differences"
    ],
    answer:
      "C is primarily procedural, while C++ supports procedural as well as object-oriented programming features",
    solution:
      "C is predominantly a procedural programming language. C++ was developed from C and adds features such as classes, inheritance, polymorphism, templates and other abstractions. The difference between C and C++ was explicitly reported as a question in a May 2024 HCLTech GET technical interview.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2024 GET technical interview - C vs C++",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-technologies-interview-experience-for-graduate-engineer-trainee-2/",
  },

  {
    questionId: 1249,
    companyId: 7,
    year: 2024,
    category: "java",
    question:
      "When an interviewer asks you to explain your project, which points should you be prepared to discuss in depth?",
    options: [
      "Problem statement, your contribution, architecture, technology choices, implementation, challenges and alternatives",
      "Only the project title",
      "Only your college name",
      "Only the programming language name"
    ],
    answer:
      "Problem statement, your contribution, architecture, technology choices, implementation, challenges and alternatives",
    solution:
      "HCLTech candidate reports from 2024 describe substantial project discussions. Candidates were asked to explain projects, implementation details, setbacks, technology-stack choices, alternatives and why particular technologies were selected. Therefore you should understand the complete technical flow of every project on your resume.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2024 project-focused technical interview",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-3/",
  },
];

async function seedHCLTech2024Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 7,
      year: 2024,
    });

    console.log("Old HCLTech 2024 questions deleted");

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} HCLTech 2024 questions seeded successfully`
    );

    process.exit(0);
  } catch (error) {
    console.error(
      "Error seeding HCLTech 2024 questions:",
      error
    );

    process.exit(1);
  }
}

seedHCLTech2024Questions();