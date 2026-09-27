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
  {
    questionId: 11,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question: "Choose the word closest in meaning to 'meticulous'.",

    options: ["Careless", "Precise", "Tasty", "Rough"],

    answer: "Precise",

    solution:
      "Meticulous means showing great attention to detail and being very careful and precise. Therefore, 'Precise' is the best answer.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276579/download-5",
  },

  {
    questionId: 12,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question:
      "Rearrange the words to form a meaningful sentence: always / she / works / hard",

    options: [
      "She always works hard",
      "Always she hard works",
      "She works always hard",
      "Hard always she works",
    ],

    answer: "She always works hard",

    solution:
      "The natural English word order is Subject + adverb of frequency + verb + adverb. Therefore, the correct sentence is 'She always works hard.'",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276579/download-5",
  },

  {
    questionId: 13,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question:
      "A seminar attracted professionals from various industries, and its innovative topics were a key highlight. What attracted the professionals?",

    options: [
      "The seminar",
      "The industries",
      "The topics",
      "The professionals",
    ],

    answer: "The seminar",

    solution:
      "The passage directly states that the seminar attracted professionals. Therefore, the seminar is the correct answer.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276579/download-5",
  },

  {
    questionId: 14,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question:
      "Choose the most suitable word: His presentation was so ___ that everyone stayed engaged.",

    options: ["Boring", "Captivating", "Short", "Unclear"],

    answer: "Captivating",

    solution:
      "If everyone remained engaged, the presentation held their attention. 'Captivating' means very interesting or attractive, so it fits the sentence best.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276579/download-5",
  },

  {
    questionId: 15,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question: "Choose the antonym of 'frugal'.",

    options: ["Thrifty", "Wasteful", "Economical", "Careful"],

    answer: "Wasteful",

    solution:
      "Frugal means careful about spending money or resources. 'Wasteful' expresses the opposite meaning.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276579/download-5",
  },

  {
    questionId: 16,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question:
      "Identify the incorrect part of the sentence: 'He don't know how to solve the problem.'",

    options: ["He", "don't", "know", "problem"],

    answer: "don't",

    solution:
      "With the third-person singular subject 'He', the correct auxiliary is 'doesn't'. The sentence should be: 'He doesn't know how to solve the problem.'",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276579/download-5",
  },

  {
    questionId: 17,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question:
      "Choose the best way to combine the ideas: 'The book was interesting. It was written by a famous author.'",

    options: [
      "The interesting book was written by a famous author.",
      "The book was interesting so it was written by a famous author.",
      "The book was written by a famous author because it was interesting.",
      "The interesting book and it was written by a famous author.",
    ],

    answer: "The interesting book was written by a famous author.",

    solution:
      "The first option combines both ideas into one grammatically complete sentence without introducing an unsupported cause-and-effect relationship.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276579/download-5",
  },

  {
    questionId: 18,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question:
      "Fill in the blank: The decision was made ___ careful consideration.",

    options: ["Without", "After", "Before", "During"],

    answer: "After",

    solution:
      "The natural expression is 'after careful consideration', meaning that the matter was considered carefully before the decision was made.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276579/download-5",
  },

  {
    questionId: 19,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question: "What does the idiom 'on cloud nine' mean?",

    options: ["Very sad", "Extremely happy", "Confused", "Busy"],

    answer: "Extremely happy",

    solution:
      "'On cloud nine' is an idiom used to describe a state of extreme happiness or excitement.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276579/download-5",
  },

  {
    questionId: 20,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question:
      "Choose the most suitable word: She spoke ___ about her achievements.",

    options: ["Modestly", "Arrogantly", "Loudly", "Vaguely"],

    answer: "Modestly",

    solution:
      "'Modestly' means without excessive pride or boasting and is the appropriate word in this context.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276579/download-5",
  },

  {
    questionId: 21,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question: "Choose the word closest in meaning to 'resilient'.",

    options: ["Fragile", "Adaptable", "Weak", "Rigid"],

    answer: "Adaptable",

    solution:
      "Resilient describes someone or something able to recover from difficulty or adjust effectively to change. Among the given options, 'Adaptable' is the closest.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276579/download-5",
  },

  {
    questionId: 22,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question:
      "Change the sentence to passive voice: 'The teacher explains the lesson to the students.'",

    options: [
      "The lesson is explained to the students by the teacher.",
      "The lesson was explained to the students by the teacher.",
      "The students explain the lesson to the teacher.",
      "The teacher is explained the lesson by the students.",
    ],

    answer: "The lesson is explained to the students by the teacher.",

    solution:
      "The original sentence is in the simple present tense. Its passive form uses 'is + past participle': 'The lesson is explained to the students by the teacher.'",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276592/download-6",
  },

  {
    questionId: 23,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question:
      "In the sentence about rapidly advancing artificial intelligence and robotics, identify the incorrect usage: 'advance faster then even their own developers expected'.",

    options: ["advance", "faster", "then", "expected"],

    answer: "then",

    solution:
      "A comparison requires 'than', not 'then'. The correct expression is 'advance faster than even their own developers expected.'",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276592/download-6",
  },

  {
    questionId: 24,
    companyId: 1,
    year: 2025,
    category: "reasoning",

    question:
      "Five objects P, Q, R, S and T have different weights. R weighs twice as much as T. S weighs one and a half times as much as Q. Also, Q and R together weigh the same as S and T together. What relationship follows between Q and T?",

    options: ["Q = T", "Q = 2T", "Q = 3T", "Q = 4T"],

    answer: "Q = 2T",

    solution:
      "Let T = t. Then R = 2t. Let Q = q, so S = 1.5q. From Q + R = S + T: q + 2t = 1.5q + t. Therefore t = 0.5q, giving q = 2t. Hence Q = 2T.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276592/download-6",
  },

  {
    questionId: 25,
    companyId: 1,
    year: 2025,
    category: "comprehension",

    question:
      "Choose the best word to complete the description: 'Mountainous and meditative, Sikkim is a real-life Shangri-La boasting ___ valleys and soaring snow-capped peaks.'",

    options: ["Lush", "Richly", "Rush", "Wealthy"],

    answer: "Lush",

    solution:
      "'Lush' is commonly used to describe abundant green vegetation and therefore naturally describes valleys. The other options do not fit grammatically or contextually.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 March 1 candidate-reported paper",
    sourceUrl: "https://www.scribd.com/document/843276592/download-6",
  },
  {
    questionId: 26,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "A person travels from A to B at 10 km/h and returns over the same distance at 90 km/h. Find the average speed for the complete journey.",

    options: ["16 km/h", "18 km/h", "20 km/h", "25 km/h"],

    answer: "18 km/h",

    solution:
      "For equal distances, average speed = (2ab) / (a + b). Therefore, average speed = (2 × 10 × 90) / (10 + 90) = 1800 / 100 = 18 km/h.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619316/TCSNQT26March2025",
  },

  {
    questionId: 27,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "The average of 10 numbers was calculated as 40. Later it was found that 39 had been used instead of 48. What is the correct average?",

    options: ["40.5", "40.9", "41", "41.9"],

    answer: "40.9",

    solution:
      "The incorrect total = 10 × 40 = 400. Replace 39 with 48: corrected total = 400 - 39 + 48 = 409. Correct average = 409 / 10 = 40.9.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619316/TCSNQT26March2025",
  },

  {
    questionId: 28,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "A person's monthly income is ₹14,000. Each month ₹5,000 is spent on household needs and ₹2,000 on food. The person also spends one month's savings on their birthday. Find the savings for the year.",

    options: ["₹70,000", "₹77,000", "₹84,000", "₹91,000"],

    answer: "₹77,000",

    solution:
      "Monthly savings = 14,000 - 5,000 - 2,000 = ₹7,000. One month's savings is spent during the birthday month, so savings remain for 11 months. Total yearly savings = 7,000 × 11 = ₹77,000.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619316/TCSNQT26March2025",
  },

  {
    questionId: 29,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "Two men can complete a piece of work in 14 days. How many men are required to complete the same work in 7 days?",

    options: ["2", "3", "4", "7"],

    answer: "4",

    solution:
      "Total work = 2 × 14 = 28 man-days. Men required to complete the work in 7 days = 28 / 7 = 4.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619316/TCSNQT26March2025",
  },

  {
    questionId: 30,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "The average weight of A, B and C is 45 kg. The average weight of A and B is 40 kg, while the average weight of B and C is 47 kg. Find the weight of B.",

    options: ["37 kg", "39 kg", "41 kg", "43 kg"],

    answer: "39 kg",

    solution:
      "A + B + C = 45 × 3 = 135. A + B = 80 and B + C = 94. Adding the last two equations gives A + 2B + C = 174. Since A + B + C = 135, subtracting gives B = 174 - 135 = 39 kg.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619316/TCSNQT26March2025",
  },

  {
    questionId: 31,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "Two friends are 2.8 km apart and walk toward each other at 3.8 km/h and 4.6 km/h. After how much time will they meet?",

    options: ["15 minutes", "20 minutes", "25 minutes", "30 minutes"],

    answer: "20 minutes",

    solution:
      "Relative speed = 3.8 + 4.6 = 8.4 km/h. Time = 2.8 / 8.4 = 1/3 hour. Therefore, time = 20 minutes = 1200 seconds.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619316/TCSNQT26March2025",
  },

  {
    questionId: 32,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "The product of two positive numbers is 980. One number is five times the other. Find their sum.",

    options: ["72", "80", "84", "90"],

    answer: "84",

    solution:
      "Let the smaller number be x. The other is 5x. Then 5x² = 980, so x² = 196 and x = 14. The other number is 70. Their sum is 14 + 70 = 84.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619316/TCSNQT26March2025",
  },

  {
    questionId: 33,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "The radius of a larger sphere is 14 cm greater than that of a smaller sphere. The difference between their surface areas is 3168π cm². Find the diameter of the larger sphere.",

    options: ["28 cm", "30 cm", "32 cm", "36 cm"],

    answer: "32 cm",

    solution:
      "Let the smaller radius be r, so the larger radius is r + 14. Difference in surface areas = 4π[(r + 14)² - r²] = 3168π. Dividing by 4π gives (r + 14)² - r² = 792. Thus 28r + 196 = 792, giving r = 596/28. However, the memory-based source reports the larger radius as 16 cm and the answer as 32 cm diameter. Because the recalled numerical wording is internally inconsistent, this item should be treated as source-reported rather than a mathematically verified question.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619316/TCSNQT26March2025",
  },

  {
    questionId: 34,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "Find the compound interest on ₹5,000 for 2 years at 10% per annum, compounded annually.",

    options: ["₹1,000", "₹1,050", "₹1,100", "₹1,150"],

    answer: "₹1,050",

    solution:
      "Amount = 5000 × (1 + 10/100)² = 5000 × 1.21 = ₹6,050. Compound interest = 6,050 - 5,000 = ₹1,050.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619316/TCSNQT26March2025",
  },

  {
    questionId: 35,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question: "Find the minimum value of f(x) = 3 + |2x + 9|.",

    options: ["0", "2", "3", "9"],

    answer: "3",

    solution:
      "An absolute value can never be negative. Its minimum value is 0, reached when 2x + 9 = 0. Therefore the minimum value of f(x) is 3 + 0 = 3.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619316/TCSNQT26March2025",
  },

  {
    questionId: 36,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "How many different selections of two letters can be made from the multiset A, A, A, B, B, C, C when selections are distinguished only by letter values?",

    options: ["3", "4", "5", "6"],

    answer: "6",

    solution:
      "The distinct two-letter selections are AA, AB, AC, BB, BC and CC. Therefore there are 6 possible selections.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 March 2025 memory-based report",
    sourceUrl: "https://www.scribd.com/document/855619316/TCSNQT26March2025",
  },

  {
    questionId: 37,
    companyId: 1,
    year: 2025,
    category: "programming",

    question:
      "Given two positive integers A and B, find their Least Common Multiple (LCM).",

    options: [],

    answer: "Use LCM(A, B) = (A / GCD(A, B)) × B.",

    solution: `import java.util.Scanner;

public class Main {

    static long gcd(long a, long b) {
        while (b != 0) {
            long temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        long a = sc.nextLong();
        long b = sc.nextLong();

        long gcdValue = gcd(a, b);
        long lcm = (a / gcdValue) * b;

        System.out.println(lcm);

        sc.close();
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 March 2025 memory-based coding report",
    sourceUrl: "https://www.scribd.com/document/855619316/TCSNQT26March2025",
  },

  {
    questionId: 38,
    companyId: 1,
    year: 2025,
    category: "programming",

    question:
      "Given an inclusive range [L, U] and a set of numbers present inside that range, find all missing numbers and group consecutive missing values into ranges.",

    options: [],

    answer:
      "Traverse from L to U and combine consecutive values that are absent from the given set.",

    solution: `import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int lower = sc.nextInt();
        int upper = sc.nextInt();
        int n = sc.nextInt();

        Set<Integer> present = new HashSet<>();

        for (int i = 0; i < n; i++) {
            present.add(sc.nextInt());
        }

        int current = lower;

        while (current <= upper) {

            if (present.contains(current)) {
                current++;
                continue;
            }

            int start = current;

            while (
                current + 1 <= upper &&
                !present.contains(current + 1)
            ) {
                current++;
            }

            int end = current;

            System.out.print(
                "[" + start + " " + end + "] "
            );

            current++;
        }

        sc.close();
    }
}`,

    difficulty: "Medium",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT 26 March 2025 memory-based coding report",
    sourceUrl: "https://www.scribd.com/document/855619316/TCSNQT26March2025",
  },

  {
    questionId: 39,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "The average of 10 numbers is 40. One value was recorded as 40 instead of 45. What is the corrected average?",

    options: ["40", "40.2", "40.5", "41"],

    answer: "40.5",

    solution:
      "Original calculated total = 10 × 40 = 400. The recorded value must increase by 45 - 40 = 5. Correct total = 405. Correct average = 405 / 10 = 40.5.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 reported-question collection",
    sourceUrl: "https://onlinestudy4u.in/tcs-nqt-2025-actual-asked-questions/",
  },

  {
    questionId: 40,
    companyId: 1,
    year: 2025,
    category: "aptitude",

    question:
      "A man covers three equal distances at speeds of 10 km/h, 20 km/h and 30 km/h respectively. Find his average speed for the entire journey.",

    options: ["15 km/h", "180/11 km/h", "20 km/h", "22 km/h"],

    answer: "180/11 km/h",

    solution:
      "Let each distance be d. Total distance = 3d. Total time = d/10 + d/20 + d/30 = d(6 + 3 + 2)/60 = 11d/60. Average speed = 3d ÷ (11d/60) = 180/11 km/h, approximately 16.36 km/h.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2025 reported-question collection",
    sourceUrl: "https://onlinestudy4u.in/tcs-nqt-2025-actual-asked-questions/",
  },
  {
    questionId: 41,
    companyId: 1,
    year: 2025,
    category: "programming",

    question:
      "Given an array of N integers and an integer K, find the maximum possible sum obtained by selecting two non-overlapping subarrays, each of length K.",

    options: [],

    answer:
      "Calculate every K-length window sum and choose two windows whose indices do not overlap and whose combined sum is maximum.",

    solution: `import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int k = sc.nextInt();

        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        if (n < 2 * k) {
            System.out.println("Not possible");
            sc.close();
            return;
        }

        int windowCount = n - k + 1;
        long[] windowSum = new long[windowCount];

        long sum = 0;

        for (int i = 0; i < k; i++) {
            sum += arr[i];
        }

        windowSum[0] = sum;

        for (int i = k; i < n; i++) {
            sum += arr[i];
            sum -= arr[i - k];

            windowSum[i - k + 1] = sum;
        }

        long maxSum = Long.MIN_VALUE;

        for (int i = 0; i < windowCount; i++) {

            for (
                int j = i + k;
                j < windowCount;
                j++
            ) {
                maxSum = Math.max(
                    maxSum,
                    windowSum[i] + windowSum[j]
                );
            }
        }

        System.out.println(maxSum);

        sc.close();
    }
}`,

    difficulty: "Hard",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT 31 March 2025 candidate-reported coding collection",
    sourceUrl:
      "https://www.scribd.com/document/979300442/TCS-TAG-NQT-2024-2025-Actual-Questions-Asked",
  },

  {
    questionId: 42,
    companyId: 1,
    year: 2025,
    category: "programming",

    question:
      "Given a required string length N and the available counts of characters A, B and C, generate every unique string that uses exactly those character counts. If the total available character count is not equal to N, report that the required string cannot be formed.",

    options: [],

    answer:
      "Use backtracking. At each position, append A, B or C only when the remaining count of that character is greater than zero.",

    solution: `import java.util.*;

public class Main {

    static List<String> result = new ArrayList<>();

    static void generate(
        String current,
        int n,
        int a,
        int b,
        int c
    ) {

        if (current.length() == n) {
            result.add(current);
            return;
        }

        if (a > 0) {
            generate(
                current + "A",
                n,
                a - 1,
                b,
                c
            );
        }

        if (b > 0) {
            generate(
                current + "B",
                n,
                a,
                b - 1,
                c
            );
        }

        if (c > 0) {
            generate(
                current + "C",
                n,
                a,
                b,
                c - 1
            );
        }
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        if (a + b + c != n) {
            System.out.println("Not possible");
            sc.close();
            return;
        }

        generate("", n, a, b, c);

        for (String value : result) {
            System.out.println(value);
        }

        sc.close();
    }
}`,

    difficulty: "Hard",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS TAG 31 January 2025 candidate-reported coding collection",
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
