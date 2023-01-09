const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Relationship = sequelize.define(
    "relationship",
    {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            allowNull: false,
        },
        followerId: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
        },
        followedId: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            required: true,
            allowNull: false,
        },
        sharedLikes: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = Relationship;