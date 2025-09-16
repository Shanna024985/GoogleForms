const express = require("express");
debugger
require("dotenv").config();
let app = express();
let passport = require("passport")
let path = require("path")
let cors = require("cors")
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174"]
}))
app.use(passport.initialize())

require("./strategies/google.js")
let mainRoutes = require("./routes/mainRoute.js");
app.use("/api",mainRoutes);

let pathForServingHtmlFile = path.join(__dirname,"..","googleFormsAutoClosure","dist")
console.log(pathForServingHtmlFile)
app.use("/",express.static(pathForServingHtmlFile))

debugger
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"..","googleFormsAutoClosure","dist","index.html"));
});
module.exports = app;
