module.exports = function(app, connection, models) {
  var app_routes = require('../app/routes/index')(connection, models);
  app.use('/', app_routes);
}
