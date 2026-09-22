require("dotenv").config();

const mongoose = require("mongoose");
const AptitudeQuestion = require("./models/AptitudeQuestion");

const aptitudeQuestions = [
  {
    questionId: 1,
    category: "Quantitative Aptitude",
    topic: "percentage",
    question: "What is 25% of 480?",
    options: ["100", "110", "120", "125"],
    correctAnswer: 2,
    explanation: "25% of 480 = (25 / 100) × 480 = 120.",
    difficulty: "Easy",
  },

  {
    questionId: 2,
    category: "Quantitative Aptitude",
    topic: "percentage",
    question:
      "A student scores 360 marks out of 450. What percentage of marks did the student score?",
    options: ["75%", "80%", "85%", "90%"],
    correctAnswer: 1,
    explanation: "Percentage = (360 / 450) × 100 = 80%.",
    difficulty: "Easy",
  },

  {
    questionId: 3,
    category: "Quantitative Aptitude",
    topic: "percentage",
    question:
      "A number is increased from 400 to 500. What is the percentage increase?",
    options: ["20%", "25%", "30%", "40%"],
    correctAnswer: 1,
    explanation:
      "Increase = 500 - 400 = 100. Percentage increase = (100 / 400) × 100 = 25%.",
    difficulty: "Easy",
  },

  {
    questionId: 4,
    category: "Quantitative Aptitude",
    topic: "percentage",
    question:
      "The price of an item decreases from ₹800 to ₹680. What is the percentage decrease?",
    options: ["10%", "12%", "15%", "20%"],
    correctAnswer: 2,
    explanation:
      "Decrease = ₹120. Percentage decrease = (120 / 800) × 100 = 15%.",
    difficulty: "Easy",
  },

  {
    questionId: 5,
    category: "Quantitative Aptitude",
    topic: "percentage",
    question: "If 35% of a number is 140, what is the number?",
    options: ["350", "400", "450", "500"],
    correctAnswer: 1,
    explanation: "35% of x = 140, so x = (140 × 100) / 35 = 400.",
    difficulty: "Medium",
  },

  {
    questionId: 6,
    category: "Quantitative Aptitude",
    topic: "percentage",
    question:
      "A salary is increased by 20% and then decreased by 20%. What is the net percentage change?",
    options: ["No change", "2% decrease", "4% decrease", "4% increase"],
    correctAnswer: 2,
    explanation:
      "Assume the salary is 100. After a 20% increase it becomes 120. A 20% decrease on 120 gives 96. Therefore, the net decrease is 4%.",
    difficulty: "Medium",
  },

  {
    questionId: 7,
    category: "Quantitative Aptitude",
    topic: "percentage",
    question:
      "In an examination, a student needs 40% marks to pass. He scores 180 marks and fails by 20 marks. What are the maximum marks?",
    options: ["400", "450", "500", "600"],
    correctAnswer: 2,
    explanation:
      "Passing marks = 180 + 20 = 200. Since 200 is 40% of the maximum marks, maximum marks = (200 × 100) / 40 = 500.",
    difficulty: "Medium",
  },

  {
    questionId: 8,
    category: "Quantitative Aptitude",
    topic: "percentage",
    question:
      "The population of a town increases by 10% in the first year and 20% in the second year. What is the total percentage increase?",
    options: ["30%", "31%", "32%", "35%"],
    correctAnswer: 2,
    explanation:
      "Assume the population is 100. It becomes 110 after the first year and 132 after the second year. Therefore, the total increase is 32%.",
    difficulty: "Medium",
  },

  {
    questionId: 9,
    category: "Quantitative Aptitude",
    topic: "percentage",
    question: "A is 25% more than B. By what percentage is B less than A?",
    options: ["15%", "20%", "25%", "30%"],
    correctAnswer: 1,
    explanation:
      "Let B = 100, so A = 125. B is 25 less than A. Percentage decrease relative to A = (25 / 125) × 100 = 20%.",
    difficulty: "Hard",
  },

  {
    questionId: 10,
    category: "Quantitative Aptitude",
    topic: "percentage",
    question:
      "The price of a product is increased by 25%. By what percentage must the new price be reduced to return to the original price?",
    options: ["15%", "20%", "25%", "30%"],
    correctAnswer: 1,
    explanation:
      "Assume the original price is 100. The increased price is 125. A reduction of 25 from 125 is (25 / 125) × 100 = 20%.",
    difficulty: "Hard",
  },
  {
    questionId: 11,
    category: "Quantitative Aptitude",
    topic: "profit and loss",
    question:
      "A shopkeeper buys an article for ₹500 and sells it for ₹600. What is the profit percentage?",
    options: ["10%", "15%", "20%", "25%"],
    correctAnswer: 2,
    explanation:
      "Profit = 600 - 500 = ₹100. Profit percentage = (100 / 500) × 100 = 20%.",
    difficulty: "Easy",
  },

  {
    questionId: 12,
    category: "Quantitative Aptitude",
    topic: "profit and loss",
    question:
      "An article is purchased for ₹800 and sold for ₹680. What is the loss percentage?",
    options: ["10%", "12%", "15%", "20%"],
    correctAnswer: 2,
    explanation:
      "Loss = 800 - 680 = ₹120. Loss percentage = (120 / 800) × 100 = 15%.",
    difficulty: "Easy",
  },

  {
    questionId: 13,
    category: "Quantitative Aptitude",
    topic: "profit and loss",
    question:
      "A shopkeeper sells an article for ₹960 at a profit of 20%. What is its cost price?",
    options: ["₹750", "₹800", "₹820", "₹850"],
    correctAnswer: 1,
    explanation:
      "Selling price = 120% of cost price. Cost price = (960 × 100) / 120 = ₹800.",
    difficulty: "Easy",
  },

  {
    questionId: 14,
    category: "Quantitative Aptitude",
    topic: "profit and loss",
    question:
      "An article costing ₹1200 is sold at a loss of 10%. What is its selling price?",
    options: ["₹1000", "₹1050", "₹1080", "₹1100"],
    correctAnswer: 2,
    explanation: "Selling price = 90% of ₹1200 = (90 / 100) × 1200 = ₹1080.",
    difficulty: "Easy",
  },

  {
    questionId: 15,
    category: "Quantitative Aptitude",
    topic: "profit and loss",
    question:
      "A shopkeeper marks an article at ₹1000 and gives a discount of 10%. What is the selling price?",
    options: ["₹850", "₹880", "₹900", "₹950"],
    correctAnswer: 2,
    explanation:
      "Discount = 10% of ₹1000 = ₹100. Selling price = 1000 - 100 = ₹900.",
    difficulty: "Medium",
  },

  {
    questionId: 16,
    category: "Quantitative Aptitude",
    topic: "profit and loss",
    question:
      "A shopkeeper buys an article for ₹1500 and wants to make a profit of 20%. At what price should he sell it?",
    options: ["₹1650", "₹1750", "₹1800", "₹1850"],
    correctAnswer: 2,
    explanation: "Required selling price = 120% of ₹1500 = ₹1800.",
    difficulty: "Medium",
  },

  {
    questionId: 17,
    category: "Quantitative Aptitude",
    topic: "profit and loss",
    question:
      "An article is sold for ₹540 after a discount of 10% on its marked price. What is the marked price?",
    options: ["₹580", "₹600", "₹620", "₹650"],
    correctAnswer: 1,
    explanation:
      "₹540 represents 90% of the marked price. Marked price = (540 × 100) / 90 = ₹600.",
    difficulty: "Medium",
  },

  {
    questionId: 18,
    category: "Quantitative Aptitude",
    topic: "profit and loss",
    question:
      "A trader sells an article at a 25% profit. If the selling price is ₹1000, what is the cost price?",
    options: ["₹750", "₹800", "₹825", "₹850"],
    correctAnswer: 1,
    explanation:
      "Selling price is 125% of cost price. Cost price = (1000 × 100) / 125 = ₹800.",
    difficulty: "Medium",
  },

  {
    questionId: 19,
    category: "Quantitative Aptitude",
    topic: "profit and loss",
    question:
      "A shopkeeper marks an article 25% above its cost price and gives a discount of 10% on the marked price. What is his profit percentage?",
    options: ["10%", "12.5%", "15%", "17.5%"],
    correctAnswer: 1,
    explanation:
      "Assume cost price = ₹100. Marked price = ₹125. After a 10% discount, selling price = ₹112.50. Profit = ₹12.50, so profit percentage = 12.5%.",
    difficulty: "Hard",
  },

  {
    questionId: 20,
    category: "Quantitative Aptitude",
    topic: "profit and loss",
    question:
      "A trader sells two articles for ₹1200 each. On one he gains 20% and on the other he loses 20%. What is his overall profit or loss percentage?",
    options: ["No profit, no loss", "2% loss", "4% loss", "4% profit"],
    correctAnswer: 2,
    explanation:
      "For the first article, cost price = 1200 / 1.2 = ₹1000. For the second, cost price = 1200 / 0.8 = ₹1500. Total cost = ₹2500 and total selling price = ₹2400. Loss = ₹100. Loss percentage = (100 / 2500) × 100 = 4%.",
    difficulty: "Hard",
  },
  {
    questionId: 21,
    category: "Quantitative Aptitude",
    topic: "ratio and proportion",
    question:
      "The ratio of two numbers is 3:5. If their sum is 64, what is the smaller number?",
    options: ["20", "24", "30", "40"],
    correctAnswer: 1,
    explanation:
      "Total parts = 3 + 5 = 8. One part = 64 / 8 = 8. Smaller number = 3 × 8 = 24.",
    difficulty: "Easy",
  },

  {
    questionId: 22,
    category: "Quantitative Aptitude",
    topic: "ratio and proportion",
    question: "Divide ₹840 in the ratio 3:4. What is the larger share?",
    options: ["₹320", "₹360", "₹420", "₹480"],
    correctAnswer: 3,
    explanation:
      "Total parts = 3 + 4 = 7. One part = 840 / 7 = 120. Larger share = 4 × 120 = ₹480.",
    difficulty: "Easy",
  },

  {
    questionId: 23,
    category: "Quantitative Aptitude",
    topic: "ratio and proportion",
    question: "If A:B = 2:3 and B:C = 4:5, what is A:B:C?",
    options: ["8:12:15", "2:4:5", "6:12:15", "8:10:15"],
    correctAnswer: 0,
    explanation:
      "Make B equal in both ratios. A:B = 2:3 = 8:12 and B:C = 4:5 = 12:15. Therefore A:B:C = 8:12:15.",
    difficulty: "Easy",
  },

  {
    questionId: 24,
    category: "Quantitative Aptitude",
    topic: "ratio and proportion",
    question:
      "The ratio of boys to girls in a class is 5:3. If there are 40 boys, how many girls are there?",
    options: ["20", "24", "30", "32"],
    correctAnswer: 1,
    explanation: "5 parts = 40, so 1 part = 8. Girls = 3 × 8 = 24.",
    difficulty: "Easy",
  },

  {
    questionId: 25,
    category: "Quantitative Aptitude",
    topic: "ratio and proportion",
    question:
      "Two numbers are in the ratio 7:9. If their difference is 20, what is the larger number?",
    options: ["70", "80", "90", "100"],
    correctAnswer: 2,
    explanation:
      "Difference in ratio parts = 9 - 7 = 2. If 2 parts = 20, one part = 10. Larger number = 9 × 10 = 90.",
    difficulty: "Medium",
  },

  {
    questionId: 26,
    category: "Quantitative Aptitude",
    topic: "ratio and proportion",
    question:
      "If 12 workers can complete a job in 15 days, how many days will 20 workers take to complete the same job, assuming equal efficiency?",
    options: ["6 days", "8 days", "9 days", "12 days"],
    correctAnswer: 2,
    explanation:
      "Workers and days are inversely proportional. 12 × 15 = 20 × d. Therefore d = 180 / 20 = 9 days.",
    difficulty: "Medium",
  },

  {
    questionId: 27,
    category: "Quantitative Aptitude",
    topic: "ratio and proportion",
    question:
      "The incomes of A and B are in the ratio 4:5 and their expenses are in the ratio 3:4. If each saves ₹2000 and A's income is ₹8000, what is B's income?",
    options: ["₹9000", "₹10000", "₹12000", "₹12500"],
    correctAnswer: 1,
    explanation:
      "A:B income = 4:5. If A's income of ₹8000 represents 4 parts, one part = ₹2000. Therefore B's income = 5 × ₹2000 = ₹10000.",
    difficulty: "Medium",
  },

  {
    questionId: 28,
    category: "Quantitative Aptitude",
    topic: "ratio and proportion",
    question:
      "A mixture contains milk and water in the ratio 5:2. If 14 litres of water is present, how much milk is present?",
    options: ["25 litres", "30 litres", "35 litres", "40 litres"],
    correctAnswer: 2,
    explanation:
      "2 parts = 14 litres, so 1 part = 7 litres. Milk = 5 × 7 = 35 litres.",
    difficulty: "Medium",
  },

  {
    questionId: 29,
    category: "Quantitative Aptitude",
    topic: "ratio and proportion",
    question:
      "The present ages of A and B are in the ratio 4:5. After 8 years, their ages will be in the ratio 6:7. What is A's present age?",
    options: ["12 years", "16 years", "20 years", "24 years"],
    correctAnswer: 1,
    explanation:
      "Let present ages be 4x and 5x. Then (4x + 8)/(5x + 8) = 6/7. So 28x + 56 = 30x + 48, giving x = 4. Therefore A's present age = 16 years.",
    difficulty: "Hard",
  },

  {
    questionId: 30,
    category: "Quantitative Aptitude",
    topic: "ratio and proportion",
    question:
      "A sum of money is divided among A, B and C in the ratio 2:3:5. If C receives ₹1500 more than A, what is the total amount?",
    options: ["₹4000", "₹4500", "₹5000", "₹6000"],
    correctAnswer: 2,
    explanation:
      "Difference between C and A = 5 - 2 = 3 parts. Three parts = ₹1500, so one part = ₹500. Total parts = 10. Total amount = 10 × ₹500 = ₹5000.",
    difficulty: "Hard",
  },
  {
    questionId: 31,
    category: "Quantitative Aptitude",
    topic: "average",
    question: "What is the average of 10, 20, 30, 40 and 50?",
    options: ["25", "30", "35", "40"],
    correctAnswer: 1,
    explanation: "Sum = 10 + 20 + 30 + 40 + 50 = 150. Average = 150 / 5 = 30.",
    difficulty: "Easy",
  },

  {
    questionId: 32,
    category: "Quantitative Aptitude",
    topic: "average",
    question: "The average of 6 numbers is 25. What is their total sum?",
    options: ["125", "140", "150", "175"],
    correctAnswer: 2,
    explanation: "Total sum = Average × Number of values = 25 × 6 = 150.",
    difficulty: "Easy",
  },

  {
    questionId: 33,
    category: "Quantitative Aptitude",
    topic: "average",
    question:
      "The average age of 5 students is 20 years. If a new student aged 26 years joins them, what is the new average age?",
    options: ["20 years", "21 years", "22 years", "23 years"],
    correctAnswer: 1,
    explanation:
      "Original total age = 5 × 20 = 100. New total = 100 + 26 = 126. New average = 126 / 6 = 21 years.",
    difficulty: "Easy",
  },

  {
    questionId: 34,
    category: "Quantitative Aptitude",
    topic: "average",
    question:
      "The average of 8 numbers is 15. If one number 20 is removed, what is the average of the remaining 7 numbers?",
    options: ["13", "14", "100/7", "15"],
    correctAnswer: 2,
    explanation:
      "Total of 8 numbers = 8 × 15 = 120. After removing 20, remaining sum = 100. New average = 100 / 7.",
    difficulty: "Easy",
  },

  {
    questionId: 35,
    category: "Quantitative Aptitude",
    topic: "average",
    question:
      "The average marks of 10 students is 60. If the marks of one student were recorded as 45 instead of 65, what is the correct average?",
    options: ["60", "61", "62", "63"],
    correctAnswer: 2,
    explanation:
      "Recorded total = 10 × 60 = 600. Correct total = 600 - 45 + 65 = 620. Correct average = 620 / 10 = 62.",
    difficulty: "Medium",
  },

  {
    questionId: 36,
    category: "Quantitative Aptitude",
    topic: "average",
    question:
      "The average of 7 consecutive integers is 24. What is the largest integer?",
    options: ["25", "26", "27", "28"],
    correctAnswer: 2,
    explanation:
      "For 7 consecutive integers, the middle number equals the average. The numbers are 21, 22, 23, 24, 25, 26 and 27. Largest = 27.",
    difficulty: "Medium",
  },

  {
    questionId: 37,
    category: "Quantitative Aptitude",
    topic: "average",
    question:
      "The average age of 20 students is 18 years. If the teacher's age is included, the average becomes 19 years. What is the teacher's age?",
    options: ["35 years", "38 years", "39 years", "40 years"],
    correctAnswer: 2,
    explanation:
      "Total age of students = 20 × 18 = 360. Total including teacher = 21 × 19 = 399. Teacher's age = 399 - 360 = 39 years.",
    difficulty: "Medium",
  },

  {
    questionId: 38,
    category: "Quantitative Aptitude",
    topic: "average",
    question:
      "The average salary of 15 employees is ₹20,000. If the manager's salary is added, the average becomes ₹22,000. What is the manager's salary?",
    options: ["₹42,000", "₹48,000", "₹50,000", "₹52,000"],
    correctAnswer: 3,
    explanation:
      "Total salary of 15 employees = 15 × ₹20,000 = ₹300,000. Total including manager = 16 × ₹22,000 = ₹352,000. Manager's salary = ₹52,000.",
    difficulty: "Medium",
  },

  {
    questionId: 39,
    category: "Quantitative Aptitude",
    topic: "average",
    question:
      "The average of 11 numbers is 50. The average of the first 6 numbers is 49 and the average of the last 6 numbers is 52. What is the sixth number?",
    options: ["50", "52", "54", "56"],
    correctAnswer: 3,
    explanation:
      "Total of all 11 numbers = 11 × 50 = 550. First 6 total = 6 × 49 = 294. Last 6 total = 6 × 52 = 312. The sixth number is counted in both groups, so it equals 294 + 312 - 550 = 56.",
    difficulty: "Hard",
  },

  {
    questionId: 40,
    category: "Quantitative Aptitude",
    topic: "average",
    question:
      "The average weight of 8 people increases by 2 kg when a person weighing 56 kg is replaced by another person. What is the weight of the new person?",
    options: ["68 kg", "70 kg", "72 kg", "74 kg"],
    correctAnswer: 2,
    explanation:
      "An increase of 2 kg in the average of 8 people means the total weight increases by 8 × 2 = 16 kg. New person's weight = 56 + 16 = 72 kg.",
    difficulty: "Hard",
  },
  {
    questionId: 41,
    category: "Quantitative Aptitude",
    topic: "time and work",
    question:
      "A can complete a piece of work in 10 days. What fraction of the work does A complete in one day?",
    options: ["1/5", "1/10", "1/15", "1/20"],
    correctAnswer: 1,
    explanation:
      "If A completes the entire work in 10 days, A's one-day work is 1/10 of the total work.",
    difficulty: "Easy",
  },

  {
    questionId: 42,
    category: "Quantitative Aptitude",
    topic: "time and work",
    question:
      "A can complete a job in 12 days and B can complete the same job in 18 days. What fraction of the work can they complete together in one day?",
    options: ["5/36", "1/6", "7/36", "1/4"],
    correctAnswer: 0,
    explanation:
      "A's one-day work = 1/12 and B's = 1/18. Together = 1/12 + 1/18 = 3/36 + 2/36 = 5/36.",
    difficulty: "Easy",
  },

  {
    questionId: 43,
    category: "Quantitative Aptitude",
    topic: "time and work",
    question:
      "A can complete a job in 15 days and B can complete it in 10 days. How many days will they take to complete the job working together?",
    options: ["5 days", "6 days", "7.5 days", "8 days"],
    correctAnswer: 1,
    explanation:
      "Combined one-day work = 1/15 + 1/10 = 1/6. Therefore, they complete the work in 6 days.",
    difficulty: "Easy",
  },

  {
    questionId: 44,
    category: "Quantitative Aptitude",
    topic: "time and work",
    question:
      "If 8 workers can complete a job in 12 days, how many days will 6 workers take to complete the same job at the same rate?",
    options: ["14 days", "16 days", "18 days", "20 days"],
    correctAnswer: 1,
    explanation:
      "Total work = 8 × 12 = 96 worker-days. Required days for 6 workers = 96 / 6 = 16 days.",
    difficulty: "Easy",
  },

  {
    questionId: 45,
    category: "Quantitative Aptitude",
    topic: "time and work",
    question:
      "A is twice as efficient as B. If B can complete a job in 18 days, how many days will A take?",
    options: ["6 days", "8 days", "9 days", "12 days"],
    correctAnswer: 2,
    explanation:
      "A is twice as efficient as B, so A requires half the time. Therefore A takes 18 / 2 = 9 days.",
    difficulty: "Medium",
  },

  {
    questionId: 46,
    category: "Quantitative Aptitude",
    topic: "time and work",
    question:
      "A can complete a job in 20 days and B can complete it in 30 days. If they work together for 6 days, what fraction of the work remains?",
    options: ["1/2", "2/5", "3/5", "1/3"],
    correctAnswer: 0,
    explanation:
      "Together, one-day work = 1/20 + 1/30 = 1/12. In 6 days they complete 6/12 = 1/2. Therefore 1/2 of the work remains.",
    difficulty: "Medium",
  },

  {
    questionId: 47,
    category: "Quantitative Aptitude",
    topic: "time and work",
    question:
      "A can complete a job in 12 days. After working alone for 4 days, B joins A and they finish the remaining work in 4 more days. In how many days can B alone complete the job?",
    options: ["12 days", "16 days", "20 days", "24 days"],
    correctAnswer: 3,
    explanation:
      "A completes 4/12 = 1/3 in the first 4 days, leaving 2/3. A and B complete 2/3 in 4 days, so their daily rate is 1/6. A's rate is 1/12, so B's rate = 1/6 - 1/12 = 1/12. Therefore B alone takes 12 days.",
    difficulty: "Medium",
  },

  {
    questionId: 48,
    category: "Quantitative Aptitude",
    topic: "time and work",
    question:
      "12 men can complete a job in 18 days. After working for 6 days, 6 more men join them. How many more days are required to complete the remaining work?",
    options: ["6 days", "8 days", "10 days", "12 days"],
    correctAnswer: 1,
    explanation:
      "Total work = 12 × 18 = 216 man-days. Work completed in 6 days = 12 × 6 = 72. Remaining work = 144 man-days. With 18 men, required time = 144 / 18 = 8 days.",
    difficulty: "Medium",
  },

  {
    questionId: 49,
    category: "Quantitative Aptitude",
    topic: "time and work",
    question:
      "A can do a job in 24 days and B in 16 days. They work together for 4 days, after which A leaves. How many more days will B take to finish the remaining work?",
    options: ["8 days", "9 days", "9⅓ days", "10 days"],
    correctAnswer: 2,
    explanation:
      "A and B's daily work = 1/24 + 1/16 = 5/48. In 4 days they complete 20/48 = 5/12. Remaining work = 7/12. B completes 1/16 per day, so time required = (7/12) × 16 = 28/3 days = 9⅓ days.",
    difficulty: "Hard",
  },

  {
    questionId: 50,
    category: "Quantitative Aptitude",
    topic: "time and work",
    question:
      "A and B together can complete a job in 8 days. A alone can complete it in 12 days. How many days will B alone take?",
    options: ["18 days", "20 days", "24 days", "30 days"],
    correctAnswer: 2,
    explanation:
      "A and B's rate = 1/8. A's rate = 1/12. B's rate = 1/8 - 1/12 = 1/24. Therefore B alone takes 24 days.",
    difficulty: "Hard",
  },
  {
    questionId: 51,
    category: "Quantitative Aptitude",
    topic: "time speed and distance",
    question: "A car travels 180 km in 3 hours. What is its average speed?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    correctAnswer: 1,
    explanation: "Speed = Distance / Time = 180 / 3 = 60 km/h.",
    difficulty: "Easy",
  },

  {
    questionId: 52,
    category: "Quantitative Aptitude",
    topic: "time speed and distance",
    question:
      "How much distance will a train travelling at 72 km/h cover in 2.5 hours?",
    options: ["160 km", "170 km", "180 km", "200 km"],
    correctAnswer: 2,
    explanation: "Distance = Speed × Time = 72 × 2.5 = 180 km.",
    difficulty: "Easy",
  },

  {
    questionId: 53,
    category: "Quantitative Aptitude",
    topic: "time speed and distance",
    question:
      "A person travels 150 km at a speed of 50 km/h. How much time does the journey take?",
    options: ["2 hours", "2.5 hours", "3 hours", "3.5 hours"],
    correctAnswer: 2,
    explanation: "Time = Distance / Speed = 150 / 50 = 3 hours.",
    difficulty: "Easy",
  },

  {
    questionId: 54,
    category: "Quantitative Aptitude",
    topic: "time speed and distance",
    question: "Convert 54 km/h into metres per second.",
    options: ["12 m/s", "15 m/s", "18 m/s", "20 m/s"],
    correctAnswer: 1,
    explanation:
      "To convert km/h to m/s, multiply by 5/18. Therefore, 54 × 5/18 = 15 m/s.",
    difficulty: "Easy",
  },

  {
    questionId: 55,
    category: "Quantitative Aptitude",
    topic: "time speed and distance",
    question:
      "A train 120 metres long is travelling at 54 km/h. How many seconds will it take to cross a pole?",
    options: ["6 seconds", "8 seconds", "10 seconds", "12 seconds"],
    correctAnswer: 1,
    explanation:
      "54 km/h = 15 m/s. To cross a pole, the train covers its own length. Time = 120 / 15 = 8 seconds.",
    difficulty: "Medium",
  },

  {
    questionId: 56,
    category: "Quantitative Aptitude",
    topic: "time speed and distance",
    question:
      "A man travels from A to B at 40 km/h and returns over the same distance at 60 km/h. What is his average speed for the whole journey?",
    options: ["45 km/h", "48 km/h", "50 km/h", "52 km/h"],
    correctAnswer: 1,
    explanation:
      "For equal distances, average speed = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = 48 km/h.",
    difficulty: "Medium",
  },

  {
    questionId: 57,
    category: "Quantitative Aptitude",
    topic: "time speed and distance",
    question:
      "A train 150 metres long is moving at 54 km/h. How long will it take to cross a platform 300 metres long?",
    options: ["20 seconds", "25 seconds", "30 seconds", "35 seconds"],
    correctAnswer: 2,
    explanation:
      "Total distance = 150 + 300 = 450 metres. Speed = 54 × 5/18 = 15 m/s. Time = 450 / 15 = 30 seconds.",
    difficulty: "Medium",
  },

  {
    questionId: 58,
    category: "Quantitative Aptitude",
    topic: "time speed and distance",
    question:
      "Two cars start from the same point in opposite directions at speeds of 50 km/h and 70 km/h. How far apart will they be after 3 hours?",
    options: ["300 km", "330 km", "360 km", "390 km"],
    correctAnswer: 2,
    explanation:
      "Relative speed = 50 + 70 = 120 km/h. Distance apart after 3 hours = 120 × 3 = 360 km.",
    difficulty: "Medium",
  },

  {
    questionId: 59,
    category: "Quantitative Aptitude",
    topic: "time speed and distance",
    question:
      "A person increases his speed from 40 km/h to 50 km/h and takes 1 hour less to cover the same distance. What is the distance?",
    options: ["150 km", "180 km", "200 km", "240 km"],
    correctAnswer: 2,
    explanation:
      "Let the distance be d. Then d/40 - d/50 = 1. So d(1/40 - 1/50) = 1. This gives d/200 = 1, therefore d = 200 km.",
    difficulty: "Hard",
  },

  {
    questionId: 60,
    category: "Quantitative Aptitude",
    topic: "time speed and distance",
    question:
      "Two trains of lengths 150 metres and 250 metres are moving in opposite directions at 54 km/h and 90 km/h. How long will they take to completely cross each other?",
    options: ["8 seconds", "10 seconds", "12 seconds", "15 seconds"],
    correctAnswer: 1,
    explanation:
      "54 km/h = 15 m/s and 90 km/h = 25 m/s. Since they move in opposite directions, relative speed = 40 m/s. Total distance = 150 + 250 = 400 metres. Time = 400 / 40 = 10 seconds.",
    difficulty: "Hard",
  },
  {
    questionId: 61,
    category: "Quantitative Aptitude",
    topic: "simple and compound interest",
    question:
      "What is the simple interest on ₹5000 at 8% per annum for 2 years?",
    options: ["₹600", "₹700", "₹800", "₹900"],
    correctAnswer: 2,
    explanation: "SI = (P × R × T) / 100 = (5000 × 8 × 2) / 100 = ₹800.",
    difficulty: "Easy",
  },
  {
    questionId: 62,
    category: "Quantitative Aptitude",
    topic: "simple and compound interest",
    question:
      "What is the amount on ₹4000 at 5% simple interest per annum for 3 years?",
    options: ["₹4400", "₹4500", "₹4600", "₹4800"],
    correctAnswer: 2,
    explanation:
      "SI = (4000 × 5 × 3) / 100 = ₹600. Amount = ₹4000 + ₹600 = ₹4600.",
    difficulty: "Easy",
  },
  {
    questionId: 63,
    category: "Quantitative Aptitude",
    topic: "simple and compound interest",
    question:
      "At what rate of simple interest will ₹2000 earn ₹400 in 4 years?",
    options: ["4%", "5%", "6%", "8%"],
    correctAnswer: 1,
    explanation: "R = (SI × 100) / (P × T) = (400 × 100) / (2000 × 4) = 5%.",
    difficulty: "Easy",
  },
  {
    questionId: 64,
    category: "Quantitative Aptitude",
    topic: "simple and compound interest",
    question:
      "A sum earns ₹900 as simple interest at 10% per annum in 3 years. What is the principal?",
    options: ["₹2000", "₹2500", "₹3000", "₹3500"],
    correctAnswer: 2,
    explanation: "P = (SI × 100) / (R × T) = (900 × 100) / (10 × 3) = ₹3000.",
    difficulty: "Easy",
  },
  {
    questionId: 65,
    category: "Quantitative Aptitude",
    topic: "simple and compound interest",
    question:
      "What is the compound interest on ₹10,000 at 10% per annum for 2 years, compounded annually?",
    options: ["₹2000", "₹2100", "₹2200", "₹2400"],
    correctAnswer: 1,
    explanation:
      "Amount = 10000 × (1.10)² = ₹12100. CI = ₹12100 - ₹10000 = ₹2100.",
    difficulty: "Medium",
  },
  {
    questionId: 66,
    category: "Quantitative Aptitude",
    topic: "simple and compound interest",
    question:
      "What is the amount on ₹8000 at 5% compound interest per annum for 2 years?",
    options: ["₹8600", "₹8800", "₹8820", "₹8840"],
    correctAnswer: 2,
    explanation: "Amount = 8000 × (1.05)² = 8000 × 1.1025 = ₹8820.",
    difficulty: "Medium",
  },
  {
    questionId: 67,
    category: "Quantitative Aptitude",
    topic: "simple and compound interest",
    question:
      "What is the difference between compound interest and simple interest on ₹5000 at 10% per annum for 2 years?",
    options: ["₹25", "₹50", "₹75", "₹100"],
    correctAnswer: 1,
    explanation:
      "For 2 years, difference = P × (R/100)² = 5000 × (0.10)² = ₹50.",
    difficulty: "Medium",
  },
  {
    questionId: 68,
    category: "Quantitative Aptitude",
    topic: "simple and compound interest",
    question:
      "A sum doubles itself in 5 years at simple interest. In how many years will it become three times itself at the same rate?",
    options: ["7.5 years", "10 years", "12 years", "15 years"],
    correctAnswer: 1,
    explanation:
      "Doubling means interest equal to principal is earned in 5 years. To become three times, interest must equal twice the principal, requiring 10 years.",
    difficulty: "Medium",
  },
  {
    questionId: 69,
    category: "Quantitative Aptitude",
    topic: "simple and compound interest",
    question:
      "A sum becomes ₹12,100 in 2 years at 10% compound interest per annum. What was the principal?",
    options: ["₹9000", "₹9500", "₹10000", "₹11000"],
    correctAnswer: 2,
    explanation: "P = 12100 / (1.10)² = 12100 / 1.21 = ₹10000.",
    difficulty: "Hard",
  },
  {
    questionId: 70,
    category: "Quantitative Aptitude",
    topic: "simple and compound interest",
    question:
      "The simple interest on a sum for 4 years at 6% per annum is ₹720. What is the amount after 4 years?",
    options: ["₹3000", "₹3420", "₹3600", "₹3720"],
    correctAnswer: 3,
    explanation:
      "Principal = (720 × 100) / (6 × 4) = ₹3000. Amount = ₹3000 + ₹720 = ₹3720.",
    difficulty: "Hard",
  },
  {
    questionId: 71,
    category: "Quantitative Aptitude",
    topic: "number system",
    question: "What is the HCF of 24 and 36?",
    options: ["6", "8", "12", "18"],
    correctAnswer: 2,
    explanation:
      "The common factors of 24 and 36 include 1, 2, 3, 4, 6 and 12. The highest is 12.",
    difficulty: "Easy",
  },
  {
    questionId: 72,
    category: "Quantitative Aptitude",
    topic: "number system",
    question: "What is the LCM of 12 and 18?",
    options: ["24", "30", "36", "72"],
    correctAnswer: 2,
    explanation: "12 = 2² × 3 and 18 = 2 × 3². LCM = 2² × 3² = 36.",
    difficulty: "Easy",
  },
  {
    questionId: 73,
    category: "Quantitative Aptitude",
    topic: "number system",
    question: "Which of the following numbers is divisible by 9?",
    options: ["234", "245", "351", "472"],
    correctAnswer: 2,
    explanation:
      "For 351, the digit sum is 3 + 5 + 1 = 9, so it is divisible by 9.",
    difficulty: "Easy",
  },
  {
    questionId: 74,
    category: "Quantitative Aptitude",
    topic: "number system",
    question: "What is the remainder when 257 is divided by 7?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    explanation: "7 × 36 = 252. Therefore, 257 - 252 = 5.",
    difficulty: "Easy",
  },
  {
    questionId: 75,
    category: "Quantitative Aptitude",
    topic: "number system",
    question:
      "The HCF of two numbers is 6 and their LCM is 180. If one number is 30, what is the other number?",
    options: ["24", "30", "36", "42"],
    correctAnswer: 2,
    explanation:
      "Product of two numbers = HCF × LCM. Other number = (6 × 180) / 30 = 36.",
    difficulty: "Medium",
  },
  {
    questionId: 76,
    category: "Quantitative Aptitude",
    topic: "number system",
    question:
      "What is the smallest number that is exactly divisible by 8, 12 and 15?",
    options: ["60", "90", "120", "240"],
    correctAnswer: 2,
    explanation: "LCM of 8, 12 and 15 = 2³ × 3 × 5 = 120.",
    difficulty: "Medium",
  },
  {
    questionId: 77,
    category: "Quantitative Aptitude",
    topic: "number system",
    question:
      "What is the greatest number that divides 43, 91 and 183 leaving the same remainder in each case?",
    options: ["2", "4", "6", "8"],
    correctAnswer: 1,
    explanation:
      "Take differences: 91 - 43 = 48, 183 - 91 = 92 and 183 - 43 = 140. HCF of 48, 92 and 140 is 4.",
    difficulty: "Medium",
  },
  {
    questionId: 78,
    category: "Quantitative Aptitude",
    topic: "number system",
    question: "How many factors does the number 72 have?",
    options: ["10", "12", "14", "16"],
    correctAnswer: 1,
    explanation: "72 = 2³ × 3². Number of factors = (3 + 1)(2 + 1) = 12.",
    difficulty: "Medium",
  },
  {
    questionId: 79,
    category: "Quantitative Aptitude",
    topic: "number system",
    question: "What is the unit digit of 7 raised to the power 103?",
    options: ["1", "3", "7", "9"],
    correctAnswer: 1,
    explanation:
      "Unit digits of powers of 7 repeat as 7, 9, 3, 1. Since 103 mod 4 = 3, the unit digit is the third value, 3.",
    difficulty: "Hard",
  },
  {
    questionId: 80,
    category: "Quantitative Aptitude",
    topic: "number system",
    question:
      "What is the smallest number which when divided by 12, 18 and 24 leaves a remainder of 5 in each case?",
    options: ["67", "72", "77", "149"],
    correctAnswer: 2,
    explanation:
      "LCM of 12, 18 and 24 is 72. Therefore, the smallest required number greater than the divisors is 72 + 5 = 77.",
    difficulty: "Hard",
  },
  {
    questionId: 81,
    category: "Quantitative Aptitude",
    topic: "probability",
    question:
      "A fair coin is tossed once. What is the probability of getting a head?",
    options: ["1/4", "1/3", "1/2", "1"],
    correctAnswer: 2,
    explanation:
      "There are 2 equally likely outcomes, head and tail. Therefore P(head) = 1/2.",
    difficulty: "Easy",
  },
  {
    questionId: 82,
    category: "Quantitative Aptitude",
    topic: "probability",
    question:
      "A fair die is rolled once. What is the probability of getting an even number?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    correctAnswer: 2,
    explanation:
      "Even outcomes are 2, 4 and 6. Therefore probability = 3/6 = 1/2.",
    difficulty: "Easy",
  },
  {
    questionId: 83,
    category: "Quantitative Aptitude",
    topic: "probability",
    question:
      "A card is drawn from a standard deck of 52 cards. What is the probability of drawing an ace?",
    options: ["1/13", "1/12", "1/4", "4/13"],
    correctAnswer: 0,
    explanation: "There are 4 aces among 52 cards. Probability = 4/52 = 1/13.",
    difficulty: "Easy",
  },
  {
    questionId: 84,
    category: "Quantitative Aptitude",
    topic: "probability",
    question:
      "Two fair coins are tossed. What is the probability of getting exactly one head?",
    options: ["1/4", "1/2", "3/4", "1"],
    correctAnswer: 1,
    explanation:
      "Possible outcomes are HH, HT, TH and TT. Exactly one head occurs in HT and TH, so probability = 2/4 = 1/2.",
    difficulty: "Easy",
  },
  {
    questionId: 85,
    category: "Quantitative Aptitude",
    topic: "probability",
    question:
      "A bag contains 5 red balls and 3 blue balls. One ball is selected at random. What is the probability that it is blue?",
    options: ["3/5", "3/8", "5/8", "1/2"],
    correctAnswer: 1,
    explanation:
      "There are 3 blue balls out of 8 total balls. Probability = 3/8.",
    difficulty: "Medium",
  },
  {
    questionId: 86,
    category: "Quantitative Aptitude",
    topic: "probability",
    question:
      "Two fair dice are rolled. What is the probability that their sum is 7?",
    options: ["1/12", "1/9", "1/6", "5/36"],
    correctAnswer: 2,
    explanation:
      "There are 36 outcomes. Six give a sum of 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Probability = 6/36 = 1/6.",
    difficulty: "Medium",
  },
  {
    questionId: 87,
    category: "Quantitative Aptitude",
    topic: "probability",
    question:
      "A number is selected at random from 1 to 20. What is the probability that it is divisible by 4?",
    options: ["1/5", "1/4", "1/3", "2/5"],
    correctAnswer: 1,
    explanation:
      "Numbers divisible by 4 are 4, 8, 12, 16 and 20. Probability = 5/20 = 1/4.",
    difficulty: "Medium",
  },
  {
    questionId: 88,
    category: "Quantitative Aptitude",
    topic: "probability",
    question:
      "A card is drawn from a standard deck. What is the probability that it is a king or a queen?",
    options: ["1/13", "2/13", "1/4", "4/13"],
    correctAnswer: 1,
    explanation:
      "There are 4 kings and 4 queens, giving 8 favourable cards. Probability = 8/52 = 2/13.",
    difficulty: "Medium",
  },
  {
    questionId: 89,
    category: "Quantitative Aptitude",
    topic: "probability",
    question:
      "Three fair coins are tossed together. What is the probability of getting at least two heads?",
    options: ["1/4", "3/8", "1/2", "5/8"],
    correctAnswer: 2,
    explanation:
      "There are 8 total outcomes. At least two heads occurs in HHT, HTH, THH and HHH: 4 outcomes. Probability = 4/8 = 1/2.",
    difficulty: "Hard",
  },
  {
    questionId: 90,
    category: "Quantitative Aptitude",
    topic: "probability",
    question:
      "A bag contains 4 red and 6 blue balls. Two balls are drawn without replacement. What is the probability that both are red?",
    options: ["1/5", "2/15", "4/15", "1/3"],
    correctAnswer: 1,
    explanation: "Probability = (4/10) × (3/9) = 12/90 = 2/15.",
    difficulty: "Hard",
  },
  {
    questionId: 91,
    category: "Quantitative Aptitude",
    topic: "permutation and combination",
    question: "In how many ways can 5 different books be arranged on a shelf?",
    options: ["25", "60", "120", "240"],
    correctAnswer: 2,
    explanation: "Number of arrangements = 5! = 5 × 4 × 3 × 2 × 1 = 120.",
    difficulty: "Easy",
  },
  {
    questionId: 92,
    category: "Quantitative Aptitude",
    topic: "permutation and combination",
    question:
      "In how many ways can 2 students be selected from a group of 5 students?",
    options: ["5", "10", "15", "20"],
    correctAnswer: 1,
    explanation: "Number of selections = 5C2 = (5 × 4) / (2 × 1) = 10.",
    difficulty: "Easy",
  },
  {
    questionId: 93,
    category: "Quantitative Aptitude",
    topic: "permutation and combination",
    question:
      "How many different arrangements can be made using all the letters of the word CAT?",
    options: ["3", "6", "9", "12"],
    correctAnswer: 1,
    explanation:
      "There are 3 distinct letters. Number of arrangements = 3! = 6.",
    difficulty: "Easy",
  },
  {
    questionId: 94,
    category: "Quantitative Aptitude",
    topic: "permutation and combination",
    question:
      "In how many ways can a committee of 3 people be selected from 6 people?",
    options: ["10", "15", "20", "30"],
    correctAnswer: 2,
    explanation: "Number of committees = 6C3 = (6 × 5 × 4) / (3 × 2 × 1) = 20.",
    difficulty: "Easy",
  },
  {
    questionId: 95,
    category: "Quantitative Aptitude",
    topic: "permutation and combination",
    question:
      "How many 3-digit numbers can be formed using the digits 1, 2, 3 and 4 without repetition?",
    options: ["12", "18", "24", "36"],
    correctAnswer: 2,
    explanation: "Number of arrangements = 4P3 = 4 × 3 × 2 = 24.",
    difficulty: "Medium",
  },
  {
    questionId: 96,
    category: "Quantitative Aptitude",
    topic: "permutation and combination",
    question:
      "In how many ways can a captain and vice-captain be selected from 8 players?",
    options: ["28", "48", "56", "64"],
    correctAnswer: 2,
    explanation:
      "The two positions are different, so order matters. Number of ways = 8P2 = 8 × 7 = 56.",
    difficulty: "Medium",
  },
  {
    questionId: 97,
    category: "Quantitative Aptitude",
    topic: "permutation and combination",
    question:
      "How many distinct arrangements can be made using all the letters of the word LEVEL?",
    options: ["20", "30", "60", "120"],
    correctAnswer: 1,
    explanation:
      "LEVEL has 5 letters with L repeated twice and E repeated twice. Arrangements = 5! / (2! × 2!) = 120 / 4 = 30.",
    difficulty: "Medium",
  },
  {
    questionId: 98,
    category: "Quantitative Aptitude",
    topic: "permutation and combination",
    question:
      "From 7 men and 5 women, in how many ways can a committee of 2 men and 2 women be formed?",
    options: ["105", "180", "210", "420"],
    correctAnswer: 2,
    explanation:
      "Choose 2 men in 7C2 = 21 ways and 2 women in 5C2 = 10 ways. Total = 21 × 10 = 210.",
    difficulty: "Medium",
  },
  {
    questionId: 99,
    category: "Quantitative Aptitude",
    topic: "permutation and combination",
    question: "In how many ways can 6 people sit around a circular table?",
    options: ["60", "120", "360", "720"],
    correctAnswer: 1,
    explanation:
      "Circular arrangements of n distinct people = (n - 1)!. Therefore (6 - 1)! = 5! = 120.",
    difficulty: "Hard",
  },
  {
    questionId: 100,
    category: "Quantitative Aptitude",
    topic: "permutation and combination",
    question:
      "How many 4-digit even numbers can be formed using 1, 2, 3, 4 and 5 without repetition?",
    options: ["24", "36", "48", "60"],
    correctAnswer: 2,
    explanation:
      "The last digit must be 2 or 4, giving 2 choices. The remaining three positions can be filled in 4P3 = 24 ways. Total = 2 × 24 = 48.",
    difficulty: "Hard",
  },
  {
    questionId: 101,
    category: "Quantitative Aptitude",
    topic: "data interpretation",
    question:
      "Refer to the table: CSE placements were 40 in 2021, 50 in 2022, 60 in 2023 and 70 in 2024. How many CSE students were placed in 2023?",
    options: ["50", "55", "60", "70"],
    correctAnswer: 2,
    explanation:
      "According to the given data, 60 CSE students were placed in 2023.",
    difficulty: "Easy",
  },
  {
    questionId: 102,
    category: "Quantitative Aptitude",
    topic: "data interpretation",
    question:
      "In 2024, CSE had 70 placements, ECE had 50 and ME had 40. What was the total number of placements?",
    options: ["140", "150", "160", "170"],
    correctAnswer: 2,
    explanation: "Total = 70 + 50 + 40 = 160.",
    difficulty: "Easy",
  },
  {
    questionId: 103,
    category: "Quantitative Aptitude",
    topic: "data interpretation",
    question:
      "CSE placements increased from 40 in 2021 to 60 in 2023. What was the percentage increase?",
    options: ["25%", "40%", "50%", "60%"],
    correctAnswer: 2,
    explanation:
      "Increase = 60 - 40 = 20. Percentage increase = (20 / 40) × 100 = 50%.",
    difficulty: "Medium",
  },
  {
    questionId: 104,
    category: "Quantitative Aptitude",
    topic: "data interpretation",
    question:
      "ECE placements from 2021 to 2024 were 30, 35, 45 and 50. What was the average number of ECE placements?",
    options: ["35", "40", "42.5", "45"],
    correctAnswer: 1,
    explanation: "Average = (30 + 35 + 45 + 50) / 4 = 160 / 4 = 40.",
    difficulty: "Medium",
  },
  {
    questionId: 105,
    category: "Quantitative Aptitude",
    topic: "data interpretation",
    question:
      "In 2023, CSE, ECE and ME placements were 60, 45 and 30 respectively. What is the ratio of CSE placements to ME placements?",
    options: ["1:2", "2:1", "3:2", "4:3"],
    correctAnswer: 1,
    explanation: "CSE : ME = 60 : 30 = 2 : 1.",
    difficulty: "Medium",
  },
  {
    questionId: 106,
    category: "Quantitative Aptitude",
    topic: "data interpretation",
    question:
      "A placement report shows TCS selected 80 students, Infosys 60, Accenture 50, Cognizant 40 and Wipro 20. How many students were selected in total?",
    options: ["230", "240", "250", "260"],
    correctAnswer: 2,
    explanation: "Total = 80 + 60 + 50 + 40 + 20 = 250.",
    difficulty: "Easy",
  },
  {
    questionId: 107,
    category: "Quantitative Aptitude",
    topic: "data interpretation",
    question:
      "TCS selected 80 students and Cognizant selected 40. By what percentage did TCS selections exceed Cognizant selections?",
    options: ["50%", "75%", "100%", "125%"],
    correctAnswer: 2,
    explanation:
      "Difference = 80 - 40 = 40. Percentage relative to Cognizant = (40 / 40) × 100 = 100%.",
    difficulty: "Medium",
  },
  {
    questionId: 108,
    category: "Quantitative Aptitude",
    topic: "data interpretation",
    question:
      "Infosys selected 60 students and Accenture selected 50. What is their selection ratio?",
    options: ["5:6", "6:5", "3:2", "4:3"],
    correctAnswer: 1,
    explanation: "Infosys : Accenture = 60 : 50 = 6 : 5.",
    difficulty: "Easy",
  },
  {
    questionId: 109,
    category: "Quantitative Aptitude",
    topic: "data interpretation",
    question:
      "If the total selections were 250 and TCS selected 80 students, approximately what percentage of the total were selected by TCS?",
    options: ["28%", "30%", "32%", "36%"],
    correctAnswer: 2,
    explanation: "Percentage = (80 / 250) × 100 = 32%.",
    difficulty: "Medium",
  },
  {
    questionId: 110,
    category: "Quantitative Aptitude",
    topic: "data interpretation",
    question:
      "TCS and Infosys together selected 140 students out of a total of 250. What percentage of all selections did they account for?",
    options: ["52%", "54%", "56%", "60%"],
    correctAnswer: 2,
    explanation: "Percentage = (140 / 250) × 100 = 56%.",
    difficulty: "Hard",
  },
  {
    questionId: 111,
    category: "Logical Reasoning",
    topic: "number series",
    question: "Find the next number in the series: 2, 4, 6, 8, 10, ?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 1,
    explanation: "Each number increases by 2. Therefore, 10 + 2 = 12.",
    difficulty: "Easy",
  },
  {
    questionId: 112,
    category: "Logical Reasoning",
    topic: "number series",
    question: "Find the next number in the series: 3, 6, 12, 24, 48, ?",
    options: ["72", "84", "96", "108"],
    correctAnswer: 2,
    explanation: "Each number is multiplied by 2. Therefore, 48 × 2 = 96.",
    difficulty: "Easy",
  },
  {
    questionId: 113,
    category: "Logical Reasoning",
    topic: "number series",
    question: "Find the next number in the series: 1, 4, 9, 16, 25, ?",
    options: ["30", "32", "36", "49"],
    correctAnswer: 2,
    explanation:
      "The numbers are squares: 1², 2², 3², 4², 5². The next is 6² = 36.",
    difficulty: "Easy",
  },
  {
    questionId: 114,
    category: "Logical Reasoning",
    topic: "number series",
    question: "Find the next number in the series: 5, 10, 20, 40, 80, ?",
    options: ["120", "140", "160", "180"],
    correctAnswer: 2,
    explanation: "Each number is multiplied by 2. Therefore, 80 × 2 = 160.",
    difficulty: "Easy",
  },
  {
    questionId: 115,
    category: "Logical Reasoning",
    topic: "number series",
    question: "Find the next number in the series: 2, 5, 10, 17, 26, ?",
    options: ["35", "36", "37", "38"],
    correctAnswer: 2,
    explanation:
      "The differences are 3, 5, 7 and 9. The next difference is 11. Therefore, 26 + 11 = 37.",
    difficulty: "Medium",
  },
  {
    questionId: 116,
    category: "Logical Reasoning",
    topic: "number series",
    question: "Find the next number in the series: 3, 8, 15, 24, 35, ?",
    options: ["46", "48", "50", "52"],
    correctAnswer: 1,
    explanation:
      "The differences are 5, 7, 9 and 11. The next difference is 13. Therefore, 35 + 13 = 48.",
    difficulty: "Medium",
  },
  {
    questionId: 117,
    category: "Logical Reasoning",
    topic: "number series",
    question: "Find the next number in the series: 7, 10, 16, 25, 37, ?",
    options: ["49", "50", "52", "55"],
    correctAnswer: 2,
    explanation:
      "Differences are 3, 6, 9 and 12. The next difference is 15. Therefore, 37 + 15 = 52.",
    difficulty: "Medium",
  },
  {
    questionId: 118,
    category: "Logical Reasoning",
    topic: "number series",
    question: "Find the next number in the series: 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "48"],
    correctAnswer: 2,
    explanation:
      "The terms follow n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6. The next is 6×7 = 42.",
    difficulty: "Medium",
  },
  {
    questionId: 119,
    category: "Logical Reasoning",
    topic: "number series",
    question: "Find the missing number: 4, 9, 19, 39, 79, ?",
    options: ["119", "139", "159", "169"],
    correctAnswer: 2,
    explanation:
      "Each term is previous term × 2 + 1. Therefore, 79 × 2 + 1 = 159.",
    difficulty: "Hard",
  },
  {
    questionId: 120,
    category: "Logical Reasoning",
    topic: "number series",
    question: "Find the next number in the series: 1, 2, 6, 24, 120, ?",
    options: ["240", "360", "600", "720"],
    correctAnswer: 3,
    explanation:
      "The series follows factorials: 1!, 2!, 3!, 4!, 5!. Therefore, the next term is 6! = 720.",
    difficulty: "Hard",
  },
  {
    questionId: 121,
    category: "Logical Reasoning",
    topic: "coding-decoding",
    question:
      "In a certain code, CAT is written as DBU. How is DOG written in the same code?",
    options: ["EPH", "EOH", "FPH", "EPI"],
    correctAnswer: 0,
    explanation:
      "Each letter is replaced by the next letter of the alphabet: D→E, O→P, G→H. Therefore, DOG becomes EPH.",
    difficulty: "Easy",
  },
  {
    questionId: 122,
    category: "Logical Reasoning",
    topic: "coding-decoding",
    question:
      "In a certain code, BOOK is written as CPPL. How is READ written in the same code?",
    options: ["SFBE", "SEBE", "SGBE", "RFBE"],
    correctAnswer: 0,
    explanation:
      "Each letter is shifted forward by one position: R→S, E→F, A→B, D→E. Therefore, READ becomes SFBE.",
    difficulty: "Easy",
  },
  {
    questionId: 123,
    category: "Logical Reasoning",
    topic: "coding-decoding",
    question:
      "If A = 1, B = 2, C = 3 and so on, what is the numerical value of BAD?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 1,
    explanation: "B = 2, A = 1 and D = 4. Therefore, BAD = 2 + 1 + 4 = 7.",
    difficulty: "Easy",
  },
  {
    questionId: 124,
    category: "Logical Reasoning",
    topic: "coding-decoding",
    question:
      "In a certain code, DELHI is written as IHLED. How is MUMBAI written in the same code?",
    options: ["IABMUM", "IABMUM", "IABMMU", "IABMUM"],
    correctAnswer: 0,
    explanation:
      "The word is written in reverse order. Reversing MUMBAI gives IABMUM.",
    difficulty: "Easy",
  },
  {
    questionId: 125,
    category: "Logical Reasoning",
    topic: "coding-decoding",
    question:
      "In a certain code, PEN is written as 16-5-14. How is MAP written in the same code?",
    options: ["12-1-16", "13-1-15", "13-1-16", "13-2-16"],
    correctAnswer: 2,
    explanation:
      "Letters are replaced by their alphabet positions. M = 13, A = 1 and P = 16. Therefore, MAP = 13-1-16.",
    difficulty: "Medium",
  },
  {
    questionId: 126,
    category: "Logical Reasoning",
    topic: "coding-decoding",
    question:
      "If ROAD is coded as URDG by shifting every letter three positions forward, how is MILK coded?",
    options: ["PLOM", "PLO N", "PLON", "QMON"],
    correctAnswer: 2,
    explanation:
      "Shift each letter three positions forward: M→P, I→L, L→O and K→N. Therefore, MILK becomes PLON.",
    difficulty: "Medium",
  },
  {
    questionId: 127,
    category: "Logical Reasoning",
    topic: "coding-decoding",
    question:
      "In a certain code, APPLE is written as 1-16-16-12-5. How is GRAPE written?",
    options: ["7-18-1-16-5", "7-17-1-16-5", "6-18-1-16-5", "7-18-2-16-5"],
    correctAnswer: 0,
    explanation:
      "Using alphabet positions: G = 7, R = 18, A = 1, P = 16 and E = 5. Therefore, GRAPE = 7-18-1-16-5.",
    difficulty: "Medium",
  },
  {
    questionId: 128,
    category: "Logical Reasoning",
    topic: "coding-decoding",
    question:
      "In a certain code language, 'red blue green' is written as 'ka na pa', 'blue white' is written as 'na sa', and 'green black' is written as 'pa ma'. What is the code for blue?",
    options: ["ka", "na", "pa", "sa"],
    correctAnswer: 1,
    explanation:
      "The common word in the first and second statements is 'blue'. The common code is 'na'. Therefore, blue is coded as na.",
    difficulty: "Medium",
  },
  {
    questionId: 129,
    category: "Logical Reasoning",
    topic: "coding-decoding",
    question:
      "If COMPUTER is coded as DPNQVUFS by shifting each letter one position forward, how is KEYBOARD coded?",
    options: ["LFZCPBSE", "LFZCPBSE", "LFZCPASE", "KFZCPBSE"],
    correctAnswer: 0,
    explanation:
      "Shift each letter forward by one: K→L, E→F, Y→Z, B→C, O→P, A→B, R→S, D→E. Therefore, KEYBOARD becomes LFZCPBSE.",
    difficulty: "Hard",
  },
  {
    questionId: 130,
    category: "Logical Reasoning",
    topic: "coding-decoding",
    question:
      "Using the opposite-letter code A↔Z, B↔Y, C↔X and so on, how is CODE written?",
    options: ["XLWV", "XLEV", "WLVX", "XOWV"],
    correctAnswer: 0,
    explanation:
      "Using opposite alphabet letters: C→X, O→L, D→W and E→V. Therefore, CODE becomes XLWV.",
    difficulty: "Hard",
  },
  {
    questionId: 131,
    category: "Logical Reasoning",
    topic: "blood relations",
    question:
      "Pointing to a boy, Riya said, 'He is the son of my mother's only son.' How is the boy related to Riya?",
    options: ["Brother", "Son", "Nephew", "Cousin"],
    correctAnswer: 2,
    explanation:
      "Riya's mother's only son is Riya's brother. The boy is her brother's son, so he is Riya's nephew.",
    difficulty: "Easy",
  },
  {
    questionId: 132,
    category: "Logical Reasoning",
    topic: "blood relations",
    question:
      "A is the father of B. B is the sister of C. How is A related to C?",
    options: ["Brother", "Father", "Uncle", "Grandfather"],
    correctAnswer: 1,
    explanation:
      "B and C are siblings. Since A is B's father, A is also C's father.",
    difficulty: "Easy",
  },
  {
    questionId: 133,
    category: "Logical Reasoning",
    topic: "blood relations",
    question:
      "P is the mother of Q. Q is the brother of R. How is P related to R?",
    options: ["Sister", "Aunt", "Mother", "Grandmother"],
    correctAnswer: 2,
    explanation:
      "Q and R are siblings. Since P is Q's mother, P is also R's mother.",
    difficulty: "Easy",
  },
  {
    questionId: 134,
    category: "Logical Reasoning",
    topic: "blood relations",
    question:
      "Rahul is the brother of Neha. Neha is the daughter of Amit. How is Rahul related to Amit?",
    options: ["Son", "Brother", "Father", "Nephew"],
    correctAnswer: 0,
    explanation:
      "Rahul and Neha are siblings. Neha is Amit's daughter, so Rahul is Amit's son.",
    difficulty: "Easy",
  },
  {
    questionId: 135,
    category: "Logical Reasoning",
    topic: "blood relations",
    question:
      "Pointing to a man, Priya said, 'He is the only son of my mother's father.' How is the man related to Priya?",
    options: ["Brother", "Father", "Maternal Uncle", "Grandfather"],
    correctAnswer: 2,
    explanation:
      "Priya's mother's father is her maternal grandfather. His only son is Priya's mother's brother, so the man is Priya's maternal uncle.",
    difficulty: "Medium",
  },
  {
    questionId: 136,
    category: "Logical Reasoning",
    topic: "blood relations",
    question:
      "A is B's sister. C is B's mother. D is C's father. How is A related to D?",
    options: ["Daughter", "Granddaughter", "Sister", "Niece"],
    correctAnswer: 1,
    explanation:
      "C is A's mother, and D is C's father. Therefore, D is A's maternal grandfather and A is D's granddaughter.",
    difficulty: "Medium",
  },
  {
    questionId: 137,
    category: "Logical Reasoning",
    topic: "blood relations",
    question:
      "M is the father of N. O is the wife of M. P is the brother of N. How is O related to P?",
    options: ["Sister", "Aunt", "Mother", "Grandmother"],
    correctAnswer: 2,
    explanation:
      "M is the father of N and P. O is M's wife, so O is P's mother.",
    difficulty: "Medium",
  },
  {
    questionId: 138,
    category: "Logical Reasoning",
    topic: "blood relations",
    question:
      "Introducing a woman, Raj said, 'She is the daughter of the only son of my grandfather.' How is the woman related to Raj, assuming Raj's father is his grandfather's only son?",
    options: ["Mother", "Sister", "Aunt", "Cousin"],
    correctAnswer: 1,
    explanation:
      "Raj's grandfather's only son is Raj's father. The woman is Raj's father's daughter, so she is Raj's sister.",
    difficulty: "Medium",
  },
  {
    questionId: 139,
    category: "Logical Reasoning",
    topic: "blood relations",
    question:
      "X is the brother of Y. Y is the mother of Z. How is X related to Z?",
    options: ["Father", "Brother", "Maternal Uncle", "Grandfather"],
    correctAnswer: 2,
    explanation:
      "X is the brother of Z's mother Y. Therefore, X is Z's maternal uncle.",
    difficulty: "Hard",
  },
  {
    questionId: 140,
    category: "Logical Reasoning",
    topic: "blood relations",
    question:
      "A is the mother of B. C is the father of A. D is the mother of C. How is D related to B?",
    options: ["Grandmother", "Great-grandmother", "Aunt", "Mother"],
    correctAnswer: 1,
    explanation:
      "C is B's maternal grandfather. D is C's mother, so D is B's great-grandmother.",
    difficulty: "Hard",
  },
  {
    questionId: 141,
    category: "Logical Reasoning",
    topic: "direction sense",
    question:
      "Ravi walks 10 metres north and then 10 metres east. In which direction is he from his starting point?",
    options: ["North-West", "North-East", "South-East", "South-West"],
    correctAnswer: 1,
    explanation:
      "Ravi moves north and then east, so his final position is north-east of the starting point.",
    difficulty: "Easy",
  },
  {
    questionId: 142,
    category: "Logical Reasoning",
    topic: "direction sense",
    question:
      "Aman is facing north. He turns right and then turns right again. Which direction is he facing now?",
    options: ["North", "South", "East", "West"],
    correctAnswer: 1,
    explanation:
      "From north, the first right turn makes him face east. The second right turn makes him face south.",
    difficulty: "Easy",
  },
  {
    questionId: 143,
    category: "Logical Reasoning",
    topic: "direction sense",
    question:
      "Priya is facing west. She turns left. Which direction is she facing now?",
    options: ["North", "South", "East", "West"],
    correctAnswer: 1,
    explanation: "When facing west, a left turn points toward south.",
    difficulty: "Easy",
  },
  {
    questionId: 144,
    category: "Logical Reasoning",
    topic: "direction sense",
    question:
      "A boy walks 5 km east and then 3 km west. How far and in which direction is he from his starting point?",
    options: ["2 km East", "2 km West", "8 km East", "8 km West"],
    correctAnswer: 0,
    explanation: "Net movement = 5 - 3 = 2 km toward the east.",
    difficulty: "Easy",
  },
  {
    questionId: 145,
    category: "Logical Reasoning",
    topic: "direction sense",
    question:
      "A person walks 6 km north and then 8 km east. What is the shortest distance from the starting point?",
    options: ["10 km", "12 km", "14 km", "16 km"],
    correctAnswer: 0,
    explanation:
      "Using the Pythagorean theorem, distance = √(6² + 8²) = √100 = 10 km.",
    difficulty: "Medium",
  },
  {
    questionId: 146,
    category: "Logical Reasoning",
    topic: "direction sense",
    question:
      "Rahul walks 10 metres north, turns right and walks 5 metres, then turns right and walks 10 metres. Where is he relative to his starting point?",
    options: [
      "5 metres East",
      "5 metres West",
      "10 metres North",
      "10 metres South",
    ],
    correctAnswer: 0,
    explanation:
      "He moves 10 metres north, 5 metres east and then 10 metres south. The north and south movements cancel, leaving him 5 metres east of the starting point.",
    difficulty: "Medium",
  },
  {
    questionId: 147,
    category: "Logical Reasoning",
    topic: "direction sense",
    question:
      "A man is facing south. He turns 90 degrees clockwise, then 180 degrees clockwise. Which direction is he facing?",
    options: ["North", "South", "East", "West"],
    correctAnswer: 2,
    explanation:
      "From south, a 90-degree clockwise turn makes him face west. Another 180-degree turn makes him face east.",
    difficulty: "Medium",
  },
  {
    questionId: 148,
    category: "Logical Reasoning",
    topic: "direction sense",
    question:
      "Neha walks 4 km south, then 3 km east, and finally 4 km north. How far and in which direction is she from the starting point?",
    options: ["3 km East", "3 km West", "4 km North", "4 km South"],
    correctAnswer: 0,
    explanation:
      "The 4 km south and 4 km north movements cancel each other. Neha remains 3 km east of her starting point.",
    difficulty: "Medium",
  },
  {
    questionId: 149,
    category: "Logical Reasoning",
    topic: "direction sense",
    question:
      "A person walks 5 km north, then 5 km east, then 5 km south, and finally 2 km west. How far and in which direction is the person from the starting point?",
    options: ["2 km East", "3 km East", "3 km West", "5 km East"],
    correctAnswer: 1,
    explanation:
      "The 5 km north and 5 km south movements cancel. East-west displacement = 5 - 2 = 3 km east.",
    difficulty: "Hard",
  },
  {
    questionId: 150,
    category: "Logical Reasoning",
    topic: "direction sense",
    question:
      "A person starts facing north. He turns 90 degrees clockwise, then 180 degrees anticlockwise, and finally 90 degrees clockwise. Which direction is he facing?",
    options: ["North", "South", "East", "West"],
    correctAnswer: 0,
    explanation:
      "North → 90° clockwise = East → 180° anticlockwise = West → 90° clockwise = North.",
    difficulty: "Hard",
  },
  {
    questionId: 151,
    category: "Logical Reasoning",
    topic: "syllogism",
    question:
      "Statements: All cats are animals. All animals are living beings. Conclusion: All cats are living beings.",
    options: [
      "Conclusion follows",
      "Conclusion does not follow",
      "Cannot be determined",
      "Both follow and do not follow",
    ],
    correctAnswer: 0,
    explanation:
      "All cats are animals and all animals are living beings. Therefore, every cat must be a living being.",
    difficulty: "Easy",
  },
  {
    questionId: 152,
    category: "Logical Reasoning",
    topic: "syllogism",
    question:
      "Statements: All roses are flowers. No flower is a stone. Conclusion: No rose is a stone.",
    options: [
      "Conclusion follows",
      "Conclusion does not follow",
      "Cannot be determined",
      "Only sometimes follows",
    ],
    correctAnswer: 0,
    explanation:
      "Every rose is a flower, and no flower is a stone. Therefore, no rose can be a stone.",
    difficulty: "Easy",
  },
  {
    questionId: 153,
    category: "Logical Reasoning",
    topic: "syllogism",
    question:
      "Statements: Some students are athletes. All athletes are fit. Conclusion: Some students are fit.",
    options: [
      "Conclusion follows",
      "Conclusion does not follow",
      "Cannot be determined",
      "None of these",
    ],
    correctAnswer: 0,
    explanation:
      "Some students are athletes, and every athlete is fit. Therefore, those students who are athletes are also fit.",
    difficulty: "Easy",
  },
  {
    questionId: 154,
    category: "Logical Reasoning",
    topic: "syllogism",
    question:
      "Statements: No doctor is a teacher. Ravi is a doctor. Conclusion: Ravi is not a teacher.",
    options: [
      "Conclusion follows",
      "Conclusion does not follow",
      "Cannot be determined",
      "Statement is contradictory",
    ],
    correctAnswer: 0,
    explanation:
      "No doctor can be a teacher. Since Ravi is a doctor, Ravi cannot be a teacher.",
    difficulty: "Easy",
  },
  {
    questionId: 155,
    category: "Logical Reasoning",
    topic: "syllogism",
    question:
      "Statements: All engineers are graduates. Some graduates are managers. Conclusion: Some engineers are managers.",
    options: [
      "Conclusion follows",
      "Conclusion does not follow",
      "Both statements are false",
      "All engineers are managers",
    ],
    correctAnswer: 1,
    explanation:
      "The graduates who are managers are not necessarily engineers. Therefore, we cannot conclude that some engineers are managers.",
    difficulty: "Medium",
  },
  {
    questionId: 156,
    category: "Logical Reasoning",
    topic: "syllogism",
    question:
      "Statements: Some books are novels. No novel is a magazine. Conclusion: Some books are not magazines.",
    options: [
      "Conclusion follows",
      "Conclusion does not follow",
      "Cannot be determined",
      "All books are magazines",
    ],
    correctAnswer: 0,
    explanation:
      "Some books are novels, and no novel is a magazine. Therefore, those books that are novels are not magazines.",
    difficulty: "Medium",
  },
  {
    questionId: 157,
    category: "Logical Reasoning",
    topic: "syllogism",
    question:
      "Statements: All pens are stationery items. Some stationery items are expensive. Conclusion: Some pens are expensive.",
    options: [
      "Conclusion follows",
      "Conclusion does not follow",
      "All pens are expensive",
      "No pen is expensive",
    ],
    correctAnswer: 1,
    explanation:
      "The expensive stationery items are not necessarily pens. Therefore, the conclusion that some pens are expensive does not follow.",
    difficulty: "Medium",
  },
  {
    questionId: 158,
    category: "Logical Reasoning",
    topic: "syllogism",
    question:
      "Statements: Some cars are electric vehicles. All electric vehicles are eco-friendly. No eco-friendly vehicle is highly polluting. Conclusions: I. Some cars are eco-friendly. II. Some cars are not highly polluting.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both conclusions I and II follow",
      "Neither conclusion follows",
    ],
    correctAnswer: 2,
    explanation:
      "The cars that are electric are eco-friendly, so conclusion I follows. No eco-friendly vehicle is highly polluting, so those electric cars are also not highly polluting. Therefore, conclusion II also follows.",
    difficulty: "Medium",
  },
  {
    questionId: 159,
    category: "Logical Reasoning",
    topic: "syllogism",
    question:
      "Statements: All programmers are logical thinkers. No logical thinker is careless. Some employees are programmers. Conclusions: I. Some employees are logical thinkers. II. Some employees are not careless.",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both conclusions I and II follow",
      "Neither conclusion follows",
    ],
    correctAnswer: 2,
    explanation:
      "Some employees are programmers, and all programmers are logical thinkers, so some employees are logical thinkers. Since no logical thinker is careless, those employees are also not careless. Both conclusions follow.",
    difficulty: "Hard",
  },
  {
    questionId: 160,
    category: "Logical Reasoning",
    topic: "syllogism",
    question:
      "Statements: Some teachers are writers. All writers are readers. No reader is illiterate. Conclusions: I. Some teachers are readers. II. Some teachers are not illiterate. III. No writer is illiterate.",
    options: [
      "Only I and II follow",
      "Only II and III follow",
      "Only I and III follow",
      "I, II and III follow",
    ],
    correctAnswer: 3,
    explanation:
      "Some teachers are writers and all writers are readers, so some teachers are readers. No reader is illiterate, so those teachers are not illiterate. Since every writer is a reader and no reader is illiterate, no writer can be illiterate. Therefore, all three conclusions follow.",
    difficulty: "Hard",
  },
  {
    questionId: 161,
    category: "Logical Reasoning",
    topic: "seating arrangement",
    question:
      "Five people A, B, C, D and E are sitting in a row facing north. A sits at the extreme left. B sits immediately to the right of A. C sits immediately to the right of B. D sits immediately to the right of C. Who sits at the extreme right?",
    options: ["B", "C", "D", "E"],
    correctAnswer: 3,
    explanation:
      "The arrangement from left to right is A, B, C, D, E. Therefore, E sits at the extreme right.",
    difficulty: "Easy",
  },
  {
    questionId: 162,
    category: "Logical Reasoning",
    topic: "seating arrangement",
    question:
      "Four people P, Q, R and S are sitting in a row facing north. P sits to the immediate left of Q. R sits to the immediate right of Q. S sits to the immediate right of R. Who sits second from the left?",
    options: ["P", "Q", "R", "S"],
    correctAnswer: 1,
    explanation:
      "The arrangement is P, Q, R, S. Therefore, Q sits second from the left.",
    difficulty: "Easy",
  },
  {
    questionId: 163,
    category: "Logical Reasoning",
    topic: "seating arrangement",
    question:
      "Five people A, B, C, D and E are sitting in a row facing north. C is in the middle. A sits at the extreme left. B sits between A and C. D sits immediately to the right of C. Who sits at the extreme right?",
    options: ["B", "C", "D", "E"],
    correctAnswer: 3,
    explanation:
      "The arrangement is A, B, C, D, E. Therefore, E is at the extreme right.",
    difficulty: "Easy",
  },
  {
    questionId: 164,
    category: "Logical Reasoning",
    topic: "seating arrangement",
    question:
      "Six people A, B, C, D, E and F are sitting in a row facing north. A sits at the extreme left and F at the extreme right. B sits immediately to the right of A. E sits immediately to the left of F. C sits immediately to the right of B. Who sits between C and E?",
    options: ["A", "B", "D", "F"],
    correctAnswer: 2,
    explanation:
      "The arrangement is A, B, C, D, E, F. Therefore, D sits between C and E.",
    difficulty: "Medium",
  },
  {
    questionId: 165,
    category: "Logical Reasoning",
    topic: "seating arrangement",
    question:
      "Five people P, Q, R, S and T are sitting in a row facing north. R sits in the middle. P sits second to the left of R. Q sits immediately to the left of R. S sits immediately to the right of R. Who sits at the extreme right?",
    options: ["P", "Q", "S", "T"],
    correctAnswer: 3,
    explanation:
      "The arrangement is P, Q, R, S, T. Therefore, T sits at the extreme right.",
    difficulty: "Medium",
  },
  {
    questionId: 166,
    category: "Logical Reasoning",
    topic: "seating arrangement",
    question:
      "Five friends A, B, C, D and E are sitting around a circular table facing the centre. B sits immediately clockwise from A. C sits immediately clockwise from B. D sits immediately clockwise from C. Who sits immediately clockwise from D?",
    options: ["A", "B", "C", "E"],
    correctAnswer: 3,
    explanation:
      "Moving clockwise, the arrangement is A, B, C, D, E. Therefore, E sits immediately clockwise from D.",
    difficulty: "Medium",
  },
  {
    questionId: 167,
    category: "Logical Reasoning",
    topic: "seating arrangement",
    question:
      "Six people P, Q, R, S, T and U are sitting around a circular table facing the centre. Starting from P and moving clockwise, they are seated as P, Q, R, S, T and U. Who sits opposite P?",
    options: ["Q", "R", "S", "T"],
    correctAnswer: 2,
    explanation:
      "With six people, the person three positions away sits opposite. From P, the third position clockwise is S. Therefore, S sits opposite P.",
    difficulty: "Medium",
  },
  {
    questionId: 168,
    category: "Logical Reasoning",
    topic: "seating arrangement",
    question:
      "Six people A, B, C, D, E and F are sitting in a row facing north. B sits immediately to the right of A. C sits immediately to the right of B. F sits at the extreme right. E sits immediately to the left of F. Who sits between C and E?",
    options: ["A", "B", "D", "F"],
    correctAnswer: 2,
    explanation:
      "The only arrangement satisfying all conditions is A, B, C, D, E, F. Therefore, D sits between C and E.",
    difficulty: "Medium",
  },
  {
    questionId: 169,
    category: "Logical Reasoning",
    topic: "seating arrangement",
    question:
      "Seven people A, B, C, D, E, F and G are sitting in a row facing north. D sits exactly in the middle. B sits second to the left of D. A sits immediately to the left of B. C sits immediately to the right of B. E sits immediately to the right of D. F sits immediately to the right of E. Who sits at the extreme right?",
    options: ["D", "E", "F", "G"],
    correctAnswer: 3,
    explanation:
      "The arrangement is A, B, C, D, E, F, G. Therefore, G sits at the extreme right.",
    difficulty: "Hard",
  },
  {
    questionId: 170,
    category: "Logical Reasoning",
    topic: "seating arrangement",
    question:
      "Eight people A, B, C, D, E, F, G and H are sitting around a circular table facing the centre. Starting from A and moving clockwise, they are seated as A, B, C, D, E, F, G and H. Who sits opposite C?",
    options: ["E", "F", "G", "H"],
    correctAnswer: 2,
    explanation:
      "With eight people, the person four positions away sits opposite. Four positions clockwise from C is G. Therefore, G sits opposite C.",
    difficulty: "Hard",
  },
  {
    questionId: 171,
    category: "Logical Reasoning",
    topic: "analytical reasoning",
    question:
      "If all laptops are machines and some machines are portable, which statement is definitely true?",
    options: [
      "All machines are laptops",
      "All laptops are machines",
      "All portable things are laptops",
      "No laptop is portable",
    ],
    correctAnswer: 1,
    explanation:
      "The statement directly tells us that all laptops are machines. The other conclusions cannot be guaranteed.",
    difficulty: "Easy",
  },
  {
    questionId: 172,
    category: "Logical Reasoning",
    topic: "analytical reasoning",
    question: "Find the odd one out: 16, 25, 36, 49, 63, 64",
    options: ["25", "49", "63", "64"],
    correctAnswer: 2,
    explanation:
      "16, 25, 36, 49 and 64 are perfect squares. 63 is not a perfect square.",
    difficulty: "Easy",
  },
  {
    questionId: 173,
    category: "Logical Reasoning",
    topic: "analytical reasoning",
    question: "Book is to Reading as Fork is to ____.",
    options: ["Drawing", "Writing", "Eating", "Walking"],
    correctAnswer: 2,
    explanation: "A book is used for reading, while a fork is used for eating.",
    difficulty: "Easy",
  },
  {
    questionId: 174,
    category: "Logical Reasoning",
    topic: "analytical reasoning",
    question:
      "Five students A, B, C, D and E have different marks. A scored more than B but less than C. D scored less than B but more than E. Who scored the highest?",
    options: ["A", "B", "C", "D"],
    correctAnswer: 2,
    explanation:
      "The relationships give C > A > B > D > E. Therefore, C scored the highest.",
    difficulty: "Easy",
  },
  {
    questionId: 175,
    category: "Logical Reasoning",
    topic: "analytical reasoning",
    question:
      "A, B and C completed a race. A finished before B, and B finished before C. Who finished second?",
    options: ["A", "B", "C", "Cannot be determined"],
    correctAnswer: 1,
    explanation:
      "The finishing order is A, B, C. Therefore, B finished second.",
    difficulty: "Medium",
  },
  {
    questionId: 176,
    category: "Logical Reasoning",
    topic: "analytical reasoning",
    question:
      "In a class, Rahul ranks 12th from the top and 19th from the bottom. How many students are there in the class?",
    options: ["29", "30", "31", "32"],
    correctAnswer: 1,
    explanation:
      "Total students = rank from top + rank from bottom - 1 = 12 + 19 - 1 = 30.",
    difficulty: "Medium",
  },
  {
    questionId: 177,
    category: "Logical Reasoning",
    topic: "analytical reasoning",
    question:
      "If yesterday was Monday, what day will it be three days after tomorrow?",
    options: ["Thursday", "Friday", "Saturday", "Sunday"],
    correctAnswer: 2,
    explanation:
      "If yesterday was Monday, today is Tuesday and tomorrow is Wednesday. Three days after Wednesday is Saturday.",
    difficulty: "Medium",
  },
  {
    questionId: 178,
    category: "Logical Reasoning",
    topic: "analytical reasoning",
    question:
      "Four tasks P, Q, R and S must be completed one at a time. P must be completed before Q, Q before R, and R before S. Which order is possible?",
    options: ["P, Q, R, S", "Q, P, R, S", "P, R, Q, S", "S, R, Q, P"],
    correctAnswer: 0,
    explanation:
      "The conditions require P before Q, Q before R, and R before S. Therefore, the required order is P, Q, R, S.",
    difficulty: "Medium",
  },
  {
    questionId: 179,
    category: "Logical Reasoning",
    topic: "analytical reasoning",
    question:
      "A company has five employees P, Q, R, S and T. P is older than Q. Q is older than R. S is older than P. T is younger than R. Who is the oldest?",
    options: ["P", "Q", "S", "T"],
    correctAnswer: 2,
    explanation:
      "The relationships give S > P > Q > R > T. Therefore, S is the oldest.",
    difficulty: "Hard",
  },
  {
    questionId: 180,
    category: "Logical Reasoning",
    topic: "analytical reasoning",
    question:
      "Five boxes P, Q, R, S and T are arranged by weight. P is heavier than Q. R is lighter than Q. S is heavier than P. T is lighter than R. Which box is the second heaviest?",
    options: ["P", "Q", "R", "S"],
    correctAnswer: 0,
    explanation:
      "The weight order is S > P > Q > R > T. Therefore, P is the second heaviest.",
    difficulty: "Hard",
  },
  {
    questionId: 181,
    category: "Verbal Ability",
    topic: "grammar",
    question: "Choose the grammatically correct sentence.",
    options: [
      "She go to college every day.",
      "She goes to college every day.",
      "She going to college every day.",
      "She gone to college every day.",
    ],
    correctAnswer: 1,
    explanation:
      "With the third-person singular subject 'She' in the simple present tense, the verb takes 's'. Therefore, 'She goes to college every day' is correct.",
    difficulty: "Easy",
  },
  {
    questionId: 182,
    category: "Verbal Ability",
    topic: "grammar",
    question: "Choose the correct article: He is ___ honest man.",
    options: ["a", "an", "the", "no article"],
    correctAnswer: 1,
    explanation:
      "'Honest' begins with a vowel sound because the 'h' is silent. Therefore, 'an honest man' is correct.",
    difficulty: "Easy",
  },
  {
    questionId: 183,
    category: "Verbal Ability",
    topic: "grammar",
    question: "Choose the correct preposition: She is good ___ mathematics.",
    options: ["in", "at", "on", "for"],
    correctAnswer: 1,
    explanation:
      "The standard expression is 'good at' something. Therefore, 'good at mathematics' is correct.",
    difficulty: "Easy",
  },
  {
    questionId: 184,
    category: "Verbal Ability",
    topic: "grammar",
    question:
      "Choose the correct verb: Neither Rahul nor his friends ___ present at the meeting.",
    options: ["was", "were", "is", "has"],
    correctAnswer: 1,
    explanation:
      "With 'neither...nor', the verb generally agrees with the subject nearest to it. 'Friends' is plural, so 'were' is correct.",
    difficulty: "Easy",
  },
  {
    questionId: 185,
    category: "Verbal Ability",
    topic: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "I have completed the work yesterday.",
      "I completed the work yesterday.",
      "I had complete the work yesterday.",
      "I completing the work yesterday.",
    ],
    correctAnswer: 1,
    explanation:
      "'Yesterday' refers to a finished time in the past, so the simple past tense is appropriate: 'I completed the work yesterday.'",
    difficulty: "Medium",
  },
  {
    questionId: 186,
    category: "Verbal Ability",
    topic: "grammar",
    question:
      "Choose the correct form: If I ___ you, I would accept the offer.",
    options: ["am", "was", "were", "be"],
    correctAnswer: 2,
    explanation:
      "In a hypothetical condition, standard formal English uses the subjunctive 'were': 'If I were you.'",
    difficulty: "Medium",
  },
  {
    questionId: 187,
    category: "Verbal Ability",
    topic: "grammar",
    question:
      "Choose the correct passive form of: 'The manager approved the proposal.'",
    options: [
      "The proposal is approved by the manager.",
      "The proposal was approved by the manager.",
      "The proposal has approved by the manager.",
      "The proposal had approve by the manager.",
    ],
    correctAnswer: 1,
    explanation:
      "The active sentence is in the simple past tense. Its passive form is 'was + past participle': 'The proposal was approved by the manager.'",
    difficulty: "Medium",
  },
  {
    questionId: 188,
    category: "Verbal Ability",
    topic: "grammar",
    question: "Choose the correct indirect speech: Ravi said, 'I am tired.'",
    options: [
      "Ravi said that I am tired.",
      "Ravi said that he was tired.",
      "Ravi says that he was tired.",
      "Ravi said that he is tiring.",
    ],
    correctAnswer: 1,
    explanation:
      "With the reporting verb 'said' in the past, 'I' changes to 'he' and 'am' normally changes to 'was'. Therefore, 'Ravi said that he was tired' is correct.",
    difficulty: "Medium",
  },
  {
    questionId: 189,
    category: "Verbal Ability",
    topic: "grammar",
    question: "Choose the correct sentence.",
    options: [
      "Each of the students have submitted their assignment.",
      "Each of the students has submitted the assignment.",
      "Each of the students were submitting the assignment.",
      "Each of the students are submitted the assignment.",
    ],
    correctAnswer: 1,
    explanation:
      "'Each' is grammatically singular, so it takes the singular verb 'has'. Therefore, 'Each of the students has submitted the assignment' is correct.",
    difficulty: "Hard",
  },
  {
    questionId: 190,
    category: "Verbal Ability",
    topic: "grammar",
    question: "Choose the grammatically correct sentence.",
    options: [
      "Hardly had I reached the station when the train arrived.",
      "Hardly I had reached the station when the train arrived.",
      "Hardly had I reached the station than the train arrived.",
      "Hardly did I reached the station when the train arrived.",
    ],
    correctAnswer: 0,
    explanation:
      "The standard construction is 'Hardly had + subject + past participle + when'. Therefore, 'Hardly had I reached the station when the train arrived' is correct.",
    difficulty: "Hard",
  },
  {
    questionId: 191,
    category: "Verbal Ability",
    topic: "synonyms and antonyms",
    question: "Choose the synonym of 'Abundant'.",
    options: ["Scarce", "Plentiful", "Limited", "Rare"],
    correctAnswer: 1,
    explanation:
      "'Abundant' means existing in large quantities. 'Plentiful' has the same meaning.",
    difficulty: "Easy",
  },
  {
    questionId: 192,
    category: "Verbal Ability",
    topic: "synonyms and antonyms",
    question: "Choose the antonym of 'Ancient'.",
    options: ["Old", "Historic", "Modern", "Traditional"],
    correctAnswer: 2,
    explanation: "'Ancient' means very old. Its opposite is 'Modern'.",
    difficulty: "Easy",
  },
  {
    questionId: 193,
    category: "Verbal Ability",
    topic: "synonyms and antonyms",
    question: "Choose the synonym of 'Rapid'.",
    options: ["Slow", "Swift", "Weak", "Quiet"],
    correctAnswer: 1,
    explanation:
      "'Rapid' means happening very quickly. 'Swift' is its synonym.",
    difficulty: "Easy",
  },
  {
    questionId: 194,
    category: "Verbal Ability",
    topic: "synonyms and antonyms",
    question: "Choose the antonym of 'Expand'.",
    options: ["Increase", "Extend", "Contract", "Develop"],
    correctAnswer: 2,
    explanation:
      "'Expand' means to become larger. 'Contract' means to become smaller, making it the opposite.",
    difficulty: "Easy",
  },
  {
    questionId: 195,
    category: "Verbal Ability",
    topic: "synonyms and antonyms",
    question: "Choose the synonym of 'Diligent'.",
    options: ["Careless", "Lazy", "Hardworking", "Uncertain"],
    correctAnswer: 2,
    explanation:
      "'Diligent' describes someone who works carefully and persistently. 'Hardworking' is the closest synonym.",
    difficulty: "Medium",
  },
  {
    questionId: 196,
    category: "Verbal Ability",
    topic: "synonyms and antonyms",
    question: "Choose the antonym of 'Optimistic'.",
    options: ["Hopeful", "Positive", "Cheerful", "Pessimistic"],
    correctAnswer: 3,
    explanation:
      "'Optimistic' means expecting positive outcomes. 'Pessimistic' means expecting negative outcomes.",
    difficulty: "Medium",
  },
  {
    questionId: 197,
    category: "Verbal Ability",
    topic: "synonyms and antonyms",
    question: "Choose the synonym of 'Reluctant'.",
    options: ["Unwilling", "Eager", "Confident", "Certain"],
    correctAnswer: 0,
    explanation:
      "'Reluctant' means unwilling or hesitant to do something. Therefore, 'Unwilling' is the closest synonym.",
    difficulty: "Medium",
  },
  {
    questionId: 198,
    category: "Verbal Ability",
    topic: "synonyms and antonyms",
    question: "Choose the antonym of 'Transparent'.",
    options: ["Clear", "Visible", "Opaque", "Bright"],
    correctAnswer: 2,
    explanation:
      "'Transparent' means allowing light to pass through so objects can be seen clearly. 'Opaque' means not allowing light to pass through.",
    difficulty: "Medium",
  },
  {
    questionId: 199,
    category: "Verbal Ability",
    topic: "synonyms and antonyms",
    question: "Choose the synonym of 'Meticulous'.",
    options: ["Careless", "Precise", "Ordinary", "Hasty"],
    correctAnswer: 1,
    explanation:
      "'Meticulous' means extremely careful and attentive to details. 'Precise' is the closest option.",
    difficulty: "Hard",
  },
  {
    questionId: 200,
    category: "Verbal Ability",
    topic: "synonyms and antonyms",
    question: "Choose the antonym of 'Benevolent'.",
    options: ["Kind", "Generous", "Compassionate", "Malevolent"],
    correctAnswer: 3,
    explanation:
      "'Benevolent' means kind and well-meaning. 'Malevolent' means wishing harm to others and is its opposite.",
    difficulty: "Hard",
  },
  {
    questionId: 201,
    category: "Verbal Ability",
    topic: "sentence correction",
    question: "Choose the correct sentence.",
    options: [
      "He do not know the answer.",
      "He does not knows the answer.",
      "He does not know the answer.",
      "He did not knows the answer.",
    ],
    correctAnswer: 2,
    explanation:
      "With 'does not', the main verb must remain in its base form. Therefore, 'He does not know the answer' is correct.",
    difficulty: "Easy",
  },
  {
    questionId: 202,
    category: "Verbal Ability",
    topic: "sentence correction",
    question: "Choose the correct sentence.",
    options: [
      "She is senior than me.",
      "She is senior to me.",
      "She is senior from me.",
      "She is more senior than me.",
    ],
    correctAnswer: 1,
    explanation:
      "The adjective 'senior' is followed by 'to', not 'than'. Therefore, 'She is senior to me' is correct.",
    difficulty: "Easy",
  },
  {
    questionId: 203,
    category: "Verbal Ability",
    topic: "sentence correction",
    question: "Choose the correct sentence.",
    options: [
      "The news are very surprising.",
      "The news were very surprising.",
      "The news is very surprising.",
      "The news have been very surprising.",
    ],
    correctAnswer: 2,
    explanation:
      "'News' is treated as a singular uncountable noun, so it takes the singular verb 'is'.",
    difficulty: "Easy",
  },
  {
    questionId: 204,
    category: "Verbal Ability",
    topic: "sentence correction",
    question: "Choose the correct sentence.",
    options: [
      "One of my friend lives in Delhi.",
      "One of my friends live in Delhi.",
      "One of my friends lives in Delhi.",
      "One of my friend live in Delhi.",
    ],
    correctAnswer: 2,
    explanation:
      "After 'one of', the noun is plural ('friends'), but the subject 'one' is singular, so the verb is 'lives'.",
    difficulty: "Easy",
  },
  {
    questionId: 205,
    category: "Verbal Ability",
    topic: "sentence correction",
    question: "Choose the correct sentence.",
    options: [
      "She has been working here since five years.",
      "She has been working here for five years.",
      "She is working here since five years.",
      "She was working here for five years ago.",
    ],
    correctAnswer: 1,
    explanation:
      "'For' is used with a duration of time, such as 'five years'. 'Since' is used with a specific starting point.",
    difficulty: "Medium",
  },
  {
    questionId: 206,
    category: "Verbal Ability",
    topic: "sentence correction",
    question: "Choose the correct sentence.",
    options: [
      "Neither of the two candidates are suitable.",
      "Neither of the two candidates is suitable.",
      "Neither of the two candidate is suitable.",
      "Neither of two candidates were suitable.",
    ],
    correctAnswer: 1,
    explanation:
      "'Neither' is treated as singular in standard formal usage, so 'is suitable' is correct. The noun after 'of the two' is plural: 'candidates'.",
    difficulty: "Medium",
  },
  {
    questionId: 207,
    category: "Verbal Ability",
    topic: "sentence correction",
    question: "Choose the correct sentence.",
    options: [
      "He is good in solving mathematical problems.",
      "He is good at solving mathematical problems.",
      "He is good on solving mathematical problems.",
      "He is good for solving mathematical problems.",
    ],
    correctAnswer: 1,
    explanation:
      "The standard expression is 'good at doing something'. Therefore, 'good at solving mathematical problems' is correct.",
    difficulty: "Medium",
  },
  {
    questionId: 208,
    category: "Verbal Ability",
    topic: "sentence correction",
    question: "Choose the correct sentence.",
    options: [
      "No sooner did the meeting start when the power went out.",
      "No sooner had the meeting started than the power went out.",
      "No sooner the meeting had started than the power went out.",
      "No sooner had the meeting started when the power went out.",
    ],
    correctAnswer: 1,
    explanation:
      "The standard construction is 'No sooner had + subject + past participle + than'. Therefore, option B is correct.",
    difficulty: "Medium",
  },
  {
    questionId: 209,
    category: "Verbal Ability",
    topic: "sentence correction",
    question: "Choose the correct sentence.",
    options: [
      "The teacher, along with the students, were present.",
      "The teacher, along with the students, was present.",
      "The teacher, along with the students, have been present.",
      "The teacher, along with the students, are present yesterday.",
    ],
    correctAnswer: 1,
    explanation:
      "The phrase 'along with the students' does not change the main subject. The subject is singular 'teacher', so 'was' is correct.",
    difficulty: "Hard",
  },
  {
    questionId: 210,
    category: "Verbal Ability",
    topic: "sentence correction",
    question: "Choose the correct sentence.",
    options: [
      "Had I knew about the interview, I would have attended it.",
      "Had I known about the interview, I would have attended it.",
      "Had I know about the interview, I would attended it.",
      "If I had knew about the interview, I would have attended it.",
    ],
    correctAnswer: 1,
    explanation:
      "In the inverted third conditional, the correct structure is 'Had + subject + past participle'. The past participle of 'know' is 'known'.",
    difficulty: "Hard",
  },
  {
    questionId: 211,
    category: "Verbal Ability",
    topic: "fill in the blanks",
    question: "She ___ to the office every day.",
    options: ["go", "goes", "going", "gone"],
    correctAnswer: 1,
    explanation:
      "The subject 'She' is third-person singular, so the simple present form is 'goes'.",
    difficulty: "Easy",
  },
  {
    questionId: 212,
    category: "Verbal Ability",
    topic: "fill in the blanks",
    question: "The students ___ studying for their examination.",
    options: ["is", "are", "was", "has"],
    correctAnswer: 1,
    explanation:
      "'Students' is a plural subject, so the correct helping verb is 'are'.",
    difficulty: "Easy",
  },
  {
    questionId: 213,
    category: "Verbal Ability",
    topic: "fill in the blanks",
    question: "He has lived in this city ___ 2020.",
    options: ["for", "since", "from", "by"],
    correctAnswer: 1,
    explanation:
      "'Since' is used with a specific starting point in time. Therefore, 'since 2020' is correct.",
    difficulty: "Easy",
  },
  {
    questionId: 214,
    category: "Verbal Ability",
    topic: "fill in the blanks",
    question: "We reached the station ___ the train arrived.",
    options: ["before", "because", "although", "unless"],
    correctAnswer: 0,
    explanation:
      "'Before' correctly shows that reaching the station happened earlier than the train's arrival.",
    difficulty: "Easy",
  },
  {
    questionId: 215,
    category: "Verbal Ability",
    topic: "fill in the blanks",
    question:
      "The manager asked the employees to complete the project ___ Friday.",
    options: ["at", "on", "by", "from"],
    correctAnswer: 2,
    explanation:
      "'By Friday' means the project must be completed no later than Friday.",
    difficulty: "Medium",
  },
  {
    questionId: 216,
    category: "Verbal Ability",
    topic: "fill in the blanks",
    question: "If you work hard, you ___ succeed.",
    options: ["would", "will", "had", "were"],
    correctAnswer: 1,
    explanation:
      "This is a first conditional sentence: If + simple present, followed by 'will' + base verb.",
    difficulty: "Medium",
  },
  {
    questionId: 217,
    category: "Verbal Ability",
    topic: "fill in the blanks",
    question: "Despite ___ very tired, she completed the assignment.",
    options: ["be", "being", "been", "was"],
    correctAnswer: 1,
    explanation:
      "'Despite' can be followed by a gerund. Therefore, 'Despite being very tired' is correct.",
    difficulty: "Medium",
  },
  {
    questionId: 218,
    category: "Verbal Ability",
    topic: "fill in the blanks",
    question: "The new software is more efficient ___ the previous version.",
    options: ["from", "then", "than", "to"],
    correctAnswer: 2,
    explanation:
      "Comparative adjectives such as 'more efficient' are followed by 'than'.",
    difficulty: "Medium",
  },
  {
    questionId: 219,
    category: "Verbal Ability",
    topic: "fill in the blanks",
    question: "Had the team prepared better, they ___ the match.",
    options: ["will win", "would win", "would have won", "had won"],
    correctAnswer: 2,
    explanation:
      "This is an inverted third conditional. The result clause uses 'would have + past participle', so 'would have won' is correct.",
    difficulty: "Hard",
  },
  {
    questionId: 220,
    category: "Verbal Ability",
    topic: "fill in the blanks",
    question:
      "The interviewer recommended that each candidate ___ a copy of the resume.",
    options: ["brings", "bring", "brought", "bringing"],
    correctAnswer: 1,
    explanation:
      "After verbs such as 'recommend' in this construction, the subjunctive uses the base form of the verb. Therefore, 'bring' is correct.",
    difficulty: "Hard",
  },
  {
    questionId: 221,
    category: "Verbal Ability",
    topic: "reading comprehension",
    question:
      "Passage: Regular exercise improves physical health and can also reduce stress. People who exercise regularly often feel more energetic and sleep better. Question: According to the passage, which is a benefit of regular exercise?",
    options: [
      "It increases stress",
      "It reduces energy",
      "It can reduce stress",
      "It reduces sleep",
    ],
    correctAnswer: 2,
    explanation:
      "The passage directly states that regular exercise can reduce stress.",
    difficulty: "Easy",
  },
  {
    questionId: 222,
    category: "Verbal Ability",
    topic: "reading comprehension",
    question:
      "Passage: Regular exercise improves physical health and can also reduce stress. People who exercise regularly often feel more energetic and sleep better. Question: What does the passage say about people who exercise regularly?",
    options: [
      "They often feel more energetic",
      "They always feel tired",
      "They need less food",
      "They avoid sleeping",
    ],
    correctAnswer: 0,
    explanation:
      "The passage states that people who exercise regularly often feel more energetic.",
    difficulty: "Easy",
  },
  {
    questionId: 223,
    category: "Verbal Ability",
    topic: "reading comprehension",
    question:
      "Passage: Trees play an important role in protecting the environment. They absorb carbon dioxide, release oxygen and provide habitats for many animals. Question: Which gas do trees absorb according to the passage?",
    options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    correctAnswer: 1,
    explanation: "The passage states that trees absorb carbon dioxide.",
    difficulty: "Easy",
  },
  {
    questionId: 224,
    category: "Verbal Ability",
    topic: "reading comprehension",
    question:
      "Passage: Trees play an important role in protecting the environment. They absorb carbon dioxide, release oxygen and provide habitats for many animals. Question: Which statement best summarizes the passage?",
    options: [
      "Trees are useful only to humans",
      "Trees are harmful to animals",
      "Trees are important for the environment",
      "Trees consume all the oxygen in the atmosphere",
    ],
    correctAnswer: 2,
    explanation:
      "The passage describes several ways in which trees help the environment, so this is the best summary.",
    difficulty: "Medium",
  },
  {
    questionId: 225,
    category: "Verbal Ability",
    topic: "reading comprehension",
    question:
      "Passage: Online learning gives students the flexibility to study from different locations and often at their own pace. However, successful online learning requires self-discipline and good time-management skills. Question: What is one advantage of online learning mentioned in the passage?",
    options: [
      "It requires no discipline",
      "It provides flexibility",
      "It eliminates the need to study",
      "It guarantees high marks",
    ],
    correctAnswer: 1,
    explanation:
      "The passage explicitly identifies flexibility as an advantage of online learning.",
    difficulty: "Medium",
  },
  {
    questionId: 226,
    category: "Verbal Ability",
    topic: "reading comprehension",
    question:
      "Passage: Online learning gives students the flexibility to study from different locations and often at their own pace. However, successful online learning requires self-discipline and good time-management skills. Question: According to the passage, what is required for successful online learning?",
    options: [
      "Only a fast computer",
      "Less study time",
      "Self-discipline and good time management",
      "Daily classroom attendance",
    ],
    correctAnswer: 2,
    explanation:
      "The passage states that successful online learning requires self-discipline and good time-management skills.",
    difficulty: "Medium",
  },
  {
    questionId: 227,
    category: "Verbal Ability",
    topic: "reading comprehension",
    question:
      "Passage: Many companies value employees who can communicate clearly, solve problems and work effectively with others. Technical knowledge is important, but employers also consider these interpersonal abilities when selecting candidates. Question: What can be inferred from the passage?",
    options: [
      "Technical knowledge is the only factor in hiring",
      "Companies do not value communication skills",
      "Both technical and interpersonal skills can matter in hiring",
      "Employers prefer candidates who work alone",
    ],
    correctAnswer: 2,
    explanation:
      "The passage says technical knowledge is important while also emphasizing communication, problem-solving and teamwork skills.",
    difficulty: "Medium",
  },
  {
    questionId: 228,
    category: "Verbal Ability",
    topic: "reading comprehension",
    question:
      "Passage: Many companies value employees who can communicate clearly, solve problems and work effectively with others. Technical knowledge is important, but employers also consider these interpersonal abilities when selecting candidates. Question: Which skill is NOT mentioned in the passage?",
    options: ["Communication", "Problem-solving", "Teamwork", "Painting"],
    correctAnswer: 3,
    explanation:
      "Communication, problem-solving and working effectively with others are mentioned. Painting is not mentioned.",
    difficulty: "Medium",
  },
  {
    questionId: 229,
    category: "Verbal Ability",
    topic: "reading comprehension",
    question:
      "Passage: Automation can perform repetitive tasks quickly and consistently. This can allow employees to spend more time on work that requires creativity, judgment and problem-solving. However, workers may need to learn new skills as technology changes their roles. Question: What is the main idea of the passage?",
    options: [
      "Automation only creates problems for workers",
      "Automation can change work and increase the importance of new skills",
      "Automation makes creativity unnecessary",
      "Technology completely removes the need for employees",
    ],
    correctAnswer: 1,
    explanation:
      "The passage explains both how automation can handle repetitive work and why workers may need new skills as their roles change.",
    difficulty: "Hard",
  },
  {
    questionId: 230,
    category: "Verbal Ability",
    topic: "reading comprehension",
    question:
      "Passage: Automation can perform repetitive tasks quickly and consistently. This can allow employees to spend more time on work that requires creativity, judgment and problem-solving. However, workers may need to learn new skills as technology changes their roles. Question: Why might workers need to learn new skills?",
    options: [
      "Because technology can change their job roles",
      "Because automation makes all work slower",
      "Because companies no longer need problem-solving",
      "Because repetitive tasks require more employees",
    ],
    correctAnswer: 0,
    explanation:
      "The passage directly states that workers may need new skills as technology changes their roles.",
    difficulty: "Hard",
  },
];

const seedAptitudeQuestions = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    // Clean the old temporary aptitude question bank.
    await AptitudeQuestion.deleteMany({});

    console.log("Old aptitude questions removed");

    await AptitudeQuestion.insertMany(aptitudeQuestions);

    console.log(
      `${aptitudeQuestions.length} aptitude questions seeded successfully`,
    );
  } catch (error) {
    console.error("Seeding failed:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
};

seedAptitudeQuestions();
