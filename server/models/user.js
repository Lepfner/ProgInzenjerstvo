const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "tbl_user",
  {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    surname: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      required: true,
      unique: true,
      allowNull: false,
    },
    date_of_birth: {
      type: Sequelize.DATE,
      required: true,
      allowNull: false,
    },
    gender: {
      type: Sequelize.ENUM("male", "female"),
      required: true,
      allowNull: false,
    },
    level_of_access: {
      type: Sequelize.ENUM("admin", "user"),
      required: true,
    },
    country: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    wallet_id: {
      type: Sequelize.STRING,
    },
    profile_img_url: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = User.sync();
