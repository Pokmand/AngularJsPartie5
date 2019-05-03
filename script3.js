var formApp = angular.module('formApp', [])
    .controller('formController', ['$scope', '$window', function($scope, $window) {
      $scope.doGreeting = function(greeting) {
        $window.alert(greeting);
      };
    }])
