const pool = require("./pool");

async function addMessage(message) {
  await pool.query(`INSERT INTO messages VALUES ($1, $2, $3)`, [
    message.username,
    message.text,
    message.added,
  ]);
}
module.exports = {
  addMessage,
};
