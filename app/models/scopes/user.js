module.exports = function(model_name, models) {
  var klass = models[model_name];

  var scopes = {
    supervisor: {
      where: {
        user_role_id: 1
      }
    }
  }

  klass.options.scopes = scopes;
  
  return {
    model: klass,
    model_name: klass.singular_model_name
  }
}