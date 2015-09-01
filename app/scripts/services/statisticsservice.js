(function(){

'use strict';

angular
  .module('feedbackFrontApp')
  .factory('StatisticsService', StatisticsService);

  StatisticsService.$inject = ['$http', 'EnvService']; // jshint ignore:line

  function StatisticsService($http, EnvService) { // jshint ignore:line
    return {
      getAllStatsFromYear: function(year){
        return $http({
          method: 'GET',
          url: EnvService.getFeedbackHost() + '/statistics/votes/' + year,
          headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      getAllStatsFromYearAndWeekNumber: function(year, weekNumber){
        return $http({
          method: 'GET',
          url: EnvService.getFeedbackHost() + '/statistics/votes/' + year + '/' + weekNumber,
          headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.data;
        });
      },
      getAllStatsFromYearWeekNumberAndAppname: function(year, weekNumber, appName){
        return $http({
          method: 'GET',
          url: EnvService.getFeedbackHost() + '/statistics/votes/' + year + '/' + weekNumber + '/' + appName,
          headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          return response.data;
        });
      }
    };
  }
})();
