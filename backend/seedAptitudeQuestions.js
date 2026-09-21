require("dotenv").config();

const mongoose = require("mongoose");
const AptitudeQuestion = require("./models/AptitudeQuestion");

const aptitudeQuestions = [
  {
    questionId: 1,
    category: "Quantitative Aptitude",
    topic: "percentage",
    question: "What is 20% of 250?",
    options: ["25", "40", "50", "60"],
    correctAnswer: 2,
    explanation: "20% of 250 = (20 / 100) × 250 = 50.",
    difficulty: "Easy",
  },
  {
    questionId: 2,
    category: "Quantitative Aptitude",
    topic: "percentage",
    question:
      "A number is increased from 200 to 250. What is the percentage increase?",
    options: ["20%", "25%", "30%", "50%"],
    correctAnswer: 1,
    explanation:
      "Increase = 250 - 200 = 50. Percentage increase = (50 / 200) × 100 = 25%.",
    difficulty: "Easy",
  },
  {
    questionId: 3,
    category: "Quantitative Aptitude",
    topic: "profit and loss",
    question:
      "A shopkeeper buys an item for ₹500 and sells it for ₹600. What is the profit percentage?",
    options: ["10%", "15%", "20%", "25%"],
    correctAnswer: 2,
    explanation:
      "Profit = 600 - 500 = ₹100. Profit percentage = (100 / 500) × 100 = 20%.",
    difficulty: "Easy",
  },
  {
    questionId: 4,
    category: "Quantitative Aptitude",
    topic: "ratio and proportion",
    question:
      "The ratio of two numbers is 2:3. If the first number is 20, what is the second number?",
    options: ["25", "30", "35", "40"],
    correctAnswer: 1,
    explanation:
      "2:3 = 20:x. Therefore x = (20 × 3) / 2 = 30.",
    difficulty: "Easy",
  },
  {
    questionId: 5,
    category: "Quantitative Aptitude",
    topic: "average",
    question:
      "What is the average of 10, 20, 30, 40 and 50?",
    options: ["25", "30", "35", "40"],
    correctAnswer: 1,
    explanation:
      "Average = (10 + 20 + 30 + 40 + 50) / 5 = 150 / 5 = 30.",
    difficulty: "Easy",
  },
  {
    questionId: 6,
    category: "Quantitative Aptitude",
    topic: "time and work",
    question:
      "A can complete a job in 10 days. What fraction of the work does A complete in one day?",
    options: ["1/5", "1/10", "1/15", "1/20"],
    correctAnswer: 1,
    explanation:
      "If the entire work takes 10 days, one day's work is 1/10.",
    difficulty: "Easy",
  },
  {
    questionId: 7,
    category: "Quantitative Aptitude",
    topic: "time speed and distance",
    question:
      "A car travels 120 km in 2 hours. What is its average speed?",
    options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
    correctAnswer: 2,
    explanation:
      "Speed = Distance / Time = 120 / 2 = 60 km/h.",
    difficulty: "Easy",
  },
  {
    questionId: 8,
    category: "Logical Reasoning",
    topic: "number series",
    question:
      "Find the next number in the series: 2, 4, 8, 16, ?",
    options: ["20", "24", "30", "32"],
    correctAnswer: 3,
    explanation:
      "Each number is multiplied by 2. Therefore 16 × 2 = 32.",
    difficulty: "Easy",
  },
  {
    questionId: 9,
    category: "Logical Reasoning",
    topic: "number series",
    question:
      "Find the missing number: 5, 10, 15, 20, ?",
    options: ["22", "25", "30", "35"],
    correctAnswer: 1,
    explanation:
      "The sequence increases by 5 each time, so the next number is 25.",
    difficulty: "Easy",
  },
  {
    questionId: 10,
    category: "Logical Reasoning",
    topic: "coding-decoding",
    question:
      "If CAT is coded as DBU by shifting every letter forward by one, how is DOG coded?",
    options: ["EPH", "EOG", "DPH", "FPH"],
    correctAnswer: 0,
    explanation:
      "D becomes E, O becomes P and G becomes H. Therefore DOG becomes EPH.",
    difficulty: "Easy",
  },
  {
    questionId: 11,
    category: "Logical Reasoning",
    topic: "blood relations",
    question:
      "Ravi is the brother of Sita. Sita is the mother of Aman. How is Ravi related to Aman?",
    options: ["Father", "Brother", "Uncle", "Grandfather"],
    correctAnswer: 2,
    explanation:
      "Ravi is the brother of Aman's mother, so Ravi is Aman's uncle.",
    difficulty: "Easy",
  },
  {
    questionId: 12,
    category: "Logical Reasoning",
    topic: "direction sense",
    question:
      "A person walks 5 km north and then 5 km east. In which direction is the person from the starting point?",
    options: ["North-West", "North-East", "South-East", "South-West"],
    correctAnswer: 1,
    explanation:
      "Moving north and then east places the person north-east of the starting point.",
    difficulty: "Easy",
  },
  {
    questionId: 13,
    category: "Verbal Ability",
    topic: "synonyms",
    question:
      "Choose the word that is closest in meaning to 'Rapid'.",
    options: ["Slow", "Quick", "Weak", "Quiet"],
    correctAnswer: 1,
    explanation:
      "Rapid means happening or moving very quickly.",
    difficulty: "Easy",
  },
  {
    questionId: 14,
    category: "Verbal Ability",
    topic: "antonyms",
    question:
      "Choose the antonym of 'Ancient'.",
    options: ["Old", "Historic", "Modern", "Traditional"],
    correctAnswer: 2,
    explanation:
      "Ancient means very old, while modern means relating to the present or recent times.",
    difficulty: "Easy",
  },
  {
    questionId: 15,
    category: "Verbal Ability",
    topic: "grammar",
    question:
      "Choose the grammatically correct sentence.",
    options: [
      "She go to school every day.",
      "She goes to school every day.",
      "She going to school every day.",
      "She gone to school every day.",
    ],
    correctAnswer: 1,
    explanation:
      "With the third-person singular subject 'She', the simple present form is 'goes'.",
    difficulty: "Easy",
  },
];

const seedAptitudeQuestions = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    for (const question of aptitudeQuestions) {
      await AptitudeQuestion.findOneAndUpdate(
        { questionId: question.questionId },
        question,
        {
          upsert: true,
          new: true,
          runValidators: true,
        }
      );

      console.log(
        `Aptitude Question ${question.questionId} saved`
      );
    }

    console.log(
      "All aptitude questions seeded successfully"
    );
  } catch (error) {
    console.error(
      "Seeding failed:",
      error.message
    );
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
};

seedAptitudeQuestions();