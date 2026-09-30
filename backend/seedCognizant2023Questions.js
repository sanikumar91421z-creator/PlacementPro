require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [

  // =========================================================
  // QUANTITATIVE APTITUDE Q900-Q909
  // =========================================================

  {
    questionId: 900,
    companyId: 5,
    year: 2023,
    category: "aptitude",
    question:
      "A sum of money becomes ₹13,200 in 2 years at 10% simple interest per annum. What is the principal?",
    options: ["₹10,000", "₹11,000", "₹12,000", "₹12,500"],
    answer: "₹11,000",
    solution:
      "For simple interest, Amount = P(1 + RT/100). Here A = 13200, R = 10 and T = 2. Therefore 13200 = P(1 + 20/100) = 1.2P. Hence P = 13200/1.2 = ₹11,000.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 quantitative aptitude pattern",
    sourceUrl: null,
  },

  {
    questionId: 901,
    companyId: 5,
    year: 2023,
    category: "aptitude",
    question:
      "The ratio of boys to girls in a class is 7:5. If there are 48 students, how many girls are there?",
    options: ["18", "20", "24", "28"],
    answer: "20",
    solution:
      "Total ratio parts = 7 + 5 = 12. One part = 48/12 = 4. Girls = 5 × 4 = 20.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 ratio-and-proportion reported-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 902,
    companyId: 5,
    year: 2023,
    category: "aptitude",
    question:
      "Two fair coins are tossed simultaneously. What is the probability of getting exactly one head?",
    options: ["1/4", "1/2", "3/4", "1"],
    answer: "1/2",
    solution:
      "Possible outcomes are HH, HT, TH and TT. Exactly one head occurs in HT and TH, giving 2 favorable outcomes out of 4. Probability = 2/4 = 1/2.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 probability reported-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 903,
    companyId: 5,
    year: 2023,
    category: "aptitude",
    question:
      "A bag contains 5 red, 3 blue and 2 green balls. One ball is selected randomly. What is the probability that it is blue?",
    options: ["1/5", "3/10", "1/3", "1/2"],
    answer: "3/10",
    solution:
      "Total balls = 5 + 3 + 2 = 10. Blue balls = 3. Therefore probability = 3/10.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 probability reported-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 904,
    companyId: 5,
    year: 2023,
    category: "aptitude",
    question:
      "A shopkeeper buys an item for ₹800 and sells it for ₹920. What is the profit percentage?",
    options: ["12%", "15%", "18%", "20%"],
    answer: "15%",
    solution:
      "Profit = 920 - 800 = ₹120. Profit percentage = (120/800) × 100 = 15%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 905,
    companyId: 5,
    year: 2023,
    category: "aptitude",
    question:
      "A can complete a job in 20 days and B in 30 days. How many days will they take together?",
    options: ["10", "12", "15", "18"],
    answer: "12",
    solution:
      "A's rate = 1/20 and B's rate = 1/30. Combined rate = 3/60 + 2/60 = 5/60 = 1/12. Therefore they need 12 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 906,
    companyId: 5,
    year: 2023,
    category: "aptitude",
    question:
      "The average marks of 10 students is 72. If the teacher's marks are also included, the average becomes 74. What are the teacher's marks?",
    options: ["84", "90", "94", "96"],
    answer: "94",
    solution:
      "Total marks of students = 10 × 72 = 720. Total including teacher = 11 × 74 = 814. Teacher's marks = 814 - 720 = 94.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 907,
    companyId: 5,
    year: 2023,
    category: "aptitude",
    question:
      "A train 150 metres long travels at 54 km/h. How many seconds will it take to cross a pole?",
    options: ["8", "10", "12", "15"],
    answer: "10",
    solution:
      "Convert 54 km/h to m/s: 54 × 5/18 = 15 m/s. Time = distance/speed = 150/15 = 10 seconds.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 908,
    companyId: 5,
    year: 2023,
    category: "aptitude",
    question:
      "If 30% of a number is 72, what is the number?",
    options: ["180", "220", "240", "260"],
    answer: "240",
    solution:
      "Let the number be x. 30% of x = 72, so 0.30x = 72. Therefore x = 72/0.30 = 240.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 aptitude-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 909,
    companyId: 5,
    year: 2023,
    category: "aptitude",
    question:
      "A number is increased from 250 to 300. What is the percentage increase?",
    options: ["15%", "20%", "25%", "30%"],
    answer: "20%",
    solution:
      "Increase = 300 - 250 = 50. Percentage increase = (50/250) × 100 = 20%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 aptitude-pattern practice",
    sourceUrl: null,
  },

  // =========================================================
  // LOGICAL REASONING Q910-Q919
  // =========================================================

  {
    questionId: 910,
    companyId: 5,
    year: 2023,
    category: "reasoning",
    question: "Find the next number: 4, 9, 16, 25, 36, ?",
    options: ["42", "45", "49", "64"],
    answer: "49",
    solution:
      "The numbers are consecutive squares: 2²=4, 3²=9, 4²=16, 5²=25 and 6²=36. The next is 7² = 49.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 logical-reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 911,
    companyId: 5,
    year: 2023,
    category: "reasoning",
    question: "Find the next term: A, C, F, J, O, ?",
    options: ["T", "U", "V", "W"],
    answer: "U",
    solution:
      "Letter positions are 1, 3, 6, 10 and 15. The differences are +2, +3, +4 and +5. The next difference is +6: 15 + 6 = 21, which is U.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 logical-reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 912,
    companyId: 5,
    year: 2023,
    category: "reasoning",
    question:
      "If TABLE is coded as UBCMF by moving every letter one position forward, how is CHAIR coded?",
    options: ["DIBJS", "DIBJR", "DJCKS", "BGBHQ"],
    answer: "DIBJS",
    solution:
      "Move each letter forward once: C→D, H→I, A→B, I→J and R→S. Therefore CHAIR becomes DIBJS.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 913,
    companyId: 5,
    year: 2023,
    category: "reasoning",
    question:
      "Ravi walks 10 metres north, turns right and walks 6 metres, then turns right and walks 10 metres. Where is he from his starting point?",
    options: ["6 m East", "6 m West", "10 m North", "16 m East"],
    answer: "6 m East",
    solution:
      "The 10 m north and 10 m south movements cancel. The only remaining displacement is 6 m east.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 914,
    companyId: 5,
    year: 2023,
    category: "reasoning",
    question:
      "P is the brother of Q. Q is the daughter of R. S is R's father. How is S related to P?",
    options: ["Father", "Grandfather", "Uncle", "Brother"],
    answer: "Grandfather",
    solution:
      "P and Q are siblings. R is Q's parent and therefore also P's parent. S is R's father, making S P's grandfather.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 915,
    companyId: 5,
    year: 2023,
    category: "reasoning",
    question:
      "Statements: All engineers are graduates. Some graduates are programmers. Which conclusion is definitely true?",
    options: [
      "All programmers are engineers",
      "Some engineers are programmers",
      "All engineers are graduates",
      "No graduate is a programmer"
    ],
    answer: "All engineers are graduates",
    solution:
      "This is directly stated in the first statement. The second statement does not establish a definite relationship between engineers and programmers.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 916,
    companyId: 5,
    year: 2023,
    category: "reasoning",
    question:
      "Five students A, B, C, D and E stand in a row. A is immediately left of B, D is immediately right of C, and E is at the right end. If A is at the left end, which arrangement satisfies all conditions?",
    options: ["A B C D E", "A C B D E", "A B D C E", "A D C B E"],
    answer: "A B C D E",
    solution:
      "A is first, so B must be second. E must be fifth. Since D must be immediately right of C, positions 3 and 4 must be C and D. Therefore A B C D E.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 917,
    companyId: 5,
    year: 2023,
    category: "reasoning",
    question: "Which is the odd one out: 16, 25, 36, 49, 63?",
    options: ["25", "36", "49", "63"],
    answer: "63",
    solution:
      "16=4², 25=5², 36=6² and 49=7². 63 is not a perfect square.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 918,
    companyId: 5,
    year: 2023,
    category: "reasoning",
    question:
      "A student ranks 17th from the top and 24th from the bottom. How many students are there?",
    options: ["39", "40", "41", "42"],
    answer: "40",
    solution:
      "Total = rank from top + rank from bottom - 1 = 17 + 24 - 1 = 40.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 reasoning-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 919,
    companyId: 5,
    year: 2023,
    category: "reasoning",
    question: "Complete the analogy: Book : Reading :: Fork : ?",
    options: ["Drawing", "Writing", "Eating", "Walking"],
    answer: "Eating",
    solution:
      "A book is commonly used for reading. Similarly, a fork is commonly used for eating.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 reasoning-pattern practice",
    sourceUrl: null,
  },

  // =========================================================
  // VERBAL / COMMUNICATION Q920-Q929
  // =========================================================

  {
    questionId: 920,
    companyId: 5,
    year: 2023,
    category: "grammar",
    question: "Choose the grammatically correct sentence.",
    options: [
      "She don't know the answer.",
      "She doesn't knows the answer.",
      "She doesn't know the answer.",
      "She not knows the answer."
    ],
    answer: "She doesn't know the answer.",
    solution:
      "With third-person singular 'she', use 'doesn't'. The verb following doesn't remains in its base form: know.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 verbal-ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 921,
    companyId: 5,
    year: 2023,
    category: "grammar",
    question: "Choose the synonym of 'meticulous'.",
    options: ["Careless", "Careful", "Rapid", "Ordinary"],
    answer: "Careful",
    solution:
      "Meticulous describes someone who pays very careful attention to details. Therefore 'Careful' is the closest option.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 verbal-ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 922,
    companyId: 5,
    year: 2023,
    category: "grammar",
    question: "Choose the antonym of 'expand'.",
    options: ["Increase", "Enlarge", "Contract", "Extend"],
    answer: "Contract",
    solution:
      "Expand means to become larger. Contract can mean to become smaller, making it the opposite in this context.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 verbal-ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 923,
    companyId: 5,
    year: 2023,
    category: "grammar",
    question:
      "Fill in the blank: The meeting has been postponed ___ Monday.",
    options: ["at", "until", "with", "by"],
    answer: "until",
    solution:
      "'Postponed until Monday' means the meeting will not take place before Monday. 'Until' is the appropriate preposition here.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 verbal-ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 924,
    companyId: 5,
    year: 2023,
    category: "grammar",
    question:
      "Identify the incorrect part: 'Each of the students have submitted the assignment.'",
    options: ["Each", "students", "have", "assignment"],
    answer: "have",
    solution:
      "'Each' is singular, so the verb should be 'has'. Correct form: Each of the students has submitted the assignment.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 verbal-ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 925,
    companyId: 5,
    year: 2023,
    category: "grammar",
    question:
      "Choose the correct passive form of: 'They completed the task.'",
    options: [
      "The task was completed by them.",
      "The task is completed by them.",
      "The task completed them.",
      "They were completed by the task."
    ],
    answer: "The task was completed by them.",
    solution:
      "The active sentence is in simple past. Passive simple past uses was/were + past participle: The task was completed by them.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 verbal-ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 926,
    companyId: 5,
    year: 2023,
    category: "grammar",
    question:
      "Choose the correct reported speech: He said, 'I am tired.'",
    options: [
      "He said that I am tired.",
      "He said that he was tired.",
      "He says he tired.",
      "He said that he is tiring."
    ],
    answer: "He said that he was tired.",
    solution:
      "The pronoun changes from I to he, and present 'am' normally backshifts to past 'was' after the past reporting verb 'said'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 verbal-ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 927,
    companyId: 5,
    year: 2023,
    category: "grammar",
    question:
      "Fill in the blank: Neither Rahul nor his friends ___ attending the event.",
    options: ["is", "are", "was", "has"],
    answer: "are",
    solution:
      "With neither...nor, agreement normally follows the nearer subject. 'Friends' is plural, so 'are' is appropriate.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 verbal-ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 928,
    companyId: 5,
    year: 2023,
    category: "comprehension",
    question:
      "A company introduced flexible working hours. Employee satisfaction increased, but managers reported that coordinating meetings became more difficult. Which statement is best supported?",
    options: [
      "Flexible hours had only negative effects.",
      "Flexible hours improved satisfaction but introduced a coordination challenge.",
      "Employees disliked flexible working hours.",
      "All meetings were cancelled."
    ],
    answer:
      "Flexible hours improved satisfaction but introduced a coordination challenge.",
    solution:
      "The passage explicitly gives one benefit—increased satisfaction—and one difficulty—meeting coordination. The correct answer includes both facts without adding unsupported claims.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 reading/comprehension pattern",
    sourceUrl: null,
  },

  {
    questionId: 929,
    companyId: 5,
    year: 2023,
    category: "grammar",
    question:
      "Choose the correctly spelled word.",
    options: ["Accomodation", "Accommodation", "Acommodation", "Accommadation"],
    answer: "Accommodation",
    solution:
      "The correct spelling is 'Accommodation', with double c and double m.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 verbal-ability pattern",
    sourceUrl: null,
  },

  // =========================================================
  // OOP / JAVA / TECHNICAL Q930-Q937
  // =========================================================

  {
    questionId: 930,
    companyId: 5,
    year: 2023,
    category: "java",
    question:
      "Which OOP concept allows a subclass to acquire properties and behavior from a parent class?",
    options: ["Encapsulation", "Inheritance", "Abstraction", "Compilation"],
    answer: "Inheritance",
    solution:
      "Inheritance creates an is-a relationship in which a subclass can reuse and extend accessible members of its superclass. In Java this is commonly expressed using extends.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 inheritance reported interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 931,
    companyId: 5,
    year: 2023,
    category: "java",
    question:
      "A superclass reference refers to a subclass object. Both classes implement the same instance method. Which implementation executes?",
    options: [
      "Superclass implementation",
      "Subclass implementation",
      "Both implementations automatically",
      "Compilation always fails"
    ],
    answer: "Subclass implementation",
    solution:
      "This demonstrates runtime polymorphism. For an overridden instance method, Java chooses the implementation according to the actual runtime object, so the subclass version executes.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 polymorphism reported interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 932,
    companyId: 5,
    year: 2023,
    category: "java",
    question:
      "Which statement correctly describes a constructor in Java?",
    options: [
      "It must return an object explicitly",
      "It has the same name as the class and no declared return type",
      "It can only be private",
      "It is inherited exactly like an ordinary method"
    ],
    answer:
      "It has the same name as the class and no declared return type",
    solution:
      "Constructors initialize objects. Their name matches the class name and they do not declare a return type. Constructors can have different access levels and can be overloaded.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC 2023 constructor interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 933,
    companyId: 5,
    year: 2023,
    category: "java",
    question:
      "Which statement best describes encapsulation?",
    options: [
      "Creating multiple objects",
      "Bundling data with methods and restricting uncontrolled access to internal state",
      "Executing several programs simultaneously",
      "Converting source code to bytecode"
    ],
    answer:
      "Bundling data with methods and restricting uncontrolled access to internal state",
    solution:
      "Encapsulation keeps an object's state and its related behavior together and controls access, commonly through private fields and public methods.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2023 OOP interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 934,
    companyId: 5,
    year: 2023,
    category: "java",
    question:
      "Which Java component executes Java bytecode?",
    options: ["JDK only", "JVM", "javac source file", "HTML engine"],
    answer: "JVM",
    solution:
      "The Java compiler converts source code into bytecode. The Java Virtual Machine loads and executes that bytecode on the target platform.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2023 Java interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 935,
    companyId: 5,
    year: 2023,
    category: "java",
    question:
      "Which statement correctly distinguishes StringBuilder and StringBuffer in Java?",
    options: [
      "StringBuilder is synchronized while StringBuffer is not",
      "StringBuffer is synchronized while StringBuilder is generally not",
      "Both are immutable",
      "Neither can modify character sequences"
    ],
    answer:
      "StringBuffer is synchronized while StringBuilder is generally not",
    solution:
      "Both represent mutable character sequences. StringBuffer's methods are synchronized, providing thread-safety characteristics with additional overhead. StringBuilder is generally preferred when synchronization is unnecessary.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Cognizant 2023 Java Full Stack StringBuilder/StringBuffer reported-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 936,
    companyId: 5,
    year: 2023,
    category: "java",
    question:
      "Which Java access modifier provides the most restrictive direct access?",
    options: ["public", "protected", "private", "default"],
    answer: "private",
    solution:
      "A private member is directly accessible only within its declaring class, making it the most restrictive of these standard access levels.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Cognizant 2023 Java access-modifiers reported interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 937,
    companyId: 5,
    year: 2023,
    category: "java",
    question:
      "Which collection is designed to store key-value pairs in Java?",
    options: ["ArrayList", "HashMap", "HashSet", "Stack"],
    answer: "HashMap",
    solution:
      "HashMap implements the Map interface and associates each key with a value. Keys are unique, while values may be duplicated.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant 2023 Java/data-structures interview practice",
    sourceUrl: null,
  },

  // =========================================================
  // SQL / DBMS Q938-Q943
  // Relevant especially to 2023 Elevate / Java Full Stack
  // =========================================================

  {
    questionId: 938,
    companyId: 5,
    year: 2023,
    category: "sql",
    question:
      "Which SQL query retrieves all employees whose salary is greater than 50000?",
    options: [
      "SELECT * FROM Employee WHERE salary > 50000;",
      "SELECT salary > 50000 FROM Employee;",
      "GET Employee WHERE salary > 50000;",
      "SELECT * Employee salary > 50000;"
    ],
    answer:
      "SELECT * FROM Employee WHERE salary > 50000;",
    solution:
      "SELECT * retrieves all columns from Employee. WHERE applies the condition to each row, retaining only employees whose salary exceeds 50000.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC Elevate 2023 SQL reported-assessment practice",
    sourceUrl: null,
  },

  {
    questionId: 939,
    companyId: 5,
    year: 2023,
    category: "sql",
    question:
      "Employee has dept_id and Department has dept_id and dept_name. Which query returns employee names with matching department names?",
    options: [
      "SELECT e.name, d.dept_name FROM Employee e INNER JOIN Department d ON e.dept_id = d.dept_id;",
      "SELECT e.name FROM Employee e;",
      "SELECT * FROM Employee e CROSS JOIN Department d;",
      "SELECT dept_name FROM Department;"
    ],
    answer:
      "SELECT e.name, d.dept_name FROM Employee e INNER JOIN Department d ON e.dept_id = d.dept_id;",
    solution:
      "INNER JOIN matches rows using the shared department identifier. The ON condition prevents unrelated employee and department rows from being combined.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC Elevate 2023 SQL assessment-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 940,
    companyId: 5,
    year: 2023,
    category: "dbms",
    question:
      "Which database key uniquely identifies each record in a table?",
    options: ["Foreign key", "Primary key", "Secondary value", "Duplicate key"],
    answer: "Primary key",
    solution:
      "A primary key uniquely identifies every row. A foreign key instead references a key in another or the same related table.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant GenC Elevate 2023 DBMS interview practice",
    sourceUrl: null,
  },

  {
    questionId: 941,
    companyId: 5,
    year: 2023,
    category: "dbms",
    question:
      "Which key is a minimal set of attributes capable of uniquely identifying a row?",
    options: ["Candidate key", "Foreign key", "Non-key attribute", "Duplicate key"],
    answer: "Candidate key",
    solution:
      "A candidate key uniquely identifies rows and is minimal: removing an attribute from it would cause it to lose that uniqueness property.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName:
      "Cognizant GenC Elevate 2023 database-keys reported interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 942,
    companyId: 5,
    year: 2023,
    category: "dbms",
    question:
      "Which normal form requires attributes to contain atomic values rather than repeating groups or multiple values in one field?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "1NF",
    solution:
      "First Normal Form requires a relational table to have atomic attribute values and eliminates repeating groups.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Cognizant 2023 DBMS interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 943,
    companyId: 5,
    year: 2023,
    category: "sql",
    question:
      "Which query returns the number of employees in each department?",
    options: [
      "SELECT dept_id, COUNT(*) FROM Employee GROUP BY dept_id;",
      "SELECT COUNT(dept_id) FROM Employee;",
      "SELECT dept_id FROM Employee COUNT(*);",
      "SELECT * FROM Employee GROUP COUNT dept_id;"
    ],
    answer:
      "SELECT dept_id, COUNT(*) FROM Employee GROUP BY dept_id;",
    solution:
      "GROUP BY creates a separate group for each dept_id. COUNT(*) then calculates the number of rows, or employees, in each group.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Cognizant GenC Elevate 2023 SQL practice",
    sourceUrl: null,
  },

  // =========================================================
  // PROGRAMMING Q944-Q949
  // =========================================================

  {
    questionId: 944,
    companyId: 5,
    year: 2023,
    category: "programming",
    question:
      "Given N, print the first N terms of the Fibonacci sequence.",
    options: [],
    answer:
      "Maintain the previous two Fibonacci numbers and repeatedly generate their sum.",
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

The next Fibonacci value is always the sum of the previous two.

Time complexity: O(n)
Space complexity: O(1)`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Cognizant GenC 2023 Fibonacci logic reported interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 945,
    companyId: 5,
    year: 2023,
    category: "programming",
    question:
      "Given a string, determine whether it is a palindrome while ignoring letter case.",
    options: [],
    answer:
      "Compare characters from the beginning and end while moving toward the center.",
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

For "Madam", after converting to lowercase we get "madam".
The first and last characters match, followed by the second and second-last.

Therefore it is a palindrome.

Time complexity: O(n)
Space complexity: O(n) here because toLowerCase() creates a normalized string.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Cognizant GenC 2023 palindrome logic reported interview-topic practice",
    sourceUrl: null,
  },

  {
    questionId: 946,
    companyId: 5,
    year: 2023,
    category: "programming",
    question:
      "Given an integer array, find the largest and second-largest distinct values without sorting the array.",
    options: [],
    answer:
      "Traverse once while maintaining the largest and second-largest distinct values.",
    solution: `public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 25, 8, 25, 18};

        Integer largest = null;
        Integer secondLargest = null;

        for (int value : arr) {
            if (largest == null || value > largest) {
                secondLargest = largest;
                largest = value;
            } else if (
                value != largest &&
                (secondLargest == null || value > secondLargest)
            ) {
                secondLargest = value;
            }
        }

        if (secondLargest == null) {
            System.out.println("No second largest distinct value");
        } else {
            System.out.println("Largest: " + largest);
            System.out.println("Second Largest: " + secondLargest);
        }
    }
}

