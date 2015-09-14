'use strict';

var pbApp = angular.module("PhoneBookApp", ['ngRoute']);

pbApp.config(function ($routeProvider) {
    // Routes
    $routeProvider.when("/", {
        templateUrl: 'pages/home.html',
        controller: "homeCtrl"
    }).when("/add", {
        templateUrl: 'pages/add.html',
        controller: "addCtrl"
    }).when("/about", {
        templateUrl: 'pages/about.html',
        controller: "aboutCtrl"
    }).otherwise({
        redirectTo: "/"
    });

});


