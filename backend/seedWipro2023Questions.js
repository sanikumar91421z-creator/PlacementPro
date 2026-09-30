require("dotenv").config();

const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [
  // ==================== APTITUDE Q540-Q549 ====================

  {
    questionId: 540,
    companyId: 3,
    year: 2023,
    category: "aptitude",
    question:
      "A shopkeeper buys an article for Rs. 2000 and sells it for Rs. 2300. What is the profit percentage?",
    options: ["10%", "12%", "15%", "20%"],
    answer: "15%",
    solution:
      "Profit = 2300 - 2000 = 300. Profit percentage = (300/2000) × 100 = 15%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 541,
    companyId: 3,
    year: 2023,
    category: "aptitude",
    question:
      "The average of 10 numbers is 18. What is the sum of all the numbers?",
    options: ["160", "170", "180", "190"],
    answer: "180",
    solution: "Sum = Average × Number of values = 18 × 10 = 180.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 542,
    companyId: 3,
    year: 2023,
    category: "aptitude",
    question: "A car covers 270 km in 4.5 hours. What is its average speed?",
    options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answer: "60 km/h",
    solution: "Average speed = 270 / 4.5 = 60 km/h.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 543,
    companyId: 3,
    year: 2023,
    category: "aptitude",
    question:
      "Two numbers are in the ratio 7:9. If their difference is 18, what is the larger number?",
    options: ["63", "72", "81", "90"],
    answer: "81",
    solution:
      "Difference in ratio parts = 9 - 7 = 2. One part = 18/2 = 9. Larger number = 9 × 9 = 81.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 544,
    companyId: 3,
    year: 2023,
    category: "aptitude",
    question:
      "Find the simple interest on Rs. 7500 at 8% per annum for 2 years.",
    options: ["Rs. 1000", "Rs. 1100", "Rs. 1200", "Rs. 1400"],
    answer: "Rs. 1200",
    solution: "SI = (7500 × 8 × 2) / 100 = Rs. 1200.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 545,
    companyId: 3,
    year: 2023,
    category: "aptitude",
    question:
      "A can complete a job in 8 days and B can complete it in 24 days. How many days will they take together?",
    options: ["4 days", "5 days", "6 days", "8 days"],
    answer: "6 days",
    solution:
      "Combined rate = 1/8 + 1/24 = 4/24 = 1/6. Therefore they take 6 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 546,
    companyId: 3,
    year: 2023,
    category: "aptitude",
    question: "What is 45% of 800?",
    options: ["320", "340", "360", "380"],
    answer: "360",
    solution: "45% of 800 = (45/100) × 800 = 360.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 547,
    companyId: 3,
    year: 2023,
    category: "aptitude",
    question:
      "A box contains 6 white, 5 black and 4 red balls. What is the probability of selecting a red ball?",
    options: ["4/15", "1/3", "2/5", "4/11"],
    answer: "4/15",
    solution: "Total balls = 6 + 5 + 4 = 15. Probability of red = 4/15.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 548,
    companyId: 3,
    year: 2023,
    category: "aptitude",
    question:
      "A shirt marked at Rs. 1600 is sold at a discount of 25%. What is the selling price?",
    options: ["Rs. 1100", "Rs. 1200", "Rs. 1250", "Rs. 1300"],
    answer: "Rs. 1200",
    solution:
      "Discount = 25% of 1600 = 400. Selling price = 1600 - 400 = Rs. 1200.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 549,
    companyId: 3,
    year: 2023,
    category: "aptitude",
    question:
      "If 16 workers complete a job in 12 days, how many days will 24 workers take at the same rate?",
    options: ["6 days", "8 days", "10 days", "12 days"],
    answer: "8 days",
    solution:
      "Total work = 16 × 12 = 192 worker-days. Required days = 192 / 24 = 8.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro aptitude practice",
    sourceUrl: null,
  },

  // ==================== REASONING Q550-Q559 ====================

  {
    questionId: 550,
    companyId: 3,
    year: 2023,
    category: "reasoning",
    question: "Find the next number: 5, 11, 19, 29, 41, ?",
    options: ["51", "53", "55", "57"],
    answer: "55",
    solution:
      "Differences are 6, 8, 10 and 12. The next difference is 14. Therefore 41 + 14 = 55.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 551,
    companyId: 3,
    year: 2023,
    category: "reasoning",
    question:
      "If MANGO is coded as NBOHP by moving every letter one position forward, how is APPLE coded?",
    options: ["BQQMF", "BPPMF", "CQQNG", "BQRNG"],
    answer: "BQQMF",
    solution: "A→B, P→Q, P→Q, L→M and E→F. Therefore APPLE becomes BQQMF.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 552,
    companyId: 3,
    year: 2023,
    category: "reasoning",
    question:
      "P is the father of Q. R is the sister of Q. How is P related to R?",
    options: ["Brother", "Father", "Uncle", "Grandfather"],
    answer: "Father",
    solution:
      "Q and R are siblings. Since P is Q's father, P is also R's father.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 553,
    companyId: 3,
    year: 2023,
    category: "reasoning",
    question:
      "A person walks 12 m east and then 9 m south. In which direction is the person from the starting point?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    answer: "South-East",
    solution:
      "The person is east and south of the starting point, so the direction is South-East.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 554,
    companyId: 3,
    year: 2023,
    category: "reasoning",
    question: "Find the odd one out: 25, 36, 49, 64, 80, 81.",
    options: ["49", "64", "80", "81"],
    answer: "80",
    solution: "25, 36, 49, 64 and 81 are perfect squares. 80 is not.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 555,
    companyId: 3,
    year: 2023,
    category: "reasoning",
    question: "Complete the analogy: Eye : See :: Ear : ?",
    options: ["Touch", "Hear", "Smell", "Taste"],
    answer: "Hear",
    solution: "The eye is used to see, while the ear is used to hear.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 556,
    companyId: 3,
    year: 2023,
    category: "reasoning",
    question: "If today is Wednesday, what day will it be after 19 days?",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    answer: "Monday",
    solution: "19 mod 7 = 5. Five days after Wednesday is Monday.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 557,
    companyId: 3,
    year: 2023,
    category: "reasoning",
    question:
      "Statements: All programmers are logical thinkers. Some students are programmers. Which conclusion definitely follows?",
    options: [
      "All students are programmers",
      "Some students are logical thinkers",
      "No student is a logical thinker",
      "All logical thinkers are students",
    ],
    answer: "Some students are logical thinkers",
    solution:
      "Some students are programmers, and all programmers are logical thinkers. Therefore those students are logical thinkers.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 558,
    companyId: 3,
    year: 2023,
    category: "reasoning",
    question: "Find the next letter: C, F, J, O, U, ?",
    options: ["A", "B", "C", "D"],
    answer: "B",
    solution:
      "The jumps are +3, +4, +5 and +6. The next jump is +7. Moving 7 letters after U gives B after wrapping around.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 559,
    companyId: 3,
    year: 2023,
    category: "reasoning",
    question:
      "Aman is 11th from the left and 14th from the right in a row. How many people are there?",
    options: ["23", "24", "25", "26"],
    answer: "24",
    solution: "Total = 11 + 14 - 1 = 24.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro reasoning practice",
    sourceUrl: null,
  },

  // ==================== GRAMMAR Q560-Q569 ====================

  {
    questionId: 560,
    companyId: 3,
    year: 2023,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "She do her work regularly.",
      "She does her work regularly.",
      "She doing her work regularly.",
      "She does her works regularly.",
    ],
    answer: "She does her work regularly.",
    solution:
      "With the third-person singular subject 'she', the correct simple present verb is 'does'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 561,
    companyId: 3,
    year: 2023,
    category: "grammar",
    question: "Fill in the blank: They have been waiting ___ two hours.",
    options: ["since", "for", "from", "at"],
    answer: "for",
    solution: "'For' is used with a duration of time such as two hours.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 562,
    companyId: 3,
    year: 2023,
    category: "grammar",
    question: "Choose the correct article: He wants to become ___ astronaut.",
    options: ["a", "an", "the", "no article"],
    answer: "an",
    solution: "'Astronaut' begins with a vowel sound, so 'an' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 563,
    companyId: 3,
    year: 2023,
    category: "grammar",
    question: "Choose the correctly spelled word.",
    options: ["Separate", "Seperate", "Separete", "Seperete"],
    answer: "Separate",
    solution: "The correct spelling is 'Separate'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 564,
    companyId: 3,
    year: 2023,
    category: "grammar",
    question:
      "Choose the correct passive voice of: 'The manager approved the proposal.'",
    options: [
      "The proposal was approved by the manager.",
      "The proposal is approved by the manager.",
      "The manager was approved by the proposal.",
      "The proposal approved the manager.",
    ],
    answer: "The proposal was approved by the manager.",
    solution:
      "The active sentence is in simple past, so passive voice uses 'was + past participle'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 565,
    companyId: 3,
    year: 2023,
    category: "grammar",
    question:
      "Fill in the blank: Either the teachers or the principal ___ attending the meeting.",
    options: ["are", "were", "is", "have"],
    answer: "is",
    solution:
      "With 'either...or', the verb agrees with the nearer subject. 'Principal' is singular, so 'is' is correct.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 566,
    companyId: 3,
    year: 2023,
    category: "grammar",
    question:
      "Choose the correct indirect speech: Priya said, 'I am learning Java.'",
    options: [
      "Priya said that she was learning Java.",
      "Priya said that I am learning Java.",
      "Priya says that she was learning Java.",
      "Priya said she learning Java.",
    ],
    answer: "Priya said that she was learning Java.",
    solution:
      "In reported speech, 'I' changes to 'she' and 'am learning' normally changes to 'was learning'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 567,
    companyId: 3,
    year: 2023,
    category: "grammar",
    question:
      "Fill in the blank: He is responsible ___ completing the project.",
    options: ["to", "for", "at", "on"],
    answer: "for",
    solution: "The correct expression is 'responsible for'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 568,
    companyId: 3,
    year: 2023,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "Everyone have completed the test.",
      "Everyone has completed the test.",
      "Everyone are completed the test.",
      "Everyone having completed the test.",
    ],
    answer: "Everyone has completed the test.",
    solution: "'Everyone' is grammatically singular, so 'has' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 569,
    companyId: 3,
    year: 2023,
    category: "grammar",
    question: "Fill in the blank: If I ___ you, I would accept the offer.",
    options: ["am", "was", "were", "will be"],
    answer: "were",
    solution:
      "In this hypothetical second conditional, the standard form is 'If I were you'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro verbal practice",
    sourceUrl: null,
  },

  // ==================== PSEUDOCODE Q570-Q579 ====================

  {
    questionId: 570,
    companyId: 3,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer a = 15
Integer b = 7
Print a - b`,
    options: ["7", "8", "15", "22"],
    answer: "8",
    solution: "15 - 7 = 8.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 571,
    companyId: 3,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer sum = 0

For i = 1 to 4
    sum = sum + (i * 2)
End For

Print sum`,
    options: ["16", "18", "20", "24"],
    answer: "20",
    solution: "The values added are 2, 4, 6 and 8. Their sum is 20.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 572,
    companyId: 3,
    year: 2023,
    category: "pseudocode",
    question: `What will be printed?

Integer x = 21

If (x % 3 == 0)
    Print "A"
Else
    Print "B"
End If`,
    options: ["A", "B", "21", "3"],
    answer: "A",
    solution:
      "21 is divisible by 3, so the condition is true and A is printed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 573,
    companyId: 3,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer x = 2

For i = 1 to 4
    x = x * 2
End For

Print x`,
    options: ["16", "24", "32", "64"],
    answer: "32",
    solution: "x changes as 2→4→8→16→32.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 574,
    companyId: 3,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer a = 14
Integer b = 9

If (a < b)
    Print a
Else
    Print b
End If`,
    options: ["9", "14", "23", "5"],
    answer: "9",
    solution: "14 < 9 is false, so the else block prints b = 9.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 575,
    companyId: 3,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer count = 0

For i = 1 to 12
    If (i % 3 == 0)
        count = count + 1
    End If
End For

Print count`,
    options: ["3", "4", "5", "6"],
    answer: "4",
    solution: "The multiples of 3 are 3, 6, 9 and 12. Therefore count = 4.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 576,
    companyId: 3,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer x = 3

While (x < 25)
    x = x * 2
End While

Print x`,
    options: ["24", "25", "32", "48"],
    answer: "48",
    solution:
      "x changes as 3→6→12→24→48. At 48 the condition x < 25 becomes false.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 577,
    companyId: 3,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer arr[5] = {2, 4, 6, 8, 10}
Integer sum = 0

For i = 0 to 4
    If (arr[i] > 5)
        sum = sum + arr[i]
    End If
End For

Print sum`,
    options: ["18", "20", "24", "30"],
    answer: "24",
    solution: "Elements greater than 5 are 6, 8 and 10. Their sum is 24.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 578,
    companyId: 3,
    year: 2023,
    category: "pseudocode",
    question: `What will be the output?

Integer result = 1

For i = 1 to 4
    result = result * i
End For

Print result`,
    options: ["12", "16", "24", "32"],
    answer: "24",
    solution: "The loop calculates 4! = 1×2×3×4 = 24.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 579,
    companyId: 3,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer a = 29
Integer b = 6
Print a % b`,
    options: ["3", "4", "5", "6"],
    answer: "5",
    solution: "29 = 6×4 + 5. Therefore the remainder is 5.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Wipro pseudocode practice",
    sourceUrl: null,
  },

  // ==================== PROGRAMMING Q580-Q589 ====================

  {
    questionId: 580,
    companyId: 3,
    year: 2023,
    category: "programming",
    question:
      "Write a program to check whether a positive integer is a palindrome.",
    options: [],
    answer:
      "Reverse the number and compare the reversed value with the original number.",
    solution: `Java Solution:

class Solution {
    public static boolean isPalindrome(int n) {
        int original = n;
        int reversed = 0;

        while (n > 0) {
            int digit = n % 10;
            reversed = reversed * 10 + digit;
            n /= 10;
        }

        return original == reversed;
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 581,
    companyId: 3,
    year: 2023,
    category: "programming",
    question:
      "Write a program to find the maximum element in an integer array.",
    options: [],
    answer: "Traverse the array and maintain the maximum value encountered.",
    solution: `Java Solution:

class Solution {
    public static int findMaximum(int[] arr) {
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
    sourceUrl: null,
  },

  {
    questionId: 582,
    companyId: 3,
    year: 2023,
    category: "programming",
    question: "Write a program to count the number of words in a sentence.",
    options: [],
    answer:
      "Trim the sentence and split it using one or more whitespace characters.",
    solution: `Java Solution:

class Solution {
    public static int countWords(String str) {
        str = str.trim();

        if (str.isEmpty()) {
            return 0;
        }

        return str.split("\\\\s+").length;
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 583,
    companyId: 3,
    year: 2023,
    category: "programming",
    question:
      "Write a program to check whether a positive integer is an Armstrong number.",
    options: [],
    answer:
      "Raise each digit to the power of the number of digits, add the results, and compare the sum with the original number.",
    solution: `Java Solution:

class Solution {
    public static boolean isArmstrong(int n) {
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
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 584,
    companyId: 3,
    year: 2023,
    category: "programming",
    question:
      "Write a program to find the second smallest distinct element in an integer array.",
    options: [],
    answer:
      "Track the smallest and second-smallest distinct values while traversing the array.",
    solution: `Java Solution:

class Solution {
    public static int secondSmallest(int[] arr) {
        Integer smallest = null;
        Integer second = null;

        for (int value : arr) {
            if (smallest == null || value < smallest) {
                second = smallest;
                smallest = value;
            } else if (value != smallest &&
                       (second == null || value < second)) {
                second = value;
            }
        }

        if (second == null) {
            throw new IllegalArgumentException(
                "No second smallest distinct element"
            );
        }

        return second;
    }
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 585,
    companyId: 3,
    year: 2023,
    category: "programming",
    question:
      "Write a program to count the frequency of a given integer in an array.",
    options: [],
    answer:
      "Traverse the array and increment a counter whenever the target value is found.",
    solution: `Java Solution:

class Solution {
    public static int frequency(int[] arr, int target) {
        int count = 0;

        for (int value : arr) {
            if (value == target) {
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
    questionId: 586,
    companyId: 3,
    year: 2023,
    category: "programming",
    question:
      "Write a program to calculate the least common multiple (LCM) of two positive integers.",
    options: [],
    answer:
      "Find the GCD using the Euclidean algorithm and use LCM = (a / GCD) × b.",
    solution: `Java Solution:

class Solution {
    private static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }

    public static int lcm(int a, int b) {
        return (a / gcd(a, b)) * b;
    }
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 587,
    companyId: 3,
    year: 2023,
    category: "programming",
    question:
      "Write a program to sort an integer array in ascending order using bubble sort.",
    options: [],
    answer:
      "Repeatedly compare adjacent elements and swap them when they are in the wrong order.",
    solution: `Java Solution:

class Solution {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;

            for (int j = 0; j < n - i - 1; j++) {
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
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },

  {
    questionId: 588,
    companyId: 3,
    year: 2023,
    category: "programming",
    question:
      "Write a program to check whether an integer array is sorted in non-decreasing order.",
    options: [],
    answer:
      "Compare every element with the previous element and return false if the order decreases.",
    solution: `Java Solution:

class Solution {
    public static boolean isSorted(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
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
    sourceUrl: null,
  },

  {
    questionId: 589,
    companyId: 3,
    year: 2023,
    category: "programming",
    question: "Write a program to remove all spaces from a string.",
    options: [],
    answer:
      "Traverse the string and append only non-space characters to the result.",
    solution: `Java Solution:

class Solution {
    public static String removeSpaces(String str) {
        StringBuilder result = new StringBuilder();

        for (char ch : str.toCharArray()) {
            if (ch != ' ') {
                result.append(ch);
            }
        }

        return result.toString();
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Wipro programming practice",
    sourceUrl: null,
  },
];

async function seedWipro2023Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 3,
      year: 2023,
    });

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Wipro 2023 questions seeded successfully`,
    );

    process.exit(0);
  } catch (error) {
    console.error("Error seeding Wipro 2023 questions:", error);
    process.exit(1);
  }
}

seedWipro2023Questions();
