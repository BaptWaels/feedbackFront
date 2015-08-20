(function() {
  'use strict';

  angular
    .module('feedbackFrontApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'DataService'];

  function MainCtrl($scope, DataService) {
    $scope.teams = DataService.getTeams();
    $scope.activeTeam = DataService.getCurrentTeam();

    $scope.teamSelected = function (name) {
      DataService.setCurrentTeam(name);
      $scope.apps = DataService.getCurrentApps();
    };
  }

})();
