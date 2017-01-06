(function() {
    'use strict';

    SomeConfig.$inject = [
        '$routeProvider'
    ];

    function SomeConfig($routeProvider) {
        $routeProvider.

        when('/home', {
            templateUrl: 'templates/home.html',
            title: 'Thomas Ortiz - Home'
        }).

        when('/projects', {
            templateUrl: 'templates/projects.html',
            title: 'Thomas Ortiz - Projects'
        }).
        
        when('/calandar', {
            templateUrl: 'templates/calandar.html',
            title: 'Thomas Ortiz - My Calandar'
        }).
        
        when('/resume', {
            templateUrl: 'templates/resume.html',
            title: 'Thomas Ortiz - Resume'
        }).

        when('/baseConverter', {
            templateUrl: 'templates/baseConverter.html',
            title: 'Thomas Ortiz - Base Converter',
            controller : 'baseCtrl'
        }).

        otherwise({
            redirectTo: '/home'
        });
    }
    
    angular.module('myPage')
       .config(SomeConfig);

})();