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

exports.getAllswitches = catchAsyncErrors(async (req, res, next) => {
  const userId = req.user.id;

  const switches = await Switeches.find({ userId });

  res.status(200).json({
    success: true,
    switches,
  });
});

exports.getAllwitchesOfroom = catchAsyncErrors(async (req, res, next) => {
  const userId = req.user.id;

  const apprtId = req.user.appartmentId.toString();
  console.log(apprtId);

  const appartment = await Appartment.findById(apprtId);

  const roomName = appartment.rooms[req.params.room];

  const switches = await Switeches.find({ roomName });

  res.status(200).json({
    success: true,
    switches,
  });
});

exports.getSwitch = catchAsyncErrors(async (req, res, next) => {
  const switchId = req.params.id;
  const switches = await Switeches.findById(switchId);

  res.status(200).json({
    success: true,
    switches,
  });
});

exports.updateSwitchState = catchAsyncErrors(async (req, res, next) => {
  const query = req.query;
  console.log(query.switch);
  const id = req.params.id;
  const switches = await Switeches.findByIdAndUpdate(
    id,
    { $set: { switchStatus: query.switch } },
    { new: true }
  );
  res.status(200).json({
    success: true,
    switches,
  });
});
exports.updateSwitchName = catchAsyncErrors(async (req, res, next) => {
  const switchId = req.params.id;
  const { switchName } = req.body;

  const switches = await Switeches.findByIdAndUpdate(
    switchId,
    {
      $set: { switchName },
    },
    { new: true }
  );
  res.status(200).json({
    success: true,
    switches,
  });
});
