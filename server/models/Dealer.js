const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const DealerSchema = new mongoose.Schema({
  dealername: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8, "Password Must be greater than 8 characters"],
    select: false,
  },
  mobile: {
    type: Number,
    required: [true, "Please enter your mobile no."],
  },
  allotedCity: {
    type: String,
  },
});
DealerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

DealerSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
// jwt token
DealerSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
DealerSchema.path("mobile").validate(function validatePhone() {
  return this.mobile > 999999999;
});

const Dealer = mongoose.model("Dealer", DealerSchema);

module.exports = Dealer;
