const express = require("express");
const logger = require("./middleware/logger");

// initiera applikation
const app = express();
// använder extern fil för routing
require("./modules/router")(app);

// middleware för samtliga routes
app.use(logger);
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+"/public"));
app.set("view engine","pug");

app.listen(5200,()=>console.log("Port: 5200"));