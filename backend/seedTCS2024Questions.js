require("dotenv").config();

const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [
  // TCS 2024 questions will go here
  {
    questionId: 43,
    companyId: 1,
    year: 2024,
    category: "programming",

    question:
      "Given an integer array and a target value, find all contiguous subarrays whose sum is equal to the target.",

    options: [],

    answer:
      "Use prefix sums or examine contiguous ranges and output every range whose sum equals the target.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int target = sc.nextInt();

        for (int i = 0; i < n; i++) {
            int sum = 0;

            for (int j = i; j < n; j++) {
                sum += arr[j];

                if (sum == target) {
                    for (int k = i; k <= j; k++) {
                        System.out.print(arr[k] + " ");
                    }
                    System.out.println();
                }
            }
        }

        sc.close();
    }
}`,

    difficulty: "Medium",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName:
      "TCS NQT 26 April 2024 Shift 1 candidate-reported coding questions",
    sourceUrl:
      "https://www.scribd.com/document/1017744494/TCS-NQT-Coding-Pyq-Compiled",
  },

  {
    questionId: 44,
    companyId: 1,
    year: 2024,
    category: "programming",

    question:
      "A robot starts at the top-left corner of an m × n grid and wants to reach the bottom-right corner. It can move only right or down. Find the number of unique paths.",

    options: [],

    answer:
      "Use dynamic programming where each cell stores the number of ways to reach that position.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int m = sc.nextInt();
        int n = sc.nextInt();

        long[][] dp = new long[m][n];

        for (int i = 0; i < m; i++) {
            dp[i][0] = 1;
        }

        for (int j = 0; j < n; j++) {
            dp[0][j] = 1;
        }

        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] =
                    dp[i - 1][j] + dp[i][j - 1];
            }
        }

        System.out.println(dp[m - 1][n - 1]);

        sc.close();
    }
}`,

    difficulty: "Medium",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName:
      "TCS NQT 26 April 2024 Shift 1 candidate-reported coding questions",
    sourceUrl:
      "https://www.scribd.com/document/1017744494/TCS-NQT-Coding-Pyq-Compiled",
  },

  {
    questionId: 45,
    companyId: 1,
    year: 2024,
    category: "programming",

    question:
      "Given two integers N and M, calculate the sum of the cubes of all integers in the inclusive range N to M.",

    options: [],

    answer: "Iterate from N through M and add the cube of each number.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        long n = sc.nextLong();
        long m = sc.nextLong();

        long sum = 0;

        for (long i = n; i <= m; i++) {
            sum += i * i * i;
        }

        System.out.println(sum);

        sc.close();
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName:
      "TCS NQT 26 April 2024 Shift 2 candidate-reported coding questions",
    sourceUrl:
      "https://www.scribd.com/document/1017744494/TCS-NQT-Coding-Pyq-Compiled",
  },

  {
    questionId: 46,
    companyId: 1,
    year: 2024,
    category: "programming",

    question:
      "Given a square matrix, convert it into a lower triangular matrix by replacing every element above the main diagonal with 0.",

    options: [],

    answer:
      "For every position where the column index is greater than the row index, replace the element with 0.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[][] matrix = new int[n][n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {

                if (j > i) {
                    matrix[i][j] = 0;
                }

                System.out.print(
                    matrix[i][j] + " "
                );
            }

            System.out.println();
        }

        sc.close();
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT 15 January 2024 candidate experience",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tcs-interview-experience-on-campus-3/",
  },

  {
    questionId: 47,
    companyId: 1,
    year: 2024,
    category: "programming",

    question:
      "Given a string and valid matrix dimensions, place the characters of the string into the matrix and print the transpose of that character matrix.",

    options: [],

    answer:
      "Fill the matrix row by row using the characters and print matrix[j][i] to produce its transpose.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.next();
        int rows = sc.nextInt();
        int cols = sc.nextInt();

        if (rows * cols != str.length()) {
            System.out.println("Invalid dimensions");
            sc.close();
            return;
        }

        char[][] matrix =
            new char[rows][cols];

        int index = 0;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                matrix[i][j] =
                    str.charAt(index++);
            }
        }

        for (int j = 0; j < cols; j++) {
            for (int i = 0; i < rows; i++) {
                System.out.print(
                    matrix[i][j] + " "
                );
            }

            System.out.println();
        }

        sc.close();
    }
}`,

    difficulty: "Medium",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT 15 January 2024 candidate experience",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tcs-interview-experience-on-campus-3/",
  },

  {
    questionId: 48,
    companyId: 1,
    year: 2024,
    category: "programming",

    question:
      "Given a positive integer, print its even digits and odd digits separately while preserving their original order.",

    options: [],

    answer: "Inspect every digit and classify it using digit % 2.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String number = sc.next();

        StringBuilder even =
            new StringBuilder();

        StringBuilder odd =
            new StringBuilder();

        for (char ch : number.toCharArray()) {
            int digit = ch - '0';

            if (digit % 2 == 0) {
                even.append(ch).append(" ");
            } else {
                odd.append(ch).append(" ");
            }
        }

        System.out.println(
            "Even digits: " + even
        );

        System.out.println(
            "Odd digits: " + odd
        );

        sc.close();
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 July 2024 candidate experience",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tcs-nqt-interview-experience-prime-august-2024/",
  },

  {
    questionId: 49,
    companyId: 1,
    year: 2024,
    category: "programming",

    question:
      "Given a positive integer, determine whether it is an Armstrong number.",

    options: [],

    answer:
      "Raise each digit to the power equal to the number of digits, add the results, and compare the sum with the original number.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int number = sc.nextInt();

        int original = number;

        int digits =
            String.valueOf(number).length();

        int sum = 0;
        int temp = number;

        while (temp > 0) {
            int digit = temp % 10;

            sum += (int) Math.pow(
                digit,
                digits
            );

            temp /= 10;
        }

        if (sum == original) {
            System.out.println(
                "Armstrong Number"
            );
        } else {
            System.out.println(
                "Not an Armstrong Number"
            );
        }

        sc.close();
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 July 2024 candidate experience",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/tcs-nqt-interview-experience-prime-august-2024/",
  },

  {
    questionId: 50,
    companyId: 1,
    year: 2024,
    category: "programming",

    question:
      "Generate the Fibonacci sequence for N terms and calculate the sum of all generated terms.",

    options: [],

    answer:
      "Generate each Fibonacci value from the previous two values while maintaining a running sum.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        long first = 0;
        long second = 1;
        long sum = 0;

        for (int i = 0; i < n; i++) {

            System.out.print(first + " ");

            sum += first;

            long next = first + second;

            first = second;
            second = next;
        }

        System.out.println();
        System.out.println("Sum = " + sum);

        sc.close();
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2024 candidate exam experience",
    sourceUrl:
      "https://www.geeksforgeeks.org/competitive-exam-experiences/tcs-nqt-exam-experience-at-tcs-gitobitan-kolkata-2024/",
  },

  {
    questionId: 51,
    companyId: 1,
    year: 2024,
    category: "programming",

    question:
      "Given an integer array, find the number of distinct values that can be obtained by taking the bitwise OR of every possible contiguous subarray.",

    options: [],

    answer:
      "Maintain the set of OR values for subarrays ending at each index and insert those values into a global set.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        Set<Integer> result =
            new HashSet<>();

        Set<Integer> previous =
            new HashSet<>();

        for (int value : arr) {

            Set<Integer> current =
                new HashSet<>();

            current.add(value);

            for (int old : previous) {
                current.add(old | value);
            }

            result.addAll(current);

            previous = current;
        }

        System.out.println(result.size());

        sc.close();
    }
}`,

    difficulty: "Hard",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2024 candidate exam experience",
    sourceUrl:
      "https://www.geeksforgeeks.org/competitive-exam-experiences/tcs-nqt-exam-experience-at-tcs-gitobitan-kolkata-2024/",
  },
  {
    questionId: 52,
    companyId: 1,
    year: 2024,
    category: "aptitude",

    question:
      "A man has to travel 50 km in two hours. He covers 20 km in the first hour and then stops for 10 minutes for refuelling. By what factor should he increase his speed, compared with his speed during the first hour, to complete the journey on time?",

    options: ["1.2", "1.8", "2.4", "1.5"],

    answer: "1.8",

    solution:
      "He covers 20 km in the first hour, so 30 km remains. After a 10-minute stop, he has 50 minutes = 5/6 hour left. Required speed = 30 ÷ (5/6) = 36 km/h. Original speed = 20 km/h. Required factor = 36/20 = 1.8.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName:
      "TCS NQT Numerical Ability Previous-Year Questions - 30 April 2024",
    sourceUrl:
      "https://talentbattle.in/company-specific-previous-year-questions/tcs-nqt-previous-year-questions",
  },

  {
    questionId: 53,
    companyId: 1,
    year: 2024,
    category: "aptitude",

    question:
      "What is the diameter of a solid right circular cylinder whose height is 6 cm and whose curved surface area is five times the combined area of its two circular ends?",

    options: ["3 cm", "2.4 cm", "1.2 cm", "0.9 cm"],

    answer: "2.4 cm",

    solution:
      "Curved surface area = 2πrh. Combined area of two circular ends = 2πr². Given 2πrh = 5(2πr²). Therefore h = 5r. Since h = 6, r = 6/5 = 1.2 cm. Diameter = 2r = 2.4 cm.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName:
      "TCS NQT Numerical Ability Previous-Year Questions - 30 April 2024",
    sourceUrl:
      "https://talentbattle.in/company-specific-previous-year-questions/tcs-nqt-previous-year-questions",
  },

  {
    questionId: 54,
    companyId: 1,
    year: 2024,
    category: "aptitude",

    question:
      "If n is a digit such that 1nn352 is a six-digit number exactly divisible by 24, what is the sum of all possible values of n?",

    options: ["15", "27", "9", "21"],

    answer: "15",

    solution:
      "For divisibility by 24, the number must be divisible by both 3 and 8. The last three digits, 352, are divisible by 8. For divisibility by 3, the digit sum 1+n+n+3+5+2 = 11+2n must be divisible by 3. This happens for n = 2, 5 and 8. Their sum is 2+5+8 = 15.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName:
      "TCS NQT Numerical Ability Previous-Year Questions - 30 April 2024",
    sourceUrl:
      "https://talentbattle.in/company-specific-previous-year-questions/tcs-nqt-previous-year-questions",
  },

  {
    questionId: 55,
    companyId: 1,
    year: 2024,
    category: "aptitude",

    question: "What percentage is (0.025% of 240% of 1.5) of 0.9?",

    options: ["0.01%", "10%", "0.1%", "1%"],

    answer: "0.1%",

    solution:
      "240% of 1.5 = 3.6. Then 0.025% of 3.6 = 0.0009. Now (0.0009 / 0.9) × 100 = 0.1%. Therefore the answer is 0.1%.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName:
      "TCS NQT Numerical Ability Previous-Year Questions - 30 April 2024",
    sourceUrl:
      "https://talentbattle.in/company-specific-previous-year-questions/tcs-nqt-previous-year-questions",
  },

  {
    questionId: 56,
    companyId: 1,
    year: 2024,
    category: "aptitude",

    question:
      "The cost of filling a gas tank at a shop is Rs. 800. The shopkeeper reduces the price by 15%, after which the number of customers increases by 30%. By what percentage does the shopkeeper's total revenue change?",

    options: [
      "10.5% increase",
      "10% increase",
      "8% decrease",
      "12.5% increase",
    ],

    answer: "10.5% increase",

    solution:
      "Assume initially there are x customers. Original revenue = 800x. New price = 800 × 0.85 = 680. New customers = 1.3x. New revenue = 680 × 1.3x = 884x. Increase = 884x - 800x = 84x. Percentage increase = (84/800) × 100 = 10.5%.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName:
      "TCS NQT Numerical Ability Previous-Year Questions - 30 April 2024",
    sourceUrl:
      "https://talentbattle.in/company-specific-previous-year-questions/tcs-nqt-previous-year-questions",
  },

  {
    questionId: 57,
    companyId: 1,
    year: 2024,
    category: "aptitude",

    question:
      "Two numbers are in the ratio 3:5. If 3 is added to the first number and 9 is added to the second number, their ratio becomes 4:7. What is the sum of the original numbers?",

    options: ["120", "150", "105", "135"],

    answer: "120",

    solution:
      "Let the numbers be 3x and 5x. Then (3x+3)/(5x+9) = 4/7. So 21x+21 = 20x+36, giving x = 15. The numbers are 45 and 75. Their sum is 120.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName:
      "TCS NQT Numerical Ability Previous-Year Questions - 30 April 2024",
    sourceUrl:
      "https://talentbattle.in/company-specific-previous-year-questions/tcs-nqt-previous-year-questions",
  },

  {
    questionId: 58,
    companyId: 1,
    year: 2024,
    category: "aptitude",

    question:
      "Ankush bought (x + 2) apples at Rs. 12 each. One apple became rotten during transportation and he sold all the remaining apples for Rs. 300. If his overall profit was 25%, how many apples did he sell?",

    options: ["19", "15", "10", "12"],

    answer: "19",

    solution:
      "Cost price = 12(x+2). Since the selling price is Rs. 300 and profit is 25%, 300 = 1.25 × 12(x+2). Therefore 300 = 15(x+2), so x+2 = 20 and x = 18. One apple was rotten, so apples sold = 20-1 = 19.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName:
      "TCS NQT Numerical Ability Previous-Year Questions - 30 April 2024",
    sourceUrl:
      "https://talentbattle.in/company-specific-previous-year-questions/tcs-nqt-previous-year-questions",
  },

  {
    questionId: 59,
    companyId: 1,
    year: 2024,
    category: "aptitude",

    question:
      "An article is marked 36% above its cost price. A discount of 10% is given on the marked price, followed by another discount of Rs. 12.60. If the final profit is 15.4%, what is the marked price?",

    options: ["Rs. 245", "Rs. 243", "Rs. 220.30", "Rs. 244.80"],

    answer: "Rs. 244.80",

    solution:
      "Let cost price = 100x. Marked price = 136x. After 10% discount, price = 122.4x. After the additional Rs. 12.60 discount, selling price = 122.4x - 12.6. A 15.4% profit means selling price = 115.4x. Thus 122.4x - 12.6 = 115.4x, giving 7x = 12.6 and x = 1.8. Marked price = 136 × 1.8 = Rs. 244.80.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName:
      "TCS NQT Numerical Ability Previous-Year Questions - 30 April 2024",
    sourceUrl:
      "https://talentbattle.in/company-specific-previous-year-questions/tcs-nqt-previous-year-questions",
  },

  {
    questionId: 60,
    companyId: 1,
    year: 2024,
    category: "aptitude",

    question:
      "The ratio of 25% of x to 65% of y to 75% of z is 5:26:15. If one-sixteenth of (x + y + z) is 10, what is the value of x - 2y + 3z?",

    options: ["-20", "-10", "10", "0"],

    answer: "0",

    solution:
      "25x : 65y : 75z = 5 : 26 : 15. This gives x : y : z = 1 : 2 : 1. Also, (x+y+z)/16 = 10, so x+y+z = 160. Therefore x=40, y=80 and z=40. Hence x - 2y + 3z = 40 - 160 + 120 = 0.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName:
      "TCS NQT Numerical Ability Previous-Year Questions - 30 April 2024",
    sourceUrl:
      "https://talentbattle.in/company-specific-previous-year-questions/tcs-nqt-previous-year-questions",
  },

  {
    questionId: 61,
    companyId: 1,
    year: 2024,
    category: "aptitude",

    question:
      "Surekha's savings are equal to 40% of her expenditure. If her income increases by 20% and her expenditure increases by 40%, by what percentage do her savings decrease?",

    options: ["20%", "30%", "50%", "10%"],

    answer: "30%",

    solution:
      "Assume expenditure = 100. Then savings = 40 and income = 140. New income after a 20% increase = 168. New expenditure after a 40% increase = 140. New savings = 168-140 = 28. The decrease in savings is 40-28 = 12. Percentage decrease = (12/40) × 100 = 30%.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName:
      "TCS NQT Numerical Ability Previous-Year Questions - 30 April 2024",
    sourceUrl:
      "https://talentbattle.in/company-specific-previous-year-questions/tcs-nqt-previous-year-questions",
  },
  {
  questionId: 62,
  companyId: 1,
  year: 2024,
  category: "reasoning",

  question:
    "There are five rods K, L, M, N and O. O weighs twice as much as L. L weighs as much as K and M together. M weighs twice as much as K. N weighs three times as much as M. If N weighs 90 kg, what is the weight of O?",

  options: ["105 kg", "60 kg", "120 kg", "90 kg"],

  answer: "90 kg",

  solution:
    "N = 90 kg and N = 3M, so M = 30 kg. Since M = 2K, K = 15 kg. L = K + M = 45 kg. O = 2L = 90 kg.",

  difficulty: "Easy",

  sourceType: "previous-year",
  sourceName:
    "TCS NQT Reasoning Ability Previous-Year Questions",
  sourceUrl:
    "https://talentbattle.in/tcs/reasoning-ability"
},

