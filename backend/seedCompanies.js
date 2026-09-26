require("dotenv").config();

const mongoose = require("mongoose");
const Company = require("./models/Company");

const companies = [
  {
    companyId: 1,
    name: "TCS",
    slug: "tcs",

    description:
      "Tata Consultancy Services (TCS) is a global technology services and consulting company. PlacementPro provides company information and reported previous-year TCS NQT questions with solutions.",

    selectionProcess: [
      "TCS NQT",
      "Technical Interview",
      "Managerial / HR Interview"
    ],

    eligibility: [
      "Eligibility depends on the specific TCS hiring drive.",
      "Candidates should check the official TCS hiring page for current eligibility requirements."
    ],

    preparationTips: [
      "Practice Numerical Ability",
      "Practice Verbal Ability",
      "Practice Reasoning Ability",
      "Practice coding problems",
      "Prepare core CS subjects for technical interviews"
    ],

    availableYears: [2025]
  }
];

async function seedCompanies() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Company.deleteMany({});

    await Company.insertMany(companies);

    console.log("Companies seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding companies:", error);
    process.exit(1);
  }
}

seedCompanies();