const express = require("express");
const configViewEngine = require("./config/viewEngine");
require("dotenv").config();
const connection = require("./config/database");

const webrouter = require("./routes/web");
const app = express();
const port = process.env.port;

//config template engine
configViewEngine(app);
//config static file
app.use("/test", webrouter);

//read database
connection.query("select * from Users u", function (err, results, fields) {
  console.log(">>>>results=", results);
  // console.log(">>>>fields=", fields);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
