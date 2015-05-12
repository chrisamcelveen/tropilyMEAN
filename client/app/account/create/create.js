'use strict';

angular.module('stackdApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create', {
        url: '/create',
        templateUrl: 'app/account/create/create.html',
        controller: 'CreateCtrl'
      });
  });