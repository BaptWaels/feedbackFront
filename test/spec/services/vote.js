'use strict';

describe('Service: vote', function () {

  // load the service's module
  beforeEach(module('feedbackFrontApp'));

  // instantiate service
  var vote;
  beforeEach(inject(function (_vote_) {
    vote = _vote_;
  }));

  it('should do something', function () {
    expect(!!vote).toBe(true);
  });

});
