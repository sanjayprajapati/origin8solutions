const express = require("express");

const router = express.Router();

const { userRegister, fileuplad } = require("../controllers/userController");
const { upload } = require("../middlewares/imageUpload");

router.route("/register").post(userRegister);
router.route("/fileupload").post(upload.single("file"), fileuplad);

module.exports = router;
