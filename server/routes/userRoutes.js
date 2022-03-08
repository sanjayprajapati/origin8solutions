const express = require("express");

const router = express.Router();

const {
  userRegister,
  fileuplad,
  userLogin,
  userLogout,
  getAllrooms,
} = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middlewares/auth");
const { upload } = require("../middlewares/imageUpload");

router.route("/register").post(userRegister);

router.route("/login").post(userLogin);

router.route("/logout").get(userLogout);

router.route("/allrooms").get(isAuthenticatedUser, getAllrooms);

router.route("/fileupload").post(upload.single("file"), fileuplad);

module.exports = router;
