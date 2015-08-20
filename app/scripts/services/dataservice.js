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

    teams.forEach(function(team){
      team.data.forEach(function(app){
        app.happy = VoteService.getAllHappyVotesFromApp(app.appName);
        app.unhappy = VoteService.getAllUnhappyVotesFromApp(app.appName);
      });
    });

    var activeTeam = 'offer';

    return {
      initData : function(){
        return ;
      },
      getTeams: function () {
        return teams;
      },
      getCurrentTeam: function(){
        return activeTeam;
      },
      setCurrentTeam: function(team){
        activeTeam = team;
      },
      getCurrentApps: function(){
        var apps = [];

        teams.forEach(function(team){
          if(team.name === activeTeam){
            team.data.forEach(function(app){
              apps.push(app);
            });
          }
        });
        console.log(apps);
        return apps;
      }
    };
  };

})();
