'use strict';

describe('Service: StatisticsService', function () {

  // load the service's module
  beforeEach(module('feedbackFrontApp'));

  // instantiate service
  var StatisticsService;
  beforeEach(inject(function (_StatisticsService_) {
    StatisticsService = _StatisticsService_;
  }));

  it('should do something', function () {
    expect(!!StatisticsService).toBe(true);
  });

});
