require("dotenv").config();

const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [
  // ==================== APTITUDE Q480-Q489 ====================

  {
    questionId: 480,
    companyId: 3,
    year: 2024,
    category: "aptitude",
    question:
      "A shopkeeper buys an article for Rs. 1500 and sells it for Rs. 1800. What is the profit percentage?",
    options: ["15%", "18%", "20%", "25%"],
    answer: "20%",
    solution:
      "Profit = 1800 - 1500 = 300. Profit percentage = (300/1500) × 100 = 20%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 481,
    companyId: 3,
    year: 2024,
    category: "aptitude",
    question:
      "The average of 8 numbers is 32. What is the sum of these numbers?",
    options: ["224", "240", "256", "264"],
    answer: "256",
    solution: "Sum = Average × Number of values = 32 × 8 = 256.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 482,
    companyId: 3,
    year: 2024,
    category: "aptitude",
    question: "A train covers 420 km in 7 hours. What is its average speed?",
    options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answer: "60 km/h",
    solution: "Average speed = Distance / Time = 420 / 7 = 60 km/h.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 483,
    companyId: 3,
    year: 2024,
    category: "aptitude",
    question:
      "The ratio of boys to girls in a class is 5:3. If there are 40 students, how many girls are there?",
    options: ["12", "15", "18", "25"],
    answer: "15",
    solution: "Total parts = 5+3 = 8. One part = 40/8 = 5. Girls = 3×5 = 15.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 484,
    companyId: 3,
    year: 2024,
    category: "aptitude",
    question:
      "Find the simple interest on Rs. 8000 at 6% per annum for 3 years.",
    options: ["Rs. 1240", "Rs. 1340", "Rs. 1440", "Rs. 1540"],
    answer: "Rs. 1440",
    solution: "SI = (8000 × 6 × 3) / 100 = Rs. 1440.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 485,
    companyId: 3,
    year: 2024,
    category: "aptitude",
    question:
      "A can finish a job in 20 days and B can finish it in 30 days. How many days will they take together?",
    options: ["10 days", "12 days", "15 days", "18 days"],
    answer: "12 days",
    solution:
      "Combined rate = 1/20 + 1/30 = 5/60 = 1/12. Therefore they take 12 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 486,
    companyId: 3,
    year: 2024,
    category: "aptitude",
    question: "What is 35% of 600?",
    options: ["180", "200", "210", "240"],
    answer: "210",
    solution: "35% of 600 = (35/100) × 600 = 210.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 487,
    companyId: 3,
    year: 2024,
    category: "aptitude",
    question:
      "A bag contains 5 red, 4 blue and 3 green balls. What is the probability of selecting a blue ball?",
    options: ["1/4", "1/3", "5/12", "2/3"],
    answer: "1/3",
    solution: "Total balls = 5+4+3 = 12. Probability of blue = 4/12 = 1/3.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 488,
    companyId: 3,
    year: 2024,
    category: "aptitude",
    question:
      "An article marked at Rs. 3000 is sold at a discount of 15%. What is its selling price?",
    options: ["Rs. 2450", "Rs. 2500", "Rs. 2550", "Rs. 2600"],
    answer: "Rs. 2550",
    solution:
      "Discount = 15% of 3000 = 450. Selling price = 3000 - 450 = Rs. 2550.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 489,
    companyId: 3,
    year: 2024,
    category: "aptitude",
    question:
      "A sum becomes Rs. 7200 after increasing by 20%. What was the original amount?",
    options: ["Rs. 5600", "Rs. 5800", "Rs. 6000", "Rs. 6200"],
    answer: "Rs. 6000",
    solution:
      "120% of original = 7200. Original = 7200 × 100 / 120 = Rs. 6000.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  // ==================== REASONING Q490-Q499 ====================

  {
    questionId: 490,
    companyId: 3,
    year: 2024,
    category: "reasoning",
    question: "Find the next number: 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "44"],
    answer: "42",
    solution:
      "The differences are 4, 6, 8 and 10. The next difference is 12. Therefore 30+12 = 42.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 491,
    companyId: 3,
    year: 2024,
    category: "reasoning",
    question:
      "If CODE is written as DPEF by moving every letter one position forward, how will JAVA be written?",
    options: ["KBWB", "KBVB", "JBWB", "LCXC"],
    answer: "KBWB",
    solution: "J→K, A→B, V→W and A→B. Therefore JAVA becomes KBWB.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 492,
    companyId: 3,
    year: 2024,
    category: "reasoning",
    question:
      "Riya is the daughter of Amit. Amit is the son of Mohan. How is Mohan related to Riya?",
    options: ["Father", "Brother", "Grandfather", "Uncle"],
    answer: "Grandfather",
    solution:
      "Amit is Riya's father and Mohan is Amit's father. Therefore Mohan is Riya's grandfather.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 493,
    companyId: 3,
    year: 2024,
    category: "reasoning",
    question:
      "A person walks 10 m south and then 8 m west. In which direction is the person from the starting point?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    answer: "South-West",
    solution:
      "The final position is south and west of the starting point, so the direction is South-West.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 494,
    companyId: 3,
    year: 2024,
    category: "reasoning",
    question: "Find the odd one out: 9, 16, 25, 36, 48, 49.",
    options: ["25", "36", "48", "49"],
    answer: "48",
    solution: "9, 16, 25, 36 and 49 are perfect squares. 48 is not.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 495,
    companyId: 3,
    year: 2024,
    category: "reasoning",
    question: "Complete the analogy: Keyboard : Typing :: Brush : ?",
    options: ["Reading", "Painting", "Walking", "Speaking"],
    answer: "Painting",
    solution:
      "A keyboard is used for typing, while a brush is used for painting.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 496,
    companyId: 3,
    year: 2024,
    category: "reasoning",
    question: "If today is Friday, what day will it be after 24 days?",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    answer: "Monday",
    solution: "24 mod 7 = 3. Three days after Friday is Monday.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 497,
    companyId: 3,
    year: 2024,
    category: "reasoning",
    question:
      "Statements: All engineers are graduates. All graduates are educated. Which conclusion definitely follows?",
    options: [
      "All educated people are engineers",
      "All engineers are educated",
      "Some graduates are not educated",
      "No engineer is educated",
    ],
    answer: "All engineers are educated",
    solution:
      "Every engineer is a graduate and every graduate is educated. Therefore every engineer is educated.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 498,
    companyId: 3,
    year: 2024,
    category: "reasoning",
    question: "Find the next letter: B, E, I, N, T, ?",
    options: ["A", "B", "C", "D"],
    answer: "A",
    solution:
      "The jumps are +3, +4, +5 and +6. Next is +7. Moving 7 positions after T wraps around to A.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 499,
    companyId: 3,
    year: 2024,
    category: "reasoning",
    question:
      "Neha is 7th from the left and 15th from the right in a row. How many people are there?",
    options: ["20", "21", "22", "23"],
    answer: "21",
    solution: "Total = 7 + 15 - 1 = 21.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  // ==================== GRAMMAR Q500-Q509 ====================

  {
    questionId: 500,
    companyId: 3,
    year: 2024,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "He go to office every day.",
      "He goes to office every day.",
      "He going to office every day.",
      "He gone to office every day.",
    ],
    answer: "He goes to office every day.",
    solution:
      "For the third-person singular subject 'he' in simple present tense, 'goes' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 501,
    companyId: 3,
    year: 2024,
    category: "grammar",
    question: "Fill in the blank: I have known him ___ 2019.",
    options: ["for", "since", "from", "by"],
    answer: "since",
    solution: "'Since' is used with a specific starting point in time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 502,
    companyId: 3,
    year: 2024,
    category: "grammar",
    question:
      "Choose the correct article: Rahul bought ___ umbrella yesterday.",
    options: ["a", "an", "the", "no article"],
    answer: "an",
    solution: "'Umbrella' begins with a vowel sound, so 'an' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 503,
    companyId: 3,
    year: 2024,
    category: "grammar",
    question: "Choose the correctly spelled word.",
    options: ["Occasion", "Ocassion", "Occassion", "Ocaasion"],
    answer: "Occasion",
    solution: "The correct spelling is 'Occasion'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 504,
    companyId: 3,
    year: 2024,
    category: "grammar",
    question:
      "Choose the passive voice of: 'The company launched a new product.'",
    options: [
      "A new product was launched by the company.",
      "A new product is launched by the company.",
      "The company was launched by a new product.",
      "A new product launched the company.",
    ],
    answer: "A new product was launched by the company.",
    solution:
      "The sentence is in simple past, so the passive form uses 'was + past participle'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 505,
    companyId: 3,
    year: 2024,
    category: "grammar",
    question:
      "Fill in the blank: Neither the teacher nor the students ___ ready.",
    options: ["is", "are", "was", "has"],
    answer: "are",
    solution:
      "With 'neither...nor', the verb agrees with the nearer subject. 'Students' is plural, so 'are' is correct.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 506,
    companyId: 3,
    year: 2024,
    category: "grammar",
    question:
      "Choose the correct indirect speech: Ravi said, 'I will call you tomorrow.'",
    options: [
      "Ravi said that he would call me the next day.",
      "Ravi said that I will call you tomorrow.",
      "Ravi says he would call tomorrow.",
      "Ravi said that he will called me.",
    ],
    answer: "Ravi said that he would call me the next day.",
    solution:
      "In reported speech, 'will' changes to 'would', 'I' changes according to the speaker, and 'tomorrow' becomes 'the next day'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 507,
    companyId: 3,
    year: 2024,
    category: "grammar",
    question:
      "Fill in the blank: She is interested ___ artificial intelligence.",
    options: ["at", "on", "in", "for"],
    answer: "in",
    solution: "The correct expression is 'interested in'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 508,
    companyId: 3,
    year: 2024,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "Each of these books are useful.",
      "Each of these books is useful.",
      "Each of this books is useful.",
      "Each these books are useful.",
    ],
    answer: "Each of these books is useful.",
    solution: "'Each' is singular, so it takes the singular verb 'is'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 509,
    companyId: 3,
    year: 2024,
    category: "grammar",
    question:
      "Fill in the blank: If she ___ harder, she would pass the examination.",
    options: ["studies", "studied", "will study", "study"],
    answer: "studied",
    solution:
      "The second conditional uses 'if + simple past' followed by 'would + base verb'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  // ==================== PSEUDOCODE Q510-Q519 ====================

  {
    questionId: 510,
    companyId: 3,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer a = 6
Integer b = 4
Print a * b`,
    options: ["10", "20", "24", "28"],
    answer: "24",
    solution: "6 × 4 = 24.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 511,
    companyId: 3,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer sum = 0
For i = 1 to 6
    sum = sum + i
End For
Print sum`,
    options: ["15", "18", "21", "24"],
    answer: "21",
    solution: "1+2+3+4+5+6 = 21.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 512,
    companyId: 3,
    year: 2024,
    category: "pseudocode",
    question: `What will be printed?

Integer x = 15
If (x % 5 == 0)
    Print "YES"
Else
    Print "NO"
End If`,
    options: ["YES", "NO", "15", "5"],
    answer: "YES",
    solution: "15 % 5 = 0, therefore the condition is true and YES is printed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 513,
    companyId: 3,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer x = 1
For i = 1 to 4
    x = x * 3
End For
Print x`,
    options: ["27", "54", "81", "243"],
    answer: "81",
    solution: "x changes 1→3→9→27→81.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 514,
    companyId: 3,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer a = 20
Integer b = 12

If (a > b)
    Print a - b
Else
    Print b - a
End If`,
    options: ["8", "12", "20", "32"],
    answer: "8",
    solution: "20 > 12, so 20-12 = 8 is printed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 515,
    companyId: 3,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer count = 0

For i = 1 to 10
    If (i % 2 != 0)
        count = count + 1
    End If
End For

Print count`,
    options: ["4", "5", "6", "10"],
    answer: "5",
    solution: "The odd numbers are 1, 3, 5, 7 and 9, so count = 5.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 516,
    companyId: 3,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer x = 5

While (x < 40)
    x = x * 2
End While

Print x`,
    options: ["20", "40", "60", "80"],
    answer: "40",
    solution: "x changes 5→10→20→40. At 40, x < 40 becomes false.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 517,
    companyId: 3,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer arr[5] = {1, 3, 5, 7, 9}
Integer sum = 0

For i = 0 to 4
    sum = sum + arr[i]
End For

Print sum`,
    options: ["20", "25", "30", "35"],
    answer: "25",
    solution: "1+3+5+7+9 = 25.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 518,
    companyId: 3,
    year: 2024,
    category: "pseudocode",
    question: `What will be the output?

Integer result = 1

For i = 1 to 5
    result = result * i
End For

Print result`,
    options: ["60", "100", "120", "125"],
    answer: "120",
    solution: "The loop calculates 5! = 1×2×3×4×5 = 120.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 519,
    companyId: 3,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer a = 23
Integer b = 6
Print a % b`,
    options: ["3", "4", "5", "6"],
    answer: "5",
    solution: "23 = 6×3 + 5, so the remainder is 5.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  // ==================== PROGRAMMING Q520-Q529 ====================

  {
    questionId: 520,
    companyId: 3,
    year: 2024,
    category: "programming",
    question:
      "Write a program to find the sum of digits of a positive integer.",
    options: [],
    answer:
      "Repeatedly extract the last digit using modulo 10 and add it to the sum.",
    solution: `Java Solution:

class Solution {
    public static int sumOfDigits(int n) {
        int sum = 0;

        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }

        return sum;
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 521,
    companyId: 3,
    year: 2024,
    category: "programming",
    question: "Write a program to reverse an integer.",
    options: [],
    answer: "Extract digits one by one and build the reversed number.",
    solution: `Java Solution:

class Solution {
    public static int reverseNumber(int n) {
        int reversed = 0;

        while (n != 0) {
            int digit = n % 10;
            reversed = reversed * 10 + digit;
            n /= 10;
        }

        return reversed;
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 522,
    companyId: 3,
    year: 2024,
    category: "programming",
    question:
      "Write a program to find the minimum element in an integer array.",
    options: [],
    answer: "Traverse the array and maintain the smallest value found so far.",
    solution: `Java Solution:

class Solution {
    public static int findMinimum(int[] arr) {
        int min = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        return min;
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 523,
    companyId: 3,
    year: 2024,
    category: "programming",
    question:
      "Write a program to count the number of even elements in an integer array.",
    options: [],
    answer:
      "Traverse the array and increment the counter whenever an element is divisible by 2.",
    solution: `Java Solution:

class Solution {
    public static int countEven(int[] arr) {
        int count = 0;

        for (int value : arr) {
            if (value % 2 == 0) {
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
    sourceUrl: null,
  },

  {
    questionId: 524,
    companyId: 3,
    year: 2024,
    category: "programming",
    question:
      "Write a program to check whether two strings are anagrams of each other.",
    options: [],
    answer: "Sort both strings and compare the sorted results.",
    solution: `Java Solution:

import java.util.Arrays;

class Solution {
    public static boolean areAnagrams(String a, String b) {
        if (a.length() != b.length()) {
            return false;
        }

        char[] first = a.toLowerCase().toCharArray();
        char[] second = b.toLowerCase().toCharArray();

        Arrays.sort(first);
        Arrays.sort(second);

        return Arrays.equals(first, second);
    }
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 525,
    companyId: 3,
    year: 2024,
    category: "programming",
    question:
      "Write a program to find the greatest common divisor (GCD) of two positive integers.",
    options: [],
    answer: "Use the Euclidean algorithm.",
    solution: `Java Solution:

class Solution {
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 526,
    companyId: 3,
    year: 2024,
    category: "programming",
    question:
      "Write a program to remove duplicate elements from a sorted integer array and return the number of unique elements.",
    options: [],
    answer:
      "Use two pointers to keep unique elements at the beginning of the array.",
    solution: `Java Solution:

class Solution {
    public static int removeDuplicates(int[] arr) {
        if (arr.length == 0) {
            return 0;
        }

        int j = 1;

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i - 1]) {
                arr[j] = arr[i];
                j++;
            }
        }

        return j;
    }
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 527,
    companyId: 3,
    year: 2024,
    category: "programming",
    question:
      "Write a program to perform linear search and return the index of a target value. Return -1 if it is not found.",
    options: [],
    answer: "Traverse the array and compare every element with the target.",
    solution: `Java Solution:

class Solution {
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }

        return -1;
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 528,
    companyId: 3,
    year: 2024,
    category: "programming",
    question:
      "Write a program to find the largest and smallest elements in an integer array.",
    options: [],
    answer:
      "Traverse the array while maintaining separate minimum and maximum values.",
    solution: `Java Solution:

class Solution {
    public static int[] findMinMax(int[] arr) {
        int min = arr[0];
        int max = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }

            if (arr[i] > max) {
                max = arr[i];
            }
        }

        return new int[]{min, max};
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 529,
    companyId: 3,
    year: 2024,
    category: "programming",
    question:
      "Write a program to find the first non-repeating character in a string. Return null if every character repeats.",
    options: [],
    answer:
      "Count the frequency of every character and then find the first character whose frequency is 1.",
    solution: `Java Solution:

import java.util.LinkedHashMap;
import java.util.Map;

class Solution {
    public static Character firstNonRepeating(String str) {
        Map<Character, Integer> frequency = new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {
            frequency.put(
                ch,
                frequency.getOrDefault(ch, 0) + 1
            );
        }

        for (char ch : str.toCharArray()) {
            if (frequency.get(ch) == 1) {
                return ch;
            }
        }

        return null;
    }
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },
];

async function seedWipro2024Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 3,
      year: 2024,
    });

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Wipro 2024 questions seeded successfully`,
    );

    process.exit(0);
  } catch (error) {
    console.error("Error seeding Wipro 2024 questions:", error);
    process.exit(1);
  }
}

seedWipro2024Questions();
