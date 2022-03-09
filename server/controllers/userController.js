const User = require("../models/User");
const sendToken = require("../utils/jwtToken");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Appartment = require("../models/Appartment");
const Cities = require("../models/Cities");
const Swithes = require("../models/Swithes");

// User Registration
exports.userRegister = async (req, res, next) => {
  try {
    const { name, email, password, mobile, appartmentname, city_name } =
      req.body;
    console.log(req.body);
    const appartment = await Appartment.findOne({ appartmentname });
    const cities = await Cities.findOne({ city_name });

    const user = await User.create({
      name,
      email,
      mobile,
      password,
      appartmentId: appartment.id,
      cityId: cities.id,
    });

    sendToken(user, 201, res);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// User Login
exports.userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(400)
        .json({ success: false, message: "Please enter Email & Password" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Logout User
exports.userLogout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Get all rooms
exports.getAllrooms = catchAsyncErrors(async (req, res, next) => {
  const userId = req.user.id;

  const user = await User.findById(userId);
  const appartmentId = user.appartmentId.toString();
  const appartment = await Appartment.findById(appartmentId);
  const rooms = appartment.rooms;
  res.status(200).json({
    success: true,
    rooms,
  });
});

// Get User
exports.getUser = catchAsyncErrors(async (req, res, next) => {
  const id = req.user.id;
  const user = await User.findById(id);
  res.status(200).json({
    success: true,
    user,
  });
});

exports.fileuplad = async (req, res, next) => {
  try {
    const file = req.file;
    console.log(file);
    res.status(400).json({ success: true, file });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
