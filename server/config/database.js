const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize(
  `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASS}@juicydb-6413.8nj.cockroachlabs.cloud:26257/Juicy?sslmode=verify-full`
);
