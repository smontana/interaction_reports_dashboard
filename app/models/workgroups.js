module.exports = function(db_connection) {
  var Sequelize = require('sequelize');
  var singular_model_name = 'WorkGroup';
  var plural_model_name = 'WorkGroups';

  var model = db_connection.define(singular_model_name, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: Sequelize.UUID
    },
    workgroup: {
      type: Sequelize.STRING
    },
    solution_id: {
      type: Sequelize.INTEGER
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
