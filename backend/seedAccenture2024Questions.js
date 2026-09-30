require("dotenv").config();

const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [
  // Accenture 2025 questions start from Q600
  // ==================== APTITUDE Q660-Q669 ====================

  {
    questionId: 660,
    companyId: 4,
    year: 2024,
    category: "aptitude",
    question:
      "A shopkeeper buys an item for Rs. 1800 and sells it for Rs. 2160. What is the profit percentage?",
    options: ["15%", "18%", "20%", "25%"],
    answer: "20%",
    solution:
      "Profit = 2160 - 1800 = 360. Profit percentage = (360 / 1800) × 100 = 20%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 661,
    companyId: 4,
    year: 2024,
    category: "aptitude",
    question: "The average of 9 numbers is 28. What is their total sum?",
    options: ["224", "242", "252", "262"],
    answer: "252",
    solution: "Sum = Average × Number of values = 28 × 9 = 252.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 662,
    companyId: 4,
    year: 2024,
    category: "aptitude",
    question: "A bus covers 450 km in 6 hours. What is its average speed?",
    options: ["65 km/h", "70 km/h", "75 km/h", "80 km/h"],
    answer: "75 km/h",
    solution: "Speed = Distance / Time = 450 / 6 = 75 km/h.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 663,
    companyId: 4,
    year: 2024,
    category: "aptitude",
    question:
      "Two numbers are in the ratio 5:8. If their sum is 91, what is the smaller number?",
    options: ["30", "35", "40", "56"],
    answer: "35",
    solution:
      "Total parts = 5 + 8 = 13. One part = 91 / 13 = 7. Smaller number = 5 × 7 = 35.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 664,
    companyId: 4,
    year: 2024,
    category: "aptitude",
    question:
      "Find the simple interest on Rs. 9000 at 5% per annum for 4 years.",
    options: ["Rs. 1600", "Rs. 1800", "Rs. 2000", "Rs. 2200"],
    answer: "Rs. 1800",
    solution: "SI = (9000 × 5 × 4) / 100 = Rs. 1800.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 665,
    companyId: 4,
    year: 2024,
    category: "aptitude",
    question:
      "A can complete a piece of work in 15 days and B can complete it in 10 days. In how many days can they complete it together?",
    options: ["5 days", "6 days", "7 days", "8 days"],
    answer: "6 days",
    solution:
      "Combined rate = 1/15 + 1/10 = 2/30 + 3/30 = 1/6. Therefore they take 6 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 666,
    companyId: 4,
    year: 2024,
    category: "aptitude",
    question: "What is 28% of 1250?",
    options: ["300", "325", "350", "375"],
    answer: "350",
    solution: "28% of 1250 = (28 / 100) × 1250 = 350.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 667,
    companyId: 4,
    year: 2024,
    category: "aptitude",
    question:
      "A box contains 7 red, 5 blue and 8 green balls. What is the probability of selecting a red ball?",
    options: ["7/20", "5/20", "8/20", "13/20"],
    answer: "7/20",
    solution:
      "Total balls = 7 + 5 + 8 = 20. Probability of selecting a red ball = 7/20.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 668,
    companyId: 4,
    year: 2024,
    category: "aptitude",
    question:
      "A laptop marked at Rs. 50000 is sold at a discount of 12%. What is the selling price?",
    options: ["Rs. 42000", "Rs. 43000", "Rs. 44000", "Rs. 45000"],
    answer: "Rs. 44000",
    solution:
      "Discount = 12% of 50000 = 6000. Selling price = 50000 - 6000 = Rs. 44000.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 669,
    companyId: 4,
    year: 2024,
    category: "aptitude",
    question:
      "15 workers can finish a project in 20 days. How many days will 25 workers take at the same rate?",
    options: ["10 days", "12 days", "15 days", "18 days"],
    answer: "12 days",
    solution:
      "Total work = 15 × 20 = 300 worker-days. Required days = 300 / 25 = 12.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  // ==================== REASONING Q670-Q679 ====================

  {
    questionId: 670,
    companyId: 4,
    year: 2024,
    category: "reasoning",
    question: "Find the next number in the series: 4, 10, 18, 28, 40, ?",
    options: ["50", "52", "54", "56"],
    answer: "54",
    solution:
      "Differences are 6, 8, 10 and 12. The next difference is 14. Therefore 40 + 14 = 54.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 671,
    companyId: 4,
    year: 2024,
    category: "reasoning",
    question:
      "If TABLE is coded as UBCMF by moving each letter one position forward, how will CHAIR be coded?",
    options: ["DIBJS", "DHBJS", "EIBKT", "DICJS"],
    answer: "DIBJS",
    solution: "C→D, H→I, A→B, I→J and R→S. Therefore CHAIR becomes DIBJS.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 672,
    companyId: 4,
    year: 2024,
    category: "reasoning",
    question:
      "Raj is the father of Neha. Neha is the sister of Amit. How is Raj related to Amit?",
    options: ["Brother", "Father", "Uncle", "Grandfather"],
    answer: "Father",
    solution:
      "Neha and Amit are siblings. Since Raj is Neha's father, Raj is also Amit's father.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 673,
    companyId: 4,
    year: 2024,
    category: "reasoning",
    question:
      "A person walks 8 m west and then 6 m north. In which direction is the person from the starting point?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    answer: "North-West",
    solution:
      "The final position is west and north of the starting point, so the direction is North-West.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 674,
    companyId: 4,
    year: 2024,
    category: "reasoning",
    question: "Find the odd one out: 27, 64, 125, 196, 216, 343.",
    options: ["125", "196", "216", "343"],
    answer: "196",
    solution: "27, 64, 125, 216 and 343 are perfect cubes. 196 is not.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 675,
    companyId: 4,
    year: 2024,
    category: "reasoning",
    question: "Complete the analogy: Book : Reading :: Music : ?",
    options: ["Writing", "Listening", "Speaking", "Drawing"],
    answer: "Listening",
    solution: "A book is read, while music is listened to.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 676,
    companyId: 4,
    year: 2024,
    category: "reasoning",
    question: "If today is Thursday, what day will it be after 25 days?",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    answer: "Monday",
    solution: "25 mod 7 = 4. Four days after Thursday is Monday.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 677,
    companyId: 4,
    year: 2024,
    category: "reasoning",
    question:
      "Statements: All laptops are machines. All machines require energy. Which conclusion definitely follows?",
    options: [
      "All laptops require energy",
      "All machines are laptops",
      "All energy sources are machines",
      "No laptop requires energy",
    ],
    answer: "All laptops require energy",
    solution:
      "Every laptop is a machine and every machine requires energy. Therefore all laptops require energy.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 678,
    companyId: 4,
    year: 2024,
    category: "reasoning",
    question: "Find the next letter in the series: D, G, K, P, V, ?",
    options: ["A", "B", "C", "D"],
    answer: "C",
    solution:
      "The jumps are +3, +4, +5 and +6. The next jump is +7. Seven positions after V gives C after wrapping around.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 679,
    companyId: 4,
    year: 2024,
    category: "reasoning",
    question:
      "Priya is 14th from the left and 17th from the right in a row. How many people are there?",
    options: ["29", "30", "31", "32"],
    answer: "30",
    solution: "Total = 14 + 17 - 1 = 30.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  // ==================== GRAMMAR Q680-Q689 ====================

  {
    questionId: 680,
    companyId: 4,
    year: 2024,
    category: "grammar",
    question: "Choose the grammatically correct sentence.",
    options: [
      "He don't understand the problem.",
      "He doesn't understand the problem.",
      "He doesn't understands the problem.",
      "He not understand the problem.",
    ],
    answer: "He doesn't understand the problem.",
    solution:
      "With 'doesn't', the main verb remains in its base form: 'understand'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 681,
    companyId: 4,
    year: 2024,
    category: "grammar",
    question: "Fill in the blank: She has lived in Mumbai ___ five years.",
    options: ["since", "for", "from", "at"],
    answer: "for",
    solution: "'For' is used with a duration of time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 682,
    companyId: 4,
    year: 2024,
    category: "grammar",
    question: "Choose the correct article: It was ___ unusual experience.",
    options: ["a", "an", "the", "no article"],
    answer: "an",
    solution: "'Unusual' begins with a vowel sound, so 'an' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 683,
    companyId: 4,
    year: 2024,
    category: "grammar",
    question: "Choose the correctly spelled word.",
    options: ["Achievement", "Acheivement", "Achievment", "Acheivment"],
    answer: "Achievement",
    solution: "The correct spelling is 'Achievement'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 684,
    companyId: 4,
    year: 2024,
    category: "grammar",
    question: "Choose the passive voice of: 'The developer fixed the bug.'",
    options: [
      "The bug was fixed by the developer.",
      "The bug is fixed by the developer.",
      "The developer was fixed by the bug.",
      "The bug has fix by the developer.",
    ],
    answer: "The bug was fixed by the developer.",
    solution:
      "The active sentence is in simple past, so the passive structure is 'was + past participle'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 685,
    companyId: 4,
    year: 2024,
    category: "grammar",
    question:
      "Fill in the blank: Each of the employees ___ an identification card.",
    options: ["have", "has", "are having", "were"],
    answer: "has",
    solution: "'Each' is singular, so the singular verb 'has' is required.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 686,
    companyId: 4,
    year: 2024,
    category: "grammar",
    question:
      "Choose the correct indirect speech: Meera said, 'I have finished my work.'",
    options: [
      "Meera said that she had finished her work.",
      "Meera said that I have finished my work.",
      "Meera says that she had finish her work.",
      "Meera said she has finished my work.",
    ],
    answer: "Meera said that she had finished her work.",
    solution:
      "With a past reporting verb, present perfect normally changes to past perfect and the pronouns change appropriately.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 687,
    companyId: 4,
    year: 2024,
    category: "grammar",
    question: "Fill in the blank: He is good ___ mathematics.",
    options: ["in", "at", "on", "with"],
    answer: "at",
    solution: "The standard expression is 'good at'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 688,
    companyId: 4,
    year: 2024,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "The information are useful.",
      "The information is useful.",
      "The informations are useful.",
      "The information were useful.",
    ],
    answer: "The information is useful.",
    solution:
      "'Information' is an uncountable noun and normally takes a singular verb.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 689,
    companyId: 4,
    year: 2024,
    category: "grammar",
    question:
      "Fill in the blank: If they ___ earlier, they would have caught the train.",
    options: ["leave", "left", "had left", "have left"],
    answer: "had left",
    solution:
      "The third conditional uses 'if + past perfect' followed by 'would have + past participle'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  // ==================== PSEUDOCODE Q690-Q699 ====================

  {
    questionId: 690,
    companyId: 4,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer a = 12
Integer b = 7
Print a + b`,
    options: ["17", "18", "19", "20"],
    answer: "19",
    solution: "12 + 7 = 19.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 691,
    companyId: 4,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer sum = 0

For i = 1 to 5
    sum = sum + (i * 3)
End For

Print sum`,
    options: ["30", "35", "40", "45"],
    answer: "45",
    solution: "The values added are 3, 6, 9, 12 and 15. Their sum is 45.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 692,
    companyId: 4,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer x = 25

If (x % 5 == 0)
    Print "YES"
Else
    Print "NO"
End If`,
    options: ["YES", "NO", "25", "5"],
    answer: "YES",
    solution: "25 is exactly divisible by 5, so YES is printed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 693,
    companyId: 4,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer x = 3

For i = 1 to 3
    x = x * 3
End For

Print x`,
    options: ["27", "54", "81", "243"],
    answer: "81",
    solution: "x changes 3 → 9 → 27 → 81.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 694,
    companyId: 4,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer a = 18
Integer b = 23

If (a > b)
    Print a
Else
    Print b
End If`,
    options: ["5", "18", "23", "41"],
    answer: "23",
    solution: "18 > 23 is false, so the else block prints 23.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 695,
    companyId: 4,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer count = 0

For i = 1 to 15
    If (i % 3 == 0)
        count = count + 1
    End If
End For

Print count`,
    options: ["3", "4", "5", "6"],
    answer: "5",
    solution: "The multiples of 3 are 3, 6, 9, 12 and 15. Therefore count = 5.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 696,
    companyId: 4,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer x = 5

While (x < 50)
    x = x * 2
End While

Print x`,
    options: ["40", "50", "60", "80"],
    answer: "80",
    solution:
      "x changes 5 → 10 → 20 → 40 → 80. At 80 the condition becomes false.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 697,
    companyId: 4,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer arr[5] = {4, 8, 12, 16, 20}
Integer sum = 0

For i = 0 to 4
    sum = sum + arr[i]
End For

Print sum`,
    options: ["50", "55", "60", "65"],
    answer: "60",
    solution: "4 + 8 + 12 + 16 + 20 = 60.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 698,
    companyId: 4,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer result = 1

For i = 1 to 5
    result = result * i
End For

Print result`,
    options: ["60", "100", "120", "125"],
    answer: "120",
    solution: "The loop calculates 5! = 1 × 2 × 3 × 4 × 5 = 120.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 699,
    companyId: 4,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer a = 47
Integer b = 9
Print a % b`,
    options: ["1", "2", "3", "4"],
    answer: "2",
    solution: "47 = 9 × 5 + 2. Therefore the remainder is 2.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  // ==================== PROGRAMMING Q700-Q709 ====================

  {
    questionId: 700,
    companyId: 4,
    year: 2024,
    category: "programming",
    question:
      "Write a program to find the sum of digits of a positive integer.",
    options: [],
    answer:
      "Repeatedly take the last digit using modulo 10 and add it to a running sum.",
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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 701,
    companyId: 4,
    year: 2024,
    category: "programming",
    question: "Write a program to reverse an integer.",
    options: [],
    answer:
      "Extract the last digit repeatedly and append it to the reversed number.",
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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 702,
    companyId: 4,
    year: 2024,
    category: "programming",
    question:
      "Write a program to find the smallest element in an integer array.",
    options: [],
    answer: "Traverse the array while maintaining the smallest value found.",
    solution: `Java Solution:

class Solution {
    public static int findSmallest(int[] arr) {
        int smallest = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < smallest) {
                smallest = arr[i];
            }
        }

        return smallest;
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 703,
    companyId: 4,
    year: 2024,
    category: "programming",
    question:
      "Write a program to count the number of even and odd elements in an integer array.",
    options: [],
    answer:
      "Traverse the array and use modulo 2 to classify each element as even or odd.",
    solution: `Java Solution:

class Solution {
    public static int[] countEvenOdd(int[] arr) {
        int even = 0;
        int odd = 0;

        for (int value : arr) {
            if (value % 2 == 0) {
                even++;
            } else {
                odd++;
            }
        }

        return new int[]{even, odd};
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 704,
    companyId: 4,
    year: 2024,
    category: "programming",
    question:
      "Write a program to check whether two strings are anagrams of each other.",
    options: [],
    answer:
      "Convert both strings to character arrays, sort them and compare the sorted arrays.",
    solution: `Java Solution:

import java.util.Arrays;

class Solution {
    public static boolean areAnagrams(String first, String second) {
        if (first.length() != second.length()) {
            return false;
        }

        char[] a = first.toLowerCase().toCharArray();
        char[] b = second.toLowerCase().toCharArray();

        Arrays.sort(a);
        Arrays.sort(b);

        return Arrays.equals(a, b);
    }
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 705,
    companyId: 4,
    year: 2024,
    category: "programming",
    question: "Write a program to find the GCD of two positive integers.",
    options: [],
    answer: "Use the Euclidean algorithm until the second number becomes zero.",
    solution: `Java Solution:

class Solution {
    public static int gcd(int a, int b) {
        while (b != 0) {
            int remainder = a % b;
            a = b;
            b = remainder;
        }

        return a;
    }
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 706,
    companyId: 4,
    year: 2024,
    category: "programming",
    question:
      "Write a program to remove duplicate elements from a sorted integer array and return the number of unique elements.",
    options: [],
    answer:
      "Use two pointers and overwrite duplicate positions with the next unique value.",
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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 707,
    companyId: 4,
    year: 2024,
    category: "programming",
    question:
      "Write a program to search for a target value in a sorted integer array using binary search.",
    options: [],
    answer:
      "Repeatedly compare the target with the middle element and reduce the search interval by half.",
    solution: `Java Solution:

class Solution {
    public static int binarySearch(int[] arr, int target) {
        int start = 0;
        int end = arr.length - 1;

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (arr[mid] == target) {
                return mid;
            }

            if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return -1;
    }
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 708,
    companyId: 4,
    year: 2024,
    category: "programming",
    question:
      "Write a program to find the first non-repeating character in a string. Return null if no such character exists.",
    options: [],
    answer:
      "Count the frequency of every character and then scan the string again to find the first character with frequency 1.",
    solution: `Java Solution:

import java.util.HashMap;
import java.util.Map;

class Solution {
    public static Character firstNonRepeating(String str) {
        Map<Character, Integer> frequency = new HashMap<>();

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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 709,
    companyId: 4,
    year: 2024,
    category: "programming",
    question:
      "Write a program to find the missing number from an array containing n distinct numbers from the range 0 to n.",
    options: [],
    answer:
      "Calculate the expected sum from 0 to n and subtract the sum of the array elements.",
    solution: `Java Solution:

class Solution {
    public static int missingNumber(int[] arr) {
        int n = arr.length;
        int expected = n * (n + 1) / 2;
        int actual = 0;

        for (int value : arr) {
            actual += value;
        }

        return expected - actual;
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
      year: 2024,
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
