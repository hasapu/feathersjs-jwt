const jwtencode = require('./jwtencode/jwtencode.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(jwtencode);
};
