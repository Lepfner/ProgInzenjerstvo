const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const transporter = require("../../verification/transporter");

router.get("/admins", async (req, res) => {
  try {
    const admins = findAll({ where: { is_admin: true } });
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res
    .status(200)
    .json({ message: `user ${req.params.id} was successfully deleted!` });
});

router.post("/notify/:id", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) throw new Error("user not found");

    const { email } = user.dataValues;

    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Warining message",
      html: `<p>We are warning you about your recent behaviour on Juicy app, <br>
           we kindly ask you to not act inaproppriately in the future. <br>
           If it continues <b>your account will be terminated!</b> <br>
           Best regards, Team Juicy</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({
      status: `user ${email} `,
      message: "Verification otp email sent",
    });
  } catch (error) {
    res.status(400).json({
      status: "FAILED",
      message: error.message,
    });
  }
});

module.exports = router;
