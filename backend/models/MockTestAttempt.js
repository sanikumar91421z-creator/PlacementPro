const mongoose = require("mongoose");

const mockTestAttemptSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    testId: {
      type: Number,
      required: true,
      index: true,
    },

    answers: [
      {
        questionId: {
          type: Number,
          required: true,
        },

        selectedAnswer: {
          type: Number,
          min: 0,
          max: 3,
          default: null,
        },

        isCorrect: {
          type: Boolean,
          default: false,
        },
      },
    ],

    correctAnswers: {
      type: Number,
      default: 0,
    },

    wrongAnswers: {
      type: Number,
      default: 0,
    },

    unanswered: {
      type: Number,
      default: 0,
    },

    score: {
      type: Number,
      default: 0,
    },

    totalMarks: {
      type: Number,
      required: true,
    },

    percentage: {
      type: Number,
      default: 0,
    },

    timeTaken: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const MockTestAttempt = mongoose.model(
  "MockTestAttempt",
  mockTestAttemptSchema
);

module.exports = MockTestAttempt;