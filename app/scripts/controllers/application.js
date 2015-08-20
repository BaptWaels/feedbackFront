(function() {
'use strict';

angular
  .module('feedbackFrontApp')
  .controller('ApplicationController', ApplicationController)
  .constant('ApplicationControllerResolver', ApplicationControllerResolver());

  ApplicationController.$inject = ['$scope', 'allData'];

  function ApplicationController ($scope, allData) {
  }

  function ApplicationControllerResolver() {
    return {
      allData: ['DataService', function (DataService) {
        return DataService.initData();
      }]
    }
  }

})();
