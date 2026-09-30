require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [

  // =========================================================
  // QUANTITATIVE APTITUDE Q1260-Q1267
  // =========================================================

  {
    questionId: 1260,
    companyId: 7,
    year: 2023,
    category: "aptitude",
    question:
      "A salary is increased from Rs. 20,000 to Rs. 23,000. What is the percentage increase?",
    options: ["10%", "12%", "15%", "20%"],
    answer: "15%",
    solution:
      "Increase = 23000 - 20000 = 3000. Percentage increase = (3000 / 20000) × 100 = 15%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET quantitative assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1261,
    companyId: 7,
    year: 2023,
    category: "aptitude",
    question:
      "A can finish a task in 10 days and B in 15 days. How many days will they take together?",
    options: ["5 days", "6 days", "7.5 days", "12 days"],
    answer: "6 days",
    solution:
      "A's one-day work = 1/10 and B's = 1/15. Together = 1/10 + 1/15 = 5/30 = 1/6. Therefore they complete the work in 6 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET quantitative assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1262,
    companyId: 7,
    year: 2023,
    category: "aptitude",
    question:
      "The average of 10, 20, 30, 40 and 50 is:",
    options: ["25", "30", "35", "40"],
    answer: "30",
    solution:
      "Sum = 10 + 20 + 30 + 40 + 50 = 150. Average = 150 / 5 = 30.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET quantitative assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1263,
    companyId: 7,
    year: 2023,
    category: "aptitude",
    question:
      "A product costing Rs. 1200 is sold at a 10% profit. What is its selling price?",
    options: ["Rs. 1260", "Rs. 1300", "Rs. 1320", "Rs. 1400"],
    answer: "Rs. 1320",
    solution:
      "Profit = 10% of 1200 = 120. Selling price = 1200 + 120 = Rs. 1320.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET quantitative assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1264,
    companyId: 7,
    year: 2023,
    category: "aptitude",
    question:
      "A car covers 180 km in 3 hours. What is its average speed?",
    options: ["50 km/h", "60 km/h", "70 km/h", "90 km/h"],
    answer: "60 km/h",
    solution:
      "Average speed = Distance / Time = 180 / 3 = 60 km/h.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET quantitative assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1265,
    companyId: 7,
    year: 2023,
    category: "aptitude",
    question:
      "The ratio of boys to girls in a class is 3:2. If there are 30 boys, how many girls are there?",
    options: ["15", "20", "25", "30"],
    answer: "20",
    solution:
      "3 ratio parts correspond to 30 boys, so one part = 10. Girls = 2 × 10 = 20.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET quantitative assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1266,
    companyId: 7,
    year: 2023,
    category: "aptitude",
    question:
      "What is the simple interest on Rs. 4000 at 5% per annum for 3 years?",
    options: ["Rs. 500", "Rs. 600", "Rs. 700", "Rs. 800"],
    answer: "Rs. 600",
    solution:
      "SI = (P × R × T) / 100 = (4000 × 5 × 3) / 100 = Rs. 600.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET quantitative assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1267,
    companyId: 7,
    year: 2023,
    category: "aptitude",
    question:
      "A fair die is rolled once. What is the probability of obtaining an even number?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    answer: "1/2",
    solution:
      "The even outcomes are 2, 4 and 6. There are 3 favorable outcomes among 6 possible outcomes. Probability = 3/6 = 1/2.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET quantitative assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // LOGICAL REASONING Q1268-Q1275
  // =========================================================

  {
    questionId: 1268,
    companyId: 7,
    year: 2023,
    category: "reasoning",
    question:
      "Find the next number: 3, 6, 12, 24, 48, ?",
    options: ["72", "84", "96", "100"],
    answer: "96",
    solution:
      "Every term is twice the previous term. Therefore 48 × 2 = 96.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1269,
    companyId: 7,
    year: 2023,
    category: "reasoning",
    question:
      "If BOOK is coded as CPPL by shifting each letter forward by one, how is JAVA coded?",
    options: ["KBWB", "KBVA", "JBWB", "KAWA"],
    answer: "KBWB",
    solution:
      "J -> K, A -> B, V -> W and A -> B. Therefore JAVA becomes KBWB.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1270,
    companyId: 7,
    year: 2023,
    category: "reasoning",
    question:
      "A man walks 4 km east and then 3 km north. What is the shortest distance from his starting point?",
    options: ["5 km", "6 km", "7 km", "12 km"],
    answer: "5 km",
    solution:
      "The movements form a right triangle. Distance = sqrt(4² + 3²) = sqrt(16 + 9) = 5 km.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1271,
    companyId: 7,
    year: 2023,
    category: "reasoning",
    question:
      "Statements: All developers are engineers. Some engineers are managers. Which conclusion definitely follows?",
    options: [
      "All developers are engineers",
      "All managers are developers",
      "All engineers are developers",
      "No manager is an engineer"
    ],
    answer: "All developers are engineers",
    solution:
      "This conclusion is directly given by the first statement. The second statement does not establish that managers are developers.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1272,
    companyId: 7,
    year: 2023,
    category: "reasoning",
    question:
      "Find the odd one out: 2, 3, 5, 7, 9, 11",
    options: ["3", "7", "9", "11"],
    answer: "9",
    solution:
      "2, 3, 5, 7 and 11 are prime numbers. 9 is composite because 9 = 3 × 3.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1273,
    companyId: 7,
    year: 2023,
    category: "reasoning",
    question:
      "Find the next letter in the sequence: A, C, F, J, O, ?",
    options: ["T", "U", "V", "W"],
    answer: "U",
    solution:
      "The jumps are +2, +3, +4 and +5. The next jump is +6. O shifted by 6 letters gives U.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1274,
    companyId: 7,
    year: 2023,
    category: "reasoning",
    question:
      "Riya is the daughter of Amit. Amit is the son of Mohan. How is Mohan related to Riya?",
    options: ["Brother", "Father", "Grandfather", "Uncle"],
    answer: "Grandfather",
    solution:
      "Amit is Riya's father and Amit is Mohan's son. Therefore Mohan is Riya's grandfather.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET logical reasoning pattern",
    sourceUrl: null,
  },

  {
    questionId: 1275,
    companyId: 7,
    year: 2023,
    category: "reasoning",
    question:
      "If today is Monday, what day will it be after 45 days?",
    options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    answer: "Thursday",
    solution:
      "45 mod 7 = 3. Three days after Monday is Thursday.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET logical reasoning pattern",
    sourceUrl: null,
  },

  // =========================================================
  // VERBAL ABILITY Q1276-Q1281
  // =========================================================

  {
    questionId: 1276,
    companyId: 7,
    year: 2023,
    category: "grammar",
    question:
      "Choose the grammatically correct sentence.",
    options: [
      "He does not know the answer.",
      "He do not know the answer.",
      "He does not knows the answer.",
      "He not knows the answer."
    ],
    answer: "He does not know the answer.",
    solution:
      "After 'does not', the main verb must remain in its base form. Therefore 'does not know' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET verbal ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 1277,
    companyId: 7,
    year: 2023,
    category: "grammar",
    question:
      "Choose the synonym of 'diligent'.",
    options: ["Lazy", "Hardworking", "Careless", "Weak"],
    answer: "Hardworking",
    solution:
      "Diligent means showing careful and persistent effort, so 'hardworking' is the closest option.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET verbal ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 1278,
    companyId: 7,
    year: 2023,
    category: "grammar",
    question:
      "Choose the antonym of 'expand'.",
    options: ["Increase", "Extend", "Contract", "Develop"],
    answer: "Contract",
    solution:
      "Expand means to become larger. Contract means to become smaller and is the opposite.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET verbal ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 1279,
    companyId: 7,
    year: 2023,
    category: "grammar",
    question:
      "Fill in the blank: She is good ___ mathematics.",
    options: ["in", "at", "on", "for"],
    answer: "at",
    solution:
      "The standard expression is 'good at' something. Therefore 'good at mathematics' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET verbal ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 1280,
    companyId: 7,
    year: 2023,
    category: "grammar",
    question:
      "Choose the correctly spelled word.",
    options: ["Definately", "Definitely", "Definetly", "Definatly"],
    answer: "Definitely",
    solution:
      "The correct spelling is 'Definitely'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET verbal ability pattern",
    sourceUrl: null,
  },

  {
    questionId: 1281,
    companyId: 7,
    year: 2023,
    category: "grammar",
    question:
      "Choose the correct passive form of: 'The team completed the project.'",
    options: [
      "The project was completed by the team.",
      "The project completed the team.",
      "The project is complete by team.",
      "The team was completed by the project."
    ],
    answer: "The project was completed by the team.",
    solution:
      "The object 'the project' becomes the subject in passive voice. Because the original sentence is past tense, 'was completed' is used.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET verbal ability pattern",
    sourceUrl: null,
  },

  // =========================================================
  // COMPUTER FUNDAMENTALS Q1282-Q1291
  // =========================================================

  {
    questionId: 1282,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "Why is Java considered platform independent?",
    options: [
      "Java compiles source code into bytecode that can run on compatible JVM implementations",
      "Java never requires compilation",
      "Java runs only on Windows",
      "Java directly produces identical native machine code for every processor"
    ],
    answer:
      "Java compiles source code into bytecode that can run on compatible JVM implementations",
    solution:
      "The Java compiler produces bytecode. A JVM implementation for the target platform executes that bytecode, which supports the idea of write once, run anywhere. Java platform independence was directly reported in HCLTech 2023 GET interviews.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 GET interview - Java platform independence",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcltech-interview-expereience-for-graduate-engineer-trainee-2023/",
  },

  {
    questionId: 1283,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "What is the role of the JIT compiler in Java?",
    options: [
      "It compiles frequently executed bytecode into native machine code at runtime",
      "It creates SQL tables",
      "It converts HTML into Java",
      "It is a Java access modifier"
    ],
    answer:
      "It compiles frequently executed bytecode into native machine code at runtime",
    solution:
      "The Just-In-Time compiler is part of JVM execution technology. It can compile frequently executed bytecode into native code to improve runtime performance. JIT was specifically reported in a 2023 HCLTech GET interview.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 GET interview - JIT compiler",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcltech-interview-expereience-for-graduate-engineer-trainee-2023/",
  },

  {
    questionId: 1284,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "What is polymorphism in Java?",
    options: [
      "The ability for a common type/interface to represent objects with different implementations",
      "A database normalization technique",
      "A sorting algorithm",
      "A network protocol"
    ],
    answer:
      "The ability for a common type/interface to represent objects with different implementations",
    solution:
      "Polymorphism allows the same method call or interface to exhibit different behavior depending on the actual object or implementation. Runtime method overriding is a common Java example. Polymorphism was directly reported in HCLTech 2023 GET interviews.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 GET interview - polymorphism",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcltech-interview-expereience-for-graduate-engineer-trainee-2023/",
  },

  {
    questionId: 1285,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "What is the difference between String and StringBuilder in Java?",
    options: [
      "String is immutable while StringBuilder is mutable",
      "StringBuilder is immutable while String is mutable",
      "Both are always mutable",
      "StringBuilder cannot contain characters"
    ],
    answer: "String is immutable while StringBuilder is mutable",
    solution:
      "A String object's contents cannot be modified after creation. StringBuilder maintains a mutable character sequence and is useful when repeatedly modifying text. String versus StringBuilder was directly reported in an HCLTech 2023 interview.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 interview - String vs StringBuilder",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-2023/",
  },

  {
    questionId: 1286,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "Which Java access modifier provides the most restrictive access?",
    options: ["public", "protected", "private", "default"],
    answer: "private",
    solution:
      "A private member is accessible only within its declaring top-level class, subject to Java's language rules. Access specifiers/modifiers were directly reported in an HCLTech 2023 interview.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 interview - Java access specifiers",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-2023/",
  },

  {
    questionId: 1287,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "Which statement correctly distinguishes final, finally and finalize in Java?",
    options: [
      "final is a keyword, finally is used with exception handling, and finalize() was historically an Object cleanup hook",
      "All three are identical",
      "final is a database command",
      "finally creates an object"
    ],
    answer:
      "final is a keyword, finally is used with exception handling, and finalize() was historically an Object cleanup hook",
    solution:
      "final can restrict reassignment, overriding or inheritance depending on context. finally is associated with try/catch cleanup flow. finalize() was an Object method historically associated with garbage collection cleanup, but it is deprecated and should not be relied upon. This distinction was directly reported in an HCLTech 2023 interview.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 interview - final/finally/finalize",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-2023/",
  },

  {
    questionId: 1288,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "Which statement best describes JVM, JRE and JDK?",
    options: [
      "JVM executes bytecode; JRE provides the runtime environment; JDK includes development tools plus runtime components",
      "All three are databases",
      "JDK is only a text editor",
      "JVM is a programming language"
    ],
    answer:
      "JVM executes bytecode; JRE provides the runtime environment; JDK includes development tools plus runtime components",
    solution:
      "The JVM executes Java bytecode. The JRE provides components needed to run Java applications. The JDK provides development tools such as javac in addition to runtime components. JVM, JRE and JDK were directly reported in an HCLTech 2023 technical interview.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 interview - JVM/JRE/JDK",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-2023/",
  },

  {
    questionId: 1289,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "Which statement about an interface and an abstract class in Java is correct?",
    options: [
      "A class can implement multiple interfaces but can directly extend only one class",
      "A class can extend unlimited abstract classes",
      "Interfaces and abstract classes are exactly identical",
      "Abstract classes cannot contain concrete methods"
    ],
    answer:
      "A class can implement multiple interfaces but can directly extend only one class",
    solution:
      "Java supports single class inheritance, so a class directly extends one class. It can implement multiple interfaces. Abstract classes may also contain concrete methods and state. Interfaces and abstract classes were directly reported in HCLTech's 2023 interview.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 interview - interface and abstract class",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-2023/",
  },

  {
    questionId: 1290,
    companyId: 7,
    year: 2023,
    category: "dbms",
    question:
      "What does DBMS stand for?",
    options: [
      "Database Management System",
      "Data Binary Management Service",
      "Database Machine Structure",
      "Digital Base Memory System"
    ],
    answer: "Database Management System",
    solution:
      "A Database Management System is software used to define, store, retrieve, update and manage data in databases. Computer fundamentals formed a major part of the 2023 GET assessment.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 GET computer fundamentals pattern",
    sourceUrl: null,
  },

  {
    questionId: 1291,
    companyId: 7,
    year: 2023,
    category: "web",
    question:
      "Which data structure follows First-In-First-Out order?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
    solution:
      "A queue follows FIFO: the element inserted first is removed first. Basic data structures fall within the computer/programming fundamentals reported for HCLTech assessments.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 computer/programming fundamentals pattern",
    sourceUrl: null,
  },

  // =========================================================
  // CODING Q1292-Q1297
  // =========================================================

  {
    questionId: 1292,
    companyId: 7,
    year: 2023,
    category: "programming",
    question:
      "Given an integer array, find the largest element in the array.",
    options: [],
    answer:
      "Traverse the array while maintaining the largest value seen so far.",
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

        int[] arr = {10, 5, 20, 8, 15};

        System.out.println(largest(arr));
    }
}

Output:
20

Start with the first element as the maximum.
Compare every remaining element with max.
Whenever a larger value is found, update max.

Time complexity: O(n)
Space complexity: O(1)

A 2023 HCLTech on-campus report specifically says one
of the two coding questions was array-based.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "HCLTech 2023 candidate-reported array coding section - reconstructed practice question",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-2023/",
  },

  {
    questionId: 1293,
    companyId: 7,
    year: 2023,
    category: "programming",
    question:
      "Given a string, determine whether it is a palindrome.",
    options: [],
    answer:
      "Use two pointers starting at the beginning and end and compare characters while moving inward.",
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

        String str = "level";

        System.out.println(isPalindrome(str));
    }
}