{
  questionId: 63,
  companyId: 1,
  year: 2024,
  category: "reasoning",

  question:
    "Which is the wrong term in the following series: CMQ, FPT, JTX, OYC, UFI?",

  options: ["FPT", "OYC", "JTX", "UFI"],

  answer: "UFI",

  solution:
    "The letters in corresponding positions follow increasing alphabetic jumps. The progression followed by the earlier groups is broken by UFI, making it the incorrect term.",

  difficulty: "Medium",

  sourceType: "previous-year",
  sourceName:
    "TCS NQT Reasoning Ability Previous-Year Questions",
  sourceUrl:
    "https://talentbattle.in/tcs/reasoning-ability"
},

{
  questionId: 64,
  companyId: 1,
  year: 2024,
  category: "reasoning",

  question:
    "Find the next number in the series: 2, 6, 12, 20, 30, ?",

  options: ["36", "40", "42", "48"],

  answer: "42",

  solution:
    "The differences are 4, 6, 8 and 10. The next difference is 12. Therefore 30 + 12 = 42.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice",
  sourceUrl: null
},

{
  questionId: 65,
  companyId: 1,
  year: 2024,
  category: "reasoning",

  question:
    "If SOUTH is coded as TPVUI by replacing every letter with the next letter of the alphabet, how will NORTH be coded?",

  options: ["OPSUI", "OPSTI", "NPSUI", "OQSUI"],

  answer: "OPSUI",

  solution:
    "Replace every letter with its next alphabetic letter: N→O, O→P, R→S, T→U and H→I. Therefore NORTH becomes OPSUI.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice",
  sourceUrl: null
},

