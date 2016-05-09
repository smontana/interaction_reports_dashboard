module.exports = function(db_connection) {  
  var Sequelize = require('sequelize');
  var singular_model_name = 'User';
  var plural_model_name = 'Users';

  var model = db_connection.define(singular_model_name, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: Sequelize.UUID
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    tenure: {
      type: Sequelize.DATEONLY
    },
    supervisor_id: {
      type: Sequelize.INTEGER
    },
    solution_id: {
      type: Sequelize.INTEGER
    },
    workgroup_id: {
      type: Sequelize.INTEGER
    },
    user_role_id: {
      type: Sequelize.INTEGER
    }
  },{
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
