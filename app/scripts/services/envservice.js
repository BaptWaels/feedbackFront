(function(){
'use strict';

angular.module('feedbackFrontApp')
  .factory('EnvService', EnvService);

  function EnvService() { // jshint ignore:line

    //Env courant de l'appli
    var currentEnv = 'integration';

    var feedbackApiHost = {
      'integration' : 'http://offer-integ.preprod.org/feedback-server-mvc/api/v1',
      'recette' : 'http://offer.preprod.org/feedback-server-mvc/api/v1',
      'production' : 'http://offer.subsidia.org/feedback-server-mvc/api/v1'
    };

    return {
      getFeedbackHost: function () {
        return feedbackApiHost[currentEnv];
      },
      getCurrentEnv: function(){
        return currentEnv;
      },
      setFeedbackHost: function(env){
        currentEnv = env;
      }
    };
  }

})();
