'use strict';

describe('Directive: speedDial', function () {

  // load the directive's module
  beforeEach(module('feedbackFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<speed-dial></speed-dial>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the speedDial directive');
  }));
});