For the example:
Distinct values include 10, 25, 8 and 18.
Largest = 25.
Second largest = 18.

Time complexity: O(n)
Space complexity: O(1)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC Elevate 2023 coding-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 947,
    companyId: 5,
    year: 2023,
    category: "programming",
    question:
      "Given an integer array, print the frequency of each element while preserving the order in which each distinct value first appears.",
    options: [],
    answer:
      "Use a LinkedHashMap to count occurrences while preserving insertion order.",
    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        int[] arr = {2, 3, 2, 5, 3, 2};

        Map<Integer, Integer> frequency =
            new LinkedHashMap<>();

        for (int value : arr) {
            frequency.put(
                value,
                frequency.getOrDefault(value, 0) + 1
            );
        }

        for (Map.Entry<Integer, Integer> entry :
                frequency.entrySet()) {
            System.out.println(
                entry.getKey() + " -> " + entry.getValue()
            );
        }
    }
}

Output:
2 -> 3
3 -> 2
5 -> 1

LinkedHashMap keeps keys in their insertion order.

Time complexity: O(n) expected
Space complexity: O(n)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC Elevate 2023 coding-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 948,
    companyId: 5,
    year: 2023,
    category: "programming",
    question:
      "Given an integer array and a target value, determine whether any two distinct elements add up to the target.",
    options: [],
    answer:
      "Use a HashSet. For each value, check whether target - value has already appeared.",
    solution: `import java.util.*;

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

        System.out.println(
            hasPair(arr, 9) ? "Pair exists" : "No pair"
        );
    }
}

For target 9:
When 7 is processed, 9 - 7 = 2.
2 has already been seen, so the pair (2, 7) exists.

Time complexity: O(n) expected
Space complexity: O(n)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Cognizant GenC Elevate 2023 DSA/coding-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 949,
    companyId: 5,
    year: 2023,
    category: "programming",
    question:
      "Design the core logic for a Tic-Tac-Toe program that checks whether a player has won after a move.",
    options: [],
    answer:
      "Check the player's row, column, main diagonal and anti-diagonal for three matching symbols.",
    solution: `public class Main {

    static boolean hasWon(char[][] board, char player) {

        // Check rows
        for (int row = 0; row < 3; row++) {
            if (
                board[row][0] == player &&
                board[row][1] == player &&
                board[row][2] == player
            ) {
                return true;
            }
        }

        // Check columns
        for (int col = 0; col < 3; col++) {
            if (
                board[0][col] == player &&
                board[1][col] == player &&
                board[2][col] == player
            ) {
                return true;
            }
        }

        // Main diagonal
        if (
            board[0][0] == player &&
            board[1][1] == player &&
            board[2][2] == player
        ) {
            return true;
        }

        // Anti-diagonal
        if (
            board[0][2] == player &&
            board[1][1] == player &&
            board[2][0] == player
        ) {
            return true;
        }

        return false;
    }

    public static void main(String[] args) {
        char[][] board = {
            {'X', 'O', 'O'},
            {'X', 'X', 'O'},
            {'X', ' ', ' '}
        };

        System.out.println(hasWon(board, 'X'));
    }
}

The algorithm checks:
1. All three rows.
2. All three columns.
3. The main diagonal.
4. The anti-diagonal.

For a fixed 3×3 board this takes constant time.

A 2023 Cognizant GenC candidate specifically reported being asked how they would code and design a Tic-Tac-Toe game.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Cognizant GenC 2023 Tic-Tac-Toe reported interview-topic practice",
    sourceUrl: null,
  },
];

async function seedCognizant2023Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 5,
      year: 2023,
    });

    console.log("Old Cognizant 2023 questions deleted");

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Cognizant 2023 questions seeded successfully`
    );

    process.exit(0);
  } catch (error) {
    console.error(
      "Error seeding Cognizant 2023 questions:",
      error
    );

    process.exit(1);
  }
}

seedCognizant2023Questions();