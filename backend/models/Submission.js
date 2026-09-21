const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    questionId: {
      type: Number,
      required: true,
    },

    language: {
      type: String,
      required: true,
      default: "java",
    },

    code: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Accepted", "Rejected"],
      required: true,
    },

    passedTests: {
      type: Number,
      default: 0,
    },

    totalTests: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Submission = mongoose.model(
  "Submission",
  submissionSchema
);

module.exports = Submission;