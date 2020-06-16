// Initializes the `tab1` service on path `/tab1`
const { Tab1 } = require('./tab1.class');
const createModel = require('../../models/tab1.model');
const hooks = require('./tab1.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tab1', new Tab1(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tab1');

  service.hooks(hooks);
};
