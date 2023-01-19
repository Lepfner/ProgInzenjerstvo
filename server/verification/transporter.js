const nodemailer = require("nodemailer")
let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "tonigrbic.5@gmail.com",
    pass: "mhdrwllrouvovgpw",
  },
});

module.exports = transporter;