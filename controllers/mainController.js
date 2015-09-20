hotelApp.controller("homeController", [
  "$scope", 'homeService',
  function($scope, homeService){
    $scope.mainInfo = null;
    $scope.bgImgArr1 = null;
    
    homeService.getInfo()
    .success(function(data){
      setHomePageInfo(data);
      
      console.log($scope.mainInfo);
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
      $scope.bgImgArr1 = 'http://localhost:3000'+data.SLIDES[0].IMAGE;
    }

    function setNavBar(data){
      $scope.navLinks = data.NAVIGATION;
      console.log("navs");
      console.log(data)
    }



  }]);