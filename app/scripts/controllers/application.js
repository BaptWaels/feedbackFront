(function() {
'use strict';

angular
  .module('feedbackFrontApp')
  .controller('ApplicationController', ApplicationController)
  .constant('ApplicationControllerResolver', ApplicationControllerResolver());

  ApplicationController.$inject = ['$scope', 'DataService', 'allData'];

  function ApplicationController ($scope, DataService, allData) {

  }

  function ApplicationControllerResolver() {
    return {
      allData: ['DataService', function (DataService) {
        return ;
      }]
    }
  }

})();
