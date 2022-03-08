const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Appartment = require("../models/Appartment");
const Switeches = require("../models/Swithes");

exports.createSwitch = catchAsyncErrors(async (req, res, next) => {
  const userId = req.user.id;

  const apprtId = req.user.appartmentId.toString();

  const appartment = await Appartment.findById(apprtId);

  const roomName = appartment.rooms[req.params.id];

  const { switchName } = req.body;
  if (roomName == "") {
    const switches = await Switeches.create({
      switchName,
      userId,
      roomName,
    });
    res.status(200).json({ success: true, switches });
  }
  res
    .status(200)
    .json({ success: false, message: "There is no rooms are available" });
  //const swithes = await Switeches.create(req.body);
});