{
  questionId: 66,
  companyId: 1,
  year: 2024,
  category: "reasoning",

  question:
    "A person walks 10 m north, turns right and walks 10 m, then turns right and walks another 10 m. In which direction is the person from the starting point?",

  options: ["North", "South", "East", "West"],

  answer: "East",

  solution:
    "After moving 10 m north and then 10 m east, the final 10 m south cancels the northward movement. The person is therefore 10 m east of the starting point.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice",
  sourceUrl: null
},

{
  questionId: 67,
  companyId: 1,
  year: 2024,
  category: "reasoning",

  question:
    "Pointing to a woman, Rahul says, 'She is the daughter of the only son of my grandfather.' How is the woman related to Rahul?",

  options: ["Mother", "Sister", "Aunt", "Cousin"],

  answer: "Sister",

  solution:
    "The only son of Rahul's grandfather is Rahul's father. The daughter of Rahul's father is Rahul's sister.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice",
  sourceUrl: null
},

{
  questionId: 68,
  companyId: 1,
  year: 2024,
  category: "reasoning",

  question:
    "Choose the number that does not belong to the group: 8, 27, 64, 100, 125.",

  options: ["27", "64", "100", "125"],

  answer: "100",

  solution:
    "8 = 2³, 27 = 3³, 64 = 4³ and 125 = 5³. 100 is not a perfect cube.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice",
  sourceUrl: null
},

