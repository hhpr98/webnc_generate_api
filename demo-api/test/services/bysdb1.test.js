const app = require('../../src/app');

describe('\'bysdb1\' service', () => {
  it('registered the service', () => {
    const service = app.service('bysdb1');
    expect(service).toBeTruthy();
  });
});
