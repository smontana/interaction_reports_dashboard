module.exports = function(db_connection) {
  var Sequelize = require('sequelize');
  var singular_model_name = 'Interaction';
  var plural_model_name = 'Interactions';

  var model = db_connection.define(singular_model_name, {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    uuid: {
      type: Sequelize.UUID
    },
    interaction_type_id: {
      type: Sequelize.INTEGER
    },
    interaction_date: {
      type: Sequelize.DATEONLY
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    offered: {
      type: Sequelize.INTEGER
    },
    answered: {
      type: Sequelize.INTEGER
    },
    talk_time_in_ss: {
      type: Sequelize.INTEGER
    },
    hold_time_in_ss: {
      type: Sequelize.INTEGER
    },
    acw_time_in_ss: {
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
