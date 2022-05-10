const mongoose = require("mongoose");
const validator = require("validator");

const AlarmSchema = new mongoose.Schema({
  AlarmName: {
    type: String,
    default: "Alarm set",
  },
  alarmTime: {
    type: String,
    required: true,
  },
  switchId: {
    type: mongoose.Schema.ObjectId,
    ref: "Switeches",
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "active",
  },
  AlarmStatus: {
    type: String,
    default: "on",
  },
});

module.exports = mongoose.model("Alarm", AlarmSchema);
