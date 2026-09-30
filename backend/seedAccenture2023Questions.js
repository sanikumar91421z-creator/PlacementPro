require("dotenv").config();

const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [
  // ==================== APTITUDE Q720-Q729 ====================

  {
    questionId: 720,
    companyId: 4,
    year: 2023,
    category: "aptitude",
    question:
      "A product is bought for Rs. 2400 and sold for Rs. 2880. What is the profit percentage?",
    options: ["15%", "18%", "20%", "25%"],
    answer: "20%",
    solution:
      "Profit = 2880 - 2400 = 480. Profit percentage = (480 / 2400) × 100 = 20%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 721,
    companyId: 4,
    year: 2023,
    category: "aptitude",
    question: "The average of 8 numbers is 35. What is the sum of the numbers?",
    options: ["260", "270", "280", "290"],
    answer: "280",
    solution: "Sum = Average × Number of values = 35 × 8 = 280.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 722,
    companyId: 4,
    year: 2023,
    category: "aptitude",
    question: "A car travels 420 km in 6 hours. What is its average speed?",
    options: ["60 km/h", "65 km/h", "70 km/h", "75 km/h"],
    answer: "70 km/h",
    solution: "Speed = Distance / Time = 420 / 6 = 70 km/h.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 723,
    companyId: 4,
    year: 2023,
    category: "aptitude",
    question:
      "Two numbers are in the ratio 3:5. If their sum is 96, what is the larger number?",
    options: ["36", "48", "60", "72"],
    answer: "60",
    solution:
      "Total parts = 3 + 5 = 8. One part = 96 / 8 = 12. Larger number = 5 × 12 = 60.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 724,
    companyId: 4,
    year: 2023,
    category: "aptitude",
    question:
      "Find the simple interest on Rs. 8000 at 6% per annum for 3 years.",
    options: ["Rs. 1240", "Rs. 1340", "Rs. 1440", "Rs. 1540"],
    answer: "Rs. 1440",
    solution: "SI = (8000 × 6 × 3) / 100 = Rs. 1440.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 725,
    companyId: 4,
    year: 2023,
    category: "aptitude",
    question:
      "A can complete a job in 20 days and B can complete the same job in 30 days. In how many days can they complete it together?",
    options: ["10 days", "12 days", "15 days", "18 days"],
    answer: "12 days",
    solution:
      "Combined rate = 1/20 + 1/30 = 5/60 = 1/12. Therefore they complete the work in 12 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 726,
    companyId: 4,
    year: 2023,
    category: "aptitude",
    question: "What is 35% of 600?",
    options: ["180", "200", "210", "240"],
    answer: "210",
    solution: "35% of 600 = (35 / 100) × 600 = 210.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 727,
    companyId: 4,
    year: 2023,
    category: "aptitude",
    question:
      "A bag contains 5 red, 7 blue and 8 green balls. What is the probability of selecting a blue ball?",
    options: ["1/4", "7/20", "2/5", "1/2"],
    answer: "7/20",
    solution:
      "Total balls = 5 + 7 + 8 = 20. Probability of selecting a blue ball = 7/20.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 728,
    companyId: 4,
    year: 2023,
    category: "aptitude",
    question:
      "An article marked at Rs. 2500 is sold at a discount of 20%. What is the selling price?",
    options: ["Rs. 1800", "Rs. 1900", "Rs. 2000", "Rs. 2100"],
    answer: "Rs. 2000",
    solution:
      "Discount = 20% of 2500 = 500. Selling price = 2500 - 500 = Rs. 2000.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 729,
    companyId: 4,
    year: 2023,
    category: "aptitude",
    question:
      "18 workers can complete a task in 15 days. How many days will 30 workers take at the same rate?",
    options: ["7 days", "8 days", "9 days", "10 days"],
    answer: "9 days",
    solution:
      "Total work = 18 × 15 = 270 worker-days. Required days = 270 / 30 = 9.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture aptitude practice",
    sourceUrl: null,
  },

  // ==================== REASONING Q730-Q739 ====================

  {
    questionId: 730,
    companyId: 4,
    year: 2023,
    category: "reasoning",
    question: "Find the next number in the series: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "46"],
    answer: "42",
    solution:
      "Differences are 4, 6, 8 and 10. The next difference is 12. Therefore 30 + 12 = 42.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 731,
    companyId: 4,
    year: 2023,
    category: "reasoning",
    question:
      "If MANGO is coded as NBOHP by moving every letter one position forward, how is GRAPE coded?",
    options: ["HSBQF", "HSBPF", "GRBQF", "ITCRG"],
    answer: "HSBQF",
    solution: "G→H, R→S, A→B, P→Q and E→F. Therefore GRAPE becomes HSBQF.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 732,
    companyId: 4,
    year: 2023,
    category: "reasoning",
    question:
      "Ravi is the brother of Pooja. Pooja is the mother of Karan. How is Ravi related to Karan?",
    options: ["Father", "Brother", "Maternal Uncle", "Grandfather"],
    answer: "Maternal Uncle",
    solution:
      "Ravi is the brother of Karan's mother, so Ravi is Karan's maternal uncle.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 733,
    companyId: 4,
    year: 2023,
    category: "reasoning",
    question:
      "A person walks 12 m south and then 5 m east. In which direction is the person from the starting point?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    answer: "South-East",
    solution:
      "The person is both south and east of the starting point, so the direction is South-East.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 734,
    companyId: 4,
    year: 2023,
    category: "reasoning",
    question: "Find the odd one out: 9, 16, 25, 36, 45, 49.",
    options: ["25", "36", "45", "49"],
    answer: "45",
    solution: "9, 16, 25, 36 and 49 are perfect squares. 45 is not.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 735,
    companyId: 4,
    year: 2023,
    category: "reasoning",
    question: "Complete the analogy: Bird : Fly :: Fish : ?",
    options: ["Walk", "Swim", "Jump", "Run"],
    answer: "Swim",
    solution:
      "A bird typically moves by flying, while a fish typically moves by swimming.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 736,
    companyId: 4,
    year: 2023,
    category: "reasoning",
    question: "If today is Tuesday, what day will it be after 30 days?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    answer: "Thursday",
    solution: "30 mod 7 = 2. Two days after Tuesday is Thursday.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 737,
    companyId: 4,
    year: 2023,
    category: "reasoning",
    question:
      "Statements: All engineers are graduates. All graduates are educated. Which conclusion definitely follows?",
    options: [
      "All engineers are educated",
      "All educated people are engineers",
      "All graduates are engineers",
      "No engineer is educated",
    ],
    answer: "All engineers are educated",
    solution:
      "Since every engineer is a graduate and every graduate is educated, every engineer must be educated.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 738,
    companyId: 4,
    year: 2023,
    category: "reasoning",
    question: "Find the next letter in the series: B, E, I, N, T, ?",
    options: ["A", "B", "C", "D"],
    answer: "A",
    solution:
      "The jumps are +3, +4, +5 and +6. The next jump is +7. Seven positions after T wraps around to A.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 739,
    companyId: 4,
    year: 2023,
    category: "reasoning",
    question:
      "Aman is 16th from the left and 12th from the right in a row. How many people are there in the row?",
    options: ["26", "27", "28", "29"],
    answer: "27",
    solution: "Total = 16 + 12 - 1 = 27.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture reasoning practice",
    sourceUrl: null,
  },

  // ==================== GRAMMAR / VERBAL Q740-Q749 ====================

  {
    questionId: 740,
    companyId: 4,
    year: 2023,
    category: "grammar",
    question: "Choose the grammatically correct sentence.",
    options: [
      "They was waiting for the bus.",
      "They were waiting for the bus.",
      "They is waiting for the bus.",
      "They were wait for the bus.",
    ],
    answer: "They were waiting for the bus.",
    solution:
      "The plural subject 'they' takes 'were', and the continuous form requires 'waiting'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 741,
    companyId: 4,
    year: 2023,
    category: "grammar",
    question: "Fill in the blank: I have known him ___ ten years.",
    options: ["since", "for", "from", "by"],
    answer: "for",
    solution: "'For' is used with a duration of time, such as ten years.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 742,
    companyId: 4,
    year: 2023,
    category: "grammar",
    question: "Choose the correct article: He bought ___ umbrella yesterday.",
    options: ["a", "an", "the", "no article"],
    answer: "an",
    solution: "'Umbrella' begins with a vowel sound, so 'an' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 743,
    companyId: 4,
    year: 2023,
    category: "grammar",
    question: "Choose the correctly spelled word.",
    options: ["Environment", "Enviroment", "Envirnoment", "Enviornment"],
    answer: "Environment",
    solution: "The correct spelling is 'Environment'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 744,
    companyId: 4,
    year: 2023,
    category: "grammar",
    question:
      "Choose the passive voice of: 'The manager approved the request.'",
    options: [
      "The request was approved by the manager.",
      "The request is approved by the manager.",
      "The manager was approved by the request.",
      "The request has approve by the manager.",
    ],
    answer: "The request was approved by the manager.",
    solution:
      "The active sentence is in simple past, so passive voice uses 'was + past participle'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 745,
    companyId: 4,
    year: 2023,
    category: "grammar",
    question: "Fill in the blank: Neither Rahul nor his friends ___ ready.",
    options: ["is", "are", "was", "has"],
    answer: "are",
    solution:
      "With 'neither...nor', the verb generally agrees with the nearer subject. 'Friends' is plural, so 'are' is correct.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 746,
    companyId: 4,
    year: 2023,
    category: "grammar",
    question:
      "Choose the correct indirect speech: Arjun said, 'I will call you tomorrow.'",
    options: [
      "Arjun said that he would call me the next day.",
      "Arjun said that I will call you tomorrow.",
      "Arjun says that he would call me yesterday.",
      "Arjun said that he will called me tomorrow.",
    ],
    answer: "Arjun said that he would call me the next day.",
    solution:
      "In reported speech, 'will' changes to 'would', 'I' changes according to the speaker, and 'tomorrow' becomes 'the next day'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 747,
    companyId: 4,
    year: 2023,
    category: "grammar",
    question:
      "Fill in the blank: She is interested ___ learning new technologies.",
    options: ["at", "on", "in", "for"],
    answer: "in",
    solution: "The correct expression is 'interested in'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 748,
    companyId: 4,
    year: 2023,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "Every student have a laptop.",
      "Every student has a laptop.",
      "Every students has a laptop.",
      "Every student having a laptop.",
    ],
    answer: "Every student has a laptop.",
    solution:
      "'Every student' is singular, so it takes the singular verb 'has'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 749,
    companyId: 4,
    year: 2023,
    category: "grammar",
    question:
      "Fill in the blank: If I ___ enough money, I would buy a new laptop.",
    options: ["have", "had", "will have", "having"],
    answer: "had",
    solution:
      "The second conditional uses 'if + simple past' followed by 'would + base verb'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture verbal practice",
    sourceUrl: null,
  },

  // ==================== PSEUDOCODE Q750-Q759 ====================

  {
    questionId: 750,
    companyId: 4,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer a = 9
Integer b = 4
Print a * b`,
    options: ["13", "26", "32", "36"],
    answer: "36",
    solution: "9 × 4 = 36.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 751,
    companyId: 4,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer sum = 0

For i = 1 to 6
    sum = sum + i
End For

Print sum`,
    options: ["15", "18", "21", "24"],
    answer: "21",
    solution: "1 + 2 + 3 + 4 + 5 + 6 = 21.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 752,
    companyId: 4,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer x = 17

If (x % 2 == 0)
    Print "Even"
Else
    Print "Odd"
End If`,
    options: ["Even", "Odd", "17", "1"],
    answer: "Odd",
    solution: "17 % 2 = 1, so 17 is odd.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 753,
    companyId: 4,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer x = 1

For i = 1 to 5
    x = x * 2
End For

Print x`,
    options: ["16", "24", "32", "64"],
    answer: "32",
    solution: "x changes 1 → 2 → 4 → 8 → 16 → 32.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 754,
    companyId: 4,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer a = 30
Integer b = 18

If (a < b)
    Print a
Else
    Print b
End If`,
    options: ["12", "18", "30", "48"],
    answer: "18",
    solution: "30 < 18 is false, so the else block prints 18.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 755,
    companyId: 4,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer count = 0

For i = 1 to 20
    If (i % 4 == 0)
        count = count + 1
    End If
End For

Print count`,
    options: ["4", "5", "6", "8"],
    answer: "5",
    solution:
      "The multiples of 4 from 1 through 20 are 4, 8, 12, 16 and 20. Therefore count = 5.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 756,
    companyId: 4,
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
    solution: "x changes 3 → 6 → 12 → 24 → 48. At 48, x < 25 is false.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 757,
    companyId: 4,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer arr[5] = {2, 4, 6, 8, 10}
Integer sum = 0

For i = 0 to 4
    sum = sum + arr[i]
End For

Print sum`,
    options: ["20", "25", "30", "35"],
    answer: "30",
    solution: "2 + 4 + 6 + 8 + 10 = 30.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 758,
    companyId: 4,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer result = 1

For i = 1 to 4
    result = result * i
End For

Print result`,
    options: ["12", "16", "24", "32"],
    answer: "24",
    solution: "The loop calculates 4! = 1 × 2 × 3 × 4 = 24.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 759,
    companyId: 4,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer a = 53
Integer b = 7
Print a % b`,
    options: ["2", "3", "4", "5"],
    answer: "4",
    solution: "53 = 7 × 7 + 4. Therefore the remainder is 4.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Accenture pseudocode practice",
    sourceUrl: null,
  },

  // ==================== PROGRAMMING Q760-Q769 ====================

  {
    questionId: 760,
    companyId: 4,
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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 761,
    companyId: 4,
    year: 2023,
    category: "programming",
    question:
      "Write a program to count the number of digits in a positive integer.",
    options: [],
    answer:
      "Repeatedly divide the number by 10 and increment a counter until the number becomes zero.",
    solution: `Java Solution:

class Solution {
    public static int countDigits(int n) {
        if (n == 0) {
            return 1;
        }

        int count = 0;

        while (n > 0) {
            count++;
            n /= 10;
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
    questionId: 762,
    companyId: 4,
    year: 2023,
    category: "programming",
    question:
      "Write a program to find the maximum element in an integer array.",
    options: [],
    answer:
      "Initialize the maximum with the first element and update it whenever a larger element is found.",
    solution: `Java Solution:

class Solution {
    public static int findMaximum(int[] arr) {
        int maximum = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > maximum) {
                maximum = arr[i];
            }
        }

        return maximum;
    }
}`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 763,
    companyId: 4,
    year: 2023,
    category: "programming",
    question:
      "Write a program to count the occurrences of a target number in an integer array.",
    options: [],
    answer:
      "Traverse the array and increment a counter whenever an element equals the target.",
    solution: `Java Solution:

class Solution {
    public static int countOccurrences(int[] arr, int target) {
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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 764,
    companyId: 4,
    year: 2023,
    category: "programming",
    question: "Write a program to calculate the LCM of two positive integers.",
    options: [],
    answer:
      "Find the GCD using the Euclidean algorithm and calculate LCM = (a / GCD) × b.",
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

    public static int lcm(int a, int b) {
        return (a / gcd(a, b)) * b;
    }
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 765,
    companyId: 4,
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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 766,
    companyId: 4,
    year: 2023,
    category: "programming",
    question:
      "Write a program to check whether an integer array is sorted in non-decreasing order.",
    options: [],
    answer:
      "Compare every element with the previous element. If any current element is smaller, the array is not sorted.",
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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 767,
    companyId: 4,
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
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },

  {
    questionId: 768,
    companyId: 4,
    year: 2023,
    category: "programming",
    question:
      "Write a program to find the sum of all even elements in an integer array.",
    options: [],
    answer:
      "Traverse the array and add an element to the sum whenever it is divisible by 2.",
    solution: `Java Solution:

class Solution {
    public static int sumEvenElements(int[] arr) {
        int sum = 0;

        for (int value : arr) {
            if (value % 2 == 0) {
                sum += value;
            }
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
    questionId: 769,
    companyId: 4,
    year: 2023,
    category: "programming",
    question:
      "Write a program to find the second smallest distinct element in an integer array.",
    options: [],
    answer:
      "Traverse the array while maintaining the smallest and second-smallest distinct values.",
    solution: `Java Solution:

class Solution {
    public static int secondSmallest(int[] arr) {
        Integer smallest = null;
        Integer secondSmallest = null;

        for (int value : arr) {
            if (smallest == null || value < smallest) {
                secondSmallest = smallest;
                smallest = value;
            } else if (value != smallest &&
                       (secondSmallest == null || value < secondSmallest)) {
                secondSmallest = value;
            }
        }

        if (secondSmallest == null) {
            throw new IllegalArgumentException(
                "No second smallest distinct element"
            );
        }

        return secondSmallest;
    }
}`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Accenture programming practice",
    sourceUrl: null,
  },
];

async function seedAccenture2023Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 4,
      year: 2023,
    });

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Accenture 2023 questions seeded successfully`,
    );

    process.exit(0);
  } catch (error) {
    console.error("Error seeding Accenture 2023 questions:", error);

    process.exit(1);
  }
}

seedAccenture2023Questions();
