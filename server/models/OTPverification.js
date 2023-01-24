const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const OTPverification = sequelize.define("otpverification", {
  id: {
    type: Sequelize.STRING,
    required: true,
    primaryKey: true,
    allowNull: false,
  },
  userid: {
    type: Sequelize.INTEGER,
    required: true,
    primaryKey: false,
    allowNull: false,
  },
  otp: {
    type: Sequelize.STRING,
    required: true,
    primaryKey: false,
    allowNull: false,
  },
  created_at: {
    type: Sequelize.DATE,
    required: true,
    primaryKey: false,
    allowNull: false,
  },
  expires_at: {
    type: Sequelize.DATE,
    required: true,
    primaryKey: false,
    allowNull: false,
  },
  
},
{
    freezeTableName: true,
    timestamps: false,
});

module.exports = OTPverification;
