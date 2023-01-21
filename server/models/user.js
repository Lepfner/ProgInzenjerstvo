const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      required: false,
      unique: true,
      allowNull: false,
    },
    password_digest: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    surname: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    username: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    date_of_birth: {
      type: Sequelize.DATE,
      required: false,
      allowNull: true,
    },
    gender: {
      type: Sequelize.ENUM("male", "female"),
      required: false,
      allowNull: true,
    },
    location: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    nationality: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    religion: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    profileimg: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      required: true,
      allowNull: false,
    },
    is_admin: {
      type: Sequelize.INTEGER,
      required: true,
      allowNull: false,
    },
    work: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    education: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    height: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    eye_color: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    hair_color: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    about: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = User;
