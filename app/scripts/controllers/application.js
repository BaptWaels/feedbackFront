(function () {
  'use strict';

  angular
    .module('feedbackFrontApp')
    .controller('ApplicationController', ApplicationController)
    .constant('ApplicationControllerResolver', ApplicationControllerResolver());

  ApplicationController.$inject = ['$scope', 'DataService', 'allData'];

  function ApplicationController($scope, DataService, allData) {

    //MODIFY HERE TO SHOW COMMENTS
    $scope.showRatio = false;
    $scope.toggleCommentMode = toggleCommentMode;
    $scope.toggleRatioMode = toggleRatioMode;

    function toggleCommentMode () {
      $scope.showRatio = false;
    }

    function toggleRatioMode () {
      $scope.showRatio = true;
    }
  }

  function ApplicationControllerResolver() {
    return {
      allData: ['DataService', function (DataService) {
        return;
      }]
    }
  }

})();
