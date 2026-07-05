const { Pool } = require("pg");

//process.loadEnvFile(".env");

module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWD,
  port: process.env.PORT,
  database: process.env.DB,
});
