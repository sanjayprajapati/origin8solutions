const User = require("../models/User");
const sendToken = require("../utils/jwtToken");

// User Registration
exports.userRegister = async (req, res, next) => {
  try {
    const { name, email, password, mobile } = req.body;
    const user = await User.create({
      name,
      email,
      mobile,
      password,
    });

    sendToken(user, 200, res);
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
exports.fileuplad = async (req, res, next) => {
  try {
    const file = req.file;
    console.log(file);
    res.status(400).json({ success: true, file });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
