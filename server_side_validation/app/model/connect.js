// const dbConfig = require("../config/config.js");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Qwerty@1234",
  database: "test",
});
connection.connect(function (err) {
  if (err) {
    console.log("error in connecting...");
  } else {
    console.log("connected successfully!");
  }
});

module.exports = connection;