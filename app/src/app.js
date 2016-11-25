// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-resource';
import 'angular-route';
import 'angular-messages';
import Library from 'src/library/Library';

export default angular.module( 'starter-app', [ 'ngMaterial', Library.name, 'ngResource','ngRoute' ] )
  .config(($mdIconProvider, $mdThemingProvider, $routeProvider) => {

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
    $routeProvider.when('/library-detail/:ID',{
        template: '<library-details></library-details>'
    });
    $mdIconProvider.icon("menu", "./assets/svg/menu.svg", 24);

  });
