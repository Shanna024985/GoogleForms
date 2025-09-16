let express = require("express")
let router = express.Router();
let passport = require("passport")
let controller = require("../controller/authController")
router.use(passport.authenticate('google'))
router.get("/",controller.testing)
router.post("/",controller.login)
module.exports = router