Output:
true

The characters are compared from both ends.

l == l
e == e

The middle character does not need a comparison.

Time complexity: O(n)
Space complexity: O(1)

A 2023 HCLTech on-campus report says one of the two
coding questions was string-based.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "HCLTech 2023 candidate-reported string coding section - reconstructed practice question",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-2023/",
  },

  {
    questionId: 1294,
    companyId: 7,
    year: 2023,
    category: "programming",
    question:
      "Write a program to determine whether a number is an Armstrong number.",
    options: [],
    answer:
      "Raise each digit to the power of the number of digits, sum the results and compare the sum with the original number.",
    solution: `public class Main {

    static boolean isArmstrong(int n) {

        int original = n;
        int digits = String.valueOf(n).length();
        int sum = 0;

        while (n > 0) {

            int digit = n % 10;

            sum += (int) Math.pow(digit, digits);

            n /= 10;
        }

        return sum == original;
    }

    public static void main(String[] args) {

        int n = 153;

        System.out.println(isArmstrong(n));
    }
}

Output:
true

153 has three digits.

1^3 + 5^3 + 3^3
= 1 + 125 + 27
= 153

Therefore 153 is an Armstrong number.

An Armstrong-type coding question was reported in an
HCL on-campus software-engineer process published in 2023.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCL 2023 coding question - Armstrong type",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-for-software-engineer/",
  },

  {
    questionId: 1295,
    companyId: 7,
    year: 2023,
    category: "programming",
    question:
      "Given an integer array and an integer k, count how many array elements are divisible by k.",
    options: [],
    answer:
      "Traverse the array and increment a counter whenever value % k equals zero.",
    solution: `public class Main {

    static int countDivisible(int[] arr, int k) {

        int count = 0;

        for (int value : arr) {

            if (value % k == 0) {
                count++;
            }
        }

        return count;
    }

    public static void main(String[] args) {

        int[] arr = {2, 4, 5, 8, 10, 12};
        int k = 2;

        System.out.println(countDivisible(arr, k));
    }
}

Output:
5

The values divisible by 2 are:
2, 4, 8, 10 and 12.

Therefore the answer is 5.

Time complexity: O(n)
Space complexity: O(1)

This array-and-k divisibility coding task was reported
in an HCL on-campus software-engineer process published
in 2023.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCL 2023 coding question - elements divisible by k",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-for-software-engineer/",
  },

  {
    questionId: 1296,
    companyId: 7,
    year: 2023,
    category: "programming",
    question:
      "Given a string, count the frequency of every character while preserving the order of first appearance.",
    options: [],
    answer:
      "Use a LinkedHashMap to store each character and its frequency.",
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

        frequency("hcltech");
    }
}

