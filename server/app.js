const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "pensieve",
});

db.connect((err) => {
  if (err) throw err;
  console.log("connected to mysql");
});

//create database
app.get("/create", (req, res) => {
  let sql = "CREATE DATABASE pensieve";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("<h1>Succesfuly create database</h1>");
  });
});

//create table
app.get("/create-table", (req, res) => {
  let sql = `CREATE TABLE data (id int AUTO_INCREMENT, deviceid VARCHAR(225), devicetype VARCHAR(225), timestamp VARCHAR(225), location VARCHAR(225), PRIMARY KEY (id) )`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("<h1>Succesfuly create table</h1>");
  });
});

//create table
app.get("/insert-data", (req, res) => {
  let data = {
    deviceid: "D-1571",
    devicetype: "Assets",
    timestamp: "31-08-2022 10:35",
    location: "L3",
  };
  let sql = `INSERT INTO data SET ?`;
  let query = db.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("<h1>Succesfuly insert data to table</h1>");
  });
});

//get data
app.get("/get-data", (req, res) => {
  let sql = `SELECT * FROM data`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );
  next();
});
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
