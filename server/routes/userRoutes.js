const express = require("express");

const router = express.Router();

const {
  userRegister,
  fileuplad,
  userLogin,
} = require("../controllers/userController");
const { upload } = require("../middlewares/imageUpload");

router.route("/register").post(userRegister);
router.route("/login").post(userLogin);
router.route("/fileupload").post(upload.single("file"), fileuplad);

module.exports = router;
