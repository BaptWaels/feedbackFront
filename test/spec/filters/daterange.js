'use strict';

describe('Filter: daterange', function () {

  // load the filter's module
  beforeEach(module('feedbackFrontApp'));

  // initialize a new instance of the filter before each test
  var daterange;
  beforeEach(inject(function ($filter) {
    daterange = $filter('daterange');
  }));

  it('should return the input prefixed with "daterange filter:"', function () {
    var text = 'angularjs';
    expect(daterange(text)).toBe('daterange filter: ' + text);
  });

});
