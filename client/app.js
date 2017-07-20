/* our angular app modularize, with config */
var app = angular.module('app', ['ngRoute']);
/* configuration for angular route */
app.config(function($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: '/partials/index.html',
            controller: 'indexController'
        })
        .when('/schedule', {
            templateUrl: '/partials/schedule.html',
            controller: 'scheduleController'
        })
        .otherwise({
            redirectTo: '/index'
        });
});
