import angular from 'angular';

import App from 'src/app';
import 'jquery';
import AppController from 'src/AppController';
window.jsonpCallback  = function() {
}
/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */


var UQLibrary = angular.module("UQLibrary", [App.name]);
var initInjector = angular.injector(["ng"]);
var $http = initInjector.get("$http");

function fetchData() {
    return $http.jsonp('https://app.library.uq.edu.au/api/v2/library_hours?callback=JSON_CALLBACK')
        .success(function(data) {
            sessionStorage.setItem('libraryData', JSON.stringify(data.locations));
        }).error(function(data) {
            alert(data);
            console.log('Error: ' + data);
        });                  

}

function fetchAvailability() {
    return $.ajax({
          url: "https://app.library.uq.edu.au/api/computer_availability",
          dataType: "jsonp",
          jsonpCallback: "jsonpCallback"
    }).done((result) => {
            sessionStorage.setItem('availability', JSON.stringify(result));
    });
}

function bootstrapApplication() {
    angular.element(document).ready(function() {
        UQLibrary.controller('AppController', AppController);
        angular.bootstrap(document, ["UQLibrary"]);
    });
}

fetchData().then(fetchAvailability().then(bootstrapApplication));