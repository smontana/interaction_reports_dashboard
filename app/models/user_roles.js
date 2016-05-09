module.exports = function(db_connection) {
  var Sequelize = require('sequelize');
  var singular_model_name = 'UserRole';
  var plural_model_name = 'UserRoles';

  var model = db_connection.define(singular_model_name, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    role: {
      type: Sequelize.STRING
    }
  },{
    // TODO: make these args default for all models
    timestamps: true,
    freezeTableName: true,
    tableName: plural_model_name,
    underscored: true
  });

  // console.log(model);

  // model.prototype.SUPERVISOR_ID = 1;

  return {
    model: model,
    model_name: singular_model_name
  }
}
