/**
 * Module: app.home
 */
angular.module( 'app.home', [
  'ngAnimate'
])

/**
 * Configuration
 */
.config( function config( $stateProvider ) {

  $stateProvider.state( 'home', {
    url: '/home',
    parent: 'layout-main',
    views: {
      content: {
        controller: 'HomeCtrl',
        templateUrl: 'app/home/home.tpl.html'
      }
    }
  });

})

/**
 * Controllers
 */
.controller( 'HomeCtrl', function( $scope, titleService ) {

  titleService.setTitle( 'Home' );

});