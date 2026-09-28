require("dotenv").config();

const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [
  // We will paste Infosys 2025 questions here

  {
    questionId: 200,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question:
      "A milk seller mixes water with milk and sells the mixture at the cost price of pure milk, making a profit of 15%. Find the ratio of milk to water.",
    options: ["20:23", "20:3", "23:20", "3:2"],
    answer: "20:3",
    solution:
      "Assume 20 units of milk cost 20. For 15% profit, the selling value of the mixture must correspond to 23 units at the same price per unit. Therefore 3 units of water are added. Milk : Water = 20 : 3.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName: "Infosys Technical Ability Questions 2025 - PrepInsta",
    sourceUrl: "https://prepinsta.com/infosys/technical-ability-questions/",
  },

  {
    questionId: 201,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question:
      "In how many ways can 5 men and 5 women sit around a circular table so that men and women sit alternately?",
    options: ["4! × 5!", "9!", "(5!)²", "10!"],
    answer: "4! × 5!",
    solution:
      "Arrange the 5 men around the circular table in (5-1)! = 4! ways. The 5 women can then occupy the five spaces between them in 5! ways. Total = 4! × 5!.",
    difficulty: "Medium",
    sourceType: "previous-year",
    sourceName: "Infosys Technical Ability Questions 2025 - PrepInsta",
    sourceUrl: "https://prepinsta.com/infosys/technical-ability-questions/",
  },

  {
    questionId: 202,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question:
      "From 9 consonants and 3 vowels, how many six-letter arrangements containing exactly 4 consonants and 2 vowels can be formed without repetition?",
    options: ["272160", "90720", "720", "378"],
    answer: "272160",
    solution:
      "Choose 4 consonants in C(9,4)=126 ways and 2 vowels in C(3,2)=3 ways. Arrange the selected 6 letters in 6! ways. Total = 126 × 3 × 720 = 272160. Note: mathematically this gives 272160, so use 272160 as the corrected answer.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 203,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question:
      "A can complete a job in 12 days and B can complete it in 18 days. In how many days can they complete it together?",
    options: ["6.2 days", "7.2 days", "8 days", "9 days"],
    answer: "7.2 days",
    solution:
      "Combined rate = 1/12 + 1/18 = 5/36. Required time = 36/5 = 7.2 days.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 204,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question: "A train travels 360 km in 4 hours. What is its average speed?",
    options: ["80 km/h", "90 km/h", "100 km/h", "120 km/h"],
    answer: "90 km/h",
    solution: "Speed = Distance / Time = 360 / 4 = 90 km/h.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 205,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question:
      "A product costing Rs. 800 is sold for Rs. 920. Find the profit percentage.",
    options: ["10%", "12%", "15%", "20%"],
    answer: "15%",
    solution:
      "Profit = 920 - 800 = 120. Profit percentage = (120/800) × 100 = 15%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 206,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question:
      "The ratio of two numbers is 3:5 and their sum is 64. Find the larger number.",
    options: ["24", "32", "40", "48"],
    answer: "40",
    solution:
      "Total parts = 3+5 = 8. One part = 64/8 = 8. Larger number = 5×8 = 40.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 207,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question:
      "What is the simple interest on Rs. 6000 at 5% per annum for 4 years?",
    options: ["Rs. 1000", "Rs. 1200", "Rs. 1400", "Rs. 1500"],
    answer: "Rs. 1200",
    solution: "SI = P×R×T/100 = 6000×5×4/100 = Rs. 1200.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 208,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question:
      "The average of 5 numbers is 28. If four numbers are 20, 25, 30 and 35, find the fifth number.",
    options: ["25", "28", "30", "32"],
    answer: "30",
    solution:
      "Total = 28×5 = 140. Sum of four numbers = 110. Fifth number = 140-110 = 30.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 209,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question:
      "A number is increased by 25% and then decreased by 20%. What is the net percentage change?",
    options: ["5% increase", "5% decrease", "No change", "10% increase"],
    answer: "No change",
    solution:
      "Take 100. Increasing by 25% gives 125. Decreasing 125 by 20% gives 100. Therefore there is no net change.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 210,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question:
      "If 8 workers finish a task in 15 days, how many days will 12 workers take at the same efficiency?",
    options: ["8", "10", "12", "15"],
    answer: "10",
    solution:
      "Total work = 8×15 = 120 worker-days. Time for 12 workers = 120/12 = 10 days.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 211,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question:
      "What is the probability of getting an even number when a fair six-sided die is rolled?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    answer: "1/2",
    solution:
      "Even outcomes are 2, 4 and 6. Therefore probability = 3/6 = 1/2.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 212,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question: "Find the LCM of 12, 18 and 24.",
    options: ["36", "48", "72", "144"],
    answer: "72",
    solution: "12=2²×3, 18=2×3² and 24=2³×3. LCM = 2³×3² = 72.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 213,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question:
      "A shop offers a 20% discount on an item marked at Rs. 2500. Find the selling price.",
    options: ["Rs. 1800", "Rs. 1900", "Rs. 2000", "Rs. 2100"],
    answer: "Rs. 2000",
    solution:
      "Discount = 20% of 2500 = 500. Selling price = 2500-500 = Rs. 2000.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys quantitative practice",
    sourceUrl: null,
  },

  {
    questionId: 214,
    companyId: 2,
    year: 2025,
    category: "aptitude",
    question: "If x:y = 4:7 and y:z = 14:15, find x:y:z.",
    options: ["4:7:15", "8:14:15", "8:7:15", "4:14:15"],
    answer: "8:14:15",
    solution:
      "Make y equal in both ratios. 4:7 becomes 8:14. Therefore x:y:z = 8:14:15.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys quantitative practice",
    sourceUrl: null,
  },

  // ================= REASONING =================

  {
    questionId: 215,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question: "In the class interval 13-23, what is 23 called?",
    options: [
      "Frequency",
      "Class width",
      "Upper class limit",
      "Lower class limit",
    ],
    answer: "Upper class limit",
    solution:
      "In the interval 13-23, 13 is the lower class limit and 23 is the upper class limit.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName: "Infosys Reasoning Previous Year Questions - TalentBattle",
    sourceUrl: "https://talentbattle.in/infosys/reasoning-ability",
  },

  {
    questionId: 216,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question: "For the class interval 72-93, what is the class width?",
    options: ["20", "21", "93", "72"],
    answer: "21",
    solution: "Class width = 93-72 = 21.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName: "Infosys Reasoning Previous Year Questions - TalentBattle",
    sourceUrl: "https://talentbattle.in/infosys/reasoning-ability",
  },

  {
    questionId: 217,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question: "Find the next number: 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "44"],
    answer: "42",
    solution:
      "Differences are 4,6,8,10. The next difference is 12. Therefore 30+12=42.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 218,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question: "Find the odd one out: 16, 25, 36, 49, 63, 64.",
    options: ["25", "49", "63", "64"],
    answer: "63",
    solution: "All numbers except 63 are perfect squares.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 219,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question:
      "A is the brother of B. B is the mother of C. How is A related to C?",
    options: ["Father", "Brother", "Uncle", "Grandfather"],
    answer: "Uncle",
    solution: "A is the brother of C's mother, so A is C's maternal uncle.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 220,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question:
      "A person walks 5 km north, 3 km east and then 5 km south. Where is the person relative to the starting point?",
    options: ["3 km East", "3 km West", "5 km North", "5 km South"],
    answer: "3 km East",
    solution:
      "The north and south movements cancel. The person remains 3 km east of the starting point.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 221,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question:
      "If CAT is coded as DBU by shifting every letter one position forward, how is DOG coded?",
    options: ["EPH", "EOH", "FPH", "DPI"],
    answer: "EPH",
    solution: "D→E, O→P and G→H. Therefore DOG becomes EPH.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 222,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question:
      "Statements: All programmers are logical thinkers. Some students are programmers. Which conclusion follows?",
    options: [
      "All students are programmers",
      "Some students are logical thinkers",
      "No student is logical",
      "All logical thinkers are students",
    ],
    answer: "Some students are logical thinkers",
    solution:
      "Some students are programmers and all programmers are logical thinkers. Therefore those students are logical thinkers.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 223,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question: "Find the next term: A, C, F, J, O, ?",
    options: ["S", "T", "U", "V"],
    answer: "U",
    solution:
      "Letter-position increments are +2,+3,+4,+5. Next increment is +6. O + 6 = U.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 224,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question:
      "If SOUTH is written as TPVUI, how will NORTH be written using the same rule?",
    options: ["OPSUI", "OPSTI", "NPSUI", "OQRUI"],
    answer: "OPSUI",
    solution:
      "Each letter is shifted one position forward: N→O, O→P, R→S, T→U, H→I.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 225,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question: "What comes next: 1, 4, 9, 16, 25, ?",
    options: ["30", "32", "36", "49"],
    answer: "36",
    solution: "The terms are squares: 1²,2²,3²,4²,5². Next is 6²=36.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 226,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question:
      "Five people A, B, C, D and E stand in a line. A is before B, B is before C, C is before D and D is before E. Who is in the middle?",
    options: ["A", "B", "C", "D"],
    answer: "C",
    solution:
      "The order is A-B-C-D-E. Therefore C occupies the middle position.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 227,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question: "Which number should replace ?: 3, 9, 27, 81, ?",
    options: ["162", "243", "324", "405"],
    answer: "243",
    solution: "Each term is multiplied by 3. Therefore 81×3=243.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 228,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question:
      "If yesterday was Monday, what day will it be three days after tomorrow?",
    options: ["Thursday", "Friday", "Saturday", "Sunday"],
    answer: "Saturday",
    solution:
      "If yesterday was Monday, today is Tuesday and tomorrow is Wednesday. Three days after Wednesday is Saturday.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 229,
    companyId: 2,
    year: 2025,
    category: "reasoning",
    question: "The missing number in 25, 36, 49, ?, 81 is:",
    options: ["60", "64", "72", "68"],
    answer: "64",
    solution:
      "These are consecutive squares: 5²,6²,7²,8²,9². Therefore the missing number is 64.",
    difficulty: "Easy",
    sourceType: "previous-year",
    sourceName: "Infosys Puzzle Solving Previous Year Questions - TalentBattle",
    sourceUrl: "https://talentbattle.in/infosys/puzzle-solving",
  },

  // ================= COMPREHENSION / VERBAL =================

  {
    questionId: 230,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question: "Choose the grammatically correct sentence.",
    options: [
      "She don't like coffee.",
      "She doesn't likes coffee.",
      "She doesn't like coffee.",
      "She not like coffee.",
    ],
    answer: "She doesn't like coffee.",
    solution: "After 'doesn't', the base form of the verb is used: like.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 231,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question: "Choose the synonym of 'rapid'.",
    options: ["Slow", "Quick", "Weak", "Quiet"],
    answer: "Quick",
    solution: "'Rapid' means fast or quick.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 232,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question: "Choose the antonym of 'scarce'.",
    options: ["Rare", "Limited", "Abundant", "Small"],
    answer: "Abundant",
    solution:
      "'Scarce' means insufficient or rare; 'abundant' means plentiful.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 233,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question: "Fill in the blank: He has lived in Delhi ___ five years.",
    options: ["since", "for", "from", "at"],
    answer: "for",
    solution: "'For' is used to express a duration of time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 234,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question: "Fill in the blank: She has been working here ___ 2021.",
    options: ["for", "since", "during", "by"],
    answer: "since",
    solution: "'Since' is used with a specific starting point.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 235,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question:
      "Choose the correct passive form of: 'The developer fixed the bug.'",
    options: [
      "The bug fixed the developer.",
      "The bug was fixed by the developer.",
      "The bug is fixed by developer.",
      "The developer was fixed by the bug.",
    ],
    answer: "The bug was fixed by the developer.",
    solution:
      "The sentence is simple past, so the passive form uses 'was + past participle'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 236,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question: "Choose the correctly spelled word.",
    options: ["Definately", "Definitely", "Definetely", "Definatly"],
    answer: "Definitely",
    solution: "The correct spelling is 'Definitely'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 237,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question:
      "Choose the word that best completes the sentence: The manager asked everyone to ___ the document carefully.",
    options: ["review", "reviewed", "reviews", "reviewing"],
    answer: "review",
    solution: "The infinitive construction requires 'to review'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 238,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question: "Choose the correct sentence.",
    options: [
      "Each of the students have a laptop.",
      "Each of the students has a laptop.",
      "Each students has a laptop.",
      "Each of student have a laptop.",
    ],
    answer: "Each of the students has a laptop.",
    solution: "'Each' is singular and therefore takes 'has'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 239,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question: "Choose the synonym of 'meticulous'.",
    options: ["Careless", "Careful", "Rapid", "Ordinary"],
    answer: "Careful",
    solution: "'Meticulous' describes someone who is very careful and precise.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 240,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question: "Choose the antonym of 'transparent'.",
    options: ["Clear", "Visible", "Opaque", "Bright"],
    answer: "Opaque",
    solution: "'Opaque' means not transparent.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 241,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question:
      "Read the statement: 'Regular exercise improves physical fitness and can also reduce stress.' Which conclusion is supported?",
    options: [
      "Exercise only improves physical strength.",
      "Exercise can benefit both physical and mental well-being.",
      "Exercise always eliminates stress.",
      "Only athletes need exercise.",
    ],
    answer: "Exercise can benefit both physical and mental well-being.",
    solution:
      "The statement mentions both improved physical fitness and reduced stress.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 242,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question: "Choose the correct indirect form: Ravi said, 'I am tired.'",
    options: [
      "Ravi said that I am tired.",
      "Ravi said that he was tired.",
      "Ravi says he tired.",
      "Ravi told he is tired.",
    ],
    answer: "Ravi said that he was tired.",
    solution:
      "The pronoun changes from I to he and present 'am' changes to past 'was'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 243,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question:
      "Fill in the blank: Neither Rahul nor his friends ___ attending the meeting.",
    options: ["is", "are", "was", "has"],
    answer: "are",
    solution:
      "With neither...nor, the verb generally agrees with the nearer subject. 'Friends' is plural, so 'are' is appropriate.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },

  {
    questionId: 244,
    companyId: 2,
    year: 2025,
    category: "comprehension",
    question: "Choose the meaning of the idiom 'hit the nail on the head'.",
    options: [
      "Make a mistake",
      "Describe exactly what is causing a situation",
      "Work very hard",
      "Avoid answering",
    ],
    answer: "Describe exactly what is causing a situation",
    solution:
      "The idiom means to identify or state something exactly correctly.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys verbal practice",
    sourceUrl: null,
  },
  {
    questionId: 245,
    companyId: 2,
    year: 2025,
    category: "pseudocode",
    question: `What will be the output of the following pseudocode?

Integer a = 5, b = 3
a = a + b
b = a - b
a = a - b
Print a, b`,
    options: ["5 3", "3 5", "8 3", "3 8"],
    answer: "3 5",
    solution:
      "Initially a=5 and b=3. After a=a+b, a=8. Then b=a-b gives 5. Finally a=a-b gives 3. Therefore output is 3 5.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 246,
    companyId: 2,
    year: 2025,
    category: "pseudocode",
    question: `What will be printed?

Integer x = 10
If (x > 5)
    x = x * 2
Else
    x = x - 2
End If
Print x`,
    options: ["8", "10", "20", "25"],
    answer: "20",
    solution: "10 > 5 is true, so x becomes 10 × 2 = 20.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 247,
    companyId: 2,
    year: 2025,
    category: "pseudocode",
    question: `Find the output:

Integer sum = 0
For i = 1 to 5
    sum = sum + i
End For
Print sum`,
    options: ["10", "15", "20", "25"],
    answer: "15",
    solution: "sum = 1+2+3+4+5 = 15.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 248,
    companyId: 2,
    year: 2025,
    category: "pseudocode",
    question: `What is the output?

Integer a = 4
Integer b = 6
Integer c = a++ + ++b
Print c`,
    options: ["10", "11", "12", "13"],
    answer: "11",
    solution:
      "a++ contributes 4 and then a becomes 5. ++b first makes b=7. Therefore c=4+7=11.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 249,
    companyId: 2,
    year: 2025,
    category: "pseudocode",
    question: `What will be printed?

Integer n = 5
Integer result = 1
While (n > 0)
    result = result * n
    n = n - 1
End While
Print result`,
    options: ["25", "60", "100", "120"],
    answer: "120",
    solution: "The loop calculates 5! = 5×4×3×2×1 = 120.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 250,
    companyId: 2,
    year: 2025,
    category: "pseudocode",
    question: `Find the output:

Integer x = 7
Integer y = 2
Print x % y`,
    options: ["0", "1", "2", "3"],
    answer: "1",
    solution: "7 divided by 2 leaves remainder 1, so 7 % 2 = 1.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 251,
    companyId: 2,
    year: 2025,
    category: "pseudocode",
    question: `What will be the output?

Integer a = 2
For i = 1 to 3
    a = a * 2
End For
Print a`,
    options: ["8", "12", "16", "18"],
    answer: "16",
    solution:
      "Starting from 2: after the three iterations a becomes 4, 8 and 16.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 252,
    companyId: 2,
    year: 2025,
    category: "pseudocode",
    question: `What will be printed?

Integer x = 8
If (x % 2 == 0 AND x > 5)
    Print "A"
Else
    Print "B"
End If`,
    options: ["A", "B", "8", "No output"],
    answer: "A",
    solution:
      "8 is even and is greater than 5. Both conditions are true, so A is printed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 253,
    companyId: 2,
    year: 2025,
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
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 254,
    companyId: 2,
    year: 2025,
    category: "pseudocode",
    question: `What will be the output?

Integer a = 10
Integer b = 20

If (a < b)
    If (b > 15)
        Print "X"
    Else
        Print "Y"
    End If
Else
    Print "Z"
End If`,
    options: ["X", "Y", "Z", "No output"],
    answer: "X",
    solution: "a < b is true and b > 15 is also true. Therefore X is printed.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },
  {
    questionId: 255,
    companyId: 2,
    year: 2025,
    category: "puzzle",
    question: "Find the missing number: 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "44"],
    answer: "42",
    solution:
      "The differences are 4, 6, 8, 10 and then 12. Therefore 30 + 12 = 42.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 256,
    companyId: 2,
    year: 2025,
    category: "puzzle",
    question:
      "A clock shows 3:00. What is the angle between the hour hand and minute hand?",
    options: ["0°", "45°", "90°", "180°"],
    answer: "90°",
    solution:
      "At 3:00, the minute hand is at 12 and the hour hand is at 3. Each hour represents 30°, so the angle is 3×30°=90°.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 257,
    companyId: 2,
    year: 2025,
    category: "puzzle",
    question:
      "There are 5 machines. Each machine produces 5 items in 5 minutes. How many items will 100 machines produce in 5 minutes?",
    options: ["100", "250", "500", "2500"],
    answer: "500",
    solution:
      "One machine produces 5 items in 5 minutes. Therefore 100 machines produce 100×5=500 items in 5 minutes.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 258,
    companyId: 2,
    year: 2025,
    category: "puzzle",
    question:
      "A farmer has 17 sheep. All but 9 run away. How many sheep remain?",
    options: ["8", "9", "17", "26"],
    answer: "9",
    solution:
      "'All but 9' means every sheep except 9 ran away. Therefore 9 remain.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 259,
    companyId: 2,
    year: 2025,
    category: "puzzle",
    question:
      "If 3 cats catch 3 mice in 3 minutes, how many cats are required to catch 100 mice in 100 minutes at the same rate?",
    options: ["1", "3", "33", "100"],
    answer: "3",
    solution:
      "Each cat catches 1 mouse in 3 minutes. In 100 minutes, 3 cats can catch 100 mice at the same combined rate.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 260,
    companyId: 2,
    year: 2025,
    category: "puzzle",
    question: "Find the next number: 1, 1, 2, 3, 5, 8, ?",
    options: ["11", "12", "13", "15"],
    answer: "13",
    solution: "Each number is the sum of the previous two numbers. 5+8=13.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 261,
    companyId: 2,
    year: 2025,
    category: "puzzle",
    question:
      "A man has two coins totaling Rs. 15. One of them is not a Rs. 5 coin. What are the two coins?",
    options: [
      "Rs. 10 and Rs. 5",
      "Rs. 5 and Rs. 5",
      "Rs. 10 and Rs. 10",
      "Rs. 2 and Rs. 13",
    ],
    answer: "Rs. 10 and Rs. 5",
    solution:
      "One coin is not Rs. 5; it is Rs. 10. The other coin can still be Rs. 5.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 262,
    companyId: 2,
    year: 2025,
    category: "puzzle",
    question:
      "Which number does not belong in the series: 4, 9, 16, 25, 35, 36, 49?",
    options: ["16", "25", "35", "49"],
    answer: "35",
    solution:
      "All other numbers are perfect squares: 2², 3², 4², 5², 6² and 7². 35 is not a perfect square.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 263,
    companyId: 2,
    year: 2025,
    category: "puzzle",
    question:
      "You have 3 switches outside a room and one bulb inside. You may enter the room only once. Which strategy identifies the switch connected to the bulb?",
    options: [
      "Turn on all switches",
      "Turn one switch on, wait, turn it off, turn another on, then enter",
      "Turn every switch on and off quickly",
      "It is impossible",
    ],
    answer:
      "Turn one switch on, wait, turn it off, turn another on, then enter",
    solution:
      "If the bulb is on, the second switch controls it. If it is off but warm, the first switch controls it. If it is off and cold, the third switch controls it.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 264,
    companyId: 2,
    year: 2025,
    category: "puzzle",
    question:
      "A family has two parents and six sons. Each son has one sister. How many people are in the family?",
    options: ["8", "9", "14", "15"],
    answer: "9",
    solution:
      "There are 2 parents, 6 sons and one sister shared by all six sons. Total = 2+6+1=9.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },
  {
    questionId: 265,
    companyId: 2,
    year: 2025,
    category: "grammar",
    question: "Choose the grammatically correct sentence.",
    options: [
      "He don't know the answer.",
      "He doesn't knows the answer.",
      "He doesn't know the answer.",
      "He not knows the answer.",
    ],
    answer: "He doesn't know the answer.",
    solution: "After 'doesn't', the verb must be in its base form: know.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 266,
    companyId: 2,
    year: 2025,
    category: "grammar",
    question: "Fill in the blank: She has been living here ___ 2020.",
    options: ["for", "since", "from", "by"],
    answer: "since",
    solution: "'Since' is used with a specific starting point in time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 267,
    companyId: 2,
    year: 2025,
    category: "grammar",
    question: "Fill in the blank: They have been waiting ___ two hours.",
    options: ["since", "for", "at", "from"],
    answer: "for",
    solution: "'For' is used to indicate a duration of time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 268,
    companyId: 2,
    year: 2025,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "Each of the players are ready.",
      "Each of the players is ready.",
      "Each of players are ready.",
      "Each players is ready.",
    ],
    answer: "Each of the players is ready.",
    solution: "'Each' is singular, so it takes the singular verb 'is'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 269,
    companyId: 2,
    year: 2025,
    category: "grammar",
    question:
      "Choose the correct passive voice: 'The team completed the project.'",
    options: [
      "The project completed the team.",
      "The project was completed by the team.",
      "The project is completed by the team.",
      "The team was completed by the project.",
    ],
    answer: "The project was completed by the team.",
    solution:
      "The original sentence is in simple past, so the passive form is 'was + past participle'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 270,
    companyId: 2,
    year: 2025,
    category: "grammar",
    question: "Choose the correct indirect speech: She said, 'I am busy.'",
    options: [
      "She said that I am busy.",
      "She said that she was busy.",
      "She said she is busy yesterday.",
      "She told that she busy.",
    ],
    answer: "She said that she was busy.",
    solution:
      "The pronoun changes from 'I' to 'she', and 'am' changes to 'was' in reported speech.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 271,
    companyId: 2,
    year: 2025,
    category: "grammar",
    question: "Choose the correctly spelled word.",
    options: ["Accomodation", "Accommodation", "Acommodation", "Accommadation"],
    answer: "Accommodation",
    solution: "The correct spelling is 'Accommodation'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 272,
    companyId: 2,
    year: 2025,
    category: "grammar",
    question:
      "Neither the manager nor the employees ___ willing to change the schedule.",
    options: ["is", "are", "was", "has"],
    answer: "are",
    solution:
      "With neither...nor, the verb agrees with the nearer subject. 'Employees' is plural, so 'are' is used.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 273,
    companyId: 2,
    year: 2025,
    category: "grammar",
    question: "Choose the correct article: He is ___ honest person.",
    options: ["a", "an", "the", "no article"],
    answer: "an",
    solution:
      "'Honest' begins with a vowel sound because the 'h' is silent, so 'an' is used.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 274,
    companyId: 2,
    year: 2025,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "She is senior than me.",
      "She is senior to me.",
      "She is more senior than me.",
      "She senior to me.",
    ],
    answer: "She is senior to me.",
    solution:
      "'Senior' is conventionally followed by the preposition 'to', not 'than'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },
];

async function seedInfosys2025Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 2,
      year: 2025,
    });

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Infosys 2025 questions seeded successfully`,
    );

    process.exit(0);
  } catch (error) {
    console.error("Error seeding Infosys 2025 questions:", error);

    process.exit(1);
  }
}

seedInfosys2025Questions();
