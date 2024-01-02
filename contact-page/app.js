const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express(); 
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.sendFile(__dirname + `/index.html`);
    console.log(__dirname);
});

app.post("/", (req, res) => {
    const name = req.body.name; 
    const email = req.body.email;
    const number = req.body.number;
    const course = req.body.select;
    console.log(course);
    const msg = req.body.msg;
    // transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'leila.emard@ethereal.email',
            pass: 'uje1CmxWnWysndnRF8'
        }
    });
    
    // mailoption
    const mailoption = {
        from: "leila.emard@ethereal.email",
        to: req.body.email,
        cc: "leila.emard@ethereal.email",
        subject: " Mr./Mrs." + name + " want to contact with BAOIAM",
        text: "<b>Name:</b>" + name + "\n\n" + "Contact no.: " + number + "\n\n" + "Email: " + email + "\n\n" + "Select Course: " + course + "\n\n" + "User query or message: " + msg
    };

    transporter.sendMail(mailoption, (error, info) => {
        if (error) {
            console.log(error);

        }
        else {
            res.redirect('/');
            console.log("email is send" + info.response);

        }

    });


});

app.listen(8000);