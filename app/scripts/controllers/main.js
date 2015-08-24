(function () {
  'use strict';

  angular
    .module('feedbackFrontApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'DataService'];

  function MainCtrl($scope, DataService) {
    $scope.teams = DataService.getTeams();
    $scope.activeTeam = '';
    $scope.currentApp = '';
    $scope.currentHappyVotes = [];
    $scope.currentUnhappyVotes = [];
    $scope.apps = [];

    $scope.teamSelected = teamSelected;
    $scope.modifyCurrentApp = modifyCurrentApp;

    function teamSelected(name) {
      $scope.activeTeam = name;
      $scope.apps = DataService.getCurrentAppsFromTeamName($scope.activeTeam)
      $scope.currentApp = $scope.apps[0].appName;
      $scope.currentHappyVotes = DataService.getCurrentVotesFromAppNameAndTeamAndType($scope.activeTeam, $scope.currentApp, 'happy');
      $scope.currentUnhappyVotes = DataService.getCurrentVotesFromAppNameAndTeamAndType($scope.activeTeam, $scope.currentApp, 'unhappy');

    };

    function modifyCurrentApp(appName) {
      $scope.currentApp = appName;
      $scope.currentVotes = DataService.getCurrentVotesFromAppNameAndTeamAndType($scope.activeTeam, $scope.currentApp, 'happy');
      $scope.currentUnhappyVotes = DataService.getCurrentVotesFromAppNameAndTeamAndType($scope.activeTeam, $scope.currentApp, 'unhappy');
    };
  }
})();
