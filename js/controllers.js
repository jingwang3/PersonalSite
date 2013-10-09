'use strict';

/* Controllers */

function SkillListCtrl($scope, $http) {
  $http.get('data/skills.json').success(function(data) {
    $scope.skills = data;
  });


  
}

angular.module('personalApp', []).controller('SkillListCtrl', ['$scope', '$http',ExpListCtrl]);

function ExpListCtrl($scope, $http) {
  $http.get('data/experiences.json').success(function(data) {
    $scope.exps = data;
    
  });
  $scope.orderProp = 'id';
}

angular.module('personalApp', []).controller('ExpListCtrl', ['$scope', '$http',ExpListCtrl]);

