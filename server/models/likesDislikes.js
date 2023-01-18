const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const LikesDislikes = sequelize.define(
  "likes/dislikes",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      required: true,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: false,
      allowNull: false,
    },
    thing: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    "likes/dislikes": {
      type: Sequelize.INTEGER,
      required: true,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = LikesDislikes;