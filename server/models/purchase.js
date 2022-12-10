const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Purchase = sequelize.define(
  "tbl_purchase",
  {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
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

module.exports = Purchase.sync();
