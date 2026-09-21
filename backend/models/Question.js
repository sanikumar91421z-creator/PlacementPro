const mongoose = require("mongoose");

const testCaseSchema = new mongoose.Schema(
  {
    args: {
      type: [mongoose.Schema.Types.Mixed],
      required: true,
    },

    expected: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },

    hidden: {
      type: Boolean,
      default: false,
    },
  },
  {
    _id: false,
  }
);

const questionSchema = new mongoose.Schema(
  {
    questionId: {
      type: Number,
      required: true,
      unique: true,
    },

    topic: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    input: {
      type: String,
      required: true,
    },

    output: {
      type: String,
      required: true,
    },

    explanation: {
      type: String,
      default: "",
    },

    constraints: {
      type: [String],
      default: [],
    },

    starterCode: {
      type: String,
      required: true,
    },

    methodName: {
      type: String,
      required: true,
    },

    returnType: {
      type: String,
      required: true,
    },

    parameters: {
      type: [String],
      required: true,
    },

    testCases: {
      type: [testCaseSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model(
  "Question",
  questionSchema
);

module.exports = Question;