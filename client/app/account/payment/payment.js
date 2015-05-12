'use strict';

angular.module('stackdApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('payment', {
        url: '/payment',
        templateUrl: 'app/account/payment/payment.html',
        controller: 'PaymentCtrl'
      });
  });