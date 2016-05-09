var dotenv = require('dotenv').config();

module.exports = function() {
  console.log('Enviroment...')
  console.log(process.env.ENV);
  var env_path = "./config/environment/" + process.env.ENV + ".env";
  console.log("Loading environment from: " + env_path);
  var dotenv = require('dotenv');
  dotenv.config({path: env_path});
  dotenv.load();
}
