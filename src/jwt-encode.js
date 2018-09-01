var jwt = require('json-web-token');

module.exports = async function(data) {
  const jwtEncode = new Promise((resolve, reject) => {
    jwt.encode('exdocs-secret', data, function(err, token) {
      resolve(token);
    })
  });

  return jwtEncode
  .then(res => { return res })
  .catch(err => console.log('error', err));
}
