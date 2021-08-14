const mongoose = require("mongoose");

const InformationSchema = new mongoose.Schema(
  {
    announceDate: {
      type: Date,
      required: true,
    },
    effectiveDate: {
      type: Date,
      default: Date.now(),
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    typeTag: {
      type: Array,
      required: true,
    },
    categoryTag: {
      type: Array,
      required: true,
    },
    articleUrl: {
      type: String,
      default: "",
    },
    thumbnailUrl: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Information", InformationSchema);
