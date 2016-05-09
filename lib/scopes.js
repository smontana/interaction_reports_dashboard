module.exports = function(models) {
  var models = require('../app/models/scopes')(models);
  return(models);
}
