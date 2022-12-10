const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Organizer = sequelize.define(
  "tbl_organizer",
  {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      allowNull: false,
    },
    admin_id: {
      type: Sequelize.INTEGER,
      required: true,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Organizer.sync();
