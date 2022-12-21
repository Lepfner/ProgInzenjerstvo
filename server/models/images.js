const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Images = sequelize.define(
    "tbl_images",
    {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            allowNull: false,
        },
        content: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
        },
        userId: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            required: true,
            allowNull: false,
        }
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
);

module.exports = Images