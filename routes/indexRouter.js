const Router = require("express");
const controller = require("../controllers/controller");

const indexRouter = Router();

indexRouter.get("/", controller.getMessagesGet);
indexRouter.get("/new", controller.showFormGet);
indexRouter.post("/new", controller.addMessagePost);

module.exports = indexRouter;
