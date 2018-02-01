var cityRepo = require('./api/repos/cityRepo');

var City = function(data) {
  this.id = data.id;
  this.city = data.city;
  this.lat = data.lat;
  this.lng = data.lng;
  this.population = data.population;
  this.country = data.country;
  this.iso2 = data.iso2;
  this.iso3 = data.iso3;
  this.province = data.province;
}

//With prototypes we avoid to create the functions everytime we make a new instance of the object
City.prototype.listAllCities = function() {
  cityRepo.listAllCities();
}
//
// City.prototype.update = function() {
//   console.log("Updating city: " + this.name);
//   Repo.update(this);
// }
//
// City.prototype.delete = function() {
//   console.log("Deleting city: " + this.name);
//   Repo.delete(this);
// }
//
//
// module.exports = City;
