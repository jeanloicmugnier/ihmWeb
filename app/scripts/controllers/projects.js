/**
 * Created by webdev on 4/1/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('ProjectsCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data/projects.json')
      .success(function(projects) {
        $scope.tit = projects.file[0].titles;
        $scope.projects= projects.file[0].titles[0].title;
        $scope.java= projects.file[0].titles[1].title1;
        $scope.js = projects.file[0].titles[2].title2;
        $scope.gest = projects.file[0].titles[3].title3;
        $scope.projectJavaList = projects.file[1].Projects[0].info[0].Java;
        $scope.projectJsList = projects.file[1].Projects[0].info[1].JavaScript;
        $scope.projectGestList = projects.file[1].Projects[1].gestionDeProjet;

        });

  });
