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
        stats: '&'
      },
      restrict: 'E',
      controller: LineTabController
    };
  }

  function LineTabController($scope, $q) { // jshint ignore:line



    $q.all([$scope.stats]).then(function (data) {

      data[0].forEach(function(){
        //construct table with datas for highChart (deux tableaux, l'un avec happyRatio et l'autre sans)
      });


      reloadChart();
    });

    var reloadChart = function () {
      $scope.lineConfig = {
        title: {
          text: '',
          x: -20 //center
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
          title: {
            text: 'Temperature (°C)'
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
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        },
        {
          name: 'unhappyRatio',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }
        ]
      };
    };

    reloadChart();




  }
})();

