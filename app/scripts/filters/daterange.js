'use strict';

/**
 * @ngdoc filter
 * @name feedbackFrontApp.filter:daterange
 * @function
 * @description
 * # daterange
 * Filter in the feedbackFrontApp.
 */
angular.module('feedbackFrontApp')
  .filter('daterange', function () {
    return function(items, from, to)
    {
      console.log(items);
      var dateFrom = new Date(from);
      var dateTo = new Date(to);

      var result = [];

      for (var i=0; i < items.length; i++){
        var itemDate = new Date(items[i].date);

        if (itemDate > dateFrom && itemDate < dateTo)  {
          result.push(items[i]);
        }
      }
      return result;
    };

  });
