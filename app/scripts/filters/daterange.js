(function(){
  'use strict';


angular
  .module('feedbackFrontApp')
  .filter('daterange', daterange);

  function daterange () { // jshint ignore:line
    return function(items, from, to)
    {
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

  }

})();
