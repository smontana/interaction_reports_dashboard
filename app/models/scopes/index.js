var _ = require('lodash');

module.exports = function(models) {
  require('fs').readdirSync(__dirname + '/').forEach(function(file) {
    if (file.match(/\.js$/) && file !== 'index.js') {
      var name = file.replace('.js', '');

      var sequelize_name = _.upperFirst(_.camelCase(name));

      var model_ref = require(require('path').join(__dirname, name))(sequelize_name, models);
      // model_ref.model.sync();
      models[model_ref.model_name] = model_ref.model;
    }
  });

  return models;
}
