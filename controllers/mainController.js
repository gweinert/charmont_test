hotelApp.controller("homeController", [
  "$scope", 'homeService',
  function($scope, homeService){
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
      $scope.bgImgArr1 = 'http://localhost:3000'+data.SLIDES[0].IMAGE;
      // $scope.pageTitle = data.
    }

    function setNavBar(data){
      $scope.navLinks = data.NAVIGATION;
    }

    

    $scope.changeBgImg = function(page){
      console.log(page);
    };



  }]);