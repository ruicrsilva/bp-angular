/**
 * Module: common.layout
 *
 * Stores all the top level layout states, and corresponding templates/controllers
 */
angular.module( 'common.layout', [
  'ui.router'
] )

/**
 * Configuration
 */
.config( function ( $stateProvider ) {

  $stateProvider.state( 'layout-main', {
    views: {
      layout: {
        controller: 'AppCtrl',
        templateUrl: 'common/layout/main.tpl.html'
      }
    }
  });

} );