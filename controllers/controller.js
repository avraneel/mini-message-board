const db = require("../db/queries");

async function addMessagePost(req, res) {
  const message = {
    text: req.body.text,
    user: req.body.author,
    added: new Date(),
  };
  await db.addMessage(message);
}

module.exports = {
  addMessagePost,
};
