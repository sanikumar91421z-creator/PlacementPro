const mongoose = require("mongoose");

const companyQuestionSchema = new mongoose.Schema(
  {
    questionId: {
      type: Number,
      required: true,
      unique: true,
    },

    companyId: {
      type: Number,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      enum: ["programming", "aptitude", "reasoning", "comprehension"],
      required: true,
    },

    question: {
      type: String,
      required: true,
    },

    options: {
      type: [String],
      default: [],
    },

    answer: {
      type: String,
      required: true,
    },

    solution: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Medium",
    },

    programmingLanguage: {
      type: String,
      default: null,
    },

    sourceType: {
      type: String,
      enum: ["previous-year", "company-style"],
      default: "company-style",
    },
    sourceName: {
      type: String,
      default: null,
    },

    sourceUrl: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

companyQuestionSchema.index({
  companyId: 1,
  year: 1,
  category: 1,
});

const CompanyQuestion = mongoose.model(
  "CompanyQuestion",
  companyQuestionSchema,
);

module.exports = CompanyQuestion;
