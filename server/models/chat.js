const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Chat = sequelize.define(
    "chat",
    {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            allowNull: false,
        },
        participantOneId: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
        },
        participantTwoId: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
        },
        messageId: {
            type: Sequelize.INTEGER,
            required: true,
            unique: true,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = Chat;