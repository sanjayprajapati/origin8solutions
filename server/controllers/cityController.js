const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Cities = require("../models/Cities");

exports.createCity = catchAsyncErrors(async (req, res, next) => {
  const { city_name } = req.body;

  const city = await Cities.create({
    city_name,
  });

  res.status(201).json({
    success: true,
    city,
  });
});

// getAllCity
exports.getAllCity = catchAsyncErrors(async (req, res, next) => {
  const city = await Cities.find();
  console.log(city);
  res.status(200).json({
    success: true,
    city,
  });
});
