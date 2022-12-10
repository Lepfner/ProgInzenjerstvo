const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Venue = sequelize.define(
  "tbl_venue",
  {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      allowNull: false,
    },
    venue_name: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
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
    adress: {
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

module.exports = Venue.sync();
