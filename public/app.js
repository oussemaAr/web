/**
 * Created by oussemaar on 24.08.16.
 */

var app = angular.module('app',[ 'ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            template :'<home></home>'
        })
        .otherwise('/home')
});
