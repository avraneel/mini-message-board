const db = require("../db/queries");

async function addMessagePost(req, res) {
  const message = {
    text: req.body.text,
    user: req.body.author,
    added: new Date(),
  };
  await db.addMessage(message);
}

async function getMessagesGet(req, res) {
  const messages = db.getMessages(message);
}

module.exports = {
  addMessagePost,
  getMessagesGet,
};
