require("dotenv").config();

const mongoose = require("mongoose");
const MockTest = require("./models/MockTest");

const mockTests = [
  {
    testId: 1,
    title: "Placement Aptitude Mock Test 1",
    type: "aptitude",
    description:
      "Practice quantitative aptitude, logical reasoning and verbal ability.",
    duration: 30,
    totalMarks: 30,
    questionIds: [
      1, 12, 23, 34, 45, 56, 67, 78, 89, 100,
      111, 121, 131, 141, 151, 161, 171, 172, 173, 174,
      181, 191, 201, 211, 221, 222, 223, 224, 225, 226,
    ],
    isActive: true,
  },

  {
    testId: 2,
    title: "Placement Aptitude Mock Test 2",
    type: "aptitude",
    description:
      "Test your aptitude skills with a different set of placement questions.",
    duration: 30,
    totalMarks: 30,
    questionIds: [
      2, 13, 24, 35, 46, 57, 68, 79, 90, 101,
      112, 122, 132, 142, 152, 162, 175, 176, 177, 178,
      182, 192, 202, 212, 227, 228, 229, 230, 183, 193,
    ],
    isActive: true,
  },

  {
    testId: 3,
    title: "Placement Aptitude Mock Test 3",
    type: "aptitude",
    description:
      "Evaluate your preparation with quantitative, reasoning and verbal questions.",
    duration: 30,
    totalMarks: 30,
    questionIds: [
      3, 14, 25, 36, 47, 58, 69, 80, 91, 102,
      113, 123, 133, 143, 153, 163, 179, 180, 114, 124,
      184, 194, 204, 214, 185, 195, 205, 215, 186, 196,
    ],
    isActive: true,
  },
];

const seedMockTests = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await MockTest.deleteMany({});

    console.log("Old mock tests removed");

    await MockTest.insertMany(mockTests);

    console.log(
      `${mockTests.length} mock tests seeded successfully`
    );
  } catch (error) {
    console.error("Mock test seeding failed:", error.message);
  } finally {
    await mongoose.disconnect();

    console.log("MongoDB disconnected");
  }
};

seedMockTests();