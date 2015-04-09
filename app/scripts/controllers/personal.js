/**
 * Created by webdev on 4/1/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:PesronalCtrl
 * @description
 * # PesronalCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('PersonalCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data/personal.json')
      .success(function(file) {
        $scope.title = file.title;
        $scope.text = file.text;
        $scope.email= file.email;
    });

  });
