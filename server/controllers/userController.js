const User = require("../models/User");

exports.userRegister = async (req, res, next) => {
  try {
    const { name, email, password, mobile } = req.body;
    const user = await User.create({
      name,
      email,
      mobile,
      password,
    });
    res.status(201).json({ success: true, user });
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
