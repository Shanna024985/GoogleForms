const expressRouter = require("express").Router();
debugger
let authRouter = require("./authRoute")
expressRouter.use("/auth",authRouter);

module.exports = expressRouter;