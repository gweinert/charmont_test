hotelApp.controller("homeController", [
  "$scope", 'homeService', '$state',
  function($scope, homeService, $state){
    $scope.mainInfo = null;
    $scope.bgImgArr1 = null;
    $scope.pageTitle = null;
    
    homeService.getInfo()
    .success(function(data){
      setHomePageInfo(data);
    })
    .error(function(){
      console.log("failure");
    });

    homeService.getNav()
    .success(function(data){
      setNavBar(data);
    })
    .error(function(){
      console.log("failure");
    });
    
    function setHomePageInfo(data){
      $scope.mainInfo = data;
    }

    function setNavBar(data){
      $scope.navLinks = data.NAVIGATION;
      console.log(homeService.pageInfo)
    }

    
    $scope.pageInfo = homeService.pageInfo;
    $scope.bgImg = homeService.backgroundImgs;
    $scope.pageTitle = homeService.pageTitles;
    $scope.pageDescription = homeService.pageDescriptions;
    $scope.pageKeywords = homeService.pageKeywords;



  }]);