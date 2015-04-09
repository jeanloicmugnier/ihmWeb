'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/personal.html',
        controller: 'PersonalCtrl'
      })
      /*.when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })*/
      .when('/personal',{
        templateUrl:'views/personal.html',
        controller:'PersonalCtrl'
      })
      .when('/projects',{
        templateUrl:'views/projects.html',
        controller:'ProjectsCtrl'
      })
      .when('/studies',{
        templateUrl:'views/studies.html',
        controller:'StudiesCtrl'
      })
      .when('/working_experience',{
        templateUrl:'views/working_experience.html',
        controller:'Working_experienceCtrl'
      })
      .when('/hobbies',{
        templateUrl:'views/hobbies.html',
        controller:'HobbiesCtrl'
      })
      .otherwise({
        redirectTo: '/personal'
      });
  });
