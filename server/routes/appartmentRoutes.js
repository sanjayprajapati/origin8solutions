const express = require("express");
const { createAppartment } = require("../controllers/appartmentController");

const router = express.Router();

router.route("/newappartment").post(createAppartment);

module.exports = router;
