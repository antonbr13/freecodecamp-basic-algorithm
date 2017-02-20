/*jshint esversion: 6 */


angular.module('basicAlgorithms')


.controller('basicCtrl', function(basicService) {

var vm = this;


// Reverse a string --------------------------------------------------

   // Using String Method '.reverse()' -------------------------------
        vm.output1 = '';

        vm.reverse1 = function() {
           if (vm.input1) {
              vm.output1 = vm.input1.split('').reverse().join('');
           }
           else if (!vm.input1) {
              vm.output1 = '';
           }

       };



   // Using a For Loop -------------------------------

      vm.output2 = '';

      vm.reverse2 = function() {

         if(vm.input2 && vm.output2 || vm.input2) {
            vm.output2 = '';
            for (let i = vm.input2.length - 1; i >= 0; i--) {
               vm.output2 += vm.input2[i];
            }
         }

         else if (!vm.input2) {
            vm.output2 = '';
         }
      };



   // Using a For Loop -------------------------------

      vm.output3 = '';

      vm.reverse3 = function () {


         let newStr = vm.input3.split('');
         let answer = [];

         for (let i = newStr.length-1; i >= 0; i--) {
            answer.push( newStr[i]);
         }

         vm.output3 = answer.join('');



      };






























});
