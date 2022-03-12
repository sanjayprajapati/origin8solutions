const express = require("express");
const {
  createAppartment,
  getAllAppartment,
} = require("../controllers/appartmentController");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.route("/newappartment").post(createAppartment);
router.route("/appartments").get(getAllAppartment);

module.exports = router;
