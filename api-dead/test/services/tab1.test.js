const app = require('../../src/app');

describe('\'tab1\' service', () => {
  it('registered the service', () => {
    const service = app.service('tab1');
    expect(service).toBeTruthy();
  });
});
