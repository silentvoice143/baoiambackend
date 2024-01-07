const express = require("express");
const path = require("path");
const router = express.Router();
const userController = require("../controller/authController");

const middleWare = require("../middleware/auth");

router.get("/dashboard", (req, res) => {
  const parentDirectory = path.join(__dirname, "..");
  res.sendFile("index.html");
});

module.exports = router;
