// Initializes the `bysdb1` service on path `/bysdb-1`
const { Bysdb1 } = require('./bysdb1.class');
const createModel = require('../../models/bysdb1.model');
const hooks = require('./bysdb1.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/bysdb-1', new Bysdb1(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('bysdb-1');

  service.hooks(hooks);
};
