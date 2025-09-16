const passport = require("passport")

module.exports.login = (req, res, next) => {
    passport.authenticate("google", { scope: ["profile", "email"] })
}
module.exports.testing = (req, res, next) => {
    res.status(200).json({ message: "You made it!" })
}
module.exports.redirectToHomeScreen = (req, res, next) => {
    passport.authenticate("google", { failureRedirect: "/api/auth/fail" })
    res.redirect('/api/auth')
}

module.exports.failure = (req, res, next) => {
    res.status(200).json({ message: "Oh no there is an error" })
}