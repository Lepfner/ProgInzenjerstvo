const nodemailer = require("nodemailer")
let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "toniradman2903@gmail.com",
    pass: "drucehwflrqsxgha",
  },
});

module.exports = transporter;