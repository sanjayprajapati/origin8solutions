const express = require("express");
const { createCity, getAllCity } = require("../controllers/cityController");

const router = express.Router();

router.route("/newcity").post(createCity);
router.route("/cities").get(getAllCity);

module.exports = router;
