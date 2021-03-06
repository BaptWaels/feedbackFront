(function () {
  'use strict';

  angular.module('feedbackFrontApp')
    .factory('VoteService', VoteService);

  VoteService.$inject = ['$http', 'EnvService']; // jshint ignore:line

  function VoteService($http, EnvService) { // jshint ignore:line


    return {
      getAllVotes: function () {
        return $http({
          method: 'GET',
          url: EnvService.getFeedbackHost() + '/votes',
          headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      getAllHappyVotes: function () {
        return $http({
          method: 'GET',
          url: EnvService.getFeedbackHost() + '/votes/happy',
          headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      getAllUnhappyVotes: function () {
        return $http({
          method: 'GET',
          url: EnvService.getFeedbackHost() + '/votes/unhappy',
          headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      getAllVotesFromApp: function (app) {
        return $http({
          method: 'GET',
          url: EnvService.getFeedbackHost() + '/votes/' + app,
          headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      getAllHappyVotesFromApp: function (app) {
        return $http({
          method: 'GET',
          url: EnvService.getFeedbackHost() + '/votes/' + app + '/happy',
          headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      getAllUnhappyVotesFromApp: function (app) {
        return $http({
          method: 'GET',
          url: EnvService.getFeedbackHost() + '/votes/' + app + '/unhappy',
          headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Accept-Language' : 'en-US,en;q=0.8,fr;q=0.6,de;q=0.4',
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.data;
        });
      }
    };
  }

})();
