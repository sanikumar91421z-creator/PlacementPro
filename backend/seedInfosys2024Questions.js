require("dotenv").config();

const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [
  {
    questionId: 280,
    companyId: 2,
    year: 2024,
    category: "aptitude",
    question:
      "A sum of Rs. 8000 is invested at 10% simple interest per annum. What will be the total amount after 3 years?",
    options: ["Rs. 9600", "Rs. 10000", "Rs. 10400", "Rs. 10800"],
    answer: "Rs. 10400",
    solution:
      "Simple Interest = (8000 × 10 × 3) / 100 = Rs. 2400. Total amount = 8000 + 2400 = Rs. 10400.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 281,
    companyId: 2,
    year: 2024,
    category: "aptitude",
    question:
      "A train travels 240 km at 60 km/h and another 180 km at 45 km/h. What is the total time taken?",
    options: ["6 hours", "7 hours", "8 hours", "9 hours"],
    answer: "8 hours",
    solution:
      "First journey time = 240/60 = 4 hours. Second journey time = 180/45 = 4 hours. Total = 8 hours.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 282,
    companyId: 2,
    year: 2024,
    category: "aptitude",
    question:
      "The ratio of boys to girls in a class is 3:2. If there are 40 students, how many girls are there?",
    options: ["12", "16", "20", "24"],
    answer: "16",
    solution: "Total ratio parts = 3+2=5. Girls = (2/5) × 40 = 16.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 283,
    companyId: 2,
    year: 2024,
    category: "aptitude",
    question:
      "A shopkeeper buys an article for Rs. 1200 and sells it for Rs. 1500. Find the profit percentage.",
    options: ["20%", "25%", "30%", "35%"],
    answer: "25%",
    solution:
      "Profit = 1500 - 1200 = 300. Profit percentage = (300/1200) × 100 = 25%.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 284,
    companyId: 2,
    year: 2024,
    category: "aptitude",
    question:
      "The average of 8 numbers is 24. If one number 18 is replaced by 34, what is the new average?",
    options: ["24", "25", "26", "28"],
    answer: "26",
    solution:
      "Original sum = 8×24 = 192. New sum = 192-18+34 = 208. New average = 208/8 = 26.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 285,
    companyId: 2,
    year: 2024,
    category: "aptitude",
    question:
      "A can complete a task in 15 days and B can complete it in 10 days. How many days will they take together?",
    options: ["5 days", "6 days", "7.5 days", "8 days"],
    answer: "6 days",
    solution:
      "Combined work per day = 1/15 + 1/10 = 1/6. Therefore they complete the work in 6 days.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 286,
    companyId: 2,
    year: 2024,
    category: "aptitude",
    question: "What is 35% of 480?",
    options: ["158", "168", "178", "188"],
    answer: "168",
    solution: "35% of 480 = (35/100) × 480 = 168.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 287,
    companyId: 2,
    year: 2024,
    category: "aptitude",
    question:
      "A bag contains 5 red, 3 blue and 2 green balls. What is the probability of selecting a blue ball?",
    options: ["1/5", "3/10", "1/3", "1/2"],
    answer: "3/10",
    solution: "Total balls = 5+3+2 = 10. Blue balls = 3. Probability = 3/10.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 288,
    companyId: 2,
    year: 2024,
    category: "aptitude",
    question:
      "If the selling price after a 20% discount is Rs. 1600, what was the marked price?",
    options: ["Rs. 1800", "Rs. 1900", "Rs. 2000", "Rs. 2200"],
    answer: "Rs. 2000",
    solution:
      "After a 20% discount, selling price is 80% of marked price. Marked price = 1600/0.8 = Rs. 2000.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },

  {
    questionId: 289,
    companyId: 2,
    year: 2024,
    category: "aptitude",
    question:
      "Two numbers are in the ratio 5:7 and their difference is 18. Find the larger number.",
    options: ["45", "54", "63", "72"],
    answer: "63",
    solution:
      "Difference in ratio parts = 7-5 = 2. Therefore one part = 18/2 = 9. Larger number = 7×9 = 63.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys aptitude practice",
    sourceUrl: null,
  },
  {
    questionId: 290,
    companyId: 2,
    year: 2024,
    category: "reasoning",
    question: "Find the next number: 3, 8, 15, 24, 35, ?",
    options: ["44", "46", "48", "50"],
    answer: "48",
    solution:
      "Differences are 5, 7, 9 and 11. The next difference is 13. Therefore 35+13=48.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 291,
    companyId: 2,
    year: 2024,
    category: "reasoning",
    question:
      "If APPLE is coded as BQQMF by moving each letter one position forward, how is MANGO coded?",
    options: ["NBOHP", "NBPHP", "MBOHP", "NANHP"],
    answer: "NBOHP",
    solution:
      "Move every letter one position forward: M→N, A→B, N→O, G→H, O→P. Therefore MANGO becomes NBOHP.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 292,
    companyId: 2,
    year: 2024,
    category: "reasoning",
    question:
      "A is the father of B. C is the mother of A. D is the brother of A. How is D related to B?",
    options: ["Brother", "Father", "Uncle", "Grandfather"],
    answer: "Uncle",
    solution: "D is the brother of B's father A. Therefore D is B's uncle.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 293,
    companyId: 2,
    year: 2024,
    category: "reasoning",
    question:
      "A person walks 10 m north, turns right and walks 6 m, then turns right and walks 10 m. Where is the person relative to the starting point?",
    options: ["6 m East", "6 m West", "10 m North", "10 m South"],
    answer: "6 m East",
    solution:
      "The 10 m north and 10 m south movements cancel. The person remains 6 m east of the starting point.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 294,
    companyId: 2,
    year: 2024,
    category: "reasoning",
    question:
      "Statements: All laptops are machines. Some machines are portable. Which conclusion definitely follows?",
    options: [
      "All portable things are laptops",
      "All laptops are machines",
      "Some laptops are portable",
      "No machine is portable",
    ],
    answer: "All laptops are machines",
    solution:
      "The first statement directly establishes that all laptops are machines. The other conclusions are not guaranteed.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 295,
    companyId: 2,
    year: 2024,
    category: "reasoning",
    question: "Find the odd one out: 27, 64, 125, 196, 216.",
    options: ["64", "125", "196", "216"],
    answer: "196",
    solution: "27=3³, 64=4³, 125=5³ and 216=6³. 196 is not a perfect cube.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 296,
    companyId: 2,
    year: 2024,
    category: "reasoning",
    question: "Find the next letter: B, E, I, N, T, ?",
    options: ["A", "B", "C", "D"],
    answer: "A",
    solution:
      "Letter-position increments are +3,+4,+5,+6. Next is +7. T is position 20; 20+7=27, which wraps to position 1, A.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 297,
    companyId: 2,
    year: 2024,
    category: "reasoning",
    question:
      "Five students P, Q, R, S and T stand in a line. P is before Q, Q is before R, R is before S and S is before T. Who stands second?",
    options: ["P", "Q", "R", "S"],
    answer: "Q",
    solution: "The fixed order is P-Q-R-S-T. Therefore Q is second.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 298,
    companyId: 2,
    year: 2024,
    category: "reasoning",
    question: "If today is Wednesday, what day will it be 10 days from today?",
    options: ["Friday", "Saturday", "Sunday", "Monday"],
    answer: "Saturday",
    solution:
      "10 days = 7 days + 3 days. Three days after Wednesday is Saturday.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },

  {
    questionId: 299,
    companyId: 2,
    year: 2024,
    category: "reasoning",
    question: "Complete the analogy: Book : Reading :: Fork : ?",
    options: ["Drawing", "Writing", "Eating", "Walking"],
    answer: "Eating",
    solution: "A book is used for reading and a fork is used for eating.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys reasoning practice",
    sourceUrl: null,
  },
  {
    questionId: 300,
    companyId: 2,
    year: 2024,
    category: "comprehension",
    question:
      "Read the statement: 'Remote work allows employees to avoid daily commuting and can provide greater flexibility in managing their schedules.' Which benefit is directly mentioned?",
    options: [
      "Higher salary",
      "Reduced commuting",
      "Guaranteed promotion",
      "Shorter working hours",
    ],
    answer: "Reduced commuting",
    solution:
      "The statement explicitly says that remote work allows employees to avoid daily commuting.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 301,
    companyId: 2,
    year: 2024,
    category: "comprehension",
    question:
      "Read the statement: 'Technology can improve productivity, but employees must learn new skills to use new tools effectively.' What is the main idea?",
    options: [
      "Technology always reduces productivity",
      "Employees should avoid new technology",
      "Technology can improve productivity when people can use it effectively",
      "Learning new skills is unnecessary",
    ],
    answer:
      "Technology can improve productivity when people can use it effectively",
    solution:
      "The statement connects productivity gains from technology with the need to learn how to use new tools.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 302,
    companyId: 2,
    year: 2024,
    category: "comprehension",
    question:
      "Read the statement: 'Regular reading exposes people to new ideas and vocabulary. Over time, this can improve both comprehension and communication.' What can be inferred?",
    options: [
      "Reading can support language development",
      "Reading reduces vocabulary",
      "Only students benefit from reading",
      "Communication does not depend on vocabulary",
    ],
    answer: "Reading can support language development",
    solution:
      "The statement says reading exposes people to vocabulary and can improve comprehension and communication.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 303,
    companyId: 2,
    year: 2024,
    category: "comprehension",
    question:
      "Read the statement: 'Public transport can reduce the number of private vehicles on roads, which may help reduce congestion.' What is the suggested effect of public transport?",
    options: [
      "It increases private vehicle usage",
      "It may reduce traffic congestion",
      "It completely eliminates traffic",
      "It increases fuel prices",
    ],
    answer: "It may reduce traffic congestion",
    solution:
      "The statement directly links fewer private vehicles with potentially lower congestion.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 304,
    companyId: 2,
    year: 2024,
    category: "comprehension",
    question:
      "Read the statement: 'Online learning offers flexibility, but students need discipline to manage their time effectively.' Which challenge is mentioned?",
    options: [
      "Lack of books",
      "Time management",
      "No access to teachers",
      "High transportation cost",
    ],
    answer: "Time management",
    solution:
      "The statement says students need discipline to manage their time effectively.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 305,
    companyId: 2,
    year: 2024,
    category: "comprehension",
    question:
      "Read the statement: 'Trees absorb carbon dioxide and release oxygen. They also provide habitats for many species.' Which statement is supported?",
    options: [
      "Trees only benefit humans",
      "Trees contribute to the environment in multiple ways",
      "Trees increase carbon dioxide",
      "Animals cannot live near trees",
    ],
    answer: "Trees contribute to the environment in multiple ways",
    solution:
      "The passage mentions both gas exchange and habitats for species, showing multiple environmental benefits.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 306,
    companyId: 2,
    year: 2024,
    category: "comprehension",
    question:
      "Read the statement: 'Team members who communicate clearly are more likely to understand their responsibilities and coordinate their work.' What is emphasized?",
    options: [
      "Competition between employees",
      "Clear communication in teamwork",
      "Working alone",
      "Reducing responsibilities",
    ],
    answer: "Clear communication in teamwork",
    solution:
      "The statement emphasizes how clear communication improves understanding and coordination.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 307,
    companyId: 2,
    year: 2024,
    category: "comprehension",
    question:
      "Read the statement: 'Saving a small amount regularly can build a significant fund over a long period.' What does the statement encourage?",
    options: [
      "Regular saving",
      "Immediate spending",
      "Borrowing regularly",
      "Avoiding financial planning",
    ],
    answer: "Regular saving",
    solution:
      "The statement directly describes the long-term benefit of saving regularly.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 308,
    companyId: 2,
    year: 2024,
    category: "comprehension",
    question:
      "Read the statement: 'Cybersecurity awareness helps users recognize suspicious links and avoid sharing sensitive information.' What is the main purpose of cybersecurity awareness here?",
    options: [
      "Increasing internet speed",
      "Reducing online risks",
      "Creating social media accounts",
      "Installing more applications",
    ],
    answer: "Reducing online risks",
    solution:
      "Recognizing suspicious links and protecting sensitive information are actions that reduce online security risks.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },

  {
    questionId: 309,
    companyId: 2,
    year: 2024,
    category: "comprehension",
    question:
      "Read the statement: 'Exercise strengthens muscles and can improve cardiovascular health when performed regularly.' Which conclusion is supported?",
    options: [
      "Exercise has potential physical health benefits",
      "Exercise weakens muscles",
      "Exercise is useful only for athletes",
      "Exercise should never be performed regularly",
    ],
    answer: "Exercise has potential physical health benefits",
    solution:
      "The statement identifies stronger muscles and improved cardiovascular health as benefits of regular exercise.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys comprehension practice",
    sourceUrl: null,
  },
  {
    questionId: 310,
    companyId: 2,
    year: 2024,
    category: "pseudocode",
    question: `What will be the output?

Integer x = 5
Integer y = 4
Integer z = x * y + 2
Print z`,
    options: ["20", "22", "24", "28"],
    answer: "22",
    solution:
      "Multiplication is performed first: 5×4=20. Then 2 is added. Therefore z=22.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 311,
    companyId: 2,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer sum = 0
For i = 2 to 10 step 2
    sum = sum + i
End For
Print sum`,
    options: ["20", "25", "30", "35"],
    answer: "30",
    solution: "The loop adds 2+4+6+8+10 = 30.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 312,
    companyId: 2,
    year: 2024,
    category: "pseudocode",
    question: `What will be printed?

Integer x = 15
If (x % 3 == 0)
    Print "A"
Else
    Print "B"
End If`,
    options: ["A", "B", "15", "No output"],
    answer: "A",
    solution: "15 is divisible by 3, so x % 3 is 0 and A is printed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 313,
    companyId: 2,
    year: 2024,
    category: "pseudocode",
    question: `What will be the output?

Integer n = 4
Integer result = 1
For i = 1 to n
    result = result * i
End For
Print result`,
    options: ["10", "16", "24", "32"],
    answer: "24",
    solution: "The loop calculates 1×1×2×3×4 = 24.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 314,
    companyId: 2,
    year: 2024,
    category: "pseudocode",
    question: `Find the output:

Integer a = 10
Integer b = 5

If (a > b)
    a = a - b
End If

Print a`,
    options: ["5", "10", "15", "50"],
    answer: "5",
    solution: "Since 10>5, a becomes 10-5=5.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 315,
    companyId: 2,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer count = 0
For i = 1 to 10
    If (i % 2 == 0)
        count = count + 1
    End If
End For
Print count`,
    options: ["4", "5", "6", "10"],
    answer: "5",
    solution:
      "The even numbers from 1 through 10 are 2,4,6,8,10. Therefore count=5.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 316,
    companyId: 2,
    year: 2024,
    category: "pseudocode",
    question: `What will be printed?

Integer x = 3
While (x < 20)
    x = x * 2
End While
Print x`,
    options: ["12", "18", "20", "24"],
    answer: "24",
    solution: "x changes as 3→6→12→24. At 24, x<20 is false, so 24 is printed.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 317,
    companyId: 2,
    year: 2024,
    category: "pseudocode",
    question: `Find the output:

Integer arr[4] = {3, 6, 9, 12}
Integer result = 0

For i = 0 to 3
    result = result + arr[i]
End For

Print result`,
    options: ["24", "27", "30", "36"],
    answer: "30",
    solution: "3+6+9+12 = 30.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 318,
    companyId: 2,
    year: 2024,
    category: "pseudocode",
    question: `What will be printed?

Integer a = 7
Integer b = 9

If (a > b)
    Print a
Else
    Print b
End If`,
    options: ["7", "9", "16", "0"],
    answer: "9",
    solution: "7>9 is false, so the else block executes and prints b=9.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },

  {
    questionId: 319,
    companyId: 2,
    year: 2024,
    category: "pseudocode",
    question: `What is the output?

Integer x = 1
For i = 1 to 4
    x = x + i
End For
Print x`,
    options: ["10", "11", "12", "15"],
    answer: "11",
    solution: "Starting from 1, add 1+2+3+4=10. Therefore final x=11.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys pseudocode practice",
    sourceUrl: null,
  },
  {
    questionId: 320,
    companyId: 2,
    year: 2024,
    category: "puzzle",
    question: "Find the next number: 1, 4, 9, 16, 25, ?",
    options: ["30", "32", "36", "49"],
    answer: "36",
    solution:
      "The numbers are consecutive squares: 1²,2²,3²,4²,5². The next is 6²=36.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 321,
    companyId: 2,
    year: 2024,
    category: "puzzle",
    question:
      "If 5 pencils cost Rs. 25, how much will 12 pencils cost at the same rate?",
    options: ["Rs. 50", "Rs. 55", "Rs. 60", "Rs. 65"],
    answer: "Rs. 60",
    solution:
      "One pencil costs 25/5=Rs.5. Therefore 12 pencils cost 12×5=Rs.60.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 322,
    companyId: 2,
    year: 2024,
    category: "puzzle",
    question:
      "A basket contains 10 apples. You take away 3 apples. How many apples do you have?",
    options: ["3", "7", "10", "13"],
    answer: "3",
    solution:
      "The question asks how many apples you have. You took 3 apples, so you have 3.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 323,
    companyId: 2,
    year: 2024,
    category: "puzzle",
    question: "Which number is the odd one out: 8, 27, 64, 100, 125?",
    options: ["27", "64", "100", "125"],
    answer: "100",
    solution: "8=2³, 27=3³, 64=4³ and 125=5³. 100 is not a perfect cube.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 324,
    companyId: 2,
    year: 2024,
    category: "puzzle",
    question:
      "A father is 30 years older than his son. After 5 years, the father will still be how many years older?",
    options: ["25", "30", "35", "40"],
    answer: "30",
    solution:
      "The age difference between two people remains constant. It will still be 30 years.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 325,
    companyId: 2,
    year: 2024,
    category: "puzzle",
    question:
      "Two fathers and two sons went fishing. Each caught one fish, but only three fish were caught. How is this possible?",
    options: [
      "One person caught no fish",
      "There were only three people: grandfather, father and son",
      "Two people shared one fish",
      "One fish was counted twice",
    ],
    answer: "There were only three people: grandfather, father and son",
    solution:
      "The grandfather and father are two fathers, while the father and son are two sons. Therefore only three people are required.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 326,
    companyId: 2,
    year: 2024,
    category: "puzzle",
    question:
      "A room has four corners. There is one cat in each corner. How many cats are there?",
    options: ["2", "4", "8", "16"],
    answer: "4",
    solution:
      "There is one cat in each of the four corners, so there are 4 cats.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 327,
    companyId: 2,
    year: 2024,
    category: "puzzle",
    question: "Find the missing term: 2, 4, 8, 16, ?, 64.",
    options: ["24", "28", "30", "32"],
    answer: "32",
    solution: "Each term is double the previous term. 16×2=32.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 328,
    companyId: 2,
    year: 2024,
    category: "puzzle",
    question:
      "If there are 6 people in a room and each person shakes hands exactly once with every other person, how many handshakes occur?",
    options: ["12", "15", "18", "30"],
    answer: "15",
    solution: "Number of unique pairs = 6×5/2 = 15.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },

  {
    questionId: 329,
    companyId: 2,
    year: 2024,
    category: "puzzle",
    question: "Find the missing number: 10, 20, 40, 80, ?, 320.",
    options: ["100", "120", "140", "160"],
    answer: "160",
    solution: "Each term is twice the previous term. Therefore 80×2=160.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys puzzle practice",
    sourceUrl: null,
  },
  {
    questionId: 330,
    companyId: 2,
    year: 2024,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "She go to college every day.",
      "She goes to college every day.",
      "She going to college every day.",
      "She gone to college every day.",
    ],
    answer: "She goes to college every day.",
    solution:
      "With the third-person singular subject 'she' in simple present tense, the verb is 'goes'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 331,
    companyId: 2,
    year: 2024,
    category: "grammar",
    question: "Fill in the blank: I have known him ___ ten years.",
    options: ["since", "for", "from", "by"],
    answer: "for",
    solution: "'For' is used with a duration of time such as ten years.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 332,
    companyId: 2,
    year: 2024,
    category: "grammar",
    question: "Choose the correct article: She bought ___ umbrella.",
    options: ["a", "an", "the", "no article"],
    answer: "an",
    solution: "'Umbrella' begins with a vowel sound, so 'an' is used.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 333,
    companyId: 2,
    year: 2024,
    category: "grammar",
    question: "Choose the correct passive voice: 'They opened the door.'",
    options: [
      "The door opened them.",
      "The door was opened by them.",
      "The door is opened by them.",
      "They were opened by the door.",
    ],
    answer: "The door was opened by them.",
    solution:
      "The sentence is in simple past, so the passive form uses 'was + past participle'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 334,
    companyId: 2,
    year: 2024,
    category: "grammar",
    question: "Choose the correctly spelled word.",
    options: ["Necessary", "Necesary", "Neccessary", "Necessery"],
    answer: "Necessary",
    solution: "The correct spelling is 'Necessary'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 335,
    companyId: 2,
    year: 2024,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "Neither of the answers are correct.",
      "Neither of the answers is correct.",
      "Neither answers is correct.",
      "Neither of answer are correct.",
    ],
    answer: "Neither of the answers is correct.",
    solution:
      "'Neither' is treated as singular in this construction, so the singular verb 'is' is used.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 336,
    companyId: 2,
    year: 2024,
    category: "grammar",
    question:
      "Choose the correct indirect speech: Rahul said, 'I will finish the work.'",
    options: [
      "Rahul said that I will finish the work.",
      "Rahul said that he would finish the work.",
      "Rahul says that he would finished the work.",
      "Rahul said he will finished the work.",
    ],
    answer: "Rahul said that he would finish the work.",
    solution:
      "In reported speech, 'I' changes to 'he' and 'will' normally changes to 'would'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 337,
    companyId: 2,
    year: 2024,
    category: "grammar",
    question:
      "Fill in the blank: The students ___ completed their assignments.",
    options: ["has", "have", "is", "was"],
    answer: "have",
    solution: "'Students' is plural, so 'have completed' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 338,
    companyId: 2,
    year: 2024,
    category: "grammar",
    question:
      "Choose the correct preposition: She is interested ___ artificial intelligence.",
    options: ["on", "at", "in", "for"],
    answer: "in",
    solution: "The standard expression is 'interested in'.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },

  {
    questionId: 339,
    companyId: 2,
    year: 2024,
    category: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "One of my friends live in Mumbai.",
      "One of my friends lives in Mumbai.",
      "One of my friend live in Mumbai.",
      "One of my friends living in Mumbai.",
    ],
    answer: "One of my friends lives in Mumbai.",
    solution:
      "The subject is 'one', which is singular, so the verb must be 'lives'.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Infosys grammar practice",
    sourceUrl: null,
  },
];

async function seedInfosys2024Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 2,
      year: 2024,
    });

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Infosys 2024 questions seeded successfully`,
    );

    process.exit(0);
  } catch (error) {
    console.error("Error seeding Infosys 2024 questions:", error);
    process.exit(1);
  }
}

seedInfosys2024Questions();
