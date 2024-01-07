const express = require("express");
const path = require("path");
const router = express.Router();
const userController = require("../controller/authController");
const mailController = require("../controller/mailController");

const middleWare = require("../middleware/auth");

router.get("/", (req, res) => {
  // res.json("hiii");
  res.render("home");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

//==============================otp generator======================================//

router.post("/getOTP", userController.getOTP);

//=============================booksession=======================================//
router.post("/booksession", userController.booksession);

//==============================mail==========================================//

router.post("/mail", mailController.mailSender);

router.all("/*", (req, res) => {
  res.status(400).send({ status: false, message: "Endpoint is not correct" });
});

//============================dashboard=============================//

module.exports = router;
