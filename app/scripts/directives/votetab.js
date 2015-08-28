(function () {

  'use strict';

  angular.module('feedbackFrontApp')
    .controller('VoteTabController', VoteTabController)
    .directive('voteTab', function () {
      return {
        templateUrl: 'views/vote-tab.html',
        scope: {
          happy: '=',
          unhappy: '=',
          showPie: '=',
          showUnhappy: '=',
          togglePieMode: '&',
          toggleLineMode: '&'
        },
        restrict: 'E',
        controller: VoteTabController
      }
    });

  VoteTabController.$inject = ['$scope', '$q'];

  function VoteTabController($scope, $q) {

    $scope.dateTo = new Date();
    $scope.dateFrom = initDateFrom();
    $scope.happyVotesWithComment = [];
    $scope.unhappyVotesWithComment = [];

    $scope.formatDate = formatDate;
    $q.all([$scope.happy, $scope.unhappy]).then(removeVotesWithEmptyComments);

    $scope.$watch('showUnhappy', function(){
      $scope.type = ($scope.showUnhappy)?'unhappy':'happy';
    });

    function removeVotesWithEmptyComments(data) {
      $scope.votesWithComment = [];

      data[0].forEach(function(vote){
        if(vote.comment != undefined){
          $scope.happyVotesWithComment.push(vote);
        }
      });

      data[1].forEach(function(vote){
        if(vote.comment != undefined){
          $scope.unhappyVotesWithComment.push(vote);
        }
      });
    };

    function formatDate (date){
      var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      var dateObj = new Date(date);

      return dateObj.getDate() + " " + monthNames[dateObj.getMonth()] + " " + dateObj.getFullYear();

    };

    function initDateFrom(){
      var d = new Date();
      d.setDate(d.getDate() - 7);
      return d;
    };
  };
})();
