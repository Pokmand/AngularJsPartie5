/**
 * Déclaration de l'application formApp pour utiliser ngMessages et ngRoute :
 */
var formApp = angular.module('formApp', ['ngMessages', 'ngRoute']);
formApp.config(['$routeProvider', function($routeProvider) {
  // Système de routage
  $routeProvider
    .when('/', {
      templateUrl: 'form.html',
      controller: 'formCtrl'
    })
  .when('/info', {
    templateUrl: 'info.html',
    controller: 'formCtrl'
  });
}]);
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
  };
}]);
