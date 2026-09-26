const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyId: {
      type: Number,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    selectionProcess: {
      type: [String],
      default: [],
    },

    eligibility: {
      type: [String],
      default: [],
    },

    preparationTips: {
      type: [String],
      default: [],
    },

    availableYears: {
      type: [Number],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company;