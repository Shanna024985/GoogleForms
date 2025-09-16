const expressRouter = require("express").Router();
let authRouter = require("./authRoute")
expressRouter.use("/auth",authRouter);
module.exports = expressRouter;