(function () {
  'use strict';

  angular
    .module('feedbackFrontApp')
    .controller('ApplicationController', ApplicationController);

  ApplicationController.$inject = ['$scope'];

  function ApplicationController($scope) {

    //MODIFY HERE TO SHOW COMMENTS
    $scope.showRatio = true;
    $scope.toggleCommentMode = toggleCommentMode;
    $scope.toggleRatioMode = toggleRatioMode;

    function toggleCommentMode (showUnhappy) {
      $scope.showRatio = false;
      $scope.showUnhappy = showUnhappy;
    }

    function toggleRatioMode () {
      $scope.showRatio = true;
    }
  }

})();
