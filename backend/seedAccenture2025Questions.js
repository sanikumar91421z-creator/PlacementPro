require("dotenv").config();

const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [
  // Accenture 2025 questions start from Q600
  // ==================== APTITUDE Q600-Q609 ====================

  {
    questionId: 600,
    companyId: 4,
    year: 2025,
    category: "aptitude",
    question:
      "A product is purchased for Rs. 2500 and sold for Rs. 3000. What is the profit percentage?",
    options: ["15%", "18%", "20%", "25%"],
    answer: "20%",
    solution:
      "Profit = 3000 - 2500 = 500. Profit percentage = (500 / 2500) × 100 = 20%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 601,
    companyId: 4,
    year: 2025,
    category: "aptitude",
    question:
      "The average of 12 numbers is 24. What is the sum of these numbers?",
    options: ["264", "276", "288", "300"],
    answer: "288",
    solution: "Sum = Average × Number of values = 24 × 12 = 288.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 602,
    companyId: 4,
    year: 2025,
    category: "aptitude",
    question: "A train travels 360 km in 4 hours. What is its average speed?",
    options: ["80 km/h", "85 km/h", "90 km/h", "95 km/h"],
    answer: "90 km/h",
    solution: "Speed = Distance / Time = 360 / 4 = 90 km/h.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 603,
    companyId: 4,
    year: 2025,
    category: "aptitude",
    question:
      "The ratio of two numbers is 4:7 and their sum is 99. What is the larger number?",
    options: ["36", "54", "63", "72"],
    answer: "63",
    solution:
      "Total parts = 4 + 7 = 11. One part = 99 / 11 = 9. Larger number = 7 × 9 = 63.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 604,
    companyId: 4,
    year: 2025,
    category: "aptitude",
    question:
      "Find the simple interest on Rs. 10000 at 7% per annum for 3 years.",
    options: ["Rs. 1800", "Rs. 2000", "Rs. 2100", "Rs. 2400"],
    answer: "Rs. 2100",
    solution: "SI = (10000 × 7 × 3) / 100 = Rs. 2100.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 605,
    companyId: 4,
    year: 2025,
    category: "aptitude",
    question:
      "A can complete a task in 12 days and B can complete it in 18 days. How many days will they take together?",
    options: ["6 days", "7.2 days", "8 days", "9 days"],
    answer: "7.2 days",
    solution: "Combined rate = 1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 606,
    companyId: 4,
    year: 2025,
    category: "aptitude",
    question: "What is 32% of 750?",
    options: ["220", "230", "240", "250"],
    answer: "240",
    solution: "32% of 750 = (32 / 100) × 750 = 240.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 607,
    companyId: 4,
    year: 2025,
    category: "aptitude",
    question:
      "A bag contains 8 red, 6 blue and 6 green balls. What is the probability of selecting a blue ball?",
    options: ["1/5", "3/10", "2/5", "1/2"],
    answer: "3/10",
    solution: "Total balls = 8 + 6 + 6 = 20. Probability = 6/20 = 3/10.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 608,
    companyId: 4,
    year: 2025,
    category: "aptitude",
    question:
      "An article marked at Rs. 4000 is sold at a discount of 15%. What is the selling price?",
    options: ["Rs. 3200", "Rs. 3300", "Rs. 3400", "Rs. 3500"],
    answer: "Rs. 3400",
    solution:
      "Discount = 15% of 4000 = 600. Selling price = 4000 - 600 = Rs. 3400.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 609,
    companyId: 4,
    year: 2025,
    category: "aptitude",
    question:
      "20 workers can complete a job in 18 days. How many days will 30 workers take at the same rate?",
    options: ["10 days", "12 days", "14 days", "15 days"],
    answer: "12 days",
    solution:
      "Total work = 20 × 18 = 360 worker-days. Required time = 360 / 30 = 12 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  // ==================== REASONING Q610-Q619 ====================

  {
    questionId: 610,
    companyId: 4,
    year: 2025,
    category: "reasoning",
    question: "Find the next number in the series: 3, 8, 15, 24, 35, ?",
    options: ["46", "47", "48", "49"],
    answer: "48",
    solution:
      "Differences are 5, 7, 9 and 11. The next difference is 13. Therefore 35 + 13 = 48.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 611,
    companyId: 4,
    year: 2025,
    category: "reasoning",
    question:
      "If CLOUD is coded as DMPVE by moving every letter one position forward, how is TRAIN coded?",
    options: ["USBJO", "USCJO", "UTBJO", "USBKO"],
    answer: "USBJO",
    solution: "T→U, R→S, A→B, I→J and N→O. Therefore TRAIN becomes USBJO.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 612,
    companyId: 4,
    year: 2025,
    category: "reasoning",
    question:
      "Anita is the mother of Rahul. Rahul is the brother of Sneha. How is Anita related to Sneha?",
    options: ["Sister", "Mother", "Aunt", "Grandmother"],
    answer: "Mother",
    solution:
      "Rahul and Sneha are siblings. Anita is Rahul's mother, so she is also Sneha's mother.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 613,
    companyId: 4,
    year: 2025,
    category: "reasoning",
    question:
      "A person walks 10 m north, then 6 m east and then 4 m south. In which direction is the person from the starting point?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    answer: "North-East",
    solution:
      "Net movement is 6 m north and 6 m east. Therefore the person is North-East of the starting point.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 614,
    companyId: 4,
    year: 2025,
    category: "reasoning",
    question: "Find the odd one out: 16, 25, 36, 49, 63, 64.",
    options: ["36", "49", "63", "64"],
    answer: "63",
    solution: "16, 25, 36, 49 and 64 are perfect squares. 63 is not.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 615,
    companyId: 4,
    year: 2025,
    category: "reasoning",
    question: "Complete the analogy: Computer : Processor :: Human : ?",
    options: ["Heart", "Brain", "Eye", "Hand"],
    answer: "Brain",
    solution:
      "The processor performs central processing in a computer, while the brain performs a similar central control role in a human.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 616,
    companyId: 4,
    year: 2025,
    category: "reasoning",
    question: "If today is Monday, what day will it be after 45 days?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    answer: "Thursday",
    solution: "45 mod 7 = 3. Three days after Monday is Thursday.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 617,
    companyId: 4,
    year: 2025,
    category: "reasoning",
    question:
      "Statements: All developers are programmers. All programmers understand logic. Which conclusion definitely follows?",
    options: [
      "All developers understand logic",
      "All programmers are developers",
      "All logical people are developers",
      "No developer understands logic",
    ],
    answer: "All developers understand logic",
    solution:
      "Every developer is a programmer and every programmer understands logic. Therefore every developer understands logic.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 618,
    companyId: 4,
    year: 2025,
    category: "reasoning",
    question: "Find the next letter in the series: A, D, H, M, S, ?",
    options: ["X", "Y", "Z", "A"],
    answer: "Z",
    solution:
      "The jumps are +3, +4, +5 and +6. The next jump is +7. S + 7 = Z.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 619,
    companyId: 4,
    year: 2025,
    category: "reasoning",
    question:
      "Karan is 18th from the left and 13th from the right in a row. How many people are there?",
    options: ["29", "30", "31", "32"],
    answer: "30",
    solution: "Total = 18 + 13 - 1 = 30.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  // ==================== GRAMMAR / VERBAL Q620-Q629 ====================

  {
    questionId: 620,
    companyId: 4,
    year: 2025,
    category: "grammar",
    question: "Choose the grammatically correct sentence.",
    options: [
      "She have completed the assignment.",
      "She has completed the assignment.",
      "She having completed the assignment.",
      "She has complete the assignment.",
    ],
    answer: "She has completed the assignment.",
    solution:
      "With the singular subject 'she', present perfect uses 'has + past participle'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 621,
    companyId: 4,
    year: 2025,
    category: "grammar",
    question: "Fill in the blank: He has been working here ___ 2022.",
    options: ["for", "since", "from", "by"],
    answer: "since",
    solution: "'Since' is used with a specific starting point in time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 622,
    companyId: 4,
    year: 2025,
    category: "grammar",
    question: "Choose the correct article: She is ___ excellent programmer.",
    options: ["a", "an", "the", "no article"],
    answer: "an",
    solution: "'Excellent' begins with a vowel sound, so 'an' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 623,
    companyId: 4,
    year: 2025,
    category: "grammar",
    question: "Choose the correctly spelled word.",
    options: ["Necessary", "Necesary", "Neccessary", "Necessery"],
    answer: "Necessary",
    solution: "The correct spelling is 'Necessary'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 624,
    companyId: 4,
    year: 2025,
    category: "grammar",
    question: "Choose the passive voice of: 'The team completed the project.'",
    options: [
      "The project was completed by the team.",
      "The project is completed by the team.",
      "The team was completed by the project.",
      "The project has completing by the team.",
    ],
    answer: "The project was completed by the team.",
    solution:
      "The active sentence is in simple past, so passive voice uses 'was + past participle'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 625,
    companyId: 4,
    year: 2025,
    category: "grammar",
    question:
      "Fill in the blank: Neither the manager nor the employees ___ available.",
    options: ["is", "are", "was", "has"],
    answer: "are",
    solution:
      "With 'neither...nor', the verb agrees with the nearer subject. 'Employees' is plural, so 'are' is correct.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 626,
    companyId: 4,
    year: 2025,
    category: "grammar",
    question: "Choose the correct indirect speech: Rohan said, 'I am busy.'",
    options: [
      "Rohan said that he was busy.",
      "Rohan said that I am busy.",
      "Rohan says that he was busy.",
      "Rohan said he is busy yesterday.",
    ],
    answer: "Rohan said that he was busy.",
    solution:
      "With a past reporting verb, 'I' changes to 'he' and 'am' normally changes to 'was'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 627,
    companyId: 4,
    year: 2025,
    category: "grammar",
    question: "Fill in the blank: She is capable ___ solving the problem.",
    options: ["at", "of", "for", "with"],
    answer: "of",
    solution: "The correct expression is 'capable of'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 628,
    companyId: 4,
    year: 2025,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "One of the students have submitted the project.",
      "One of the students has submitted the project.",
      "One of the student have submitted the project.",
      "One of students has submit the project.",
    ],
    answer: "One of the students has submitted the project.",
    solution: "The subject is 'one', which is singular, so 'has' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 629,
    companyId: 4,
    year: 2025,
    category: "grammar",
    question:
      "Fill in the blank: If he ___ regularly, he would improve his coding skills.",
    options: ["practice", "practices", "practiced", "will practice"],
    answer: "practiced",
    solution:
      "The second conditional uses 'if + simple past' followed by 'would + base verb'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  // ==================== PSEUDOCODE / TECHNICAL Q630-Q639 ====================

  {
    questionId: 630,
    companyId: 4,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

Integer a = 8
Integer b = 6
Print a + b`,
    options: ["12", "14", "16", "48"],
    answer: "14",
    solution: "8 + 6 = 14.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 631,
    companyId: 4,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

Integer sum = 0

For i = 1 to 7
    sum = sum + i
End For

Print sum`,
    options: ["21", "28", "35", "42"],
    answer: "28",
    solution: "1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 632,
    companyId: 4,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

Integer x = 18

If (x % 2 == 0)
    Print "Even"
Else
    Print "Odd"
End If`,
    options: ["Even", "Odd", "18", "0"],
    answer: "Even",
    solution: "18 % 2 = 0, so 18 is even.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 633,
    companyId: 4,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

Integer x = 2

For i = 1 to 5
    x = x * 2
End For

Print x`,
    options: ["16", "32", "64", "128"],
    answer: "64",
    solution: "x changes 2→4→8→16→32→64.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 634,
    companyId: 4,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

Integer a = 15
Integer b = 25

If (a > b)
    Print a
Else
    Print b
End If`,
    options: ["10", "15", "25", "40"],
    answer: "25",
    solution: "15 > 25 is false, so the else block prints 25.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 635,
    companyId: 4,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

Integer count = 0

For i = 1 to 12
    If (i % 2 == 0)
        count = count + 1
    End If
End For

Print count`,
    options: ["5", "6", "7", "12"],
    answer: "6",
    solution: "The even numbers are 2, 4, 6, 8, 10 and 12, so count = 6.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 636,
    companyId: 4,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

Integer x = 4

While (x < 30)
    x = x * 2
End While

Print x`,
    options: ["16", "30", "32", "64"],
    answer: "32",
    solution: "x changes 4→8→16→32. At 32 the condition x < 30 becomes false.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 637,
    companyId: 4,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

Integer arr[5] = {3, 6, 9, 12, 15}
Integer sum = 0

For i = 0 to 4
    sum = sum + arr[i]
End For

Print sum`,
    options: ["40", "45", "50", "55"],
    answer: "45",
    solution: "3 + 6 + 9 + 12 + 15 = 45.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 638,
    companyId: 4,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

Integer result = 1

For i = 1 to 6
    result = result * i
End For

Print result`,
    options: ["120", "360", "720", "840"],
    answer: "720",
    solution: "The loop calculates 6! = 1 × 2 × 3 × 4 × 5 × 6 = 720.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 639,
    companyId: 4,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

Integer a = 37
Integer b = 8
Print a % b`,
    options: ["3", "4", "5", "6"],
    answer: "5",
    solution: "37 = 8 × 4 + 5, so the remainder is 5.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  // ==================== PROGRAMMING Q640-Q649 ====================

  {
    questionId: 640,
    companyId: 4,
    year: 2025,
    category: "programming",
    question: "Write a program to reverse a string.",
    options: [],
    answer:
      "Traverse the string from the end to the beginning and append each character to a StringBuilder.",
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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 641,
    companyId: 4,
    year: 2025,
    category: "programming",
    question: "Write a program to check whether a positive integer is prime.",
    options: [],
    answer: "Check divisibility from 2 up to the square root of the number.",
    solution: `Java Solution:

class Solution {
    public static boolean isPrime(int n) {
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
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 642,
    companyId: 4,
    year: 2025,
    category: "programming",
    question:
      "Write a program to find the largest element in an integer array.",
    options: [],
    answer:
      "Traverse the array while maintaining the largest value encountered.",
    solution: `Java Solution:

class Solution {
    public static int findLargest(int[] arr) {
        int largest = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }

        return largest;
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 643,
    companyId: 4,
    year: 2025,
    category: "programming",
    question:
      "Write a program to calculate the factorial of a non-negative integer.",
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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 644,
    companyId: 4,
    year: 2025,
    category: "programming",
    question: "Write a program to check whether a string is a palindrome.",
    options: [],
    answer:
      "Compare characters from the beginning and end of the string while moving toward the center.",
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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 645,
    companyId: 4,
    year: 2025,
    category: "programming",
    question:
      "Write a program to find the sum of all elements in an integer array.",
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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 646,
    companyId: 4,
    year: 2025,
    category: "programming",
    question:
      "Write a program to find the second largest distinct element in an integer array.",
    options: [],
    answer:
      "Track the largest and second-largest distinct values while traversing the array.",
    solution: `Java Solution:

class Solution {
    public static int secondLargest(int[] arr) {
        Integer largest = null;
        Integer second = null;

        for (int value : arr) {
            if (largest == null || value > largest) {
                second = largest;
                largest = value;
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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 647,
    companyId: 4,
    year: 2025,
    category: "programming",
    question: "Write a program to count the number of vowels in a string.",
    options: [],
    answer:
      "Traverse the string and increment a counter whenever the current character is a vowel.",
    solution: `Java Solution:

class Solution {
    public static int countVowels(String str) {
        int count = 0;
        str = str.toLowerCase();

        for (char ch : str.toCharArray()) {
            if (ch == 'a' || ch == 'e' || ch == 'i' ||
                ch == 'o' || ch == 'u') {
                count++;
            }
        }

        return count;
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 648,
    companyId: 4,
    year: 2025,
    category: "programming",
    question:
      "Write a program to generate the first n terms of the Fibonacci sequence.",
    options: [],
    answer:
      "Start with 0 and 1, then repeatedly calculate the next term as the sum of the previous two terms.",
    solution: `Java Solution:

class Solution {
    public static void fibonacci(int n) {
        int a = 0;
        int b = 1;

        for (int i = 0; i < n; i++) {
            System.out.print(a);

            if (i < n - 1) {
                System.out.print(" ");
            }

            int next = a + b;
            a = b;
            b = next;
        }
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 649,
    companyId: 4,
    year: 2025,
    category: "programming",
    question:
      "Write a program to count the frequency of each character in a string while preserving the order of first appearance.",
    options: [],
    answer: "Use a LinkedHashMap to store each character and its frequency.",
    solution: `Java Solution:

import java.util.LinkedHashMap;
import java.util.Map;

class Solution {
    public static Map<Character, Integer> frequency(String str) {
        Map<Character, Integer> map = new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {
            map.put(
                ch,
                map.getOrDefault(ch, 0) + 1
            );
        }

        return map;
    }
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },
];

async function seedAccenture2025Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 4,
      year: 2025,
    });

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Accenture 2025 questions seeded successfully`,
    );

    process.exit(0);
  } catch (error) {
    console.error("Error seeding Accenture 2025 questions:", error);
    process.exit(1);
  }
}

seedAccenture2025Questions();
