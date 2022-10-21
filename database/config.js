const { Sequelize } = require('sequelize');
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    port: '3306'
});

module.exports = db;