const secret = require("../middleware/secret");

module.exports = function(app){


    app.get("/",(req,res)=>{ 
        res.render("index",{title:"t4Express" ,header:"En rubrik till vår pug-sida"});
    });
    app.get("/secret/:secret/:secret2",secret.nr1,secret.nr2,(req,res)=>{
        res.send("You are inside secret stuff...");
     });
    app.get("/public",(req,res)=>{ 
        res.send("Public stuff... no secrets here");
    });


}