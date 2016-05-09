var env_path = '../../config/environment/dev.env';
require('dotenv').config({path: env_path});

var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var _ = require('lodash');

require('../logging')(app);
require('../request_parsing')(app);
require('../static')(app);
require('../views')(app);

var host = process.env.DB_HOST;
var db_name = process.env.DB_NAME;
var user = process.env.DB_USER;
var password = process.env.DB_PASSWORD;
var port = process.env.DB_PORT;

var db_connection = new Sequelize(db_name, user, password, {
  host: host,
  dialect: 'mysql',
  port: port
});

var models = require('../../app/models')(db_connection);

models = require('../relationships')(models);

var filename = 'InteractionTypes.csv';
var path = '../import_files/' + filename;

// csvtojson ------
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

converter.fromFile(path, function (err, results) {
  if(err) {
    console.log(err);
  }

  models.InteractionType.bulkCreate(results).then(function() { 
    return models.InteractionType.findAll();
  }).then(function(interaction_types) {
    console.log(interaction_types);
  });
});

require('../errors')(app); // error handles must load after app routes

module.exports = app;
