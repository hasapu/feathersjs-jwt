const assert = require('assert');
const app = require('../../src/app');

describe('\'jwtdecode\' service', () => {
  it('registered the service', () => {
    const service = app.service('jwtdecode');

    assert.ok(service, 'Registered the service');
  });
});
