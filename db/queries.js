const pool = require("./pool");

async function addMessage(message) {
  await pool.query(
    `INSERT INTO messages (username, message, added) VALUES ($1, $2, $3);`,
    [message.username, message.message, message.added],
  );
}

async function getMessages() {
  const { rows } = await pool.query(`SELECT * FROM messages;`);
  return rows;
}

module.exports = {
  addMessage,
  getMessages,
};
