'use strict';

describe('Service: EnvService', function () {

  // load the service's module
  beforeEach(module('feedbackFrontApp'));

  // instantiate service
  var EnvService;
  beforeEach(inject(function (_EnvService_) {
    EnvService = _EnvService_;
  }));

  it('should do something', function () {
    expect(!!EnvService).toBe(true);
  });

});
