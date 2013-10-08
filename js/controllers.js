'use strict';

/* Controllers */

function SkillListCtrl($scope, $http) {
  $http.get('data/skills.json').success(function(data) {
    $scope.skills = data;
  });

  $scope.orderProp = 'id';
}

angular.module('personalApp', []).controller('SkillListCtrl', ['$scope', '$http',SkillListCtrl]);