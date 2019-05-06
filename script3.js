var formApp = angular.module('formApp', ['ngMessages']);

formApp.controller('formCtrl', ['$scope', function($scope) {
  $scope.userarray = [];
  $scope.showfunction = function() {

    // ADD A NEW ELEMENT.
    $scope.userarray.push({
      Name: $scope.Name,
      email: $scope.email,
      topic: $scope.topic,
      textarea: $scope.textarea
    });
  }
}]);
