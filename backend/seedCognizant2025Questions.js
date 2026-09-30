require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [

  // =========================================================
  // APTITUDE Q780-Q789
  // =========================================================

  {
    questionId: 780,
    companyId: 5,
    year: 2025,
    category: "aptitude",
    question:
      "A software team completes 3/5 of a project in 12 days. At the same rate, how many additional days are required to complete the remaining work?",
    options: ["6 days", "8 days", "10 days", "12 days"],
    answer: "8 days",
    solution:
      "3/5 of the work takes 12 days. Therefore 1/5 takes 12/3 = 4 days. Remaining work = 2/5, so required time = 2 × 4 = 8 days.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 781,
    companyId: 5,
    year: 2025,
    category: "aptitude",
    question:
      "The average of 8 numbers is 24. If one number 18 is replaced by 34, what is the new average?",
    options: ["24", "25", "26", "28"],
    answer: "26",
    solution:
      "Original total = 8 × 24 = 192. Replacing 18 by 34 increases the total by 16. New total = 208. New average = 208/8 = 26.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 782,
    companyId: 5,
    year: 2025,
    category: "aptitude",
    question:
      "A product marked at ₹2500 is sold after successive discounts of 20% and 10%. What is its final selling price?",
    options: ["₹1750", "₹1800", "₹1850", "₹2000"],
    answer: "₹1800",
    solution:
      "After 20% discount: 2500 × 0.80 = ₹2000. After another 10% discount: 2000 × 0.90 = ₹1800.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 783,
    companyId: 5,
    year: 2025,
    category: "aptitude",
    question:
      "A train 180 metres long crosses a pole in 12 seconds. What is the speed of the train in km/h?",
    options: ["45 km/h", "54 km/h", "60 km/h", "72 km/h"],
    answer: "54 km/h",
    solution:
      "Speed = 180/12 = 15 m/s. Convert to km/h by multiplying by 18/5: 15 × 18/5 = 54 km/h.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 784,
    companyId: 5,
    year: 2025,
    category: "aptitude",
    question:
      "A sum becomes ₹12,100 after 2 years at 10% compound interest per annum. What was the principal?",
    options: ["₹9,000", "₹10,000", "₹10,500", "₹11,000"],
    answer: "₹10,000",
    solution:
      "A = P(1.10)^2 = 1.21P. Therefore P = 12100/1.21 = ₹10,000.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 785,
    companyId: 5,
    year: 2025,
    category: "aptitude",
    question:
      "The ratio of developers to testers in a team is 5:3. If there are 40 developers, how many testers are there?",
    options: ["20", "24", "25", "30"],
    answer: "24",
    solution:
      "5 parts correspond to 40 developers, so one part = 8. Testers = 3 × 8 = 24.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 786,
    companyId: 5,
    year: 2025,
    category: "aptitude",
    question:
      "A can finish a task in 15 days and B can finish it in 10 days. How many days will they take working together?",
    options: ["5", "6", "7.5", "12"],
    answer: "6",
    solution:
      "A's rate = 1/15 and B's rate = 1/10. Combined rate = 1/15 + 1/10 = 1/6. Therefore they complete the task in 6 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 787,
    companyId: 5,
    year: 2025,
    category: "aptitude",
    question:
      "If the cost price of 15 items equals the selling price of 12 items, what is the profit percentage?",
    options: ["20%", "25%", "30%", "33.33%"],
    answer: "25%",
    solution:
      "Let CP per item = ₹1. CP of 15 items = ₹15. This equals SP of 12 items, so SP per item = 15/12 = ₹1.25. Profit = ₹0.25 on ₹1 = 25%.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 788,
    companyId: 5,
    year: 2025,
    category: "aptitude",
    question:
      "A car travels 120 km at 40 km/h and another 120 km at 60 km/h. What is its average speed for the entire journey?",
    options: ["45 km/h", "48 km/h", "50 km/h", "52 km/h"],
    answer: "48 km/h",
    solution:
      "Time for first 120 km = 3 hours. Time for second 120 km = 2 hours. Total distance = 240 km and total time = 5 hours. Average speed = 240/5 = 48 km/h.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 789,
    companyId: 5,
    year: 2025,
    category: "aptitude",
    question:
      "A number is increased by 20% and then decreased by 20%. What is the overall percentage change?",
    options: ["No change", "4% decrease", "4% increase", "8% decrease"],
    answer: "4% decrease",
    solution:
      "Take the original number as 100. After 20% increase it becomes 120. A 20% decrease of 120 is 24, giving 96. The overall decrease is 4%.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 aptitude-pattern practice",
    sourceUrl: null,
  },

  // =========================================================
  // REASONING Q790-Q799
  // =========================================================

  {
    questionId: 790,
    companyId: 5,
    year: 2025,
    category: "reasoning",
    question: "Find the next number: 3, 8, 15, 24, 35, ?",
    options: ["46", "47", "48", "49"],
    answer: "48",
    solution:
      "Differences are 5, 7, 9 and 11. The next difference is 13. Therefore 35 + 13 = 48.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 791,
    companyId: 5,
    year: 2025,
    category: "reasoning",
    question:
      "If CLOUD is coded as DMPVE by shifting every letter one position forward, how is JAVA coded?",
    options: ["KBWB", "KBVB", "JBWB", "KAWA"],
    answer: "KBWB",
    solution:
      "Shift each character forward by one alphabet position: J→K, A→B, V→W, A→B. Therefore JAVA becomes KBWB.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 792,
    companyId: 5,
    year: 2025,
    category: "reasoning",
    question:
      "A is the brother of B. B is the mother of C. D is the father of A. How is D related to C?",
    options: ["Father", "Grandfather", "Uncle", "Brother"],
    answer: "Grandfather",
    solution:
      "A and B are siblings. D is A's father, so D is also B's father. B is C's mother. Therefore D is C's maternal grandfather.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 793,
    companyId: 5,
    year: 2025,
    category: "reasoning",
    question:
      "A person walks 8 km north, 6 km east and then 8 km south. How far and in which direction is the person from the starting point?",
    options: ["6 km East", "6 km West", "8 km East", "14 km East"],
    answer: "6 km East",
    solution:
      "The 8 km north and 8 km south movements cancel. Only the 6 km east movement remains, so the final position is 6 km east of the start.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 794,
    companyId: 5,
    year: 2025,
    category: "reasoning",
    question:
      "Statements: All programmers are logical. Some logical people are designers. Which conclusion definitely follows?",
    options: [
      "All designers are programmers",
      "Some programmers are designers",
      "All programmers are logical",
      "No designer is a programmer"
    ],
    answer: "All programmers are logical",
    solution:
      "The first statement directly establishes that every programmer belongs to the logical group. The relationship between programmers and designers cannot be determined from the second statement.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 795,
    companyId: 5,
    year: 2025,
    category: "reasoning",
    question: "Find the odd one out: 8, 27, 64, 100, 125",
    options: ["27", "64", "100", "125"],
    answer: "100",
    solution:
      "8=2³, 27=3³, 64=4³ and 125=5³. 100 is not a perfect cube, so it is the odd one out.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 796,
    companyId: 5,
    year: 2025,
    category: "reasoning",
    question:
      "Five people P, Q, R, S and T stand in a row. Q is immediately right of P. R is immediately left of S. T is at the right end. If P is at the left end, which arrangement is possible?",
    options: ["P Q R S T", "P R Q S T", "P Q S R T", "P S R Q T"],
    answer: "P Q R S T",
    solution:
      "P must be first and Q immediately after P, giving P Q. T must be last. R must be immediately before S, leaving positions 3 and 4 as R S. Therefore the arrangement is P Q R S T.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 797,
    companyId: 5,
    year: 2025,
    category: "reasoning",
    question: "Complete the series: AZ, BY, CX, DW, ?",
    options: ["EV", "EU", "FV", "EW"],
    answer: "EV",
    solution:
      "The first letters move forward A,B,C,D,E while the second letters move backward Z,Y,X,W,V. Therefore the next pair is EV.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 798,
    companyId: 5,
    year: 2025,
    category: "reasoning",
    question:
      "If 1 January is Monday, what day will 1 February be in a non-leap year?",
    options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    answer: "Thursday",
    solution:
      "January has 31 days. 31 mod 7 = 3. Move three days forward from Monday: Tuesday, Wednesday, Thursday.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 799,
    companyId: 5,
    year: 2025,
    category: "reasoning",
    question:
      "In a class, Ravi ranks 12th from the top and 19th from the bottom. How many students are in the class?",
    options: ["29", "30", "31", "32"],
    answer: "30",
    solution:
      "Total students = rank from top + rank from bottom - 1 = 12 + 19 - 1 = 30.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 reasoning-pattern practice",
    sourceUrl: null,
  },

  // =========================================================
  // COMMUNICATION / GRAMMAR Q800-Q807
  // =========================================================

  {
    questionId: 800,
    companyId: 5,
    year: 2025,
    category: "grammar",
    question:
      "Choose the grammatically correct sentence.",
    options: [
      "She have completed the assignment.",
      "She has completed the assignment.",
      "She has complete the assignment.",
      "She having completed the assignment."
    ],
    answer: "She has completed the assignment.",
    solution:
      "The subject 'She' requires 'has', and the present perfect tense uses has + past participle. The past participle of complete is completed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 communication-assessment practice",
    sourceUrl: null,
  },

  {
    questionId: 801,
    companyId: 5,
    year: 2025,
    category: "grammar",
    question:
      "Choose the correct passive form of: 'The team completed the project.'",
    options: [
      "The project completed by the team.",
      "The project was completed by the team.",
      "The project is completed by the team.",
      "The team was completed by the project."
    ],
    answer: "The project was completed by the team.",
    solution:
      "The original sentence is simple past. Its passive structure is object + was/were + past participle + by + subject.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 communication-assessment practice",
    sourceUrl: null,
  },

  {
    questionId: 802,
    companyId: 5,
    year: 2025,
    category: "grammar",
    question: "Choose the synonym of 'concise'.",
    options: ["Lengthy", "Brief", "Unclear", "Complex"],
    answer: "Brief",
    solution:
      "Concise means expressing something clearly using relatively few words. 'Brief' is the closest synonym.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 communication-assessment practice",
    sourceUrl: null,
  },

  {
    questionId: 803,
    companyId: 5,
    year: 2025,
    category: "grammar",
    question:
      "Identify the incorrect part: 'Each of the developers have submitted their report.'",
    options: ["Each", "developers", "have", "their report"],
    answer: "have",
    solution:
      "'Each' is grammatically singular, so the verb should be 'has'. The corrected sentence is: Each of the developers has submitted their report.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 communication-assessment practice",
    sourceUrl: null,
  },

  {
    questionId: 804,
    companyId: 5,
    year: 2025,
    category: "grammar",
    question:
      "Fill in the blank: Neither the manager nor the employees ___ willing to delay the release.",
    options: ["is", "are", "was", "has"],
    answer: "are",
    solution:
      "With neither...nor, the verb generally agrees with the subject nearest to it. The nearest subject is plural 'employees', so 'are' is appropriate.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 communication-assessment practice",
    sourceUrl: null,
  },

  {
    questionId: 805,
    companyId: 5,
    year: 2025,
    category: "grammar",
    question:
      "Choose the correct reported speech: Rahul said, 'I am working on the project.'",
    options: [
      "Rahul said that I am working on the project.",
      "Rahul said that he was working on the project.",
      "Rahul says that he worked on the project.",
      "Rahul said he is work on the project."
    ],
    answer: "Rahul said that he was working on the project.",
    solution:
      "With a past reporting verb, present continuous normally backshifts to past continuous, and 'I' changes according to the speaker, giving 'he was working'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 communication-assessment practice",
    sourceUrl: null,
  },

  {
    questionId: 806,
    companyId: 5,
    year: 2025,
    category: "grammar",
    question:
      "Choose the most appropriate word: The developer was praised for finding an ___ solution to the performance problem.",
    options: ["innovative", "ordinary", "irrelevant", "careless"],
    answer: "innovative",
    solution:
      "The sentence describes praise for solving a problem. 'Innovative' means introducing a new or creative approach and fits the positive context.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 communication-assessment practice",
    sourceUrl: null,
  },

  {
    questionId: 807,
    companyId: 5,
    year: 2025,
    category: "grammar",
    question:
      "Choose the correct sentence.",
    options: [
      "The information are useful.",
      "The informations are useful.",
      "The information is useful.",
      "The information were useful."
    ],
    answer: "The information is useful.",
    solution:
      "'Information' is an uncountable noun and is treated as singular in standard English. Therefore 'is' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 communication-assessment practice",
    sourceUrl: null,
  },

  // =========================================================
  // JAVA / OOP / DEBUGGING Q808-Q817
  // =========================================================

  {
    questionId: 808,
    companyId: 5,
    year: 2025,
    category: "java",
    question:
      "A Parent reference stores a Child object. Both classes define the same non-static show() method. Which version executes when reference.show() is called?",
    options: [
      "Parent version",
      "Child version",
      "Both versions",
      "Compilation error"
    ],
    answer: "Child version",
    solution:
      "Overridden instance methods are dynamically dispatched. The reference type controls what members are accessible at compile time, but the actual object type determines which overridden method executes at runtime. Therefore Child.show() executes.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 Java/OOP interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 809,
    companyId: 5,
    year: 2025,
    category: "java",
    question:
      "Which statement correctly distinguishes an abstract class from an interface in modern Java?",
    options: [
      "An abstract class cannot contain implemented methods.",
      "A class can extend multiple abstract classes.",
      "An abstract class can have instance state and constructors.",
      "Interfaces can always be instantiated directly."
    ],
    answer: "An abstract class can have instance state and constructors.",
    solution:
      "Abstract classes can define instance fields, constructors, abstract methods and concrete methods. A Java class can extend only one class. Interfaces cannot be instantiated directly.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 Java/OOP interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 810,
    companyId: 5,
    year: 2025,
    category: "debugging",
    question: `Predict the output:

TRY
    x = 20
    y = 0

    TRY
        PRINT x / y
    CATCH ArithmeticException
        PRINT "A"
    FINALLY
        PRINT "B"

CATCH Exception
    PRINT "C"
FINALLY
    PRINT "D"`,

    options: ["A B", "A B D", "C D", "B C D"],
    answer: "A B D",
    solution:
      "20/0 throws ArithmeticException inside the inner TRY. The inner CATCH handles it and prints A. The inner FINALLY then prints B. Since the exception was handled, the outer CATCH does not execute. The outer FINALLY always executes and prints D. Final output: A B D.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 exception-handling interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 811,
    companyId: 5,
    year: 2025,
    category: "debugging",
    question: `Predict the output:

FUNCTION calculate()
    TRY
        PRINT "A"
        RETURN 10
    FINALLY
        PRINT "B"
END FUNCTION

result = calculate()
PRINT result`,

    options: ["A 10", "A B 10", "B A 10", "A 10 B"],
    answer: "A B 10",
    solution:
      "The TRY prints A and prepares to return 10. Before the return completes, FINALLY executes and prints B. Since FINALLY does not replace the return, calculate() then returns 10, which is printed by the caller. Final sequence: A B 10.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 exception-handling interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 812,
    companyId: 5,
    year: 2025,
    category: "java",
    question:
      "Which Java collection is generally most suitable when frequent insertion and removal at both ends of a sequence are required?",
    options: ["ArrayList", "ArrayDeque", "HashSet", "TreeMap"],
    answer: "ArrayDeque",
    solution:
      "ArrayDeque implements a double-ended queue and efficiently supports insertion/removal at both the front and rear. ArrayList is optimized more for indexed access, while HashSet and TreeMap have different purposes.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 Java collections interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 813,
    companyId: 5,
    year: 2025,
    category: "java",
    question:
      "What happens when the same key is inserted twice into a Java HashMap using put()?",
    options: [
      "Two entries with the same key are stored",
      "The second value replaces the value associated with that key",
      "A compile-time error occurs",
      "The entire map is cleared"
    ],
    answer: "The second value replaces the value associated with that key",
    solution:
      "HashMap keys are unique. Calling put() with a key already present updates the value mapped to that key rather than creating a duplicate-key entry.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 Java collections interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 814,
    companyId: 5,
    year: 2025,
    category: "debugging",
    question: `What is the final value of count?

arr = [4, 7, 2, 9, 6, 3]
count = 0

FOR i = 0 TO length(arr)-1
    IF arr[i] % 2 == 0
        CONTINUE
    END IF

    FOR j = i+1 TO length(arr)-1
        IF arr[j] > arr[i]
            count = count + 1
            BREAK
        END IF
    END FOR
END FOR`,

    options: ["1", "2", "3", "4"],
    answer: "1",
    solution:
      "Even values 4, 2 and 6 are skipped. For 7, a greater element (9) exists to its right, so count becomes 1. For 9, no greater element exists to its right. For 3, there are no elements after it. Therefore the final count is 1.",
    difficulty: "Hard",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 debugging and array-tracing practice",
    sourceUrl: null,
  },

  {
    questionId: 815,
    companyId: 5,
    year: 2025,
    category: "java",
    question:
      "Which OOP concept allows the same method call to behave differently depending on the runtime object?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    answer: "Polymorphism",
    solution:
      "Runtime polymorphism occurs through method overriding. A parent-type reference can refer to different subclass objects, and the overridden method corresponding to the actual runtime object is invoked.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 OOP interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 816,
    companyId: 5,
    year: 2025,
    category: "debugging",
    question: `Predict the output:

SET numbers = new HashSet()

numbers.add(10)
numbers.add(20)
numbers.add(10)
numbers.add(30)
numbers.add(20)

PRINT numbers.size()`,

    options: ["2", "3", "4", "5"],
    answer: "3",
    solution:
      "HashSet stores unique elements. The attempted insertions contain only three distinct values: 10, 20 and 30. Re-inserting 10 or 20 does not increase the size. Therefore size = 3.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 Java collections/output practice",
    sourceUrl: null,
  },

  {
    questionId: 817,
    companyId: 5,
    year: 2025,
    category: "debugging",
    question: `Predict the output:

TRY
    arr = [10, 20, 30]
    PRINT arr[3]
    PRINT "A"
CATCH ArrayIndexOutOfBoundsException
    PRINT "B"
CATCH Exception
    PRINT "C"
FINALLY
    PRINT "D"

PRINT "E"`,

    options: ["A D E", "B D E", "C D E", "B C D E"],
    answer: "B D E",
    solution:
      "Valid indices are 0, 1 and 2. Accessing index 3 throws ArrayIndexOutOfBoundsException. Its specific CATCH prints B. The generic CATCH is skipped because the exception has already been handled. FINALLY prints D, and execution then continues after the block and prints E. Final output: B D E.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 exception-handling interview-pattern practice",
    sourceUrl: null,
  },

  // =========================================================
  // SQL / DBMS Q818-Q823
  // =========================================================

  {
    questionId: 818,
    companyId: 5,
    year: 2025,
    category: "sql",
    question:
      "Given Employee(emp_id, name, dept_id) and Department(dept_id, dept_name), which query returns every employee together with the department name when a matching department exists?",
    options: [
      "SELECT e.name, d.dept_name FROM Employee e INNER JOIN Department d ON e.dept_id = d.dept_id;",
      "SELECT e.name, d.dept_name FROM Employee e CROSS JOIN Department d;",
      "SELECT e.name FROM Employee e WHERE e.dept_id = NULL;",
      "SELECT dept_name FROM Department;"
    ],
    answer:
      "SELECT e.name, d.dept_name FROM Employee e INNER JOIN Department d ON e.dept_id = d.dept_id;",
    solution:
      "The tables are related by dept_id. INNER JOIN combines rows where Employee.dept_id equals Department.dept_id, allowing both employee name and department name to be returned.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 SQL JOIN assessment-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 819,
    companyId: 5,
    year: 2025,
    category: "sql",
    question:
      "Which SQL query returns departments having more than 5 employees from Employee(dept_id, emp_id)?",
    options: [
      "SELECT dept_id FROM Employee WHERE COUNT(*) > 5;",
      "SELECT dept_id FROM Employee GROUP BY dept_id HAVING COUNT(*) > 5;",
      "SELECT dept_id, COUNT(*) FROM Employee WHERE COUNT(*) > 5 GROUP BY dept_id;",
      "SELECT COUNT(dept_id) FROM Employee > 5;"
    ],
    answer:
      "SELECT dept_id FROM Employee GROUP BY dept_id HAVING COUNT(*) > 5;",
    solution:
      "GROUP BY creates one group per department. COUNT(*) counts employees in each group. Conditions on aggregate results are applied using HAVING rather than WHERE.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 SQL assessment-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 820,
    companyId: 5,
    year: 2025,
    category: "dbms",
    question:
      "Which normalization rule requires every non-key attribute to depend on the whole candidate key rather than only part of a composite key?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "2NF",
    solution:
      "Second Normal Form requires the relation to be in 1NF and eliminates partial dependency of non-prime attributes on part of a composite candidate key.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 DBMS interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 821,
    companyId: 5,
    year: 2025,
    category: "sql",
    question:
      "Which query finds the second-highest distinct salary from Employee(salary)?",
    options: [
      "SELECT MAX(salary) FROM Employee;",
      "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
      "SELECT MIN(salary) FROM Employee;",
      "SELECT salary FROM Employee WHERE salary = 2;"
    ],
    answer:
      "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);",
    solution:
      "The inner query finds the highest salary. The outer query considers salaries below that maximum and returns the greatest among them, which is the second-highest distinct salary.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 SQL interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 822,
    companyId: 5,
    year: 2025,
    category: "dbms",
    question:
      "In ACID properties, which property ensures that a transaction is completed entirely or not performed at all?",
    options: ["Atomicity", "Consistency", "Isolation", "Durability"],
    answer: "Atomicity",
    solution:
      "Atomicity treats a transaction as one indivisible unit. If any part fails, the transaction is rolled back so that partial changes are not committed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 DBMS interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 823,
    companyId: 5,
    year: 2025,
    category: "sql",
    question:
      "Which JOIN returns all rows from the left table and matching rows from the right table, using NULL for missing right-side matches?",
    options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "SELF JOIN"],
    answer: "LEFT JOIN",
    solution:
      "LEFT JOIN preserves every row from the left table. When no matching right-table row exists, columns belonging to the right table are returned as NULL.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 SQL JOIN interview-pattern practice",
    sourceUrl: null,
  },

  // =========================================================
  // PROGRAMMING Q824-Q827
  // =========================================================

  {
    questionId: 824,
    companyId: 5,
    year: 2025,
    category: "programming",
    question:
      "Given an integer array, print every value that occurs more than once. Each duplicate value should be printed only once.",
    options: [],
    answer:
      "Use a HashMap to count frequencies, then print keys whose frequency is greater than 1.",
    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        int[] arr = {4, 2, 7, 4, 8, 2, 2};

        Map<Integer, Integer> frequency = new LinkedHashMap<>();

        for (int value : arr) {
            frequency.put(
                value,
                frequency.getOrDefault(value, 0) + 1
            );
        }

        for (Map.Entry<Integer, Integer> entry : frequency.entrySet()) {
            if (entry.getValue() > 1) {
                System.out.print(entry.getKey() + " ");
            }
        }
    }
}

