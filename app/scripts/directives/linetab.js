(function(){
'use strict';

  angular
    .module('feedbackFrontApp')
    .controller('LineTabController', LineTabController)
    .directive('lineTab', lineTab);

  LineTabController.$inject = ['$scope', '$q'];

  function lineTab() {
    return {
      templateUrl: 'views/line-tab.html',
      scope: {
        toggleCommentMode: '&',
        toggleRatioMode: '&'
      },
      restrict: 'E',
      controller: LineTabController
    };
  };

  function LineTabController($scope, $q) {

  }

})();

