require("dotenv").config();

const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [
  // TCS 2023 questions go here
  {
    questionId: 112,
    companyId: 1,
    year: 2023,
    category: "programming",

    question:
      "Given two strings A and B, create string C from A by deleting every character from A that occurs anywhere in B. Return the remaining characters in their original order.",

    options: [],

    answer: "Remove from A every character that belongs to B.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String a = sc.nextLine();
        String b = sc.nextLine();

        Set<Character> remove = new HashSet<>();

        for (char ch : b.toCharArray()) {
            remove.add(ch);
        }

        StringBuilder result = new StringBuilder();

        for (char ch : a.toCharArray()) {
            if (!remove.contains(ch)) {
                result.append(ch);
            }
        }

        System.out.println(result);

        sc.close();
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT All Slots Analysis 2023",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-5/",
  },

  {
    questionId: 113,
    companyId: 1,
    year: 2023,
    category: "programming",

    question:
      "Given an array, print all distinct elements while preserving the order of their first occurrence.",

    options: [],

    answer:
      "Maintain a set of values already encountered and print a value only when it appears for the first time.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        Set<Integer> seen = new HashSet<>();

        for (int i = 0; i < n; i++) {
            int value = sc.nextInt();

            if (seen.add(value)) {
                System.out.print(value + " ");
            }
        }

        sc.close();
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT candidate-reported coding question",
    sourceUrl:
      "https://prepinsta.com/interview-preparation/tcs-nqt-interview-experience/",
  },

  {
    questionId: 114,
    companyId: 1,
    year: 2023,
    category: "programming",

    question:
      "Given an integer sequence, find the smallest positive integer that is absent from the sequence.",

    options: [],

    answer:
      "Store all positive values in a set and starting from 1 find the first value that is not present.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        Set<Integer> values = new HashSet<>();

        for (int i = 0; i < n; i++) {
            int value = sc.nextInt();

            if (value > 0) {
                values.add(value);
            }
        }

        int missing = 1;

        while (values.contains(missing)) {
            missing++;
        }

        System.out.println(missing);

        sc.close();
    }
}`,

    difficulty: "Medium",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "TCS NQT All Slots Analysis 2023",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-6/",
  },

  {
    questionId: 115,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "There are five rods K, L, M, N and O. O weighs twice as much as L. L weighs as much as K and M together. M weighs twice as much as K. N weighs three times as much as M. If N weighs 90 kg, what is the weight of O?",

    options: ["105 kg", "60 kg", "120 kg", "90 kg"],

    answer: "90 kg",

    solution:
      "N = 90 and N = 3M, therefore M = 30. Since M = 2K, K = 15. L = K + M = 45. O = 2L = 90 kg.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT Reasoning Ability Previous-Year Questions",
    sourceUrl: "https://talentbattle.in/tcs/reasoning-ability",
  },

  {
    questionId: 116,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question: "Which is the wrong term in the series: CMQ, FPT, JTX, OYC, UFI?",

    options: ["FPT", "OYC", "JTX", "UFI"],

    answer: "UFI",

    solution:
      "The alphabet-position pattern followed by the preceding groups is broken by UFI, so UFI is the incorrect term.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT Reasoning Ability Previous-Year Questions",
    sourceUrl: "https://talentbattle.in/tcs/reasoning-ability",
  },

  {
    questionId: 117,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "There are four rows and six columns in the first layer of a box. Each successive layer has one more row and one more column than the previous layer. How many positions are there in the fourth layer?",

    options: ["63", "24", "48", "35"],

    answer: "63",

    solution:
      "Layer 1 is 4 × 6. Therefore layer 2 is 5 × 7, layer 3 is 6 × 8 and layer 4 is 7 × 9. Thus the fourth layer contains 63 positions.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT All Slots Analysis 2023",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-5/",
  },

  {
    questionId: 118,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question:
      "Identify the part containing an error: 'Everyday life have become more complicated with the advancement in mobile technology.'",

    options: [
      "More complicated with the",
      "Everyday life have become",
      "No error",
      "Advancement in mobile technology",
    ],

    answer: "Everyday life have become",

    solution:
      "'Life' is singular, so 'has' must be used instead of 'have'. The correct phrase is 'Everyday life has become'.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT Verbal Ability Previous-Year Questions",
    sourceUrl: "https://talentbattle.in/tcs/verbal-ability",
  },

  {
    questionId: 119,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "In a code language, 'Our Laptop not functioning' is coded as 'tz jz ez sz', while 'Laptop consists Camera and Touchpad' is coded as 'rz fz mz jz uz'. Another set says 'Smooth preparation is good' is 'lz dz pz gz' and 'Smooth functioning is good' is 'pz gz dz sz'. What is the code for 'functioning'?",

    options: ["jz", "sz", "pz", "gz"],

    answer: "sz",

    solution:
      "Comparing the first pair does not uniquely isolate functioning. In the second pair, the common words Smooth, is and good account for the three common codes, leaving sz as the code for functioning.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT All Slots Analysis 2023",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-5/",
  },

  {
    questionId: 120,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "A can finish a piece of work in 15 days and B can finish the same work in 10 days. How many days will they require if they work together?",

    options: ["5 days", "6 days", "7.5 days", "8 days"],

    answer: "6 days",

    solution:
      "A's one-day work is 1/15 and B's is 1/10. Together they complete 1/15 + 1/10 = 1/6 of the work per day. Therefore they require 6 days.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName:
      "TCS NQT 2023 Time and Work practice based on reported syllabus",
    sourceUrl: null,
  },

  {
    questionId: 121,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question: "A train covers 360 km in 4.5 hours. What is its average speed?",

    options: ["70 km/h", "75 km/h", "80 km/h", "90 km/h"],

    answer: "80 km/h",

    solution: "Average speed = distance ÷ time = 360 ÷ 4.5 = 80 km/h.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName:
      "TCS NQT 2023 Time and Distance practice based on reported syllabus",
    sourceUrl: null,
  },
  {
    questionId: 122,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "The sum of n observations is 11280 and their mean is 705. Find the value of n.",

    options: ["15", "16", "14", "13"],

    answer: "16",

    solution:
      "Mean = Sum / Number of observations. Therefore 705 = 11280/n. Hence n = 11280/705 = 16.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2023 Day 6 Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-6/",
  },

  {
    questionId: 123,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "The area of a triangle with base 16 cm is equal to the area of a square with side 14 cm. What is the altitude of the triangle?",

    options: ["24.5 cm", "28 cm", "21.4 cm", "26.2 cm"],

    answer: "24.5 cm",

    solution:
      "Area of square = 14 × 14 = 196 cm². Triangle area = 1/2 × 16 × h = 8h. Therefore 8h = 196 and h = 24.5 cm.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2023 Day 6 Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-6/",
  },

  {
    questionId: 124,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "A builder can build a wall in 16 hours while a destroyer can completely demolish it in 40 hours. They work together for 24 hours, after which the destroyer leaves. What is the total time required to build the wall?",

    options: [
      "26 hours 46 minutes",
      "25 hours 6 minutes",
      "24 hours 16 minutes",
      "25 hours 36 minutes",
    ],

    answer: "25 hours 36 minutes",

    solution:
      "Builder's rate = 1/16 and destroyer's rate = -1/40. Combined rate = 3/80 wall per hour. In 24 hours they complete 72/80 = 9/10 of the wall. Remaining work = 1/10. Builder alone requires (1/10) × 16 = 1.6 hours = 1 hour 36 minutes. Total = 25 hours 36 minutes.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2023 Day 6 Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-6/",
  },

  {
    questionId: 125,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "Find the smallest number between 300 and 400 which leaves remainders 1, 2, 3, 4 and 5 when divided by 2, 3, 4, 5 and 6 respectively.",

    options: ["349", "329", "339", "359"],

    answer: "359",

    solution:
      "In each case the remainder is one less than the divisor, so N+1 must be divisible by 2,3,4,5 and 6. Their LCM is 60. Between 301 and 401, 360 is divisible by 60. Therefore N = 360-1 = 359.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-5/",
  },

  //   {
  //     questionId: 126,
  //     companyId: 1,
  //     year: 2023,
  //     category: "aptitude",

  //     question:
  //       "What is the average, rounded to the nearest integer, of all semiprime numbers between 20 and 40?",

  //     options: ["30", "32", "31", "28"],

  //     answer: "30",

  //     solution:
  //       "The semiprimes in this range are 21, 22, 25, 26, 33, 34, 35 and 38. Their sum is 234 and their average is 234/8 = 29.25, which rounds to 29. Note: the source reports 30, indicating an inconsistency in the original reported question/answer.",

  //     difficulty: "Medium",

  //     sourceType: "previous-year",
  //     sourceName: "TCS NQT Slot Analysis - source reports answer 30",
  //     sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-5/",
  //   },

  {
    questionId: 127,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "A number is increased by 20% and then decreased by 20%. What is the overall percentage change?",

    options: ["No change", "4% decrease", "4% increase", "2% decrease"],

    answer: "4% decrease",

    solution:
      "Assume the number is 100. After a 20% increase it becomes 120. Decreasing 120 by 20% gives 96. Therefore the final value is 4% lower than the original.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 128,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "The ratio of two numbers is 3:7 and their sum is 120. What is the larger number?",

    options: ["72", "84", "96", "90"],

    answer: "84",

    solution:
      "Total ratio parts = 3+7 = 10. One part = 120/10 = 12. Larger number = 7×12 = 84.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 129,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "An article costing Rs. 800 is sold for Rs. 920. What is the profit percentage?",

    options: ["12%", "15%", "18%", "20%"],

    answer: "15%",

    solution:
      "Profit = 920-800 = Rs. 120. Profit percentage = (120/800)×100 = 15%.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 130,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "A person travels 150 km at 50 km/h and another 150 km at 75 km/h. What is the average speed for the entire journey?",

    options: ["55 km/h", "60 km/h", "62.5 km/h", "65 km/h"],

    answer: "60 km/h",

    solution:
      "First journey takes 150/50 = 3 hours and the second takes 150/75 = 2 hours. Total distance = 300 km and total time = 5 hours. Average speed = 300/5 = 60 km/h.",

    difficulty: "Medium",

    sourceType: "company-style",
    sourceName: "TCS NQT quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 131,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "The average of eight numbers is 24. If one number, 18, is replaced by 34, what is the new average?",

    options: ["24", "25", "26", "28"],

    answer: "26",

    solution:
      "Original total = 8×24 = 192. Replacing 18 with 34 increases the total by 16, giving 208. New average = 208/8 = 26.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT quantitative practice",
    sourceUrl: null,
  },
  {
    questionId: 132,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "Find the wrong term in the following letter-cluster series: MHB, OJD, RMG, VQK, ZUP.",

    options: ["MHB", "RMG", "VQK", "ZUP"],

    answer: "ZUP",

    solution:
      "The source identifies ZUP as the term that breaks the letter-cluster pattern.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2023 Day 6 Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-6/",
  },

  {
    questionId: 133,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "Identify the letter cluster that does not belong to the series: DW, FU, GT, IR, JQ, NL, MN, OL.",

    options: ["JQ", "MN", "NL", "OL"],

    answer: "NL",

    solution:
      "According to the reported TCS NQT slot question, NL is the cluster that does not follow the pattern of the series.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2023 Day 6 Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-6/",
  },

  {
    questionId: 134,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question: "Find the next number in the series: 14, 29, 59, 119, 239, ?",

    options: ["470", "522", "488", "479"],

    answer: "479",

    solution:
      "Each term is obtained by multiplying the previous term by 2 and adding 1: 14×2+1=29, 29×2+1=59, 59×2+1=119 and 119×2+1=239. Therefore 239×2+1=479.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis Question",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-4/",
  },

  {
    questionId: 135,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "Select the number that is related to 18 in the same way that 111 is related to 15 and 153 is related to 21.",

    options: ["144", "152", "145", "132"],

    answer: "132",

    solution:
      "The reported relationship gives 15 → 111 and 21 → 153. Applying the same pattern to 18 gives 132.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis Question",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-4/",
  },

  {
    questionId: 136,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "Identify the letter cluster that does not belong to the following series: CX, GT, EV, DW, HS, ZA, MN, UF.",

    options: ["ZA", "UF", "HS", "MN"],

    answer: "HS",

    solution:
      "The reported TCS NQT question identifies HS as the pair that does not follow the relationship used by the other clusters.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis - Logical Reasoning",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slot-analysis-2023-day-1/",
  },

  {
    questionId: 137,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "In a code language, P&Q means P is the son of Q, P@Q means P is the mother of Q, P%Q means P is the brother of Q, and P#Q means P is the husband of Q. How is K related to Q in the expression K%G&T#V@S@N%Q?",

    options: ["Father", "Father's brother", "Mother's brother", "Brother"],

    answer: "Mother's brother",

    solution:
      "Following the family relationships represented by the symbols in sequence establishes K as the brother of Q's mother. Therefore K is Q's maternal uncle.",

    difficulty: "Hard",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis - Blood Relations",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slot-analysis-2023-day-1/",
  },

  {
    questionId: 138,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question: "Find the next number in the series: 5, 11, 23, 47, 95, ?",

    options: ["189", "190", "191", "192"],

    answer: "191",

    solution:
      "Each number is twice the previous number plus 1. Therefore 95×2+1 = 191.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 139,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "If COMPUTER is coded as DPNQVUFS by shifting every letter one position forward, how will MACHINE be coded?",

    options: ["NBDIJOF", "NBDHIOF", "MBDIJOF", "NCEIJOF"],

    answer: "NBDIJOF",

    solution:
      "Shift every character one position forward: M→N, A→B, C→D, H→I, I→J, N→O and E→F. Therefore MACHINE becomes NBDIJOF.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 140,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "A person walks 8 km north, then 6 km east, and finally 8 km south. How far and in which direction is the person from the starting point?",

    options: ["6 km East", "6 km West", "8 km East", "14 km East"],

    answer: "6 km East",

    solution:
      "The 8 km north and 8 km south movements cancel each other. Only the 6 km eastward displacement remains.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 141,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "Statements: All engineers are graduates. Some graduates are programmers. Which conclusion definitely follows?",

    options: [
      "All programmers are engineers",
      "Some engineers are programmers",
      "All engineers are graduates",
      "No graduate is a programmer",
    ],

    answer: "All engineers are graduates",

    solution:
      "The first statement directly establishes that all engineers are graduates. The other relationships are not guaranteed by the given statements.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 142,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question:
      "Identify the erroneous part: 'After it had rained continuously for a week, then the cricket field was a massive sea of mud.'",

    options: [
      "A massive sea of mud",
      "For a week",
      "After it had rained continuously",
      "Then the cricket field was",
    ],

    answer: "Then the cricket field was",

    solution:
      "Using 'after' already establishes the time relationship, so 'then' is redundant. The sentence should continue with 'the cricket field was...'.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2023 Day 6 Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-6/",
  },

  {
    questionId: 143,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question:
      "Choose the best replacement for the incorrect phrase in: 'I do not claim if I am always correct but I seriously doubt his competence and would not like to take a risk.'",

    options: [
      "That I am always",
      "To take some",
      "Competition",
      "Yet I have serious",
    ],

    answer: "That I am always",

    solution:
      "The construction should be 'I do not claim that I am always correct'. Therefore 'that I am always' correctly replaces the erroneous phrase.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT 2023 Day 6 Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-6/",
  },

  {
    questionId: 144,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question:
      "Identify the erroneous part: 'Developing the ability to understand and use nonverbal communication can help you connect with others and build much more better relationships at home and work.'",

    options: [
      "Developing the ability to understand",
      "Connect with others",
      "Build much more better relationships",
      "At home and work",
    ],

    answer: "Build much more better relationships",

    solution:
      "'Better' is already comparative, so using 'more better' is incorrect. It should be 'build much better relationships'.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis - Verbal",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-5/",
  },

  {
    questionId: 145,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question:
      "Identify the error: 'I have known him for about three years but met his mother only since last night.'",

    options: [
      "For about three years",
      "Only since last night",
      "I have known him",
      "But met his mother",
    ],

    answer: "Only since last night",

    solution:
      "'Since' indicates a starting point for an action continuing over time. Here the intended meaning is that the meeting occurred at a specific past time, so 'only last night' is appropriate.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis - Verbal",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slot-analysis-2023-day-2/",
  },

  {
    questionId: 146,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question:
      "Identify the erroneous part: 'Everyday life have become more complicated with the advancement in mobile technology.'",

    options: [
      "More complicated with the",
      "Everyday life have become",
      "No error",
      "Advancement in mobile technology",
    ],

    answer: "Everyday life have become",

    solution:
      "'Life' is singular, so the correct verb is 'has'. The phrase should be 'Everyday life has become'.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT Verbal Ability Previous-Year Questions",
    sourceUrl: "https://talentbattle.in/tcs/verbal-ability",
  },

  {
    questionId: 147,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question:
      "Fill in the blank: The new policy will come ___ effect from Monday.",

    options: ["in", "into", "on", "at"],

    answer: "into",

    solution:
      "The standard expression is 'come into effect', meaning to begin operating or become applicable.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 148,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question: "Choose the synonym of 'concise'.",

    options: ["Lengthy", "Brief", "Confusing", "Indirect"],

    answer: "Brief",

    solution:
      "'Concise' means expressing something clearly using few words. 'Brief' is the closest synonym.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 149,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question: "Choose the antonym of 'optimistic'.",

    options: ["Hopeful", "Positive", "Pessimistic", "Confident"],

    answer: "Pessimistic",

    solution:
      "'Optimistic' means expecting positive outcomes. 'Pessimistic' means expecting negative outcomes and is its opposite.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 150,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question: "Choose the grammatically correct sentence.",

    options: [
      "He has completed the work yesterday.",
      "He completed the work yesterday.",
      "He had complete the work yesterday.",
      "He completing the work yesterday.",
    ],

    answer: "He completed the work yesterday.",

    solution:
      "'Yesterday' refers to a completed past time, so the simple past form 'completed' is appropriate.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 151,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question:
      "Read the statement: 'Automation can perform repetitive tasks quickly, but human judgment remains important when decisions require context, creativity or empathy.' Which conclusion is best supported?",

    options: [
      "Automation can replace every human task.",
      "Automation has no practical use.",
      "Human judgment remains valuable for some types of decisions.",
      "Repetitive tasks should never be automated.",
    ],

    answer: "Human judgment remains valuable for some types of decisions.",

    solution:
      "The passage recognizes automation's usefulness for repetitive work while explicitly stating that contextual, creative and empathetic decisions still benefit from human judgment.",

    difficulty: "Medium",

    sourceType: "company-style",
    sourceName: "TCS NQT verbal practice",
    sourceUrl: null,
  },
  {
    questionId: 152,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "In a class, the ratio of boys to girls is 8:7. The average weight of the boys is 20% less than the average weight of the girls. If the total weight of the class is 3417 kg, find the difference between the total weight of all girls and all boys.",

    options: ["143 kg", "173 kg", "163 kg", "153 kg"],

    answer: "153 kg",

    solution:
      "Let the average weight of a girl be 5x, so the average weight of a boy is 4x. Let there be 8k boys and 7k girls. Total weight = 8k(4x) + 7k(5x) = 67kx = 3417, so kx = 51. Boys' total weight = 32×51 = 1632 kg and girls' total weight = 35×51 = 1785 kg. Difference = 153 kg.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-5/",
  },

  {
    questionId: 153,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "A sum is invested at compound interest for 2 years at 20% per annum. It earns Rs. 482 more when interest is compounded half-yearly than when compounded yearly. Find the principal.",

    options: ["Rs. 30000", "Rs. 20000", "Rs. 40000", "Rs. 15000"],

    answer: "Rs. 20000",

    solution:
      "For annual compounding, amount factor = 1.2² = 1.44. For half-yearly compounding, the rate is 10% per half-year for 4 periods, giving factor 1.1⁴ = 1.4641. Difference = 0.0241P = 482. Therefore P = 482/0.0241 = Rs. 20000.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-5/",
  },

  {
    questionId: 154,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "Six bells ring at intervals of 10 seconds, 15 seconds, 30 seconds, 50 seconds, 60 seconds and 75 seconds. If they ring together at 10:00 AM, how many times will they ring together during the next 3 hours, including 10:00 AM?",

    options: ["37 times", "31 times", "35 times", "33 times"],

    answer: "37 times",

    solution:
      "LCM of 10, 15, 30, 50, 60 and 75 is 300 seconds = 5 minutes. Three hours contain 180 minutes. They therefore meet 180/5 = 36 times after 10:00 AM. Including the initial ringing gives 37 times.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-5/",
  },

  {
    questionId: 155,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "One-eighth of a number exceeds one-tenth of the same number by 13.75. Find the number.",

    options: ["495", "275", "110", "550"],

    answer: "550",

    solution:
      "Let the number be x. Then x/8 - x/10 = 13.75. Therefore x/40 = 13.75 and x = 550.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-5/",
  },

  {
    questionId: 156,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "A shopkeeper gives a 10% discount on an article marked at Rs. 2000. What is the selling price?",

    options: ["Rs. 1600", "Rs. 1700", "Rs. 1800", "Rs. 1900"],

    answer: "Rs. 1800",

    solution:
      "Discount = 10% of 2000 = Rs. 200. Selling price = 2000 - 200 = Rs. 1800.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 157,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "A car covers 240 km in 4 hours. If its speed increases by 20%, how much time will it take to cover the same distance?",

    options: [
      "3 hours",
      "3 hours 20 minutes",
      "3 hours 30 minutes",
      "3 hours 40 minutes",
    ],

    answer: "3 hours 20 minutes",

    solution:
      "Original speed = 240/4 = 60 km/h. Increased speed = 60×1.20 = 72 km/h. Required time = 240/72 = 10/3 hours = 3 hours 20 minutes.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 158,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question: "The simple interest on Rs. 5000 at 8% per annum for 3 years is:",

    options: ["Rs. 1000", "Rs. 1100", "Rs. 1200", "Rs. 1400"],

    answer: "Rs. 1200",

    solution: "Simple Interest = P×R×T/100 = 5000×8×3/100 = Rs. 1200.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 159,
    companyId: 1,
    year: 2023,
    category: "aptitude",

    question:
      "If 12 workers complete a job in 15 days, how many days will 20 workers take to complete the same job, assuming equal efficiency?",

    options: ["8 days", "9 days", "10 days", "12 days"],

    answer: "9 days",

    solution:
      "Total work = 12×15 = 180 worker-days. Time required by 20 workers = 180/20 = 9 days.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 160,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "Seven drivers P, Q, R, S, T, U and W reach a city in a particular sequence. U reaches immediately before P. T reaches immediately after P and W immediately after T. R is the last person to reach. Who is last in the sequence?",

    options: ["P", "W", "R", "S"],

    answer: "R",

    solution:
      "The information directly states that R is the last person to reach. Therefore the answer is R.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slots-analysis-2023-day-5/",
  },

  {
    questionId: 161,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "In a certain code language, MEHAK is written as 45812. How is ARTIT written in the same code?",

    options: ["19292", "19282", "18292", "29192"],

    answer: "19292",

    solution:
      "Using the character-to-digit mapping specified by the reported coding-decoding question, ARTIT is represented as 19292.",

    difficulty: "Medium",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slot-analysis-2023-day-2/",
  },

  {
    questionId: 162,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "Kavish, Raman and Harsh are creative. Kavish, Preet and Joy are humble. Preet, Harsh and Joy are independent. Kavish, Raman and Joy are courageous. Who is neither humble nor courageous?",

    options: ["Raman", "Harsh", "Kavish", "Preet"],

    answer: "Harsh",

    solution:
      "Harsh appears among the creative and independent people but does not appear in either the humble or courageous groups. Therefore Harsh is neither humble nor courageous.",

    difficulty: "Easy",

    sourceType: "previous-year",
    sourceName: "TCS NQT Slot Analysis",
    sourceUrl: "https://prepinsta.com/tcs-nqt-all-slot-analysis-2023-day-2/",
  },

  {
    questionId: 163,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question: "Find the next number in the series: 3, 8, 18, 38, 78, ?",

    options: ["148", "156", "158", "160"],

    answer: "158",

    solution:
      "Each term is obtained by multiplying the previous term by 2 and adding 2: 3×2+2=8, 8×2+2=18, 18×2+2=38 and 38×2+2=78. Therefore 78×2+2=158.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 164,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "A is the brother of B. B is the sister of C. C is the father of D. How is A related to D?",

    options: ["Brother", "Uncle", "Father", "Grandfather"],

    answer: "Uncle",

    solution:
      "A and C are siblings because both are siblings of B. Since C is D's father, A is the brother of D's father and therefore D's uncle.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 165,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "A person faces north, turns right, walks 10 metres, turns right again and walks 10 metres. Which direction is the person now facing?",

    options: ["North", "South", "East", "West"],

    answer: "South",

    solution:
      "Starting north, the first right turn makes the person face east. The second right turn makes the person face south.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 166,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question: "Find the odd one out: 16, 25, 36, 49, 63, 64.",

    options: ["25", "49", "63", "64"],

    answer: "63",

    solution:
      "16, 25, 36, 49 and 64 are perfect squares: 4², 5², 6², 7² and 8². 63 is not a perfect square.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 167,
    companyId: 1,
    year: 2023,
    category: "reasoning",

    question:
      "If all pens are stationery items and some stationery items are expensive, which conclusion is definitely true?",

    options: [
      "All expensive items are pens",
      "Some pens are expensive",
      "All pens are stationery items",
      "No stationery item is expensive",
    ],

    answer: "All pens are stationery items",

    solution:
      "This conclusion is directly given in the first statement. The other conclusions cannot be guaranteed from the information provided.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 168,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question: "Choose the correctly spelled word.",

    options: ["Accomodation", "Accommodation", "Acommodation", "Accommadation"],

    answer: "Accommodation",

    solution:
      "The correct spelling is 'Accommodation', containing double c and double m.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 169,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question: "Choose the synonym of 'abundant'.",

    options: ["Scarce", "Plentiful", "Limited", "Rare"],

    answer: "Plentiful",

    solution:
      "'Abundant' means existing in large quantities. 'Plentiful' has the closest meaning.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 170,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question: "Choose the antonym of 'expand'.",

    options: ["Increase", "Extend", "Contract", "Develop"],

    answer: "Contract",

    solution:
      "'Expand' means to become larger, whereas 'contract' means to become smaller.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 171,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question: "Fill in the blank: She has been working here ___ 2020.",

    options: ["for", "since", "from", "by"],

    answer: "since",

    solution:
      "'Since' is used with a specific starting point in time. Therefore 'since 2020' is correct.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 172,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question: "Choose the grammatically correct sentence.",

    options: [
      "Neither of the students were absent.",
      "Neither of the students was absent.",
      "Neither of the student were absent.",
      "Neither students was absent.",
    ],

    answer: "Neither of the students was absent.",

    solution:
      "'Neither' is treated as singular in standard formal usage, so it takes the singular verb 'was'.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 173,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question:
      "Choose the correct passive form of: 'The team completed the project.'",

    options: [
      "The project completed by the team.",
      "The project was completed by the team.",
      "The project is completed by the team.",
      "The team was completed by the project.",
    ],

    answer: "The project was completed by the team.",

    solution:
      "The original sentence is in the simple past tense. Its passive construction is 'was + past participle', giving 'The project was completed by the team.'",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 174,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question:
      "Read the statement: 'Remote work reduces commuting time and can provide employees with greater flexibility. However, effective communication and collaboration remain important for distributed teams.' Which statement is supported by the passage?",

    options: [
      "Remote work eliminates the need for communication.",
      "Remote work always increases productivity.",
      "Remote work can provide flexibility, but communication remains important.",
      "All employees prefer working remotely.",
    ],

    answer:
      "Remote work can provide flexibility, but communication remains important.",

    solution:
      "The passage explicitly mentions flexibility as an advantage while also emphasizing the continued importance of communication and collaboration.",

    difficulty: "Medium",

    sourceType: "company-style",
    sourceName: "TCS NQT verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 175,
    companyId: 1,
    year: 2023,
    category: "comprehension",

    question:
      "Choose the word that best completes the sentence: The manager asked the employees to ___ the report before the meeting.",

    options: ["review", "reviews", "reviewed", "reviewing"],

    answer: "review",

    solution:
      "After 'to', the base form of the verb is required. Therefore 'to review' is correct.",

    difficulty: "Easy",

    sourceType: "company-style",
    sourceName: "TCS NQT verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 176,
    companyId: 1,
    year: 2023,
    category: "programming",

    question:
      "Given an integer array, find and print the second largest distinct element. If no second largest distinct element exists, print -1.",

    options: [],

    answer:
      "Track the largest and second-largest distinct values while traversing the array.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        Integer largest = null;
        Integer second = null;

        for (int i = 0; i < n; i++) {
            int x = sc.nextInt();

            if (largest == null || x > largest) {
                if (largest == null || x != largest) {
                    second = largest;
                    largest = x;
                }
            } else if (x != largest &&
                       (second == null || x > second)) {
                second = x;
            }
        }

        System.out.println(second == null ? -1 : second);

        sc.close();
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "company-style",
    sourceName: "TCS NQT coding practice",
    sourceUrl: null,
  },

  {
    questionId: 177,
    companyId: 1,
    year: 2023,
    category: "programming",

    question:
      "Given a string, determine whether it is a palindrome. Ignore letter case.",

    options: [],

    answer:
      "Compare characters from the beginning and end of the string while moving toward the centre.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String s = sc.nextLine().toLowerCase();

        int left = 0;
        int right = s.length() - 1;
        boolean palindrome = true;

        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                palindrome = false;
                break;
            }

            left++;
            right--;
        }

        System.out.println(
            palindrome ? "Palindrome" : "Not Palindrome"
        );

        sc.close();
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "company-style",
    sourceName: "TCS NQT coding practice",
    sourceUrl: null,
  },

  {
    questionId: 178,
    companyId: 1,
    year: 2023,
    category: "programming",

    question:
      "Given an integer N, print the first N terms of the Fibonacci sequence starting with 0 and 1.",

    options: [],

    answer:
      "Generate each next Fibonacci number as the sum of the previous two numbers.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        long a = 0;
        long b = 1;

        for (int i = 0; i < n; i++) {
            System.out.print(a);

            if (i < n - 1) {
                System.out.print(" ");
            }

            long next = a + b;
            a = b;
            b = next;
        }

        sc.close();
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "company-style",
    sourceName: "TCS NQT coding practice",
    sourceUrl: null,
  },

  {
    questionId: 179,
    companyId: 1,
    year: 2023,
    category: "programming",

    question:
      "Given an integer array, move all zero values to the end while preserving the relative order of all non-zero elements.",

    options: [],

    answer:
      "Copy non-zero elements toward the beginning and fill the remaining positions with zero.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int index = 0;

        for (int value : arr) {
            if (value != 0) {
                arr[index++] = value;
            }
        }

        while (index < n) {
            arr[index++] = 0;
        }

        for (int i = 0; i < n; i++) {
            if (i > 0) {
                System.out.print(" ");
            }

            System.out.print(arr[i]);
        }

        sc.close();
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "company-style",
    sourceName: "TCS NQT coding practice",
    sourceUrl: null,
  },

  {
    questionId: 180,
    companyId: 1,
    year: 2023,
    category: "programming",

    question:
      "Given an integer array, find the maximum sum of any contiguous subarray.",

    options: [],

    answer:
      "Use Kadane's algorithm to maintain the maximum subarray sum ending at each position.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        if (n <= 0) {
            System.out.println(0);
            sc.close();
            return;
        }

        long first = sc.nextLong();
        long current = first;
        long best = first;

        for (int i = 1; i < n; i++) {
            long value = sc.nextLong();

            current = Math.max(value, current + value);
            best = Math.max(best, current);
        }

        System.out.println(best);

        sc.close();
    }
}`,

    difficulty: "Medium",
    programmingLanguage: "Java",

    sourceType: "company-style",
    sourceName: "TCS NQT coding practice",
    sourceUrl: null,
  },

  {
    questionId: 181,
    companyId: 1,
    year: 2023,
    category: "programming",

    question:
      "Given a string, print the frequency of each character in the order in which that character first appears.",

    options: [],

    answer:
      "Use a LinkedHashMap to count characters while preserving their insertion order.",

    solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String s = sc.nextLine();

        Map<Character, Integer> frequency =
            new LinkedHashMap<>();

        for (char ch : s.toCharArray()) {
            frequency.put(
                ch,
                frequency.getOrDefault(ch, 0) + 1
            );
        }

        for (Map.Entry<Character, Integer> entry
                : frequency.entrySet()) {

            System.out.println(
                entry.getKey() + " " + entry.getValue()
            );
        }

        sc.close();
    }
}`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "company-style",
    sourceName: "TCS NQT coding practice",
    sourceUrl: null,
  },
];

async function seedTCS2023Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 1,
      year: 2023,
    });

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} TCS 2023 questions seeded successfully`,
    );

    process.exit(0);
  } catch (error) {
    console.error("Error seeding TCS 2023 questions:", error);

    process.exit(1);
  }
}

seedTCS2023Questions();
