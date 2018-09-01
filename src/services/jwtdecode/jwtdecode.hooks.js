const jwtDencode = require('../../jwt-decode');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      async (context) => {
        context.data = await jwtDencode(context.data);
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      async (context) => {
        delete context.result.jwtKey;
        context.result = context.data;
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
