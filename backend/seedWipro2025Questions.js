require("dotenv").config();

const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [
  // Wipro 2025 questions will go here
  // Starting questionId: 420
  {
  questionId: 420,
  companyId: 3,
  year: 2025,
  category: "aptitude",
  question: "A shopkeeper buys an article for Rs. 1200 and sells it for Rs. 1440. What is the profit percentage?",
  options: ["15%", "18%", "20%", "25%"],
  answer: "20%",
  solution: "Profit = 1440 - 1200 = 240. Profit percentage = (240/1200) × 100 = 20%.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro aptitude practice",
  sourceUrl: null
},

{
  questionId: 421,
  companyId: 3,
  year: 2025,
  category: "aptitude",
  question: "The average of 6 numbers is 25. What is their total sum?",
  options: ["125", "150", "175", "200"],
  answer: "150",
  solution: "Sum = Average × Number of values = 25 × 6 = 150.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro aptitude practice",
  sourceUrl: null
},

{
  questionId: 422,
  companyId: 3,
  year: 2025,
  category: "aptitude",
  question: "A train travels 300 km in 5 hours. What is its average speed?",
  options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
  answer: "60 km/h",
  solution: "Average speed = Distance / Time = 300 / 5 = 60 km/h.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro aptitude practice",
  sourceUrl: null
},

{
  questionId: 423,
  companyId: 3,
  year: 2025,
  category: "aptitude",
  question: "The ratio of two numbers is 3:5. If their sum is 64, find the larger number.",
  options: ["24", "32", "40", "48"],
  answer: "40",
  solution: "Total ratio parts = 3+5 = 8. One part = 64/8 = 8. Larger number = 5×8 = 40.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro aptitude practice",
  sourceUrl: null
},

{
  questionId: 424,
  companyId: 3,
  year: 2025,
  category: "aptitude",
  question: "Find the simple interest on Rs. 6000 at 5% per annum for 4 years.",
  options: ["Rs. 1000", "Rs. 1100", "Rs. 1200", "Rs. 1400"],
  answer: "Rs. 1200",
  solution: "SI = (6000 × 5 × 4) / 100 = Rs. 1200.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro aptitude practice",
  sourceUrl: null
},

{
  questionId: 425,
  companyId: 3,
  year: 2025,
  category: "aptitude",
  question: "A can complete a work in 10 days and B in 15 days. In how many days can they complete it together?",
  options: ["5 days", "6 days", "7 days", "8 days"],
  answer: "6 days",
  solution: "Combined rate = 1/10 + 1/15 = 1/6. Therefore they take 6 days.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "Wipro aptitude practice",
  sourceUrl: null
},

{
  questionId: 426,
  companyId: 3,
  year: 2025,
  category: "aptitude",
  question: "What is 30% of 450?",
  options: ["125", "130", "135", "140"],
  answer: "135",
  solution: "30% of 450 = (30/100) × 450 = 135.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro aptitude practice",
  sourceUrl: null
},

{
  questionId: 427,
  companyId: 3,
  year: 2025,
  category: "aptitude",
  question: "A bag contains 7 red and 3 blue balls. What is the probability of selecting a blue ball?",
  options: ["1/10", "3/10", "7/10", "1/2"],
  answer: "3/10",
  solution: "Total balls = 10. Blue balls = 3. Probability = 3/10.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro aptitude practice",
  sourceUrl: null
},

{
  questionId: 428,
  companyId: 3,
  year: 2025,
  category: "aptitude",
  question: "A product marked at Rs. 2500 is sold at a discount of 20%. What is its selling price?",
  options: ["Rs. 1800", "Rs. 1900", "Rs. 2000", "Rs. 2100"],
  answer: "Rs. 2000",
  solution: "Discount = 20% of 2500 = 500. Selling price = 2500 - 500 = Rs. 2000.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro aptitude practice",
  sourceUrl: null
},

{
  questionId: 429,
  companyId: 3,
  year: 2025,
  category: "aptitude",
  question: "If 12 workers complete a job in 15 days, how many days will 18 workers take at the same rate?",
  options: ["8 days", "10 days", "12 days", "15 days"],
  answer: "10 days",
  solution: "Total work = 12×15 = 180 worker-days. Time for 18 workers = 180/18 = 10 days.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "Wipro aptitude practice",
  sourceUrl: null
},

// ==================== REASONING ====================

{
  questionId: 430,
  companyId: 3,
  year: 2025,
  category: "reasoning",
  question: "Find the next number: 4, 9, 16, 25, 36, ?",
  options: ["42", "45", "49", "64"],
  answer: "49",
  solution: "The sequence is 2², 3², 4², 5², 6². Next is 7² = 49.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro reasoning practice",
  sourceUrl: null
},

{
  questionId: 431,
  companyId: 3,
  year: 2025,
  category: "reasoning",
  question: "If PEN is coded as QFO by moving each letter one position forward, how is BOOK coded?",
  options: ["CPPL", "CPOK", "DPPM", "CPPJ"],
  answer: "CPPL",
  solution: "B→C, O→P, O→P and K→L. Therefore BOOK becomes CPPL.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro reasoning practice",
  sourceUrl: null
},

{
  questionId: 432,
  companyId: 3,
  year: 2025,
  category: "reasoning",
  question: "A is the brother of B. B is the mother of C. How is A related to C?",
  options: ["Father", "Brother", "Uncle", "Grandfather"],
  answer: "Uncle",
  solution: "A is the brother of C's mother B, so A is C's uncle.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro reasoning practice",
  sourceUrl: null
},

{
  questionId: 433,
  companyId: 3,
  year: 2025,
  category: "reasoning",
  question: "A person walks 8 m north and then 6 m east. In which direction is the person from the starting point?",
  options: ["North-East", "North-West", "South-East", "South-West"],
  answer: "North-East",
  solution: "The final position is both north and east of the starting point.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro reasoning practice",
  sourceUrl: null
},

{
  questionId: 434,
  companyId: 3,
  year: 2025,
  category: "reasoning",
  question: "Find the odd one out: 8, 27, 64, 100, 125.",
  options: ["27", "64", "100", "125"],
  answer: "100",
  solution: "8, 27, 64 and 125 are perfect cubes. 100 is not.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro reasoning practice",
  sourceUrl: null
},

{
  questionId: 435,
  companyId: 3,
  year: 2025,
  category: "reasoning",
  question: "Complete the analogy: Doctor : Hospital :: Teacher : ?",
  options: ["Bank", "School", "Court", "Factory"],
  answer: "School",
  solution: "A doctor commonly works in a hospital and a teacher commonly works in a school.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro reasoning practice",
  sourceUrl: null
},

{
  questionId: 436,
  companyId: 3,
  year: 2025,
  category: "reasoning",
  question: "If today is Tuesday, what day will it be after 17 days?",
  options: ["Thursday", "Friday", "Saturday", "Sunday"],
  answer: "Friday",
  solution: "17 mod 7 = 3. Three days after Tuesday is Friday.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro reasoning practice",
  sourceUrl: null
},

{
  questionId: 437,
  companyId: 3,
  year: 2025,
  category: "reasoning",
  question: "Statements: All cats are animals. Some animals are black. Which conclusion definitely follows?",
  options: [
    "All black things are cats",
    "All cats are animals",
    "Some cats are black",
    "No cat is black"
  ],
  answer: "All cats are animals",
  solution: "This conclusion is directly given in the first statement.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "Wipro reasoning practice",
  sourceUrl: null
},

{
  questionId: 438,
  companyId: 3,
  year: 2025,
  category: "reasoning",
  question: "Find the next letter: A, D, H, M, S, ?",
  options: ["X", "Y", "Z", "A"],
  answer: "Z",
  solution: "The jumps are +3, +4, +5 and +6. The next jump is +7. S + 7 = Z.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "Wipro reasoning practice",
  sourceUrl: null
},

{
  questionId: 439,
  companyId: 3,
  year: 2025,
  category: "reasoning",
  question: "Ravi is 12th from the left and 9th from the right in a row. How many people are in the row?",
  options: ["19", "20", "21", "22"],
  answer: "20",
  solution: "Total = 12 + 9 - 1 = 20.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "Wipro reasoning practice",
  sourceUrl: null
},

// ==================== VERBAL / GRAMMAR ====================

{
  questionId: 440,
  companyId: 3,
  year: 2025,
  category: "grammar",
  question: "Choose the correct sentence.",
  options: [
    "She have completed her work.",
    "She has completed her work.",
    "She having completed her work.",
    "She has complete her work."
  ],
  answer: "She has completed her work.",
  solution: "With the singular subject 'she', present perfect uses 'has + past participle'.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro verbal practice",
  sourceUrl: null
},

{
  questionId: 441,
  companyId: 3,
  year: 2025,
  category: "grammar",
  question: "Fill in the blank: He has lived in Delhi ___ five years.",
  options: ["since", "for", "from", "at"],
  answer: "for",
  solution: "'For' is used with a duration of time.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro verbal practice",
  sourceUrl: null
},

{
  questionId: 442,
  companyId: 3,
  year: 2025,
  category: "grammar",
  question: "Choose the correct article: She is ___ intelligent student.",
  options: ["a", "an", "the", "no article"],
  answer: "an",
  solution: "'Intelligent' begins with a vowel sound, so 'an' is correct.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro verbal practice",
  sourceUrl: null
},

{
  questionId: 443,
  companyId: 3,
  year: 2025,
  category: "grammar",
  question: "Choose the correctly spelled word.",
  options: ["Environment", "Enviroment", "Envirnoment", "Enviornment"],
  answer: "Environment",
  solution: "The correct spelling is 'Environment'.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro verbal practice",
  sourceUrl: null
},

{
  questionId: 444,
  companyId: 3,
  year: 2025,
  category: "grammar",
  question: "Choose the correct passive voice of: 'They completed the task.'",
  options: [
    "The task was completed by them.",
    "The task is completed by them.",
    "The task completed them.",
    "They were completed by the task."
  ],
  answer: "The task was completed by them.",
  solution: "The active sentence is in simple past, so passive voice uses 'was + past participle'.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro verbal practice",
  sourceUrl: null
},

{
  questionId: 445,
  companyId: 3,
  year: 2025,
  category: "grammar",
  question: "Fill in the blank: Each of the students ___ a laptop.",
  options: ["have", "has", "are having", "were"],
  answer: "has",
  solution: "'Each' is singular, so the singular verb 'has' is required.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "Wipro verbal practice",
  sourceUrl: null
},

{
  questionId: 446,
  companyId: 3,
  year: 2025,
  category: "grammar",
  question: "Choose the correct indirect speech: He said, 'I am ready.'",
  options: [
    "He said that he was ready.",
    "He said that I am ready.",
    "He says that he was ready.",
    "He said that he ready."
  ],
  answer: "He said that he was ready.",
  solution: "'I' changes to 'he' and 'am' normally changes to 'was' in reported speech.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "Wipro verbal practice",
  sourceUrl: null
},

{
  questionId: 447,
  companyId: 3,
  year: 2025,
  category: "grammar",
  question: "Fill in the blank: She is good ___ solving mathematical problems.",
  options: ["in", "on", "at", "for"],
  answer: "at",
  solution: "The standard expression is 'good at'.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro verbal practice",
  sourceUrl: null
},

{
  questionId: 448,
  companyId: 3,
  year: 2025,
  category: "grammar",
  question: "Choose the correct sentence.",
  options: [
    "Neither of the boys are present.",
    "Neither of the boys is present.",
    "Neither boys is present.",
    "Neither of boy are present."
  ],
  answer: "Neither of the boys is present.",
  solution: "'Neither' is singular in this construction, so 'is' is used.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "Wipro verbal practice",
  sourceUrl: null
},

{
  questionId: 449,
  companyId: 3,
  year: 2025,
  category: "grammar",
  question: "Choose the correct sentence.",
  options: [
    "One of my friends work at Wipro.",
    "One of my friends works at Wipro.",
    "One of my friend works at Wipro.",
    "One of my friends working at Wipro."
  ],
  answer: "One of my friends works at Wipro.",
  solution: "The subject is 'one', which is singular, so 'works' is correct.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro verbal practice",
  sourceUrl: null
},

// ==================== PSEUDOCODE ====================

{
  questionId: 450,
  companyId: 3,
  year: 2025,
  category: "pseudocode",
  question: `What is the output?

Integer x = 10
Integer y = 5
Print x + y`,
  options: ["5", "10", "15", "50"],
  answer: "15",
  solution: "10 + 5 = 15.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro pseudocode practice",
  sourceUrl: null
},

{
  questionId: 451,
  companyId: 3,
  year: 2025,
  category: "pseudocode",
  question: `What is the output?

Integer sum = 0
For i = 1 to 5
    sum = sum + i
End For
Print sum`,
  options: ["10", "15", "20", "25"],
  answer: "15",
  solution: "1+2+3+4+5 = 15.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro pseudocode practice",
  sourceUrl: null
},

{
  questionId: 452,
  companyId: 3,
  year: 2025,
  category: "pseudocode",
  question: `What will be printed?

Integer x = 14
If (x % 2 == 0)
    Print "Even"
Else
    Print "Odd"
End If`,
  options: ["Even", "Odd", "14", "0"],
  answer: "Even",
  solution: "14 is divisible by 2, therefore it is even.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro pseudocode practice",
  sourceUrl: null
},

{
  questionId: 453,
  companyId: 3,
  year: 2025,
  category: "pseudocode",
  question: `What is the output?

Integer x = 3
For i = 1 to 3
    x = x * 2
End For
Print x`,
  options: ["12", "18", "24", "27"],
  answer: "24",
  solution: "x changes 3→6→12→24.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro pseudocode practice",
  sourceUrl: null
},

{
  questionId: 454,
  companyId: 3,
  year: 2025,
  category: "pseudocode",
  question: `What will be printed?

Integer a = 7
Integer b = 12

If (a > b)
    Print a
Else
    Print b
End If`,
  options: ["7", "12", "19", "5"],
  answer: "12",
  solution: "7 > 12 is false, so the else block prints 12.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro pseudocode practice",
  sourceUrl: null
},

{
  questionId: 455,
  companyId: 3,
  year: 2025,
  category: "pseudocode",
  question: `What is the output?

Integer count = 0
For i = 1 to 8
    If (i % 2 == 0)
        count = count + 1
    End If
End For
Print count`,
  options: ["3", "4", "5", "8"],
  answer: "4",
  solution: "The even numbers are 2, 4, 6 and 8. Therefore count = 4.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro pseudocode practice",
  sourceUrl: null
},

{
  questionId: 456,
  companyId: 3,
  year: 2025,
  category: "pseudocode",
  question: `What is the output?

Integer x = 2
While (x < 20)
    x = x * 2
End While
Print x`,
  options: ["16", "20", "24", "32"],
  answer: "32",
  solution: "x changes 2→4→8→16→32. At 32 the condition x < 20 becomes false.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "Wipro pseudocode practice",
  sourceUrl: null
},

{
  questionId: 457,
  companyId: 3,
  year: 2025,
  category: "pseudocode",
  question: `What is the output?

Integer arr[4] = {5, 10, 15, 20}
Integer sum = 0

For i = 0 to 3
    sum = sum + arr[i]
End For

Print sum`,
  options: ["40", "45", "50", "55"],
  answer: "50",
  solution: "5+10+15+20 = 50.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro pseudocode practice",
  sourceUrl: null
},

{
  questionId: 458,
  companyId: 3,
  year: 2025,
  category: "pseudocode",
  question: `What will be the output?

Integer n = 4
Integer result = 1

For i = 1 to n
    result = result * i
End For

Print result`,
  options: ["16", "20", "24", "32"],
  answer: "24",
  solution: "The code calculates 4! = 1×2×3×4 = 24.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro pseudocode practice",
  sourceUrl: null
},

{
  questionId: 459,
  companyId: 3,
  year: 2025,
  category: "pseudocode",
  question: `What is the output?

Integer a = 18
Integer b = 5
Print a % b`,
  options: ["2", "3", "4", "5"],
  answer: "3",
  solution: "18 divided by 5 leaves remainder 3.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "Wipro pseudocode practice",
  sourceUrl: null
},

// ==================== PROGRAMMING ====================

{
  questionId: 460,
  companyId: 3,
  year: 2025,
  category: "programming",
  question: "Write a program to reverse a given string.",
  options: [],
  answer: "Reverse the string by traversing it from the last character to the first.",
  solution: `Java Solution:

class Solution {
    public static String reverse(String str) {
        StringBuilder result = new StringBuilder();

        for (int i = str.length() - 1; i >= 0; i--) {
            result.append(str.charAt(i));
        }

        return result.toString();
    }
}`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "Wipro programming practice",
  sourceUrl: null
},

{
  questionId: 461,
  companyId: 3,
  year: 2025,
  category: "programming",
  question: "Write a program to check whether a number is prime.",
  options: [],
  answer: "Check divisibility from 2 through the square root of the number.",
  solution: `Java Solution:

class Solution {
    public static boolean isPrime(int n) {
        if (n < 2) return false;

        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }
}`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "Wipro programming practice",
  sourceUrl: null
},

{
  questionId: 462,
  companyId: 3,
  year: 2025,
  category: "programming",
  question: "Write a program to find the largest element in an integer array.",
  options: [],
  answer: "Traverse the array while maintaining the maximum element found so far.",
  solution: `Java Solution:

class Solution {
    public static int largest(int[] arr) {
        int max = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        return max;
    }
}`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "Wipro programming practice",
  sourceUrl: null
},

{
  questionId: 463,
  companyId: 3,
  year: 2025,
  category: "programming",
  question: "Write a program to calculate the factorial of a non-negative integer.",
  options: [],
  answer: "Multiply all integers from 1 through n.",
  solution: `Java Solution:

class Solution {
    public static long factorial(int n) {
        long result = 1;

        for (int i = 2; i <= n; i++) {
            result *= i;
        }

        return result;
    }
}`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "Wipro programming practice",
  sourceUrl: null
},

{
  questionId: 464,
  companyId: 3,
  year: 2025,
  category: "programming",
  question: "Write a program to check whether a string is a palindrome.",
  options: [],
  answer: "Compare characters from the beginning and end while moving toward the center.",
  solution: `Java Solution:

class Solution {
    public static boolean isPalindrome(String str) {
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
}`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "Wipro programming practice",
  sourceUrl: null
},

{
  questionId: 465,
  companyId: 3,
  year: 2025,
  category: "programming",
  question: "Write a program to find the sum of all elements in an integer array.",
  options: [],
  answer: "Traverse the array and add every element to a running sum.",
  solution: `Java Solution:

class Solution {
    public static int arraySum(int[] arr) {
        int sum = 0;

        for (int value : arr) {
            sum += value;
        }

        return sum;
    }
}`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "Wipro programming practice",
  sourceUrl: null
},

{
  questionId: 466,
  companyId: 3,
  year: 2025,
  category: "programming",
  question: "Write a program to find the second largest distinct element in an integer array.",
  options: [],
  answer: "Track the largest and second-largest distinct values while traversing the array.",
  solution: `Java Solution:

class Solution {
    public static int secondLargest(int[] arr) {
        Integer largest = null;
        Integer second = null;

        for (int value : arr) {
            if (largest == null || value > largest) {
                if (largest == null || value != largest) {
                    second = largest;
                    largest = value;
                }
            } else if (value != largest &&
                       (second == null || value > second)) {
                second = value;
            }
        }

        if (second == null) {
            throw new IllegalArgumentException(
                "No second largest distinct element"
            );
        }

        return second;
    }
}`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "Wipro programming practice",
  sourceUrl: null
},

{
  questionId: 467,
  companyId: 3,
  year: 2025,
  category: "programming",
  question: "Write a program to count the vowels in a string.",
  options: [],
  answer: "Traverse the string and count characters that are vowels.",
  solution: `Java Solution:

class Solution {
    public static int countVowels(String str) {
        int count = 0;
        str = str.toLowerCase();

        for (char ch : str.toCharArray()) {
            if (ch == 'a' || ch == 'e' ||
                ch == 'i' || ch == 'o' ||
                ch == 'u') {
                count++;
            }
        }

        return count;
    }
}`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "Wipro programming practice",
  sourceUrl: null
},

{
  questionId: 468,
  companyId: 3,
  year: 2025,
  category: "programming",
  question: "Write a program to generate the first n terms of the Fibonacci sequence.",
  options: [],
  answer: "Start with 0 and 1, then repeatedly add the previous two values.",
  solution: `Java Solution:

class Solution {
    public static void fibonacci(int n) {
        int a = 0;
        int b = 1;

        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");

            int next = a + b;
            a = b;
            b = next;
        }
    }
}`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "Wipro programming practice",
  sourceUrl: null
},

{
  questionId: 469,
  companyId: 3,
  year: 2025,
  category: "programming",
  question: "Write a program to find the frequency of each character in a string.",
  options: [],
  answer: "Use a map to store each character and its frequency.",
  solution: `Java Solution:

import java.util.LinkedHashMap;
import java.util.Map;

class Solution {
    public static Map<Character, Integer> frequency(String str) {
        Map<Character, Integer> map = new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        return map;
    }
}`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "Wipro programming practice",
  sourceUrl: null
},
];

async function seedWipro2025Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    // Remove only existing Wipro 2025 questions
    await CompanyQuestion.deleteMany({
      companyId: 3,
      year: 2025,
    });

    // Insert Wipro 2025 questions
    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Wipro 2025 questions seeded successfully`
    );

    process.exit(0);
  } catch (error) {
    console.error(
      "Error seeding Wipro 2025 questions:",
      error
    );

    process.exit(1);
  }
}

seedWipro2025Questions();