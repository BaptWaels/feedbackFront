'use strict';

/**
 * @ngdoc overview
 * @name feedbackFrontApp
 * @description
 * # feedbackFrontApp
 *
 * Main module of the application.
 */
angular
  .module('feedbackFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngMaterial',
    'highcharts-ng'
  ])

  .config(feedbackFrontAppConfig);

  feedbackFrontAppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function feedbackFrontAppConfig ($stateProvider, $urlRouterProvider) { // jshint ignore:line
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url: '/',
            templateUrl: 'views/main.html'
      })

      .state('app', {
        url: '/app',
        views:{
          '': {
            templateUrl: 'views/application.html',
            controller: 'ApplicationController'
          }
        }
      });
  }
