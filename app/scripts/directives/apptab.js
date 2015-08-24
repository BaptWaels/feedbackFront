(function () {

  'use strict';

  angular.module('feedbackFrontApp')
    .controller('AppTabController', AppTabController)
    .directive('appTab', function () {
      return {
        templateUrl: 'views/app-tab.html',
        scope: {
          happy: '=',
          unhappy: '=',
          toggleCommentMode: '&'
        },
        restrict: 'E',
        controller: AppTabController
      }
    });

  AppTabController.$inject = ['$scope', '$q'];

  function AppTabController($scope, $q) {

    $q.all([$scope.happy, $scope.unhappy]).then(function (data) {
      $scope.happyNb = data[0].length;
      $scope.unhappyNb = data[1].length;

      var nbVotes = $scope.happyNb + $scope.unhappyNb;

      $scope.happyRatio = ($scope.happyNb / nbVotes) * 100;
      $scope.unhappyRatio = ($scope.unhappyNb / nbVotes) * 100;

      reloadChart();
    });

    var reloadChart = function () {
      $scope.pieConfig = {
        chartType: 'pie',
        options: {

          chart: {
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false

          },
          exporting: {
            enabled: false
          }
        },
        title: {
          text: ''
        },
        tooltip: {
          pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: true
            }
          }
        },
        series: [{
          name: 'Percentage',
          colorByPoint: true,
          data: [{
            name: 'Happy',
            color: '#66CC99',
            y: $scope.happyRatio,
            sliced: true
          }, {
            name: 'Unhappy',
            color: '#D24D57',
            y: $scope.unhappyRatio
          }]
        }]
      };
    };

    reloadChart();
  };

})();
