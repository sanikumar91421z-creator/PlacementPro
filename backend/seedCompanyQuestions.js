require("dotenv").config();

const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [
  {
    questionId: 1,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "Two men can complete a piece of work in 14 days. How many men are required to complete the same work in 4 days?",

    options: ["4", "5", "7", "8"],

    answer: "7",

    solution:
      "Total work = 2 × 14 = 28 man-days. Men required to finish the work in 4 days = 28 ÷ 4 = 7.",

    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName: "TCS NQT 25 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619312/TCSNQT25March2025s2",
  },

  {
    questionId: 2,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question: "Find the minimum value of f(x) = 3 + |2x + 11|.",

    options: ["4", "3", "2", "0"],

    answer: "3",

    solution:
      "The minimum possible value of |2x + 11| is 0. Therefore the minimum value of f(x) is 3 + 0 = 3.",

    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName: "TCS NQT 25 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619312/TCSNQT25March2025s2",
  },

  {
    questionId: 3,
    companyId: 1,
    year: 2025,
    category: "reasoning",

    question: "Find the next number in the series: 3, 8, 15, 24, 35, ?",

    options: ["46", "47", "48", "49"],

    answer: "48",

    solution:
      "The differences are 5, 7, 9 and 11. They increase by 2 each time, so the next difference is 13. Therefore 35 + 13 = 48.",

    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName: "TCS NQT 25 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619312/TCSNQT25March2025s2",
  },

  {
    questionId: 4,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "A man sold a toy for ₹10,620 at a loss of 10%. At what price should he sell it to earn a profit of 12%?",

    options: ["₹12,216", "₹13,216", "₹13,440", "₹11,800"],

    answer: "₹13,216",

    solution:
      "₹10,620 represents 90% of the cost price. Cost price = 10,620 ÷ 0.90 = ₹11,800. For a 12% profit, selling price = 11,800 × 1.12 = ₹13,216.",

    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName: "TCS NQT 25 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619312/TCSNQT25March2025s2",
  },

  {
    questionId: 5,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "A man's present age is two and a half times the sum of the present ages of his two daughters. After 30 years, his age will equal the sum of his daughters' ages. What will the man's age be 12 years from now?",

    options: ["50", "56", "62", "68"],

    answer: "62",

    solution:
      "Let the sum of the daughters' present ages be S. The man's present age is 2.5S. After 30 years, the daughters' combined age becomes S + 60 and the man's age becomes 2.5S + 30. Therefore 2.5S + 30 = S + 60, giving 1.5S = 30 and S = 20. His present age is 50, so after 12 years he will be 62.",

    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName: "TCS NQT 25 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619312/TCSNQT25March2025s2",
  },

  {
    questionId: 6,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "A person's income is ₹18,200 and 89% of the income is spent. What is the amount saved?",

    options: ["₹1,802", "₹2,002", "₹2,200", "₹2,820"],

    answer: "₹2,002",

    solution:
      "If 89% is spent, 11% is saved. Savings = 11% of ₹18,200 = 18,200 × 0.11 = ₹2,002.",

    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName: "TCS NQT 25 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619312/TCSNQT25March2025s2",
  },

  {
    questionId: 7,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "Find the greatest number that divides 639 and 1468 leaving remainders 4 and 3 respectively.",

    options: ["25", "5", "45", "15"],

    answer: "5",

    solution:
      "Subtract the respective remainders: 639 - 4 = 635 and 1468 - 3 = 1465. The required number is HCF(635, 1465) = 5.",

    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName: "TCS NQT 25 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619312/TCSNQT25March2025s2",
  },
  {
    questionId: 8,
    companyId: 1,
    year: 2025,
    category: "programming",

    question:
      "Given a string, find the first character that occurs only once and also find the character with the highest frequency. If every character repeats, report that no non-repeating character exists.",

    options: [],

    answer:
      "Return the first non-repeating character and the most frequent character.",

    solution: `public class Main {

    public static void main(String[] args) {

        String str = "swissmississippi";

        if (str == null || str.length() == 0) {
            System.out.println("Invalid Input");
            return;
        }

        int[] frequency = new int[256];

        for (char ch : str.toCharArray()) {
            frequency[ch]++;
        }

        Character firstNonRepeating = null;

        for (char ch : str.toCharArray()) {
            if (frequency[ch] == 1) {
                firstNonRepeating = ch;
                break;
            }
        }

        char mostFrequent = str.charAt(0);
        int maxFrequency = frequency[mostFrequent];

        for (char ch : str.toCharArray()) {
            if (frequency[ch] > maxFrequency) {
                maxFrequency = frequency[ch];
                mostFrequent = ch;
            }
        }

        if (firstNonRepeating == null) {
            System.out.println(
                "First Non-Repeating Character: None"
            );
        } else {
            System.out.println(
                "First Non-Repeating Character: "
                + firstNonRepeating
            );
        }

        System.out.println(
            "Most Repeated Character: "
            + mostFrequent
            + " (appears "
            + maxFrequency
            + " times)"
        );
    }
}`,

    difficulty: "Medium",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT 25 March 2025 memory-based coding report",
    sourceUrl: "https://www.scribd.com/document/847569437/Tcs-Nqt-2025-PDF",
  },

  {
    questionId: 9,
    companyId: 1,
    year: 2025,
    category: "programming",

    question:
      "Given a string, remove consecutive duplicate characters while keeping one occurrence of each consecutive group. For example, aabbbccdaa becomes abcda.",

    options: [],

    answer: "Print the string after removing consecutive duplicates.",

    solution: `public class Main {

    public static void main(String[] args) {

        String str = "aabbbccdaa";

        if (str == null || str.length() == 0) {
            System.out.println("");
            return;
        }

        StringBuilder result = new StringBuilder();

        result.append(str.charAt(0));

        for (int i = 1; i < str.length(); i++) {

            if (str.charAt(i) != str.charAt(i - 1)) {
                result.append(str.charAt(i));
            }
        }

        System.out.println(result);
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT 31 March 2025 candidate-reported question collection",
    sourceUrl:
      "https://www.scribd.com/document/979300442/TCS-TAG-NQT-2024-2025-Actual-Questions-Asked",
  },

  {
    questionId: 10,
    companyId: 1,
    year: 2025,
    category: "programming",

    question:
      "Given two integers L and R, print all prime numbers in the inclusive range from L to R.",

    options: [],

    answer: "Print every prime number between L and R in increasing order.",

    solution: `public class Main {

    public static boolean isPrime(int number) {

        if (number <= 1) {
            return false;
        }

        if (number == 2) {
            return true;
        }

        if (number % 2 == 0) {
            return false;
        }

        for (
            int i = 3;
            i * i <= number;
            i += 2
        ) {
            if (number % i == 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        int L = 10;
        int R = 20;

        for (int number = L; number <= R; number++) {

            if (isPrime(number)) {
                System.out.print(number + " ");
            }
        }
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT 31 March 2025 candidate-reported question collection",
    sourceUrl:
      "https://www.scribd.com/document/979300442/TCS-TAG-NQT-2024-2025-Actual-Questions-Asked",
  },
];

async function seedCompanyQuestions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 1,
      year: 2025,
    });

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} company questions seeded successfully`,
    );

    process.exit(0);
  } catch (error) {
    console.error("Error seeding company questions:", error);

    process.exit(1);
  }
}

seedCompanyQuestions();