{
  questionId: 69,
  companyId: 1,
  year: 2024,
  category: "reasoning",

  question:
    "Statements: All programmers are logical. Some logical people are gamers. Which conclusion definitely follows?",

  options: [
    "All gamers are programmers",
    "Some programmers are gamers",
    "All programmers are logical",
    "No logical person is a gamer"
  ],

  answer: "All programmers are logical",

  solution:
    "The first statement directly establishes that every programmer belongs to the set of logical people. The other conclusions are not guaranteed.",

  difficulty: "Medium",

  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice",
  sourceUrl: null
},

{
  questionId: 70,
  companyId: 1,
  year: 2024,
  category: "reasoning",

  question:
    "Arrange the words in a logical sequence: 1. Seed 2. Fruit 3. Plant 4. Flower 5. Sprout",

  options: [
    "1, 5, 3, 4, 2",
    "1, 3, 5, 4, 2",
    "5, 1, 3, 2, 4",
    "1, 5, 4, 3, 2"
  ],

  answer: "1, 5, 3, 4, 2",

  solution:
    "A seed first germinates into a sprout, develops into a plant, produces flowers and finally produces fruit.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice",
  sourceUrl: null
},

{
  questionId: 71,
  companyId: 1,
  year: 2024,
  category: "reasoning",

  question:
    "If A is taller than B, B is taller than C, and D is taller than A, who is the tallest?",

  options: ["A", "B", "C", "D"],

  answer: "D",

  solution:
    "The relationships give D > A > B > C. Therefore D is the tallest.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice",
  sourceUrl: null
},
{
  questionId: 72,
  companyId: 1,
  year: 2024,
  category: "comprehension",

  question:
    "Identify the part containing an error: 'Everyday life have become more complicated with the advancement in mobile technology.'",

  options: [
    "More complicated with the",
    "Everyday life have become",
    "No error",
    "Advancement in mobile technology"
  ],

  answer: "Everyday life have become",

  solution:
    "'Life' is singular, so the singular verb 'has' is required. The corrected expression is 'Everyday life has become'.",

  difficulty: "Easy",

  sourceType: "previous-year",
  sourceName:
    "TCS NQT Verbal Ability Previous-Year Questions",
  sourceUrl:
    "https://talentbattle.in/tcs/verbal-ability"
},

