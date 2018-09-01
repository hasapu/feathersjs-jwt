var jwt = require('json-web-token');

module.exports = async function(data) {
  const jwtEncode = new Promise((resolve, reject) => {
    jwt.encode(data.jwtKey, data, function(err, token) {
      if(err) {
        err.code = 403;
        reject(err);
      }
      resolve(token);
    })
  });

  return jwtEncode
  .then(res => { return res })
  .catch(err => { return err });
}
