hotelApp.controller("roomsController", [
  "$scope", 'homeService',
  function($scope, homeService){

    $scope.detailInfo = homeService.detailInfo;

    $scope.jqueryScrollbarOptions = {
        "onScroll":function(y, x){
            if(y.scroll == y.maxScroll){
                alert('Scrolled to bottom');
            }
        }
    };
    
  }]);