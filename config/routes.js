var myApp = angular.module('myApp',['ngRoute','ngMessages'])
myApp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'partials/main.html'
    })
    .when('/projects',{
      templateUrl:'partials/projects.html'
    })
    .otherwise({
      redirectTo:'/'
    })
})
