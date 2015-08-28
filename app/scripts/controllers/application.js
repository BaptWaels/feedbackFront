(function () {
  'use strict';

  angular
    .module('feedbackFrontApp')
    .controller('ApplicationController', ApplicationController);

  ApplicationController.$inject = ['$scope'];

  function ApplicationController($scope) {

    //MODIFY HERE TO SHOW COMMENTS
    $scope.showPie = true;
    $scope.showLine = false;
    $scope.showVote = false;

    $scope.toggleCommentMode = toggleCommentMode;
    $scope.togglePieMode = togglePieMode;
    $scope.toggleLineMode = toggleLineMode;

    function toggleCommentMode (showUnhappy) {
      $scope.showPie = false;
      $scope.showLine = false;
      $scope.showVote = true;
      $scope.showUnhappy = showUnhappy;
    }

    function togglePieMode () {
      $scope.showPie = true;
      $scope.showVote = false;
      $scope.showLine = false;
    }

    function toggleLineMode () {
      $scope.showPie = false;
      $scope.showVote = false;
      $scope.showLine = true;
    }
  }

})();
