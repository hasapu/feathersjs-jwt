const jwtencode = require('./jwtencode/jwtencode.service.js');
const jwtdecode = require('./jwtdecode/jwtdecode.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(jwtencode);
  app.configure(jwtdecode);
};
