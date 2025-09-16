let app = require("./app");

require("dotenv").config();
  
app.listen(process.env.PORT,"0.0.0.0",()=>{
    console.log("App listening to port " + process.env.PORT)
})
// { "version": 2, "rewrites": [{ "source": "/(.*)", "destination": "/api" }]}
 