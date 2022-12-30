const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize(
  `postgresql://toni_grbic:${process.env.DB_PASS}@juicydb-6413.8nj.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full`
);
