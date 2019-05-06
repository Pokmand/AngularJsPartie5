var formApp = angular.module('formApp', ['ngMessages']);

formApp.controller('formCtrl', ['$scope',function($scope){
$scope.showfunction = function() {
  $scope.userarray = [{
    Name : $scope.Name,
    email : $scope.email,
    topic : $scope.topic,
    textarea : $scope.text,
  }];
}}]);
