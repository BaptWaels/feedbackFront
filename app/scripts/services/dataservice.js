(function () {
  'use strict';

  angular.module('feedbackFrontApp')
    .factory('DataService', DataService);

  DataService.$inject = ['VoteService']; // jshint ignore:line

  function DataService(VoteService) { // jshint ignore:line

    /* jshint ignore:start */
    var teams = [
      {
        'name': 'offer',
        'data': [
          {
            'appName': 'First',
            'happy': [],
            'unhappy': []
          },
          {
            'appName': 'RangePlan',
            'happy': [],
            'unhappy': []
          },
          {
            'appName': 'Spid',
            'happy': [],
            'unhappy': []
          }]
      }
    ];
    /* jshint ignore:end */

    function initData(){
      teams.forEach(function (team) { // jshint ignore:line
        team.data.forEach(function (app) {
          app.happy = VoteService.getAllHappyVotesFromApp(app.appName);
          app.unhappy = VoteService.getAllUnhappyVotesFromApp(app.appName);
        });
      });
    }

    initData();

    function getTeamIndexFromName(teamName){
      for (var i = 0; i < teams.length; i++) { // jshint ignore:line
        if(teams[i].name.toLowerCase() === teamName.toLowerCase()){ // jshint ignore:line
          return i;
        }
      }
    }


    return {
      getTeams: function () {
        return teams; // jshint ignore:line
      },
      initData: initData,
      getCurrentAppsFromTeamName: function (activeTeamName) {
        var apps = [];

        teams.forEach(function (team) { // jshint ignore:line
          if (team.name === activeTeamName) {
            team.data.forEach(function (app) {
              apps.push(app);
            });
          }
        });

        return apps;
      },
      getCurrentVotesFromAppNameAndTeamAndType: function(activeTeamName, currentAppName, type){
        var data = teams[getTeamIndexFromName(activeTeamName)].data; // jshint ignore:line

        for (var i = 0; i < data.length; i++) {
          if(data[i].appName.toLowerCase() === currentAppName.toLowerCase()){
            return data[i][type];
          }
        }
      }
    };
  }

})();
