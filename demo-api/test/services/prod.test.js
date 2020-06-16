const app = require('../../src/app');

describe('\'prod\' service', () => {
  it('registered the service', () => {
    const service = app.service('prod');
    expect(service).toBeTruthy();
  });
});
