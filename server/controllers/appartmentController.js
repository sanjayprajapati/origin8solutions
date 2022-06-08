const Appartment = require("../models/Appartment");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

exports.createAppartment = async (req, res, next) => {
  try {
    const { appartmentname, numOfrooms, rooms } = req.body;

    console.log(req.body);
    const appartment = await Appartment.create({
      appartmentname,
      numOfrooms,
      rooms,
    });
    console.log(appartment);

    res.status(201).json({ succss: true, appartment });
  } catch (error) {
    res.status(500).json({ succss: false, message: error.message });
  }
};
//getAllAppartment

exports.getAllAppartment = catchAsyncErrors(async (req, res, next) => {
  const appartment = await Appartment.find();

  res.status(200).json({
    succss: true,
    appartment,
  });
});
