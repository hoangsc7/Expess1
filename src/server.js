const express = require("express");
const configViewEngine = require("./config/viewEngine");
require("dotenv").config();
const connection = require("./config/database");

const webrouter = require("./routes/web");
const app = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);
//config static file
app.use("/", webrouter);

//read database
// connection.query("select * from Users u", function (err, results, fields) {
//   console.log(">>>>results=", results);
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
