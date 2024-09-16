const { getHashes } = require("crypto");
const connection = require("../config/database");
const { json } = require("express");

const getHomepage = (req, res) => {
  let users = [];
  connection.query("select * from Users u", function (err, results, fields) {
    users = results;
    // res.json(users);
    res.send(JSON.stringify(users));
    console.log(">>>>results=", results);
  });
};
const getABC = (req, res) => {
  res.send("check!");
};
const getHoang = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomepage,
  getABC,
  getHoang,
};
