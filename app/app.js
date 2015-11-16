'use strict';
var app = angular.module("complus", [
    "ngRoute"
]);

app.controller("appController", ['$rootScope', '$scope', function ($rootScope, $scope) {

}])
.controller("PageController", ["$scope", function ($scope) {
    $scope.message = "Hello!";

        $scope.showMenu = function() {
            return true;
        };
    }]);