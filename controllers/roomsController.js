hotelApp.controller("roomsController", [
  "$scope", 'homeService',
  function($scope, homeService){

    $scope.detailInfo = homeService.detailInfo;

    
  }]);