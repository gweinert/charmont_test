
hotelApp = angular.module("hotelApp", ['ui.router']);

hotelApp.config( function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider

  .state("home", {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeController'
  })

  .state('room_detail', {
    url:'/room_detail',
    templateUrl: 'templates/room_detail.html'
  });
});