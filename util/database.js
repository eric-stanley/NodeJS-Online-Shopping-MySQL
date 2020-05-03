const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
 process.env.MYSQL_DB_DATABASE,
 process.env.MYSQL_DB_USERNAME,
 process.env.MYSQL_PASSWORD,
 {
  dialect: process.env.MYSQL_DIALECT,
  host: process.env.MYSQL_DB_HOST
 });

module.exports = sequelize;