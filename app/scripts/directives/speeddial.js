'use strict';

/**
 * @ngdoc directive
 * @name feedbackFrontApp.directive:speedDial
 * @description
 * # speedDial
 */
angular.module('feedbackFrontApp')
  .directive('speedDial', function () {
    return {
      templateUrl: 'views/speed-dial.html',
      scope:{
        firstButton: '&',
        secondButton: '&'
      },
      restrict: 'E'
    };
  });
