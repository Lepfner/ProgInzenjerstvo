const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize("railway", "postgres", "FOaweEKvvLIi6h8Tnwkb", {
  port: 7761,
  host: "containers-us-west-122.railway.app",
  dialect: "postgres",
  logging: true,
});