Explanation:
4 occurs twice and 2 occurs three times, so both are duplicates.

The HashMap/LinkedHashMap approach takes O(n) expected time and O(n) additional space.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 duplicate-array interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 825,
    companyId: 5,
    year: 2025,
    category: "programming",
    question:
      "Given an integer array containing only 0s and 1s, find the maximum number of consecutive 1s.",
    options: [],
    answer:
      "Traverse the array while maintaining the current run of 1s and the maximum run seen so far.",
    solution: `public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 1, 0, 1, 1, 1};

        int current = 0;
        int maximum = 0;

        for (int value : arr) {
            if (value == 1) {
                current++;
                maximum = Math.max(maximum, current);
            } else {
                current = 0;
            }
        }

        System.out.println(maximum);
    }
}

Explanation:
The runs of 1s have lengths 2 and 3.
Therefore the maximum consecutive run is 3.

Time complexity: O(n)
Space complexity: O(1)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 array/coding assessment-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 826,
    companyId: 5,
    year: 2025,
    category: "programming",
    question:
      "Given a string containing words separated by spaces, find the length of the longest word and print all words having that maximum length.",
    options: [],
    answer:
      "Split the input into words, determine the maximum length, then print every word whose length equals that maximum.",
    solution: `public class Main {
    public static void main(String[] args) {
        String input = "Java makes programming interesting";

        String[] words = input.split("\\\\s+");

        int maxLength = 0;

        for (String word : words) {
            maxLength = Math.max(maxLength, word.length());
        }

        System.out.println("Maximum length: " + maxLength);

        for (String word : words) {
            if (word.length() == maxLength) {
                System.out.println(word);
            }
        }
    }
}

