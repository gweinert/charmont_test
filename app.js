
hotelApp = angular.module("hotelApp", ['ui.router']);

hotelApp.config( function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("main/home");

  $stateProvider

  .state("main", {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'homeController',
  })

  .state('main.home', {
    url:'/home',
    templateUrl: 'templates/home.html',
  })

  .state('main.room', {
    url: '/rooms',
    templateUrl: 'templates/rooms.html'
  });
});

//   .state("home", {
//     url: '/home',
//     templateUrl: 'templates/home.html',
//     controller: 'homeController'
//   })

//   .state('room_detail', {
//     url:'/room_detail',
//     templateUrl: 'templates/room_detail.html'
//   });
// });

hotelApp.run(function($rootScope){
  
  $rootScope.$on("$stateChangeError", console.log.bind(console));
  
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      console.log("state changed!");
        $rootScope.title = current.$$route.title;
        console.log(current.$$route.title);
    });
});

