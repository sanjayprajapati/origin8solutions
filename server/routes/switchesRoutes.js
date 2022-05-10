const express = require("express");
const {
  createSwitch,
  getAllswitches,
  getAllwitchesOfroom,
  updateSwitchState,
  updateSwitchName,
  setAlarm,
} = require("../controllers/switchController");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.route("/newswitch/:id").post(isAuthenticatedUser, createSwitch);

router.route("/allswitches").get(isAuthenticatedUser, getAllswitches);
router
  .route("/allswitches/:room")
  .get(isAuthenticatedUser, getAllwitchesOfroom);

router
  .route("/updateswitchstate/:id")
  .put(isAuthenticatedUser, updateSwitchState);

router
  .route("/updateswitchname/:id")
  .put(isAuthenticatedUser, updateSwitchName);

router.route("/alarm/:id").post(isAuthenticatedUser, setAlarm);

module.exports = router;
