(function() {
  'use strict';

  angular
    .module('hcardBuilder')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.getNameId = getNameId;
    vm.getName = getName;
    vm.getStreetAddress = getStreetAddress;

    function getNameId() {
      if(vm.givenName && vm.surname) {
        return "hcard-" + vm.givenName + '-' + vm.surname;
      }
      if(vm.givenName && !vm.surname) {
        return "hcard-" + vm.givenName;
      }
      if(!vm.givenName && vm.surname) {
        return "hcard-" + vm.surname;
      }
    }

    function getName() {
      if (vm.givenName && vm.surname) {
        return vm.givenName + ' ' + vm.surname;
      }
      if (vm.givenName && !vm.surname) {
        return vm.givenName;
      }
      if (!vm.givenName && vm.surname) {
        return vm.surname;
      }
      return " ";
    }

    function getStreetAddress() {
      if(vm.houseName && vm.street) {
        return vm.houseName + ' ' + vm.street;
      }
      if(vm.houseName && !vm.street) {
        return vm.houseName;
      }
      if(!vm.houseName && vm.street) {
        return vm.street;
      }
    }
  }
})();
