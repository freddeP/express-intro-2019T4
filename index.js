const express = require("express");
const fs = require("fs");


const app = express();
// parsar body-data åt oss så att vi SLIPPER!!!!!!!!!
app.use(express.urlencoded({extended:false}));


//routes
app.get("/",(req,res)=>{res.send("Home Page...");});
app.get("/form",(req,res)=>{res.sendFile(__dirname+"/form.html");});
app.get("/about",(req,res)=>{res.send("A b o u t  p a g e. . .");});

app.post("/form",(req,res)=>{

    let student = {...req.body, id: Date.now() }

    saveToFileDataBase(student);

    res.send(student);

});

app.get("/students",(req,res)=>{
    res.setHeader("content-type", "application/json");
    res.sendFile(__dirname+"/data.json");
});

app.get("/students/:name",(req,res)=>{
    fs.readFile(__dirname+"/data.json",(err,data)=>{

        let currentArr = JSON.parse(data.toString());

        let filteredArr =  currentArr.filter(student=>{
           return student.elev.toLowerCase().search(req.params.name.toLowerCase()) !=-1
        });
        
        res.send(filteredArr);

    });
});

app.get("/students/update/:id/:age",(req,res)=>{

    /**
     * Läxa
     * leta upp elev med :id från ovan
     * uppdatera dess ålder med :age
     * använd res.redirect("/students");
     */
    

});

app.get("/students/delete/:id",(req,res)=>{ 

    fs.readFile("./data.json",(err, data)=>{

        let currentData = JSON.parse(data.toString());
/*      let rest =  currentData.
     filter(student=> {
         return student.id != parseInt(req.params.id)
        }); */
        let rest = [];
        currentData.forEach(studentObject=>{

            if(studentObject.id != parseInt(req.params.id))
            {
                rest.push(studentObject);
            }
    
        });

        require("./updateData")(rest);

        res.send( rest);






    });


});

app.listen(4600,()=>{
    console.log("app started");
});




function saveToFileDataBase(inputData){
    
    fs.readFile(__dirname + "/data.json",(err,currentData)=>{

        console.log(currentData.toString());
        let currentArr = JSON.parse(currentData.toString());
        currentArr.push(inputData);
        console.log(currentArr);

        fs.writeFile(__dirname+"/data.json",JSON.stringify(currentArr),(err)=>{

           err ? console.log(err.message) : console.log("file updated");

        });


    });


}
