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
