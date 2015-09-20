hotelApp.factory("homeService",
  ['$http',
  
  function($http){
    var obj = {};
    obj.mainInfo = {};
    obj.pageInfo = {};
    obj.backgroundImgs = {};

    obj.getInfo = function(){
      return $http.get('home.json')
    };

    obj.getNav = function(){
      return $http.get('navigation.json');
    };

    obj.getDetail = function(){
      return $http.get('detail.json').then( function( response){
        buildDetailPageInfo(response);
        console.log("success-detail");
      }), (function(){
        console.log("error");
      });
    };

    obj.getInfo().then( function( response){
      console.log("getting shit");
        buildHomePageInfo(response);
        console.log("success-info");
      }), (function(){
        console.log("error");
      });

    obj.getDetail();

    var buildHomePageInfo = function(data){
      obj.mainInfo = data;
      obj.backgroundImgs["main.home"] = data.data.SLIDES[0].IMAGE;
      console.log(obj.backgroundImgs);
    };

    var buildDetailPageInfo = function(data){
      console.log("adding bg room img");
      obj.backgroundImgs["main.room"] = data.data.SLIDES[0].IMAGE;
      obj.detailInfo = data.data;
    };


    return obj;
  
}]);