{
  questionId: 73,
  companyId: 1,
  year: 2024,
  category: "comprehension",

  question:
    "Choose the best combined version of these sentences: 'I was at the fair. I got lost. I got scared.'",

  options: [
    "I am scared after I am lost at the fair.",
    "I went to the fair and got scared as I was lost.",
    "I am lost at the fair so I am too scared.",
    "I was at the fair but I never became scared."
  ],

  answer:
    "I got lost at the fair and was scared.",

  solution:
    "The sentence correctly combines the three ideas while maintaining their past-tense meaning and logical relationship.",

  difficulty: "Easy",

  sourceType: "previous-year",
  sourceName:
    "TCS NQT Verbal Ability Previous-Year Questions",
  sourceUrl:
    "https://talentbattle.in/tcs/verbal-ability"
},

{
  questionId: 74,
  companyId: 1,
  year: 2024,
  category: "comprehension",

  question:
    "Choose the word closest in meaning to 'meticulous'.",

  options: [
    "Careless",
    "Careful",
    "Uncertain",
    "Ordinary"
  ],

  answer: "Careful",

  solution:
    "'Meticulous' describes someone who is extremely careful and pays close attention to details.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice",
  sourceUrl: null
},

{
  questionId: 75,
  companyId: 1,
  year: 2024,
  category: "comprehension",

  question:
    "Choose the word opposite in meaning to 'scarce'.",

  options: [
    "Rare",
    "Limited",
    "Abundant",
    "Insufficient"
  ],

  answer: "Abundant",

  solution:
    "'Scarce' means insufficient or available only in small quantities. 'Abundant' means available in large quantities and is therefore its opposite.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice",
  sourceUrl: null
},

{
  questionId: 76,
  companyId: 1,
  year: 2024,
  category: "comprehension",

  question:
    "Fill in the blank: Neither the manager nor the employees ___ willing to accept the proposal.",

  options: ["was", "is", "are", "has"],

  answer: "are",

  solution:
    "With 'neither...nor', the verb normally agrees with the subject nearest to it. The nearest subject is the plural noun 'employees', so 'are' is appropriate.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice",
  sourceUrl: null
},

{
  questionId: 77,
  companyId: 1,
  year: 2024,
  category: "comprehension",

  question:
    "Choose the grammatically correct sentence.",

  options: [
    "She don't like coffee.",
    "She doesn't likes coffee.",
    "She doesn't like coffee.",
    "She not like coffee."
  ],

  answer: "She doesn't like coffee.",

  solution:
    "After the auxiliary verb 'does', the main verb must remain in its base form. Therefore 'doesn't like' is correct.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice",
  sourceUrl: null
},

