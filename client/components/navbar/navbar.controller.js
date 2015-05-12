'use strict';

angular.module('stackdApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/home'
    },{
      'title': 'Featured',
      'link': '/featured'
    },{
      'title': 'About',
      'link': '/about'
    },{
      'title': 'Broker',
      'link': '/plans'
    },{
      'title': 'Blog',
      'link': '/blog'
    },{
      'title': 'Contact',
      'link': '/contact'
    },];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });