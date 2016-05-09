module.exports = function(db_connection) {
  var Sequelize = require('sequelize');
  var singular_model_name = 'InteractionType';
  var plural_model_name = 'InteractionTypes';

  var model = db_connection.define(singular_model_name, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    interaction_type: {
      type: Sequelize.STRING
    }
  },{
    // TODO: make these args default for all models
    timestamps: true,
    freezeTableName: true,
    tableName: plural_model_name,
    underscored: true
  });

  return {
    model: model,
    model_name: singular_model_name
  }
}
