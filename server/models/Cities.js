const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
  city_name: {
    type: String,
    unique: true,
    required: [true, "Please enter city name"],
  },
});

const Cities = mongoose.model("Cities", CitySchema);

module.exports = Cities;
