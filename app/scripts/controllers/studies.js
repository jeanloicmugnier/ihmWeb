/**
 * Created by webdev on 4/1/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:StudiesCtrl
 * @description
 * # StudiesCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('StudiesCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $http.get('data/studies.json')
          .success(function(studies) {
            $scope.title = studies.title;
            $scope.names = studies.namelist;
          });



  });
