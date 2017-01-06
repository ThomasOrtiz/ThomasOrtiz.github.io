(function() {
    'use strict';
    
    baseCtrl.$inject = [
        '$scope'
    ];

    function baseCtrl($scope) {
        var vm = this;
        vm.locals = $scope.locals = {};
        
        // Scope controller functions
        vm.locals.convertBase = convertBase;
        vm.locals.binChange   = binChange;
        vm.locals.octChange   = octChange;
        vm.locals.decChange   = decChange;
        vm.locals.hexChange   = hexChange;
        vm.locals.resetFields = resetFields;
        
        // Scope variables
        vm.locals.dec;
        vm.locals.bin;
        vm.locals.hex = 0+'x';
        vm.locals.oct;
        
        function resetFields(){ 
            vm.locals.dec = '';
            vm.locals.bin = '';
            vm.locals.hex = 0+'x';
            vm.locals.oct = '';
        }
        
        function convertBase(num, baseFrom, baseTo){
            var i_Num = parseInt(num, baseFrom);
            return parseInt( i_Num ).toString(baseTo);
        };
        
        function binChange(){
            vm.locals.oct = ''; 
            vm.locals.dec = ''; 
            vm.locals.hex = 0+'x';  
            
            if( !isNaN( parseInt(vm.locals.bin),2) ){
                vm.locals.oct =        convertBase(vm.locals.bin, 2,  8); 
                vm.locals.dec =        convertBase(vm.locals.bin, 2, 10); 
                vm.locals.hex = '0x' + convertBase(vm.locals.bin, 2, 16).toUpperCase();  
            }
        };
        
        function octChange(){
            vm.locals.bin = ''; 
            vm.locals.dec = ''; 
            vm.locals.hex = 0+'x';
            
            if( !isNaN( parseInt(vm.locals.oct),8) ){
                vm.locals.bin =        convertBase(vm.locals.oct, 8,  2); 
                vm.locals.dec =        convertBase(vm.locals.oct, 8, 10); 
                vm.locals.hex = '0x' + convertBase(vm.locals.oct, 8, 16).toUpperCase(); 
            }
        };
        
        function decChange(){
            vm.locals.oct = ''; 
            vm.locals.bin = ''; 
            vm.locals.hex = '';
            
            if( !isNaN( parseInt(vm.locals.dec),10) ){
                vm.locals.bin =        convertBase(vm.locals.dec, 10,  2); 
                vm.locals.oct =        convertBase(vm.locals.dec, 10,  8);  
                vm.locals.hex = '0x' + convertBase(vm.locals.dec, 10, 16).toUpperCase(); 
            }
        };
        
        function hexChange(){
            vm.locals.oct = ''; 
            vm.locals.dec = ''; 
            vm.locals.bin = '';
            
            if( !isNaN( parseInt(vm.locals.hex),16) ){                
                vm.locals.bin = convertBase(vm.locals.hex, 16,  2);
                vm.locals.oct = convertBase(vm.locals.hex, 16,  8); 
                vm.locals.dec = convertBase(vm.locals.hex, 16, 10);  
            }
        };
        
    }
    
    angular.module('myPage')
        .controller('baseCtrl', baseCtrl);

})();