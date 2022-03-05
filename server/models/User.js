const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your name"],
    maxlength: [50, "Can not exceed 50 characters"],
    minlength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your Email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid Email"],
  },
  mobile: {
    type: Number,
    required: [true, "Please Enter your Mobile No."],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8, "Password Must be greater than 8 characters"],
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  cityId: {
    type: String,
    //required: [true, "Please Select your City"],
  },
  appartmentId: {
    type: String,
    //required: [true, "Please Select your appartment type"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  userStatus: {
    type: String,
    default: "active",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
