(function() {
  'use strict';

  angular
    .module('hcardBuilder')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
