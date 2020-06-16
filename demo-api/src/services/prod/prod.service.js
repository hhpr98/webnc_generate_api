// Initializes the `prod` service on path `/prod`
const { Prod } = require('./prod.class');
const createModel = require('../../models/prod.model');
const hooks = require('./prod.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/prod', new Prod(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('prod');

  service.hooks(hooks);
};
