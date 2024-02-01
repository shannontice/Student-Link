const { Sequelize } = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize(
    precess.env.DB_DATABASE_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD || "",
    {
        host: process.env.DB_HOST_URL,
        dialect: "mysql"
    });

module.exports = sequelize;