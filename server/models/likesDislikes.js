const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const LikesDislikes = sequelize.define(
    "likes/dislikes",
    {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            allowNull: false,
        },
        object: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
        },
        opinion: {
            type: Sequelize.ENUM("likes", "dislikes"),
            required: true,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = LikesDislikes;