(function () {
  'use strict';

  angular
    .module('myapp.sandbox')
    .controller('myapp.sandbox.controller', Controller);

  Controller.$inject = [
    '$scope',
    '$interval',
    '$routeParams',
    'c8yDevices',
    'c8yAlert',
    'c8yMeasurements'
  ];

  function Controller($scope, $interval, $routeParams, c8yDevices, c8yAlert, c8yMeasurements) {
    

  }
}());