{
  questionId: 78,
  companyId: 1,
  year: 2024,
  category: "comprehension",

  question:
    "Choose the correct passive form of: 'The team completed the project.'",

  options: [
    "The project completed by the team.",
    "The project was completed by the team.",
    "The project is completed by the team.",
    "The project has completing by the team."
  ],

  answer:
    "The project was completed by the team.",

  solution:
    "The active sentence is in the simple past tense, so its passive form uses 'was' plus the past participle 'completed'.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice",
  sourceUrl: null
},

{
  questionId: 79,
  companyId: 1,
  year: 2024,
  category: "comprehension",

  question:
    "Choose the correctly spelled word.",

  options: [
    "Accomodation",
    "Accommodation",
    "Acommodation",
    "Accommadation"
  ],

  answer: "Accommodation",

  solution:
    "The correct spelling is 'accommodation', containing double 'c' and double 'm'.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice",
  sourceUrl: null
},

{
  questionId: 80,
  companyId: 1,
  year: 2024,
  category: "comprehension",

  question:
    "Choose the correct indirect form: Ravi said, 'I am working on the project.'",

  options: [
    "Ravi said that I am working on the project.",
    "Ravi said that he was working on the project.",
    "Ravi says that he worked on the project.",
    "Ravi said he is worked on the project."
  ],

  answer:
    "Ravi said that he was working on the project.",

  solution:
    "When converting this statement to reported speech, 'I' changes to 'he' and the present continuous 'am working' changes to the past continuous 'was working'.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice",
  sourceUrl: null
},

