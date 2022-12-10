const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Ticket = sequelize.define(
  "tbl_ticket",
  {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      allowNull: false,
    },
    ticket_name: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      required: true,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      required: true,
      allowNull: false,
    },
    venue_access: {
      type: Sequelize.STRING,
    },
    event_id: {
      type: Sequelize.NUMERIC,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Ticket.sync();