For "hcltech":

h -> 2
c -> 2
l -> 1
t -> 1
e -> 1

LinkedHashMap preserves insertion order while storing
the frequency of each character.

Time complexity: O(n) expected
Space complexity: O(k), where k is the number of
distinct characters.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 string/programming practice",
    sourceUrl: null,
  },

  {
    questionId: 1297,
    companyId: 7,
    year: 2023,
    category: "programming",
    question:
      "Reverse a string without using StringBuilder.reverse().",
    options: [],
    answer:
      "Traverse the string from the final character to the first and append each character.",
    solution: `public class Main {

    static String reverse(String str) {

        StringBuilder result = new StringBuilder();

        for (int i = str.length() - 1; i >= 0; i--) {
            result.append(str.charAt(i));
        }

        return result.toString();
    }

    public static void main(String[] args) {

        System.out.println(reverse("HCLTech"));
    }
}

Output:
hceTLCH

The loop starts at the final character and moves
backward until index 0.

Time complexity: O(n)
Space complexity: O(n)

This is a company-style string question based on the
string-coding category reported for HCLTech 2023.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "HCLTech 2023 string coding practice",
    sourceUrl: null,
  },

  // =========================================================
  // TECHNICAL INTERVIEW Q1298-Q1307
  // =========================================================

  {
    questionId: 1298,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "What are the four main pillars of Object-Oriented Programming?",
    options: [
      "Encapsulation, Abstraction, Inheritance, Polymorphism",
      "Stack, Queue, Tree, Graph",
      "JVM, JRE, JDK, JIT",
      "HTML, CSS, JavaScript, SQL"
    ],
    answer:
      "Encapsulation, Abstraction, Inheritance, Polymorphism",
    solution:
      "Encapsulation controls access to state, abstraction hides unnecessary implementation details, inheritance supports reuse through class relationships, and polymorphism enables multiple implementations through a common type. OOP pillars with real-world examples were directly reported in an HCLTech 2023 technical interview.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 interview - OOP pillars",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-2023/",
  },

  {
    questionId: 1299,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "What is the purpose of the main method in a standard Java application?",
    options: [
      "It serves as the conventional entry point used by the Java launcher",
      "It creates database tables automatically",
      "It is used only for inheritance",
      "It replaces the JVM"
    ],
    answer:
      "It serves as the conventional entry point used by the Java launcher",
    solution:
      "For a standard Java application, the launcher looks for an appropriate public static void main(String[] args) entry point. The Java main method was directly reported as an HCLTech 2023 GET interview topic.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 GET interview - Java main method",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcltech-interview-experience-for-get/",
  },

  {
    questionId: 1300,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "What does the static keyword mean when applied to a Java method?",
    options: [
      "The method belongs to the class rather than requiring a particular object instance",
      "The method can never execute",
      "The method belongs to a database",
      "The method automatically becomes abstract"
    ],
    answer:
      "The method belongs to the class rather than requiring a particular object instance",
    solution:
      "A static method is associated with the class and can be called using the class name without constructing an instance. Static methods were reported in a 2023 HCLTech GET technical interview.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 GET interview - static method",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcltech-interview-experience-for-get/",
  },

  {
    questionId: 1301,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "What does the super keyword commonly refer to in Java?",
    options: [
      "Members or constructors associated with the immediate superclass",
      "The current object's local variables only",
      "A SQL superuser",
      "A thread scheduler"
    ],
    answer:
      "Members or constructors associated with the immediate superclass",
    solution:
      "super can be used to access superclass members or invoke a superclass constructor. The candidate report used the wording 'super function', but in Java super is a keyword rather than a function.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 GET interview - super keyword",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcltech-interview-experience-for-get/",
  },

  {
    questionId: 1302,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "Which statement correctly compares Java and C++?",
    options: [
      "Both support OOP, but Java normally runs bytecode through a JVM while C++ is typically compiled to native machine code",
      "Java supports no classes",
      "C++ cannot use functions",
      "Java and C++ are identical languages"
    ],
    answer:
      "Both support OOP, but Java normally runs bytecode through a JVM while C++ is typically compiled to native machine code",
    solution:
      "Java and C++ both support object-oriented programming but have important differences in execution model, memory management, language features and inheritance mechanisms. Java versus C++ was directly reported in an HCLTech 2023 interview.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 interview - C++ vs Java",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-2023/",
  },

  {
    questionId: 1303,
    companyId: 7,
    year: 2023,
    category: "dbms",
    question:
      "What is the difference between SQL and MySQL?",
    options: [
      "SQL is a language for relational database operations; MySQL is a relational database management system that uses SQL",
      "SQL and MySQL are programming languages with no database use",
      "SQL is an operating system",
      "MySQL is a Java keyword"
    ],
    answer:
      "SQL is a language for relational database operations; MySQL is a relational database management system that uses SQL",
    solution:
      "SQL is the Structured Query Language used to define and manipulate relational data. MySQL is a database management system implementing SQL. SQL versus MySQL appears in a candidate-reported HCL GET technical interview from this period.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCL GET interview - SQL vs MySQL",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-technologies-interview-experience-for-graduate-engineer-trainee/",
  },

  {
    questionId: 1304,
    companyId: 7,
    year: 2023,
    category: "sql",
    question:
      "What is the purpose of SQL constraints?",
    options: [
      "To enforce rules and integrity requirements on table data",
      "To compile Java applications",
      "To allocate CPU time",
      "To create network packets"
    ],
    answer:
      "To enforce rules and integrity requirements on table data",
    solution:
      "Constraints enforce rules on relational data. Common examples include PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL and CHECK. Constraints and their types were reported in an HCL GET interview.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCL GET interview - SQL constraints",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-technologies-interview-experience-for-graduate-engineer-trainee/",
  },

  {
    questionId: 1305,
    companyId: 7,
    year: 2023,
    category: "sql",
    question:
      "Why are SQL JOINs used?",
    options: [
      "To combine related rows from multiple tables based on a relationship or condition",
      "To restart an operating system",
      "To sort Java bytecode",
      "To create threads"
    ],
    answer:
      "To combine related rows from multiple tables based on a relationship or condition",
    solution:
      "JOIN operations combine related information stored across relational tables. Common types include INNER JOIN, LEFT JOIN, RIGHT JOIN and FULL OUTER JOIN where supported.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCL GET interview - SQL JOINs",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-technologies-interview-experience-for-graduate-engineer-trainee/",
  },

  {
    questionId: 1306,
    companyId: 7,
    year: 2023,
    category: "dbms",
    question:
      "What are the ACID properties of a database transaction?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Access, Class, Inheritance, Data",
      "Array, Condition, Interface, Database",
      "Atomicity, Compilation, Indexing, Dependency"
    ],
    answer: "Atomicity, Consistency, Isolation, Durability",
    solution:
      "Atomicity treats a transaction as a unit. Consistency preserves database rules. Isolation manages interactions among concurrent transactions. Durability ensures committed changes survive failures. ACID was reported in an HCL GET technical interview.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCL GET interview - ACID properties",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-technologies-interview-experience-for-graduate-engineer-trainee/",
  },

  {
    questionId: 1307,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "What is a deadlock in operating systems?",
    options: [
      "A situation where processes/threads wait indefinitely for resources held by one another",
      "A sorting algorithm",
      "A database JOIN",
      "A Java constructor"
    ],
    answer:
      "A situation where processes/threads wait indefinitely for resources held by one another",
    solution:
      "Deadlock can occur when tasks wait indefinitely for resources held by each other. The classic necessary conditions include mutual exclusion, hold-and-wait, no preemption and circular wait. Deadlock and Banker's Algorithm were reported in an HCL GET technical interview.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCL GET interview - deadlock and Banker's Algorithm",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-technologies-interview-experience-for-graduate-engineer-trainee/",
  },

  // =========================================================
  // PROJECT / HR INTERVIEW Q1308-Q1309
  // =========================================================

  {
    questionId: 1308,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "When HCLTech asks 'Explain your project', which areas should you be prepared to explain?",
    options: [
      "Problem statement, architecture, technologies, your role, implementation and challenges",
      "Only the project title",
      "Only your college name",
      "Only the programming language"
    ],
    answer:
      "Problem statement, architecture, technologies, your role, implementation and challenges",
    solution:
      "Project explanation and the candidate's role in the project were directly reported in HCLTech's 2023 technical/HR process. A strong response should demonstrate actual ownership rather than simply listing technologies.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 interview - project explanation",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-2023/",
  },

  {
    questionId: 1309,
    companyId: 7,
    year: 2023,
    category: "java",
    question:
      "Which is the strongest way to answer 'Why do you want to join HCLTech?' in an interview?",
    options: [
      "Connect the role and company opportunities with your skills, learning goals and career direction",
      "Say you applied randomly",
      "Say you know nothing about the company",
      "Discuss only salary"
    ],
    answer:
      "Connect the role and company opportunities with your skills, learning goals and career direction",
    solution:
      "'Why HCL?' was directly reported in HCLTech's 2023 HR process. A strong answer should be specific to the role and organization and should connect your own skills and career goals to the opportunity.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName:
      "Candidate-reported HCLTech 2023 HR interview - Why HCL?",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/hcl-interview-experience-on-campus-2023/",
  },
];

async function seedHCLTech2023Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 7,
      year: 2023,
    });

    console.log("Old HCLTech 2023 questions deleted");

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} HCLTech 2023 questions seeded successfully`
    );

    process.exit(0);
  } catch (error) {
    console.error(
      "Error seeding HCLTech 2023 questions:",
      error
    );

    process.exit(1);
  }
}

seedHCLTech2023Questions();