{
  questionId: 81,
  companyId: 1,
  year: 2024,
  category: "comprehension",

  question:
    "Read the statement: 'Remote work can reduce commuting time and provide employees with greater flexibility. However, organizations must maintain effective communication to ensure collaboration.' Which statement best expresses the main idea?",

  options: [
    "Remote work eliminates the need for communication.",
    "Remote work offers benefits but requires effective communication.",
    "Employees should always work from an office.",
    "Commuting is the only disadvantage of office work."
  ],

  answer:
    "Remote work offers benefits but requires effective communication.",

  solution:
    "The passage presents advantages of remote work and then states that effective communication is necessary for successful collaboration. Therefore the second option captures the complete main idea.",

  difficulty: "Easy",

  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice",
  sourceUrl: null
},
{
  questionId: 82,
  companyId: 1,
  year: 2024,
  category: "aptitude",
  question:
    "A train 180 metres long crosses a pole in 12 seconds. What is the speed of the train?",
  options: ["45 km/h", "54 km/h", "60 km/h", "72 km/h"],
  answer: "54 km/h",
  solution:
    "Speed = 180/12 = 15 m/s. Converting to km/h: 15 × 18/5 = 54 km/h.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT quantitative practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 83,
  companyId: 1,
  year: 2024,
  category: "aptitude",
  question:
    "The average of five consecutive even numbers is 24. What is the largest number?",
  options: ["26", "28", "30", "32"],
  answer: "28",
  solution:
    "For five consecutive even numbers, the middle number equals the average. The numbers are 20, 22, 24, 26 and 28. Therefore the largest is 28.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT quantitative practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 84,
  companyId: 1,
  year: 2024,
  category: "aptitude",
  question:
    "A sum becomes Rs. 12,000 after 2 years at 10% simple interest per annum. What was the principal?",
  options: ["Rs. 9,000", "Rs. 10,000", "Rs. 10,500", "Rs. 11,000"],
  answer: "Rs. 10,000",
  solution:
    "Amount = P(1 + RT/100). Therefore 12000 = P(1 + 20/100) = 1.2P. Hence P = Rs. 10,000.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT quantitative practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 85,
  companyId: 1,
  year: 2024,
  category: "aptitude",
  question:
    "A can complete a job in 12 days and B can complete the same job in 18 days. How many days will they take working together?",
  options: ["6 days", "7.2 days", "8 days", "9 days"],
  answer: "7.2 days",
  solution:
    "Combined work per day = 1/12 + 1/18 = 5/36. Required time = 36/5 = 7.2 days.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "TCS NQT quantitative practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 86,
  companyId: 1,
  year: 2024,
  category: "aptitude",
  question:
    "A shopkeeper marks an article 25% above its cost price and gives a discount of 10% on the marked price. What is his profit percentage?",
  options: ["10%", "12.5%", "15%", "17.5%"],
  answer: "12.5%",
  solution:
    "Let CP = 100. MP = 125. After a 10% discount, SP = 112.5. Profit = 12.5, so profit percentage = 12.5%.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT quantitative practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 87,
  companyId: 1,
  year: 2024,
  category: "aptitude",
  question:
    "The present ages of A and B are in the ratio 4:5. After 8 years their ages will be in the ratio 6:7. What is A's present age?",
  options: ["12 years", "16 years", "20 years", "24 years"],
  answer: "16 years",
  solution:
    "Let ages be 4x and 5x. Then (4x+8)/(5x+8)=6/7. Thus 28x+56=30x+48, giving x=4. A's age is 4×4=16 years.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "TCS NQT quantitative practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 88,
  companyId: 1,
  year: 2024,
  category: "aptitude",
  question:
    "A bag contains 5 red, 3 blue and 2 green balls. What is the probability of drawing a blue ball at random?",
  options: ["1/5", "3/10", "1/3", "2/5"],
  answer: "3/10",
  solution:
    "Total balls = 5+3+2 = 10. Blue balls = 3. Probability = 3/10.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT quantitative practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 89,
  companyId: 1,
  year: 2024,
  category: "aptitude",
  question:
    "Two numbers have HCF 12 and LCM 720. If one number is 144, what is the other number?",
  options: ["48", "60", "72", "84"],
  answer: "60",
  solution:
    "Product of two numbers = HCF × LCM = 12 × 720. Other number = (12×720)/144 = 60.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "TCS NQT quantitative practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 90,
  companyId: 1,
  year: 2024,
  category: "aptitude",
  question:
    "A car travels 240 km at 60 km/h and returns the same distance at 40 km/h. What is its average speed for the complete journey?",
  options: ["45 km/h", "48 km/h", "50 km/h", "52 km/h"],
  answer: "48 km/h",
  solution:
    "For equal distances, average speed = 2ab/(a+b). Thus 2×60×40/(60+40) = 48 km/h.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "TCS NQT quantitative practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 91,
  companyId: 1,
  year: 2024,
  category: "aptitude",
  question:
    "If 35% of a number is 84, what is 60% of that number?",
  options: ["124", "132", "144", "156"],
  answer: "144",
  solution:
    "Number = 84×100/35 = 240. Therefore 60% of 240 = 144.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT quantitative practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 92,
  companyId: 1,
  year: 2024,
  category: "reasoning",
  question:
    "Find the next number in the series: 3, 8, 15, 24, 35, ?",
  options: ["46", "48", "50", "52"],
  answer: "48",
  solution:
    "Differences are 5, 7, 9 and 11. The next difference is 13. Therefore 35+13=48.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 93,
  companyId: 1,
  year: 2024,
  category: "reasoning",
  question:
    "Book is to Reading as Fork is to:",
  options: ["Drawing", "Writing", "Eating", "Walking"],
  answer: "Eating",
  solution:
    "A book is an object used for reading. Similarly, a fork is an object used for eating.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 94,
  companyId: 1,
  year: 2024,
  category: "reasoning",
  question:
    "If CAT is coded as DBU by shifting every letter one position forward, how is DOG coded?",
  options: ["EPH", "EOH", "FPH", "EPI"],
  answer: "EPH",
  solution:
    "D becomes E, O becomes P and G becomes H. Therefore DOG becomes EPH.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 95,
  companyId: 1,
  year: 2024,
  category: "reasoning",
  question:
    "A is the brother of B. B is the sister of C. C is the father of D. How is A related to D?",
  options: ["Brother", "Uncle", "Grandfather", "Cousin"],
  answer: "Uncle",
  solution:
    "A and C are siblings because both are siblings of B. Since C is D's father, A is D's uncle.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 96,
  companyId: 1,
  year: 2024,
  category: "reasoning",
  question:
    "A man faces north. He turns 90° clockwise, then 180° clockwise, and finally 90° anticlockwise. Which direction is he facing?",
  options: ["North", "South", "East", "West"],
  answer: "South",
  solution:
    "North → 90° clockwise = East → 180° clockwise = West → 90° anticlockwise = South.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 97,
  companyId: 1,
  year: 2024,
  category: "reasoning",
  question:
    "Find the odd one out: 16, 25, 36, 49, 63, 64.",
  options: ["36", "49", "63", "64"],
  answer: "63",
  solution:
    "16, 25, 36, 49 and 64 are perfect squares. 63 is not a perfect square.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 98,
  companyId: 1,
  year: 2024,
  category: "reasoning",
  question:
    "Statements: All laptops are machines. Some machines are portable. Which conclusion definitely follows?",
  options: [
    "All portable things are laptops",
    "Some laptops are portable",
    "All laptops are machines",
    "No machine is portable"
  ],
  answer: "All laptops are machines",
  solution:
    "This conclusion is explicitly given by the first statement. The other conclusions cannot be guaranteed.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 99,
  companyId: 1,
  year: 2024,
  category: "reasoning",
  question:
    "Five people P, Q, R, S and T stand in a line. P is before Q, Q is before R, R is before S and S is before T. Who is in the middle?",
  options: ["P", "Q", "R", "S"],
  answer: "R",
  solution:
    "The order is P, Q, R, S, T. Therefore R occupies the middle position.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 100,
  companyId: 1,
  year: 2024,
  category: "reasoning",
  question:
    "Find the missing letter: A, C, F, J, O, ?",
  options: ["T", "U", "V", "W"],
  answer: "U",
  solution:
    "Letter-position jumps are +2, +3, +4 and +5. The next jump is +6. O is position 15, so 15+6=21, which is U.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 101,
  companyId: 1,
  year: 2024,
  category: "reasoning",
  question:
    "If yesterday was Thursday, what day will it be 4 days after tomorrow?",
  options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
  answer: "Wednesday",
  solution:
    "If yesterday was Thursday, today is Friday and tomorrow is Saturday. Four days after Saturday is Wednesday.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT reasoning practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 102,
  companyId: 1,
  year: 2024,
  category: "comprehension",
  question:
    "Choose the synonym of 'abundant'.",
  options: ["Scarce", "Plentiful", "Tiny", "Weak"],
  answer: "Plentiful",
  solution:
    "'Abundant' means existing in large quantities. 'Plentiful' has the same meaning.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 103,
  companyId: 1,
  year: 2024,
  category: "comprehension",
  question:
    "Choose the antonym of 'expand'.",
  options: ["Increase", "Extend", "Contract", "Develop"],
  answer: "Contract",
  solution:
    "'Expand' means to become larger. 'Contract' means to become smaller, making it the opposite.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 104,
  companyId: 1,
  year: 2024,
  category: "comprehension",
  question:
    "Fill in the blank: She has been working here ___ 2020.",
  options: ["for", "since", "from", "by"],
  answer: "since",
  solution:
    "'Since' is used with a specific starting point in time. Therefore 'since 2020' is correct.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 105,
  companyId: 1,
  year: 2024,
  category: "comprehension",
  question:
    "Choose the grammatically correct sentence.",
  options: [
    "Each of the students have submitted their assignment.",
    "Each of the students has submitted the assignment.",
    "Each of the student have submitted the assignment.",
    "Each students has submitted their assignment."
  ],
  answer: "Each of the students has submitted the assignment.",
  solution:
    "'Each' is singular and therefore takes the singular verb 'has'.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 106,
  companyId: 1,
  year: 2024,
  category: "comprehension",
  question:
    "Choose the correctly spelled word.",
  options: ["Definately", "Definitely", "Definetely", "Definatly"],
  answer: "Definitely",
  solution:
    "The correct spelling is 'Definitely'.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 107,
  companyId: 1,
  year: 2024,
  category: "comprehension",
  question:
    "Choose the correct passive voice of: 'They will announce the results tomorrow.'",
  options: [
    "The results will announce tomorrow.",
    "The results are announced tomorrow.",
    "The results will be announced tomorrow.",
    "Tomorrow the results have announced."
  ],
  answer: "The results will be announced tomorrow.",
  solution:
    "The future simple passive structure is 'will be + past participle'. Therefore 'will be announced' is correct.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 108,
  companyId: 1,
  year: 2024,
  category: "comprehension",
  question:
    "Choose the correct indirect speech: Anita said, 'I have finished my work.'",
  options: [
    "Anita said that she had finished her work.",
    "Anita said that she has finish her work.",
    "Anita says that I had finished my work.",
    "Anita said she finish her work."
  ],
  answer: "Anita said that she had finished her work.",
  solution:
    "In reported speech after the past reporting verb 'said', present perfect normally changes to past perfect: 'have finished' becomes 'had finished'.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 109,
  companyId: 1,
  year: 2024,
  category: "comprehension",
  question:
    "Choose the word that best completes the sentence: The manager asked the team to ___ the problem before proposing a solution.",
  options: ["analyse", "avoid", "ignore", "destroy"],
  answer: "analyse",
  solution:
    "A problem should be examined or analysed before a solution is proposed. Therefore 'analyse' best fits the sentence.",
  difficulty: "Easy",
  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 110,
  companyId: 1,
  year: 2024,
  category: "comprehension",
  question:
    "Read the statement: 'Online learning gives students flexibility to study from different locations. However, success requires discipline, regular practice and effective time management.' Which conclusion is best supported?",
  options: [
    "Online learning requires no discipline.",
    "Online learning is always easier than classroom learning.",
    "Flexibility alone does not guarantee success in online learning.",
    "Students should avoid online learning."
  ],
  answer:
    "Flexibility alone does not guarantee success in online learning.",
  solution:
    "The passage gives flexibility as an advantage but also says discipline, practice and time management are required. Therefore flexibility by itself is insufficient.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice based on 2024 pattern",
  sourceUrl: null
},

{
  questionId: 111,
  companyId: 1,
  year: 2024,
  category: "comprehension",
  question:
    "Identify the error in the sentence: 'Neither of the two candidates were selected for the final interview.'",
  options: [
    "Neither of",
    "the two candidates",
    "were selected",
    "for the final interview"
  ],
  answer: "were selected",
  solution:
    "'Neither' is treated as singular in standard agreement here, so 'were selected' should be 'was selected'.",
  difficulty: "Medium",
  sourceType: "company-style",
  sourceName: "TCS NQT verbal practice based on 2024 pattern",
  sourceUrl: null
}
];

async function seedTCS2024Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 1,
      year: 2024,
    });

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} TCS 2024 questions seeded successfully`,
    );

    process.exit(0);
  } catch (error) {
    console.error("Error seeding TCS 2024 questions:", error);

    process.exit(1);
  }
}

seedTCS2024Questions();
