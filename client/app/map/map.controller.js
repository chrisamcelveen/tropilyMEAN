'use strict';

angular.module('stackdApp')
  .controller('MapCtrl', ['$scope', function ($scope) {
      $scope.jqvmapWorld = {
          map: 'world_en',
          backgroundColor: 'transparent',
          color: '#f5f5f5',
          hoverOpacity: 0.7,
          selectedColor: '#1880c4',
          enableZoom: true,
          showTooltip: true,
          values: sample_data,
          scaleColors: ['#90c2e3', '#4697ce'],
          normalizeFunction: 'polynomial'
      };
  }])
  .directive('jqvmap', ['$timeout', function ($timeout) {
    return {
      restrict: 'A',
      scope: {
        options: '=',
      },
      link: function (scope, element, attr) {
        $timeout( function () {
          element.vectorMap(scope.options);
          scope.$on('$destroy', function () {
            element.data().mapObject.applyTransform = function() {}; // prevent acting on nonexistent object
          });
        });
      }
    }
  }])