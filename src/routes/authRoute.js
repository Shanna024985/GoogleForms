let express = require("express")
debugger
let router = express.Router();
let passport = require("passport")
let controller = require("../controller/authController")
router.use(passport.authenticate('google'))
router.get("/",controller.testing)
router.get("/google",controller.login)
router.get("/fail",controller.failure)
module.exports = router