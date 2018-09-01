const assert = require('assert');
const app = require('../../src/app');

describe('\'jwtencode\' service', () => {
  it('registered the service', () => {
    const service = app.service('jwtencode');

    assert.ok(service, 'Registered the service');
  });
});
