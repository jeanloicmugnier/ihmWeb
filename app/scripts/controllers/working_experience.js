/**
 * Created by webdev on 4/1/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:Working_experienceCtrl
 * @description
 * # Working_experienceCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('Working_experienceCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data/working_experience.json')
      .success(function(work) {
        $scope.title = work.title;
        $scope.title1 = work.title1;
        $scope.internships = work.internships;
      });


  });
