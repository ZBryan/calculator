'use strict';

require('angular/angular');

var app = angular.module('calcApp', []);

app.controller('calcController', ['$scope', function($scope) {
  $scope.readOut = '';
}]);
