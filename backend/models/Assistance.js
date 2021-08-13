const mongoose = require("mongoose");

/** TODO: Change datatypes and fields of this model */
const AssistanceSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    individualSub: {
        type: Array,
        default: [],
    },
    businessSub: {
        type: Array,
        default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assistance", AssistanceSchema);