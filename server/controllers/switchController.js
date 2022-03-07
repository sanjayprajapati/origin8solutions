const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Appartment = require("../models/Appartment");
const Switeches = require("../models/Swithes");

exports.createSwitch = catchAsyncErrors(async (req, res, next) => {
  const apprtId = req.user.appartmentId.toString();

  const appartment = await Appartment.findById(apprtId);
  console.log(appartment.rooms[req.params.id]);

  //const swithes = await Switeches.create(req.body);
  res.status(200).json({ success: true, message: "Ok" });
});
