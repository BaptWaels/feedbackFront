(function () {
  'use strict';

  angular
    .module('feedbackFrontApp')
    .controller('ApplicationController', ApplicationController);

  ApplicationController.$inject = ['$scope'];

  function ApplicationController($scope) {

    //MODIFY HERE TO SHOW COMMENTS
    $scope.showRatio = true;
    $scope.showLine = false;
    $scope.showVote = false;

    $scope.toggleCommentMode = toggleCommentMode;
    $scope.toggleRatioMode = toggleRatioMode;
    $scope.toggleLineMode = toggleLineMode;

    function toggleCommentMode (showUnhappy) {
      $scope.showRatio = false;
      $scope.showLine = false;
      $scope.showVote = true;
      $scope.showUnhappy = showUnhappy;
    }

    function toggleRatioMode () {
      $scope.showRatio = true;
      $scope.showVote = false;
      $scope.showLine = false;
    }

    function toggleLineMode () {
      $scope.showRatio = false;
      $scope.showVote = false;
      $scope.showLine = true;
    }
  }

})();
