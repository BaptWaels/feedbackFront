(function() {
  'use strict';

  angular
    .module('feedbackFrontApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'DataService'];

  function MainCtrl($scope, DataService) {
    $scope.teams = DataService.getTeams();
    $scope.activeTeam = '';
    $scope.currentApp = '';
    $scope.apps = [];

    $scope.teamSelected = function (name) {
      $scope.activeTeam = name;
      $scope.apps = DataService.getCurrentAppsFromTeamName($scope.activeTeam)
      $scope.currentApp = $scope.apps[0].appName;
    };

    $scope.modifyCurrentApp = function(appName){
      $scope.currentApp = appName;
    };
  }
})();
