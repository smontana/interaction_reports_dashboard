var Sequelize = require('sequelize');
var _ = require('lodash');

var CoolHand = {
  Model: function (singular_model_name,
                   plural_model_name,
                   fields,
                   db_connection) {

    this.singular_model_name = singular_model_name;
    this.plural_model_name = plural_model_name;
    this.fields = fields;
    this.eval_fields();
    this.db_connection = db_connection;

    this.default_sequelize_options = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      freezeTableName: true,
      tableName: this.plural_model_name
    }

    return this.db_connection.define({this.fields, this.default_sequelize_options});
  }
}

CoolHand.Model.prototype.eval_fields = function() {
  this.fields = _.map(this.fields, function(field) {
    field.type = eval(field.type);
    return field;
  });
}

module.exports = CoolHand.Model;
