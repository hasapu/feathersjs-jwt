var jwt = require('json-web-token');

module.exports = async function(data) {
  const dataDecode = new Promise((resolve, reject) => {
    jwt.decode(data.jwtKey, data.token, function (err, decodedPayload, decodedHeader) {
      if (err) reject(err);
      resolve(decodedPayload);
    });
  });

  return dataDecode
  .then(res => { return res })
  .catch(err => {return err });
}
