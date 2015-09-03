(function(){
'use strict';

  angular
    .module('feedbackFrontApp')
    .controller('LineTabController', LineTabController)
    .directive('lineTab', lineTab);

  LineTabController.$inject = ['$scope', '$q'];

  function lineTab() { // jshint ignore:line
    return {
      templateUrl: 'views/line-tab.html',
      scope: {
        toggleCommentMode: '&',
        togglePieMode: '&',
        stats: '=',
        currentApp: '='
      },
      restrict: 'E',
      controller: LineTabController
    };
  }

  function LineTabController($scope, $q) { // jshint ignore:line
    $scope.data = [];
    $scope.data.happyRatioWeekly = [];
    $scope.data.unhappyRatioWeekly = [];
    $scope.data.happyRatio = [];
    $scope.data.categories = [];

    $q.all([$scope.stats]).then(fillData);
    function fillData(data) {
      data[0].forEach(function(stat){
        if(stat.appName.toLowerCase() === $scope.currentApp.toLowerCase()){
          $scope.data.happyRatioWeekly.push(stat.happyRatioWeekly * 100);
          $scope.data.unhappyRatioWeekly.push(stat.unhappyRatioWeekly * 100);
          $scope.data.happyRatio.push(stat.happyRatio * 100);
          $scope.data.categories.push(stat.weekNumber);
        }
      });

      drawCharts();
    }

    var drawCharts = function () {
      $scope.columnConfig = {
        title: {
          text: 'Vote Ratio for a given Week',
          x: -20 //center
        },
        options: {
          chart:{
            type: 'column'
          },
          exporting: {
            enabled: false
          }
        },
        xAxis: {
          title : {
            text: 'Week Number'
          },
          categories: $scope.data.categories
        },
        yAxis: {
          max: 100,
          title: {
            text: 'Votes Ratio (%)'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        series: [{
          name: 'happyRatio',
          data: $scope.data.happyRatioWeekly,
          color: '#66CC99'
        },
        {
          name: 'unhappyRatio',
          data: $scope.data.unhappyRatioWeekly,
          color: '#D24D57'
        }
        ]
      };


      $scope.lineConfig = {
        title: {
          text: 'Evolution of Happy Ratio by Week',
          x: -20 //center
        },
        options: {
          chart:{
            type: 'line'
          },
          exporting: {
            enabled: false
          }
        },
        xAxis: {
          title : {
            text: 'Week Number'
          },
          categories: $scope.data.categories
        },
        yAxis: {
          title: {
            text: 'Votes Ratio (%)'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        series: [{
          name: 'happyRatio',
          data: $scope.data.happyRatio,
          color: '#66CC99'
        }
        ]
      };
    };

    drawCharts();
  }
})();

