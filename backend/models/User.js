const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
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

module.exports = mongoose.model("User", UserSchema);