const mongoose = require("mongoose");
const validator = require("validator");

const SwitchSchema = new mongoose.Schema({
  switchName: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  roomName: {
    type: String,
  },
  role: {
    type: String,
    default: "active",
  },
  switchStatus: {
    type: String,
    default: "on",
  },
});

module.exports = mongoose.model("Switeches", SwitchSchema);
