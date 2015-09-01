(function () {
  'use strict';

  angular
    .module('feedbackFrontApp')
    .controller('ApplicationController', ApplicationController);

  ApplicationController.$inject = ['$scope', 'StatisticsService'];

  function ApplicationController($scope, StatisticsService) { // jshint ignore:line

    //MODIFY HERE TO SHOW COMMENTS
    $scope.showPie = true;
    $scope.showLine = false;
    $scope.showVote = false;

    $scope.toggleCommentMode = toggleCommentMode;
    $scope.togglePieMode = togglePieMode;
    $scope.toggleLineMode = toggleLineMode;

    function toggleCommentMode (showUnhappy) { // jshint ignore:line
      $scope.showPie = false;
      $scope.showLine = false;
      $scope.showVote = true;
      $scope.showUnhappy = showUnhappy;
    }

    function togglePieMode () { // jshint ignore:line
      $scope.showPie = true;
      $scope.showVote = false;
      $scope.showLine = false;
    }

    function toggleLineMode () { // jshint ignore:line
      $scope.showPie = false;
      $scope.showVote = false;
      $scope.showLine = true;

      if($scope.votesStats == undefined){
        $scope.votesStats = StatisticsService.getAllStatsFromYear('2015');
      }
    }
  }

})();
