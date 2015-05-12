'use strict';

angular.module('stackdApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('featured', {
        url: '/featured',
        templateUrl: 'app/featured/featured.html',
        controller: 'FeaturedCtrl'
      });
  });