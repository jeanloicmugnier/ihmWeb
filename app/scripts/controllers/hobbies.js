/**
 * Created by webdev on 4/1/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:HobbiesCtrl
 * @description
 * # HobbiesCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('HobbiesCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data/hobbies.json')
      .success(function(hobbies) {
        $scope.title = hobbies.title;

        $scope.sport = hobbies.name[0];
        $scope.nameSports= hobbies.name[0].sports;
        $scope.countries = hobbies.name[1].travels;
      });

  });
