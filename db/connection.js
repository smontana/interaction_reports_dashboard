require('../config/environment')();
var Sequelize = require('sequelize');

var host = process.env.DB_HOST;
var db_name = process.env.DB_NAME;
var user = process.env.DB_USER;
var password = process.env.DB_PASSWORD;
var port = process.env.DB_PORT;

var connection = new Sequelize(db_name, user, password, {
  host: host,
  dialect: 'mysql',
  port: port
});

module.exports = connection;
