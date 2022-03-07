const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const rejx = /^[6789][0-9]{9}$/;

const UserSchema = new mongoose.Schema({
  name: {
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
    type: String,
    required: [true, "Please Enter your Mobile No."],
    match: [rejx, "Please enter a valid mobile no"],
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
  avatar: {
    type: String,
    default:
      "http://localhost:8282/uploads/2022-03-06T10-17-59.273Z-unnamed.jpg",
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
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// JWT TOKEN
UserSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Compare Password

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generating Password Reset Token
UserSchema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);
