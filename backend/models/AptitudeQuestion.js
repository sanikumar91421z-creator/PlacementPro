const mongoose = require("mongoose");

const aptitudeQuestionSchema = new mongoose.Schema(
  {
    questionId: {
      type: Number,
      required: true,
      unique: true,
    },

    category: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    topic: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    question: {
      type: String,
      required: true,
      trim: true,
    },

    options: {
      type: [String],
      required: true,
      validate: {
        validator: function (options) {
          return options.length === 4;
        },
        message: "Exactly 4 options are required.",
      },
    },

    correctAnswer: {
      type: Number,
      required: true,
      min: 0,
      max: 3,
    },

    explanation: {
      type: String,
      default: "",
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AptitudeQuestion = mongoose.model(
  "AptitudeQuestion",
  aptitudeQuestionSchema
);

module.exports = AptitudeQuestion;