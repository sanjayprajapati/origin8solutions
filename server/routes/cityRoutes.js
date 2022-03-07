const express = require("express");
const { createCity } = require("../controllers/cityController");

const router = express.Router();

router.route("/newcity").post(createCity);

module.exports = router;
