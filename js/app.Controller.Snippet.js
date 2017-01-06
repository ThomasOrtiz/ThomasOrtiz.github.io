(function() {
    'use strict';
    
    pageCtrl.$inject = [
        '$scope'
    ];

    function pageCtrl($scope) {
        var vm = this; 
    }
    
    angular.module('myPage')
        .controller('pageCtrl', pageCtrl);

})();