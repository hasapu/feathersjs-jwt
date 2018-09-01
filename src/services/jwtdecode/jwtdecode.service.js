// Initializes the `jwtdecode` service on path `/jwtdecode`
const createService = require('feathers-memory');
const hooks = require('./jwtdecode.hooks');

module.exports = function (app) {

  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('api/jwtdecode', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/jwtdecode');

  service.hooks(hooks);
};
