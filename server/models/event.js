const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Event = sequelize.define(
  "tbl_event",
  {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      allowNull: false,
    },
    event_name: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    event_name_abrv: {
      type: Sequelize.STRING,
    },
    event_url: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    early_start: {
      type: Sequelize.DATE,
    },
    early_end: {
      type: Sequelize.DATE,
    },
    sale_start: {
      type: Sequelize.DATE,
      required: true,
    },
    sale_end: {
      type: Sequelize.DATE,
      required: true,
    },
    doors_open: {
      type: Sequelize.DATE,
      required: true,
      allowNull: false,
    },
    last_entry: {
      type: Sequelize.DATE,
    },
    min_age: {
      type: Sequelize.INTEGER,
    },
    venue_id: {
      type: Sequelize.INTEGER,
      required: true,
      allowNull: false,
    },
    event_type: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },

    organizers_id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Event.sync();
