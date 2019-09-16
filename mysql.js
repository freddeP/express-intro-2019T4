const mysql      = require('mysql');
const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node2019'
});
 
let createTable = `CREATE TABLE IF NOT EXISTS orders (
    id int(11) NOT NULL AUTO_INCREMENT,
    date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    name varchar(300),
    meta text,
    PRIMARY KEY (id)
   )`; 

con.connect(err => console.log(err));

con.query(createTable);













/* let ins = [
    ["Jens B", JSON.stringify({job: "make stuff", price:1234})],
    ["Jam B", JSON.stringify({job: "make stuff", price:1235})],
    ["Ylva B", JSON.stringify({job: "make stuff", price:1236})],
    ["Sonny B", JSON.stringify({job: "make stuff", price:1237})],
    ["Britta C", JSON.stringify({job: "make stuff", price:1238})],
    ["Magdalena B", JSON.stringify({job: "make stuff", price:1239})]
];

con.query("INSERT INTO viktor (name, json) VALUES ?", [ins], (err,result)=>{

    console.log(err, result);

}); */


/* con.query('SELECT * FROM viktor',(error, results)=> {
  if (error) console.log("ERror");
  console.log('from table: ', results);
}); */




con.end();
