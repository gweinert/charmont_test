hotelApp.controller("homeController", [
  "$scope", 'homeService', '$state',
  function($scope, homeService, $state){

    homeService.getNav()
    .success(function(data){
      setNavBar(data);
    })
    .error(function(){
      console.log("failure");
    });
    

    function setNavBar(data){
      $scope.navLinks = data.NAVIGATION;
    }

    
    $scope.pageInfo = homeService.pageInfo;
    $scope.mainInfo = $scope.pageInfo["main.home"];
    $scope.bgImg = homeService.backgroundImgs;
    $scope.pageTitle = homeService.pageTitles;
    $scope.pageDescription = homeService.pageDescriptions;
    $scope.pageKeywords = homeService.pageKeywords;



  }]);