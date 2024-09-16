const express = require("express");
const configViewEngine = require("./config/viewEngine");
require("dotenv").config();
//import my sql
const mysql = require("mysql2");

const webrouter = require("./routes/web");
const app = express();
const port = process.env.port;

//config template engine
configViewEngine(app);
//config static file
app.use("/test", webrouter);

//test connection
//create connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "hoang1505",
  database: "hoang",
});

//read database
connection.query("select * from Users u", function (err, results, fields) {
  console.log(">>>>results=", results);
  console.log(">>>>fields=", fields);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
