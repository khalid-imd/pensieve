var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pensieve",
});

db.connect(function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("connected to database");
  }
});

module.exports = db;
