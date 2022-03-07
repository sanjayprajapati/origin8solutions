const mongoose = require("mongoose");
const validator = require("validator");

const AppartmentSchema = new mongoose.Schema({
  appartmentname: {
    type: String,
    unique: true,
    required: [true, "Pleae enter appartment name"],
  },
  numOfrooms: {
    type: Number,
  },
  rooms: {
    type: Array,
    required: [true, "Please Enter room names"],
  },
});

module.exports = mongoose.model("Appartment", AppartmentSchema);
