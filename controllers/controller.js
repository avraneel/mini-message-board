const db = require("../db/queries");

async function addMessagePost(req, res) {
  const message = {
    username: req.body.author,
    message: req.body.text,
    added: new Date(),
  };
  console.log(req.body.author);
  await db.addMessage(message);
  res.redirect("/");
}

async function getMessagesGet(req, res) {
  const messages = await db.getMessages();
  console.log(messages);
  res.render("index", { title: "Mini messages", messages: messages });
}

async function showFormGet(req, res) {
  res.render("form");
}

module.exports = {
  addMessagePost,
  getMessagesGet,
  showFormGet,
};
