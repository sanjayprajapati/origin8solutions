const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Switeches = require("../models/Swithes");

exports.createSwitch = catchAsyncErrors(async (req, res, next) => {
  //req.body = req.user.id;

  const swithes = await Switeches.create(req.body);
});
