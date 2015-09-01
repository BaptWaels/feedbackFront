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
    $q.all([$scope.stats]).then(fillData);

    function fillData(data) {
      $scope.data = [];
      $scope.data.happyRatio = [];
      $scope.data.unhappyRatio = [];
      $scope.data.categories = [];

      data[0].forEach(function(stat){
        if(stat.appName === 'first'){
          $scope.data.happyRatio.push(stat.happyRatio * 100);
          $scope.data.unhappyRatio.push(stat.unhappyRatio * 100);
          $scope.data.categories.push(stat.weekNumber);
        }
      });

      drawChart();
    }

    var drawChart = function () {
      $scope.lineConfig = {
        title: {
          text: '',
          x: -20 //center
        },
        options: {
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
          data: $scope.data.happyRatio
        },
        {
          name: 'unhappyRatio',
          data: $scope.data.unhappyRatio
        }
        ]
      };
    };
  }
})();

