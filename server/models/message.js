const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Message = sequelize.define(
    "message",
    {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            allowNull: false,
        },
        chatId: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
        },
        content: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
        },
        timeSent: {
            type: Sequelize.DATE,
            required: true,
            allowNull: false,
        },
        senderId: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = Message;