Explanation:
Scan once to determine the maximum word length.
Scan again to output all words of that length.

Time complexity: O(n), where n is the number of characters in the input.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 string interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 827,
    companyId: 5,
    year: 2025,
    category: "programming",
    question:
      "Given an N × M matrix, print its transpose. The transpose is formed by converting every original row into a column.",
    options: [],
    answer:
      "For every column j of the original matrix, print matrix[i][j] for all rows i.",
    solution: `public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6}
        };

        int rows = matrix.length;
        int cols = matrix[0].length;

        for (int j = 0; j < cols; j++) {
            for (int i = 0; i < rows; i++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}

Original matrix:
1 2 3
4 5 6

Transpose:
1 4
2 5
3 6

Time complexity: O(N × M)
Extra space: O(1) when printing directly.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 matrix interview-pattern practice",
    sourceUrl: null,
  },

  // =========================================================
  // WEB DEVELOPMENT Q828-Q829
  // =========================================================

  {
    questionId: 828,
    companyId: 5,
    year: 2025,
    category: "web",
    question:
      "A button has id='submitBtn'. Which JavaScript statement correctly registers a click event handler named submitForm without immediately calling the function?",
    options: [
      "document.getElementById('submitBtn').addEventListener('click', submitForm);",
      "document.getElementById('submitBtn').addEventListener('click', submitForm());",
      "document.getElementById('submitBtn').click = submitForm();",
      "document.submitBtn('click', submitForm);"
    ],
    answer:
      "document.getElementById('submitBtn').addEventListener('click', submitForm);",
    solution:
      "addEventListener expects an event type and a function reference. Passing submitForm without parentheses provides the function to execute when the click occurs. submitForm() would execute it immediately while registering the listener.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 web-development assessment-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 829,
    companyId: 5,
    year: 2025,
    category: "web",
    question:
      "Which CSS declaration makes a container a flex container and allows its direct children to be arranged using Flexbox?",
    options: [
      "position: flex;",
      "display: flex;",
      "flex: display;",
      "layout: flex;"
    ],
    answer: "display: flex;",
    solution:
      "Setting display: flex on an element establishes a flex formatting context. Its direct children become flex items and can then be controlled using properties such as justify-content, align-items and gap.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2025 web-development assessment-pattern practice",
    sourceUrl: null,
  },
];

async function seedCognizant2025Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 5,
      year: 2025,
    });

    console.log("Old Cognizant 2025 questions deleted");

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Cognizant 2025 questions seeded successfully`,
    );

    process.exit(0);
  } catch (error) {
    console.error("Error seeding Cognizant 2025 questions:", error);
    process.exit(1);
  }
}

seedCognizant2025Questions();