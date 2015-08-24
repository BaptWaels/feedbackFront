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
          showRatio: '='
        },
        restrict: 'E',
        controller: VoteTabController
      }
    });

  VoteTabController.$inject = ['$scope', '$q'];

  function VoteTabController($scope, $q) {
    $scope.showUnhappy = false;
    $scope.happyVotesWithComment = [];
    $scope.unhappyVotesWithComment = [];
    $scope.formatDate = formatDate;
    $scope.changeType = changeType;
    $scope.type = 'happy';

    $q.all([$scope.happy, $scope.unhappy]).then(function (data) {
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
    });

    function formatDate (date){
      var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      var dateObj = new Date(date);

      return dateObj.getDate() + " " + monthNames[dateObj.getMonth()] + " " + dateObj.getFullYear();

    };

    function changeType(){
      if($scope.showUnhappy){
        $scope.type = 'unhappy';
      }else{
        $scope.type = 'happy';
      }
    }

  };
})();
