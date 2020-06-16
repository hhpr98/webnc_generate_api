const users = require('./users/users.service.js');
const bysdb1 = require('./bysdb1/bysdb1.service.js');
const branch = require('./branch/branch.service.js');
const prod = require('./prod/prod.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(bysdb1);
  app.configure(branch);
  app.configure(prod);
};
