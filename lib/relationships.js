module.exports = function(models) {
  _ = require('lodash');
  var User = models.User;
  var UserRole = models.UserRole;
  var Solution = models.Solution;
  var Interaction = models.Interaction;
  var InteractionType = models.InteractionType;
  var WorkGroup = models.WorkGroup;

  // still receiving fk error on NEW db creation
  // resolved by running npm start twice

  User.belongsTo(Solution, {foreignKey: 'solution_id'});
  User.belongsTo(WorkGroup, {foreignKey: 'workgroup_id'});
  User.belongsTo(UserRole, {as: 'Role', foreignKey: 'user_role_id'});
  User.hasMany(Interaction);

  Interaction.belongsTo(InteractionType, {foreignKey: 'interaction_type_id'});
  
  WorkGroup.belongsTo(Solution);

  // User.hasOne(User, {as: 'UserSupervisor', foreignKey: 'supervisor_id', constraints: false});

  _.each(models, function(model) { model.sync() });
  return(models);
}
