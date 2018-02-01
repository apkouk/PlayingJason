'use strict'
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "prosatest.cbsusnwx2m1m.us-east-2.rds.amazonaws.com",
  user: "prosa",
  password: "prosa!!2018",
  database: "playingJson",
  port: 3306
});


 function connect() {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
  });
};

var listAllCities = function() {
  connect();
  console.log("Connected from listAllCities!");
  con.query("select * from cities", function(err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result));
    return "caquityas";
  });
};
