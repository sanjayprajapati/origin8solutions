const express = require("express");
const { createAppartment } = require("../controllers/appartmentController");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.route("/newappartment").post(createAppartment);

module.exports = router;
