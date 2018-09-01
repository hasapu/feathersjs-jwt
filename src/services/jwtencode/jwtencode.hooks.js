const jwtEncode = require('../../jwt-encode');


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      async (context) => {
        context.data.token = await jwtEncode(context.data);
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
        context.result = {};
        if(context.data.token.code===403) {
          context.result = context.data.token
        } else context.result.token = context.data.token
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
