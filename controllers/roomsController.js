hotelApp.controller("roomsController", [
  "$scope", 'homeService',
  function($scope, homeService){
    $scope.detailInfo = null;

    $scope.

    homeService.getDetail()
    .success(function(data){
      setDetailPage(data);
    })
    .error(function(){
      console.log("fail to load details");
    });

    function setDetailPage(data){
      $scope.detailInfo = data;
    }
  }]);