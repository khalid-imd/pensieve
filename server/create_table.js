const db = require("mysql");

const sql = `CREATE TABLE customers
(
    id int NOT NULL AUTO_INCERMENT,
    device_id int NOT NULL AUTO_INCERMENT,
    device_type VARCHAR (255),
    timestamp VARCHAR(255),
    PRIMARY KEY (id)
)`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("table created");
});
