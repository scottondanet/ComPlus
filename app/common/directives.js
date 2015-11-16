'use strict';
var app = angular.module("complus")
.directive('scrollTo', function () {
    return {
        restrict: 'A',
        scope: {
          target: '&'  
        },
        link: function (scope, elem, attr) {
            elem.on('click', function () {
                $('html, body').stop().animate({
                    scrollTop: $('#' + attr.scrollTo).offset().top - 0
                }, 400);
            });
        }
    }
});