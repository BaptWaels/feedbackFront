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
        stats: '='
      },
      restrict: 'E',
      controller: LineTabController
    };
  }

  function LineTabController($scope, $q) { // jshint ignore:line
    $scope.data = [];
    $scope.data.happyRatio = [];
    $scope.data.unhappyRatio = [];
    $scope.data.categories = [];

    $q.all([$scope.stats]).then(fillData);
    function fillData(data) {
      data[0].forEach(function(stat){
        $scope.data.happyRatio.push(stat.happyRatio * 100);
        $scope.data.unhappyRatio.push(stat.unhappyRatio * 100);
        $scope.data.categories.push(stat.weekNumber);
        console.log(stat.weekNumber);
      });

      drawChart();
    }

    var drawChart = function () {
      $scope.lineConfig = {
        title: {
          text: 'Votes Ratio by Week',
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
          title: {
            text: 'Votes Ratio (%)'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        tooltip: {
          valueSuffix: '°C'
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
        },
        {
          name: 'unhappyRatio',
          data: $scope.data.unhappyRatio,
          color: '#D24D57'
        }
        ]
      };
    };

    drawChart();
  }
})();

