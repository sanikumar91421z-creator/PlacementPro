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
      "Managerial / HR Interview",
    ],

    eligibility: [
      "Eligibility depends on the specific TCS hiring drive.",
      "Candidates should check the official TCS hiring page for current eligibility requirements.",
    ],

    preparationTips: [
      "Practice Numerical Ability",
      "Practice Verbal Ability",
      "Practice Reasoning Ability",
      "Practice coding problems",
      "Prepare core CS subjects for technical interviews",
    ],

    availableYears: [2023, 2024, 2025],
  },
  {
    companyId: 2,

    name: "Infosys",

    slug: "infosys",

    description:
      "Infosys is a global technology services and consulting company. PlacementPro provides company information, reported previous-year questions, and practice questions based on its placement assessment pattern.",

    selectionProcess: [
      "Online Assessment",
      "Technical Interview",
      "HR Interview",
    ],

    eligibility: [
      "Eligibility requirements vary depending on the Infosys hiring drive.",
      "Candidates should check the official Infosys careers information for current eligibility requirements.",
    ],

    preparationTips: [
      "Practice Quantitative Aptitude",
      "Practice Logical Reasoning",
      "Practice Verbal Ability",
      "Practice coding and problem-solving",
      "Prepare OOP, DBMS, Operating Systems and Computer Networks",
      "Prepare your projects for the technical interview",
    ],

    availableYears: [2023, 2024, 2025],
  },
  {
    companyId: 3,
    name: "Wipro",
    slug: "wipro",

    description:
      "Wipro is a global technology services and consulting company. PlacementPro provides company information and preparation resources for its placement process.",

    selectionProcess: [
      "Online Assessment",
      "Technical Interview",
      "HR Interview",
    ],

    eligibility: [
      "Eligibility requirements vary depending on the Wipro hiring drive.",
      "Candidates should check the official Wipro careers information for current eligibility requirements.",
    ],

    preparationTips: [
      "Practice Quantitative Aptitude",
      "Practice Logical Reasoning",
      "Practice Verbal Ability",
      "Practice coding problems",
      "Prepare core CS subjects and projects",
    ],

    availableYears: [2023, 2024, 2025],
  },

  {
    companyId: 4,
    name: "Accenture",
    slug: "accenture",

    description:
      "Accenture is a global professional services and technology company. PlacementPro provides company information and preparation resources for its placement process.",

    selectionProcess: [
      "Online Assessment",
      "Technical / Skill Assessment",
      "Interview",
    ],

    eligibility: [
      "Eligibility requirements vary depending on the Accenture hiring drive.",
      "Candidates should check the official Accenture careers information for current requirements.",
    ],

    preparationTips: [
      "Practice Aptitude and Logical Reasoning",
      "Practice Verbal Ability",
      "Practice coding fundamentals",
      "Prepare OOP and DBMS",
      "Prepare projects and communication skills",
    ],

    availableYears: [2023, 2024, 2025],
  },

  {
    companyId: 5,
    name: "Cognizant",
    slug: "cognizant",

    description:
      "Cognizant is a global technology and professional services company. PlacementPro provides company information and preparation resources for its placement process.",

    selectionProcess: [
      "Online Assessment",
      "Technical Assessment / Interview",
      "HR Interview",
    ],

    eligibility: [
      "Eligibility requirements depend on the specific Cognizant hiring program.",
      "Candidates should verify current requirements from official Cognizant career information.",
    ],

    preparationTips: [
      "Practice Aptitude",
      "Practice Logical Reasoning",
      "Practice coding",
      "Prepare SQL and DBMS",
      "Prepare OOP and core CS concepts",
    ],

    availableYears: [2023, 2024, 2025],
  },

  {
    companyId: 6,
    name: "Capgemini",
    slug: "capgemini",

    description:
      "Capgemini is a global technology transformation and consulting company. PlacementPro provides company information and preparation resources for its placement process.",

    selectionProcess: [
      "Online Assessment",
      "Technical Assessment / Interview",
      "HR Interview",
    ],

    eligibility: [
      "Eligibility criteria vary by Capgemini recruitment drive.",
      "Candidates should verify current requirements from official Capgemini career information.",
    ],

    preparationTips: [
      "Practice Quantitative Aptitude",
      "Practice Logical and Analytical Reasoning",
      "Practice coding fundamentals",
      "Prepare pseudocode questions",
      "Prepare core CS subjects and projects",
    ],

    availableYears: [2023, 2024, 2025],
  },

  {
    companyId: 7,
    name: "HCLTech",
    slug: "hcltech",

    description:
      "HCLTech is a global technology company providing digital, engineering and technology services. PlacementPro provides preparation resources for its placement process.",

    selectionProcess: [
      "Online Assessment",
      "Technical Interview",
      "HR Interview",
    ],

    eligibility: [
      "Eligibility requirements vary according to the HCLTech hiring drive.",
      "Candidates should check official HCLTech career information for current requirements.",
    ],

    preparationTips: [
      "Practice Aptitude and Reasoning",
      "Practice coding",
      "Prepare OOP",
      "Prepare DBMS, OS and Computer Networks",
      "Prepare projects and technical fundamentals",
    ],

    availableYears: [2023, 2024, 2025],
  },

  {
    companyId: 8,
    name: "Tech Mahindra",
    slug: "tech-mahindra",

    description:
      "Tech Mahindra is a global technology consulting and digital solutions company. PlacementPro provides company information and preparation resources for its placement process.",

    selectionProcess: [
      "Online Assessment",
      "Technical Interview",
      "HR Interview",
    ],

    eligibility: [
      "Eligibility requirements vary depending on the Tech Mahindra recruitment drive.",
      "Candidates should verify current requirements through official career information.",
    ],

    preparationTips: [
      "Practice Aptitude",
      "Practice Logical Reasoning",
      "Practice English and communication",
      "Practice programming fundamentals",
      "Prepare core CS subjects",
    ],

    availableYears: [2023, 2024, 2025],
  },

  {
    companyId: 9,
    name: "Deloitte",
    slug: "deloitte",

    description:
      "Deloitte provides professional services across consulting, technology and other business areas. PlacementPro provides preparation resources for technology-focused campus hiring.",

    selectionProcess: [
      "Online Assessment",
      "Technical / Business Interview",
      "HR Interview",
    ],

    eligibility: [
      "Eligibility requirements vary by Deloitte role and campus hiring program.",
      "Candidates should check the relevant official Deloitte careers information.",
    ],

    preparationTips: [
      "Practice Aptitude and Logical Reasoning",
      "Practice Verbal Ability",
      "Prepare programming fundamentals",
      "Prepare SQL and DBMS",
      "Prepare projects and communication skills",
    ],

    availableYears: [2023, 2024, 2025],
  },

  {
    companyId: 10,
    name: "IBM",
    slug: "ibm",

    description:
      "IBM is a global technology company operating across software, infrastructure, consulting and related technologies. PlacementPro provides preparation resources for its placement process.",

    selectionProcess: [
      "Online Assessment",
      "Technical Interview",
      "HR / Managerial Interview",
    ],

    eligibility: [
      "Eligibility requirements vary depending on the IBM role and hiring drive.",
      "Candidates should check official IBM careers information for current requirements.",
    ],

    preparationTips: [
      "Practice coding and problem-solving",
      "Practice Aptitude and Reasoning",
      "Prepare OOP",
      "Prepare DBMS, OS and Computer Networks",
      "Prepare projects and technical fundamentals",
    ],

    availableYears: [2023, 2024, 2025],
  },
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
