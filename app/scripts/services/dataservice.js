(function(){
'use strict';

angular.module('feedbackFrontApp')
  .factory('DataService', DataService);

  DataService.$inject['VoteService'];

  function DataService(VoteService) {

    /* jshint ignore:start */
    var teams = [
      {
        'name' : 'offer',
        'data' : [
          {
          'appName' : 'First',
          'happy' : [],
          'unhappy' : []
        },
          {
            'appName' : 'RangePlan',
            'happy' : [],
            'unhappy' : []
          },
          {
            'appName' : 'Spid',
            'happy' : [],
            'unhappy' : []
          }]
      },
      {
        'name' : 'merchandising',
        'data' : [
          {
            'appName' : 'First',
            'happy' : [],
            'unhappy' : []
          },
          {
            'appName' : 'Second',
            'happy' : [],
            'unhappy' : []
          },
          {
            'appName' : 'Third',
            'happy' : [],
            'unhappy' : []
          }]
      }
    ];
    /* jshint ignore:end */

    function initData (){
      teams.forEach(function(team){
        team.data.forEach(function(app){
          app.happy = VoteService.getAllHappyVotesFromApp(app.appName);
          app.unhappy = VoteService.getAllUnhappyVotesFromApp(app.appName);
        });
      });
    }

    initData();


    return {
      getTeams: function () {
        return teams;
      },
      getCurrentAppsFromTeamName: function(activeTeamName){
        var apps = [];

        teams.forEach(function(team){
          if(team.name === activeTeamName){
            team.data.forEach(function(app){
              apps.push(app);
            });
          }
        });

        return apps;
      }
    };
  };

})();
