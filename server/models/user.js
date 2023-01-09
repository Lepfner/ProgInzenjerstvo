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
      required: true,
      allowNull: false,
      unique: true,
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
    nationality: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    religion: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    profileimg: {
      type: Sequelize.STRING,
      required: false,
      allowNull: true,
    },
    password_digest: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      required: true,
      allowNull: false,
    },
    is_admin: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = User;
