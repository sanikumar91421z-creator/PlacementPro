const mongoose = require("mongoose");

const mockTestSchema = new mongoose.Schema(
  {
    testId: {
      type: Number,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    description: {
      type: String,
      default: "",
    },

    duration: {
      type: Number,
      required: true,
    },

    totalMarks: {
      type: Number,
      required: true,
    },

    questionIds: {
      type: [Number],
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const MockTest = mongoose.model("MockTest", mockTestSchema);

module.exports = MockTest;