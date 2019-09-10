const fs = require("fs");

module.exports = function(dataArr){

    return Promise.resolve().then(()=>{

        fs.writeFile("./data.json",JSON.stringify(dataArr),(err)=>{
     
            return err;
        });  

    });

  

  


}