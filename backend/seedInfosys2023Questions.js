require("dotenv").config();

const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [
  // ==================== APTITUDE Q350-Q359 ====================

  {
    questionId: 350,
    companyId: 2,
    year: 2023,
    category: "aptitude",
    question:
      "A man buys an article for Rs. 800 and sells it for Rs. 920. What is his profit percentage?",
    options: ["10%", "12%", "15%", "20%"],
    answer: "15%",
    solution:
      "Profit = 920 - 800 = Rs. 120. Profit percentage = (120/800) × 100 = 15%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 351,
    companyId: 2,
    year: 2023,
    category: "aptitude",
    question:
      "The average of five numbers is 28. If four of the numbers are 20, 24, 30 and 32, find the fifth number.",
    options: ["30", "32", "34", "36"],
    answer: "34",
    solution:
      "Total of five numbers = 28 × 5 = 140. Sum of four numbers = 20+24+30+32 = 106. Fifth number = 140-106 = 34.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 352,
    companyId: 2,
    year: 2023,
    category: "aptitude",
    question:
      "A car travels 360 km in 6 hours. What is its average speed?",
    options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answer: "60 km/h",
    solution: "Average speed = Distance / Time = 360 / 6 = 60 km/h.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 353,
    companyId: 2,
    year: 2023,
    category: "aptitude",
    question:
      "The ratio of two numbers is 4:7. If their sum is 99, find the larger number.",
    options: ["36", "54", "63", "72"],
    answer: "63",
    solution:
      "Total ratio parts = 4+7 = 11. One part = 99/11 = 9. Larger number = 7×9 = 63.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 354,
    companyId: 2,
    year: 2023,
    category: "aptitude",
    question:
      "Find the simple interest on Rs. 5000 at 8% per annum for 2 years.",
    options: ["Rs. 600", "Rs. 700", "Rs. 800", "Rs. 900"],
    answer: "Rs. 800",
    solution:
      "Simple Interest = (5000 × 8 × 2) / 100 = Rs. 800.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 355,
    companyId: 2,
    year: 2023,
    category: "aptitude",
    question:
      "A can complete a piece of work in 12 days and B can complete it in 18 days. How many days will they take working together?",
    options: ["6 days", "7.2 days", "8 days", "9 days"],
    answer: "7.2 days",
    solution:
      "Combined work per day = 1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 356,
    companyId: 2,
    year: 2023,
    category: "aptitude",
    question: "What is 25% of 640?",
    options: ["140", "150", "160", "180"],
    answer: "160",
    solution: "25% of 640 = (25/100) × 640 = 160.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 357,
    companyId: 2,
    year: 2023,
    category: "aptitude",
    question:
      "A number is increased from 200 to 250. What is the percentage increase?",
    options: ["20%", "25%", "30%", "35%"],
    answer: "25%",
    solution:
      "Increase = 250-200 = 50. Percentage increase = (50/200) × 100 = 25%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 358,
    companyId: 2,
    year: 2023,
    category: "aptitude",
    question:
      "A bag contains 4 red balls and 6 blue balls. What is the probability of drawing a red ball?",
    options: ["1/5", "2/5", "3/5", "4/5"],
    answer: "2/5",
    solution:
      "Total balls = 4+6 = 10. Probability of red = 4/10 = 2/5.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 359,
    companyId: 2,
    year: 2023,
    category: "aptitude",
    question:
      "If 15 workers can complete a job in 20 days, how many days will 10 workers take, assuming all workers work at the same rate?",
    options: ["25 days", "30 days", "35 days", "40 days"],
    answer: "30 days",
    solution:
      "Total work = 15 × 20 = 300 worker-days. Required days = 300/10 = 30 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  // ==================== REASONING Q360-Q369 ====================

  {
    questionId: 360,
    companyId: 2,
    year: 2023,
    category: "reasoning",
    question: "Find the next number: 2, 5, 10, 17, 26, ?",
    options: ["35", "36", "37", "38"],
    answer: "37",
    solution:
      "Differences are 3, 5, 7 and 9. The next difference is 11. Therefore 26+11 = 37.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 361,
    companyId: 2,
    year: 2023,
    category: "reasoning",
    question:
      "If CAT is coded as DBU by moving every letter one position forward, how is DOG coded?",
    options: ["EPH", "EOH", "FPH", "EPI"],
    answer: "EPH",
    solution: "D→E, O→P and G→H. Therefore DOG becomes EPH.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 362,
    companyId: 2,
    year: 2023,
    category: "reasoning",
    question:
      "P is the mother of Q. Q is the brother of R. How is P related to R?",
    options: ["Sister", "Mother", "Aunt", "Grandmother"],
    answer: "Mother",
    solution:
      "Q and R are siblings. Since P is Q's mother, P is also R's mother.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 363,
    companyId: 2,
    year: 2023,
    category: "reasoning",
    question:
      "A person walks 5 km east and then 5 km north. In which direction is the person from the starting point?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    answer: "North-East",
    solution:
      "The person is both east and north of the starting point, so the direction is North-East.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 364,
    companyId: 2,
    year: 2023,
    category: "reasoning",
    question: "Find the odd one out: 16, 25, 36, 49, 63, 64.",
    options: ["36", "49", "63", "64"],
    answer: "63",
    solution:
      "16, 25, 36, 49 and 64 are perfect squares. 63 is not a perfect square.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 365,
    companyId: 2,
    year: 2023,
    category: "reasoning",
    question: "Complete the analogy: Bird : Fly :: Fish : ?",
    options: ["Run", "Swim", "Jump", "Walk"],
    answer: "Swim",
    solution:
      "A bird typically moves by flying, while a fish typically moves by swimming.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 366,
    companyId: 2,
    year: 2023,
    category: "reasoning",
    question:
      "If Monday is the first day of a month, what day will the 15th of that month be?",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    answer: "Monday",
    solution:
      "The 15th is exactly 14 days after the 1st. Since 14 is divisible by 7, it will also be Monday.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 367,
    companyId: 2,
    year: 2023,
    category: "reasoning",
    question:
      "Statements: All roses are flowers. All flowers are plants. Which conclusion definitely follows?",
    options: [
      "All plants are roses",
      "All roses are plants",
      "Some plants are not flowers",
      "No rose is a plant",
    ],
    answer: "All roses are plants",
    solution:
      "If every rose is a flower and every flower is a plant, then every rose must also be a plant.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 368,
    companyId: 2,
    year: 2023,
    category: "reasoning",
    question: "Find the next letter in the sequence: A, C, F, J, O, ?",
    options: ["T", "U", "V", "W"],
    answer: "U",
    solution:
      "The jumps are +2, +3, +4 and +5. The next jump is +6. O + 6 = U.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 369,
    companyId: 2,
    year: 2023,
    category: "reasoning",
    question:
      "In a row of students, Ravi is 8th from the left and 13th from the right. How many students are there in the row?",
    options: ["19", "20", "21", "22"],
    answer: "20",
    solution:
      "Total students = position from left + position from right - 1 = 8+13-1 = 20.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  // ==================== COMPREHENSION Q370-Q379 ====================

  {
    questionId: 370,
    companyId: 2,
    year: 2023,
    category: "comprehension",
    question:
      "Read the statement: 'Regular exercise can improve physical fitness and may also reduce stress.' Which benefit is mentioned?",
    options: [
      "Improved physical fitness",
      "Guaranteed weight loss",
      "Increased working hours",
      "Reduced intelligence",
    ],
    answer: "Improved physical fitness",
    solution:
      "The statement directly mentions improved physical fitness as a benefit of regular exercise.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 371,
    companyId: 2,
    year: 2023,
    category: "comprehension",
    question:
      "Read the statement: 'Digital payments make transactions faster, but users should protect their passwords and verification codes.' What precaution is suggested?",
    options: [
      "Share passwords with friends",
      "Protect passwords and verification codes",
      "Avoid all digital payments",
      "Use the same password everywhere",
    ],
    answer: "Protect passwords and verification codes",
    solution:
      "The statement explicitly advises users to protect their passwords and verification codes.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 372,
    companyId: 2,
    year: 2023,
    category: "comprehension",
    question:
      "Read the statement: 'Good communication helps team members exchange ideas and resolve misunderstandings.' What is the central idea?",
    options: [
      "Communication supports effective teamwork",
      "Team members should work alone",
      "Communication creates misunderstandings",
      "Ideas should never be shared",
    ],
    answer: "Communication supports effective teamwork",
    solution:
      "The statement describes how communication helps teams exchange ideas and resolve misunderstandings.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 373,
    companyId: 2,
    year: 2023,
    category: "comprehension",
    question:
      "Read the statement: 'Renewable energy sources such as solar and wind can generate electricity without burning fossil fuels.' Which conclusion is supported?",
    options: [
      "Solar and wind require fossil fuels to generate electricity",
      "Renewable energy can generate electricity without burning fossil fuels",
      "Only coal can generate electricity",
      "Wind energy cannot produce electricity",
    ],
    answer:
      "Renewable energy can generate electricity without burning fossil fuels",
    solution:
      "This is directly stated in the passage.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 374,
    companyId: 2,
    year: 2023,
    category: "comprehension",
    question:
      "Read the statement: 'Planning tasks before starting work can help people prioritize important activities and manage their time.' What skill is emphasized?",
    options: [
      "Time management",
      "Drawing",
      "Memorization",
      "Physical strength",
    ],
    answer: "Time management",
    solution:
      "The passage explicitly connects planning and prioritization with managing time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 375,
    companyId: 2,
    year: 2023,
    category: "comprehension",
    question:
      "Read the statement: 'Cloud storage allows users to access files from different devices when an internet connection is available.' Which advantage is mentioned?",
    options: [
      "Files can be accessed from different devices",
      "Internet is never required",
      "Files cannot be shared",
      "Only one device can access files",
    ],
    answer: "Files can be accessed from different devices",
    solution:
      "The passage directly states that cloud storage allows access from different devices.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 376,
    companyId: 2,
    year: 2023,
    category: "comprehension",
    question:
      "Read the statement: 'Learning a programming language requires both understanding concepts and practicing them through problems.' What does the statement emphasize?",
    options: [
      "Only theory is important",
      "Only memorization is important",
      "Both understanding and practice are important",
      "Programming requires no practice",
    ],
    answer: "Both understanding and practice are important",
    solution:
      "The statement explicitly says learning requires understanding concepts as well as practicing problems.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 377,
    companyId: 2,
    year: 2023,
    category: "comprehension",
    question:
      "Read the statement: 'Drinking enough water is important because the human body needs water for many essential functions.' What is the main message?",
    options: [
      "Water is unnecessary",
      "Adequate water intake is important",
      "Only athletes need water",
      "Water should be avoided during the day",
    ],
    answer: "Adequate water intake is important",
    solution:
      "The passage emphasizes the importance of sufficient water because the body requires it for essential functions.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 378,
    companyId: 2,
    year: 2023,
    category: "comprehension",
    question:
      "Read the statement: 'Public libraries provide access to books and other learning resources, often at little or no direct cost to users.' What service is highlighted?",
    options: [
      "Access to learning resources",
      "Free transportation",
      "Employment guarantees",
      "Medical treatment",
    ],
    answer: "Access to learning resources",
    solution:
      "The statement highlights access to books and other learning resources.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 379,
    companyId: 2,
    year: 2023,
    category: "comprehension",
    question:
      "Read the statement: 'Backing up important files helps reduce the risk of permanent data loss if a device fails.' Why are backups useful?",
    options: [
      "They increase device weight",
      "They help protect against permanent data loss",
      "They remove all passwords",
      "They make hardware impossible to damage",
    ],
    answer: "They help protect against permanent data loss",
    solution:
      "The statement directly says backups reduce the risk of permanent data loss.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  // ==================== PSEUDOCODE Q380-Q389 ====================

  {
    questionId: 380,
    companyId: 2,
    year: 2023,
    category: "pseudocode",
    question: `What will be the output?

Integer a = 8
Integer b = 3
Print a + b`,
    options: ["5", "8", "11", "24"],
    answer: "11",
    solution: "8 + 3 = 11.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 381,
    companyId: 2,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer x = 20
If (x > 10)
    Print "YES"
Else
    Print "NO"
End If`,
    options: ["YES", "NO", "20", "10"],
    answer: "YES",
    solution: "20 > 10 is true, therefore YES is printed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 382,
    companyId: 2,
    year: 2023,
    category: "pseudocode",
    question: `What will be the output?

Integer sum = 0
For i = 1 to 4
    sum = sum + i
End For
Print sum`,
    options: ["6", "8", "10", "12"],
    answer: "10",
    solution: "The loop calculates 1+2+3+4 = 10.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 383,
    companyId: 2,
    year: 2023,
    category: "pseudocode",
    question: `What will be printed?

Integer x = 9
If (x % 2 == 0)
    Print "Even"
Else
    Print "Odd"
End If`,
    options: ["Even", "Odd", "9", "0"],
    answer: "Odd",
    solution: "9 % 2 = 1, so 9 is odd.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 384,
    companyId: 2,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer x = 2
For i = 1 to 3
    x = x * 2
End For
Print x`,
    options: ["8", "12", "16", "18"],
    answer: "16",
    solution: "x changes as 2→4→8→16. Therefore the output is 16.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 385,
    companyId: 2,
    year: 2023,
    category: "pseudocode",
    question: `What will be printed?

Integer a = 5
Integer b = 10

If (a < b)
    Print b - a
Else
    Print a - b
End If`,
    options: ["5", "10", "15", "-5"],
    answer: "5",
    solution: "Since 5<10, b-a is printed. 10-5 = 5.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 386,
    companyId: 2,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer n = 5
Integer result = 0

While (n > 0)
    result = result + n
    n = n - 1
End While

Print result`,
    options: ["10", "15", "20", "25"],
    answer: "15",
    solution: "The loop adds 5+4+3+2+1 = 15.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 387,
    companyId: 2,
    year: 2023,
    category: "pseudocode",
    question: `What will be printed?

Integer arr[5] = {2, 4, 6, 8, 10}
Print arr[3]`,
    options: ["4", "6", "8", "10"],
    answer: "8",
    solution:
      "Using zero-based indexing, arr[0]=2, arr[1]=4, arr[2]=6 and arr[3]=8.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 388,
    companyId: 2,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

Integer count = 0

For i = 1 to 6
    If (i % 2 != 0)
        count = count + 1
    End If
End For

Print count`,
    options: ["2", "3", "4", "6"],
    answer: "3",
    solution:
      "The odd numbers from 1 through 6 are 1, 3 and 5. Therefore count=3.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 389,
    companyId: 2,
    year: 2023,
    category: "pseudocode",
    question: `What will be the output?

Integer a = 12
Integer b = 4
Integer c = a / b
c = c + 5
Print c`,
    options: ["3", "5", "8", "9"],
    answer: "8",
    solution: "12/4 = 3. Then c = 3+5 = 8.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  // ==================== PUZZLE Q390-Q399 ====================

  {
    questionId: 390,
    companyId: 2,
    year: 2023,
    category: "puzzle",
    question: "Find the next number: 3, 6, 12, 24, 48, ?",
    options: ["72", "84", "96", "108"],
    answer: "96",
    solution: "Each number is twice the previous number. 48×2 = 96.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 391,
    companyId: 2,
    year: 2023,
    category: "puzzle",
    question:
      "There are 12 birds on a tree. 5 fly away. How many birds remain on the tree?",
    options: ["5", "7", "12", "17"],
    answer: "7",
    solution: "12-5 = 7 birds remain.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 392,
    companyId: 2,
    year: 2023,
    category: "puzzle",
    question:
      "If 4 machines make 4 products in 4 minutes, how many products can 8 machines make in 4 minutes at the same rate?",
    options: ["4", "8", "12", "16"],
    answer: "8",
    solution:
      "Each machine makes one product in 4 minutes. Therefore 8 machines make 8 products in 4 minutes.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 393,
    companyId: 2,
    year: 2023,
    category: "puzzle",
    question:
      "A clock shows 6:00. What is the angle between the hour hand and the minute hand?",
    options: ["90°", "120°", "180°", "360°"],
    answer: "180°",
    solution:
      "At 6:00, the minute hand is at 12 and the hour hand is at 6. They are opposite each other, giving an angle of 180°.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 394,
    companyId: 2,
    year: 2023,
    category: "puzzle",
    question:
      "A family has two parents and four sons. Each son has one sister. What is the minimum number of people in the family?",
    options: ["6", "7", "8", "10"],
    answer: "7",
    solution:
      "There are 2 parents, 4 sons and one sister shared by all four sons. Total = 2+4+1 = 7.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 395,
    companyId: 2,
    year: 2023,
    category: "puzzle",
    question:
      "You have three boxes labeled Apples, Oranges and Mixed. Every label is wrong. What is the minimum number of fruits you need to pick to determine the correct labels?",
    options: ["1", "2", "3", "4"],
    answer: "1",
    solution:
      "Pick one fruit from the box labeled Mixed. Since every label is wrong, that box cannot actually be mixed. The fruit identifies its true type, and the remaining labels can then be determined logically.",
    difficulty: "Hard",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 396,
    companyId: 2,
    year: 2023,
    category: "puzzle",
    question: "Find the missing number: 1, 8, 27, 64, ?, 216.",
    options: ["100", "121", "125", "144"],
    answer: "125",
    solution:
      "These are cubes: 1³, 2³, 3³, 4³, 5³ and 6³. Therefore the missing number is 125.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 397,
    companyId: 2,
    year: 2023,
    category: "puzzle",
    question:
      "If 7 people each shake hands exactly once with every other person, how many handshakes take place?",
    options: ["14", "21", "28", "42"],
    answer: "21",
    solution:
      "The number of unique pairs is n(n-1)/2 = 7×6/2 = 21.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 398,
    companyId: 2,
    year: 2023,
    category: "puzzle",
    question:
      "A farmer has 20 cows. All but 8 leave the field. How many cows remain?",
    options: ["8", "12", "20", "28"],
    answer: "8",
    solution:
      "'All but 8' means every cow except 8 leaves. Therefore 8 cows remain.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 399,
    companyId: 2,
    year: 2023,
    category: "puzzle",
    question: "Find the next number: 5, 10, 20, 40, 80, ?",
    options: ["100", "120", "140", "160"],
    answer: "160",
    solution: "Each term is twice the previous term. 80×2 = 160.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  // ==================== GRAMMAR Q400-Q409 ====================

  {
    questionId: 400,
    companyId: 2,
    year: 2023,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "He play cricket every Sunday.",
      "He plays cricket every Sunday.",
      "He playing cricket every Sunday.",
      "He played cricket every Sunday now.",
    ],
    answer: "He plays cricket every Sunday.",
    solution:
      "For a habitual action with the third-person singular subject 'he', the simple present verb is 'plays'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 401,
    companyId: 2,
    year: 2023,
    category: "grammar",
    question: "Fill in the blank: She has been working here ___ 2021.",
    options: ["for", "since", "from", "at"],
    answer: "since",
    solution:
      "'Since' is used with a specific starting point in time, such as 2021.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 402,
    companyId: 2,
    year: 2023,
    category: "grammar",
    question: "Choose the correct article: He is ___ engineer.",
    options: ["a", "an", "the", "no article"],
    answer: "an",
    solution:
      "'Engineer' begins with a vowel sound, so the correct article is 'an'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 403,
    companyId: 2,
    year: 2023,
    category: "grammar",
    question: "Choose the correctly spelled word.",
    options: ["Definately", "Definitely", "Definetely", "Definatly"],
    answer: "Definitely",
    solution: "The correct spelling is 'Definitely'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 404,
    companyId: 2,
    year: 2023,
    category: "grammar",
    question:
      "Choose the correct passive voice of: 'The teacher explained the lesson.'",
    options: [
      "The lesson explained the teacher.",
      "The lesson was explained by the teacher.",
      "The lesson is explained by the teacher.",
      "The teacher was explained by the lesson.",
    ],
    answer: "The lesson was explained by the teacher.",
    solution:
      "The active sentence is in simple past, so the passive form is 'was + past participle'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 405,
    companyId: 2,
    year: 2023,
    category: "grammar",
    question:
      "Choose the correct indirect speech: She said, 'I am tired.'",
    options: [
      "She said that she was tired.",
      "She said that I am tired.",
      "She says she was tired yesterday.",
      "She said that she is tiring.",
    ],
    answer: "She said that she was tired.",
    solution:
      "With the reporting verb in the past, 'I' changes to 'she' and 'am' normally changes to 'was'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 406,
    companyId: 2,
    year: 2023,
    category: "grammar",
    question:
      "Fill in the blank: Neither Rahul nor his friends ___ coming to the meeting.",
    options: ["is", "are", "was", "has"],
    answer: "are",
    solution:
      "With 'neither...nor', the verb generally agrees with the nearer subject. 'Friends' is plural, so 'are' is correct.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 407,
    companyId: 2,
    year: 2023,
    category: "grammar",
    question:
      "Choose the correct preposition: He is good ___ mathematics.",
    options: ["in", "at", "on", "for"],
    answer: "at",
    solution: "The standard expression is 'good at'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 408,
    companyId: 2,
    year: 2023,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "Each student have a notebook.",
      "Each student has a notebook.",
      "Each students has a notebook.",
      "Each student having a notebook.",
    ],
    answer: "Each student has a notebook.",
    solution:
      "'Each student' is singular, so the singular verb 'has' is required.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 409,
    companyId: 2,
    year: 2023,
    category: "grammar",
    question:
      "Fill in the blank: If I ___ enough time, I would learn another language.",
    options: ["have", "had", "has", "will have"],
    answer: "had",
    solution:
      "This is a second conditional sentence: If + simple past, followed by would + base verb. Therefore 'had' is correct.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },
];

async function seedInfosys2023Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 2,
      year: 2023,
    });

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Infosys 2023 questions seeded successfully`
    );

    process.exit(0);
  } catch (error) {
    console.error(
      "Error seeding Infosys 2023 questions:",
      error
    );
    process.exit(1);
  }
}

seedInfosys2023Questions();

