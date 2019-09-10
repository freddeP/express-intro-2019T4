const fs = require("fs");

fs.writeFile(__dirname+"/test2.txt","Halleluja",function(err){

    err ? console.log("error") : console.log("success");

});


const http = require("http");

http.createServer(function(req,res){

    if(req.url == "/handleForm")
    {
        res.end("form-handler");
        let data = "";
        req.on("data", function(chunk){
            data = data + chunk;
        });
        req.on("end", function(){
            console.log(data);
        });

    }
    if(req.url == "/")
    {
        res.end("home page");
    }
    else if(req.url=="/form"){

        res.setHeader("content-type", "text/html");
        res.setHeader("charset", "utf-8");
        res.end(`
            <form action = "/handleForm" method = "post">
            
                <input type = "text" name = "monday" placeholder = "monday">


            </form>
        
        `);
    }
    else{

        res.end("bad request");
    }
  

}).listen(3140,function(){

    console.log("lyssnar på port 3140");

});
