'use strict';

angular.module('stackdApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('plans', {
        url: '/plans',
        templateUrl: 'app/plans/plans.html',
        controller: 'PlansCtrl'
      });
  });