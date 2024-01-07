const express = require("express");
const path = require("path");
const router = express.Router();
const userController = require("../controller/authController");

const middleWare = require("../middleware/auth");

router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);

module.exports = router;
