module.exports = {

    nr1: function(req,res,next){
    
        if(req.params.secret === "kalle")
        {
            next();
        }
        else{
            res.send("Wrong secret");
        }
    
    },
    nr2: function (req,res,next){
    
        if(req.params.secret2 === "anka")
        {
            next();
        }
        else{
            res.send("Wrong secret");
        }
    
    }

}