const express = require("express");
const { createSwitch } = require("../controllers/switchController");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.route("/newswitch/:id").post(isAuthenticatedUser, createSwitch);

module.exports = router;
