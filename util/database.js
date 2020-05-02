const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
 host: process.env.MYSQL_DB_HOST,
 user: process.env.MYSQL_DB_USERNAME,
 database: process.env.MYSQL_DB_DATABASE,
 password: process.env.MYSQL_PASSWORD
});

module.exports = pool.promise();