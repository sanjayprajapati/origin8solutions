const express = require("express");
const { createSwitch } = require("../controllers/switchController");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.route("/sitches").post(isAuthenticatedUser, createSwitch);

module.exports = router;
