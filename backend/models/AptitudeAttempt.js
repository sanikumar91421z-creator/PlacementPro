const mongoose = require("mongoose");

const aptitudeAttemptSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    questionId: {
      type: Number,
      required: true,
      index: true,
    },

    selectedAnswer: {
      type: Number,
      required: true,
      min: 0,
      max: 3,
    },

    isCorrect: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AptitudeAttempt = mongoose.model(
  "AptitudeAttempt",
  aptitudeAttemptSchema
);

module.exports = AptitudeAttempt;