'use strict';
var app = angular.module("complus")
    .factory('httpInterceptors', ['$q', '$rootScope', function ($q, $rootScope) {
        return {
            responseError: function (response) {
                var status = response.status;

                switch (status) {
                    case 302:

                        break;
                    case 400:

                        break;
                    case 404:

                        break;
                    case 500:

                        break;
                }

                return $q.reject(response);
            }
        }
    }])
.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
}])
.config(["$routeProvider", "$httpProvider", "$locationProvider", function ($routeProvider, $httpProvider, $locationProvider) {
    var baseUrl = "app/areas/";

    $routeProvider
        .when("/", {
            template: "",
            controller: "PageController"
        })
        .when("/backup-disaster-recovery", {
            templateUrl: baseUrl + "backup.html",
            controller: "PageController"
        })
        .when("/hosted-solutions", {
            templateUrl: baseUrl + "hostedsolutions.html",
            controller: "PageController"
        })
        .when("/infrastructure", {
            templateUrl: baseUrl + "infrastructure.html",
            controller: "PageController"
        })
        .when("/managed-it-services", {
            templateUrl: baseUrl + "managedit.html",
            controller: "PageController"
        })
        .when("/project-management-consultancy", {
            templateUrl: baseUrl + "projectmanagement.html",
            controller: "PageController"
        })
        .when("/testimonials", {
            templateUrl: baseUrl + "testimonials.html",
            controller: "PageController"
        })
        .otherwise({ redirectTo: "/" });

    $httpProvider.interceptors.push('httpInterceptors');

    $locationProvider.html5Mode(true);
}]);