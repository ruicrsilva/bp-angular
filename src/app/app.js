/**
 * Module: app
 */
angular.module( 'app', [
  'app-templates',

  'ngTouch',
  'ngAnimate',
  'ui.router',
  'ui.route',

  'titleService',

  'common.layout',

  'app.home',
  'app.about'

] )

/**
 * Configuration
 */
.config( function ( $locationProvider, $stateProvider, $urlRouterProvider ) {

  $locationProvider.html5Mode( true ).hashPrefix( '!' );

  $urlRouterProvider.otherwise( '/home' );

} )

/**
 * Run
 */
.run( function ( titleService ) {

  titleService.setSuffix( ' | Boilerplate Phonegap Angular' );

} )

/**
 * Controllers
 */
.controller( 'AppCtrl', function AppCtrl( $scope ) {
} );