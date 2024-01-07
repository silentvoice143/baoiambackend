const express = require("express");
const route = require("./routes/generalRoutes.js");
const mongoose = require("mongoose");
const multer = require("multer");
const bodyParser = require("body-parser");

//===============importing all routes===============//
const authRoutes = require("./routes/authRoute.js");
const userRoutes = require("./routes/userRoute");
const adminRoutes = require("./routes/adminRoute.js");
const courseRoutes = require("./routes/courseRoute.js");
const generalRoutes = require("./routes/generalRoutes.js");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

// app.set("views", __dirname + "views");

// Use body-parser middleware to parse URL-encoded and JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(multer().any());
// "mongodb+srv://poushali26:0U8on2StHP5FNKo2@cluster0.jwwwcc8.mongodb.net/baoiam"
mongoose
  .connect("mongodb://0.0.0.0:27017/baoiam")

  .then(() => console.log("MongoDb is connected"));

//==============defining all routes==============//

app.use("/", generalRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/course", courseRoutes);
app.use("/user", userRoutes);

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("app running on port 3000");
});
