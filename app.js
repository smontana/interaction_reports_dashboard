require('./config/environment')();

var express = require('express');
var app = express();
app.locals._ = require('lodash');
app.locals.moment = require('moment');

require('./lib/logging')(app);
require('./lib/request_parsing')(app);
require('./lib/static')(app);
require('./lib/views')(app);

var db_connection = require('./db/connection');
var models = require('./app/models')(db_connection);

models = require('./lib/relationships')(models);
models = require('./lib/scopes')(models);

// console.log(models);
// models.User.scope('supervisor').findAll().then(function(supervisors){
//   console.log(supervisors);
// });

require('./lib/routing')(app, db_connection, models);
require('./lib/errors')(app); // error handles must load after app routes

module.exports = app;
