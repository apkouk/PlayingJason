'use strict';

module.exports = function(app) {
var city = require('../controllers/cityController');
  // city Routes
  app.route('/city')
    .get(city.listAllCities);
    // .post(city.createCity);

  // app.route('/city/:cityId')
  //   .get(city.getById)
  //   .put(city.updateCity)
  //   .delete(city.deleteCity);
};
