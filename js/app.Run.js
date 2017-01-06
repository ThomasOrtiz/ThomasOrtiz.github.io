(function() {
    'use strict';

    SomeRun.$inject = [
        '$rootScope',
        '$route',
        '$location'
    ];

    function SomeRun($rootScope, $route, $location) {

        // When the route is successfully changed this is called
        $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title; // set the WebPages title to the route specified title

        // Update which nav-bar button is selected
        try {
            document.getElementById("projectsNavButton").className = "";
            document.getElementById("homeNavButton").className = "";
            document.getElementById("calandarNavButton").className = "";
            document.getElementById("resumeNavButton").className = "";
            document.getElementById("baseConvertNavButton").className = "";

            if( $location.url() === '/home'){
                document.getElementById("homeNavButton").className = "bb-navbar-active";
            } else if( $location.url() === '/projects') {
                document.getElementById("projectsNavButton").className = "bb-navbar-active";
            } else if( $location.url() ===  '/baseConverter' ){
                document.getElementById("baseConvertNavButton").className = "bb-navbar-active"; 
            } else if( $location.url() === '/calandar'){
                document.getElementById("calandarNavButton").className = "bb-navbar-active"; 
            } else if( $location.url() === '/resume'){
                document.getElementById("resumeNavButton").className = "bb-navbar-active";
            } else {
                document.getElementById("homeNavButton").className = "bb-navbar-active";
            }
        } catch(e){
            console.log("Known Exception - Initial DOM Elements Not Loaded");
        }

    })};

    angular.module('myPage')
        .run(SomeRun);

}());