const mongoose = require("mongoose");

const AssistanceSchema = new mongoose.Schema(
  {
    announceData: {
      type: Date,
      required:true,
    },
    effectiveDate: {
      type: Date,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assistance", AssistanceSchema);