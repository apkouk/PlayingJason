var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


 var cityRepo = require('./api/repos/cityRepo');
 cityRepo.connect;
// cityRepo.listAllCities();

var routes = require('./api/routes/cityRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
