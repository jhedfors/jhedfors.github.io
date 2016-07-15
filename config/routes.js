var myApp = angular.module('myApp',['ngRoute','ngMessages'])
myApp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'partials/main.html'
    })
    .when('/test',{
      templateUrl:'http://www.google.com'
    })
    .otherwise({
      redirectTo:'/'
    })
})
