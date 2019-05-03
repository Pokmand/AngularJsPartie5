angular.module('windowExample', [])
    .controller('ExampleController', ['$scope', '$window', function($scope, $window) {
      $scope.doGreeting = function(greeting) {
        $window.alert(greeting);
      };
    }]);
