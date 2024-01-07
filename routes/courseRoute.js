const express = require("express");
const path = require("path");
const router = express.Router();
const userController = require("../controller/authController");
const mailController = require("../controller/mailController");

const middleWare = require("../middleware/auth");

module.exports = router;
