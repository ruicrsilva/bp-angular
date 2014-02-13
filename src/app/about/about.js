/**
 * Module: app.about
 */
angular.module( 'app.about', [
  'ngAnimate'
])

/**
 * Configuration
 */
.config( function config( $stateProvider ) {

  $stateProvider.state( 'about', {
    url: '/about',
    parent: 'layout-main',
    views: {
      content: {
        controller: 'AboutCtrl',
        templateUrl: 'app/about/about.tpl.html'
      }
    }
  });

})

/**
 * Controllers
 */
.controller( 'AboutCtrl', function( $scope, titleService ) {

  titleService.setTitle( 'About' );

});