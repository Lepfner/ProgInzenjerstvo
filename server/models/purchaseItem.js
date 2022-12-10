const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const PurchaseItem = sequelize.define(
  "tbl_purchase_item",
  {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      allowNull: false,
    },
    ticket_id: {
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

module.exports = PurchaseItem.sync();
