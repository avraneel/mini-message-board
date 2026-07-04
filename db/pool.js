const { Pool } = require("pg");

process.loadEnvFile(".env");

module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  port: process.env.PORT,
  database: "messages",
});
