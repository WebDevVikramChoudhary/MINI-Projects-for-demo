var app = angular.module("mainModule", []);

app.controller("mainController", function ($scope, $http) {
  $scope.nome = "Valor Inicial";
  $scope.reset = function () {
    $scope.nome = "";
  };
});
