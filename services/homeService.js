hotelApp.factory("homeService",
  ['$http',
  
  function($http){
    var obj = {};
    obj.mainInfo = {};
    obj.pageInfo = {};
    obj.backgroundImgs = {};


    obj.getInfo = function(){
      return $http.get('json/home.json');
    };

    obj.getNav = function(){
      return $http.get('json/navigation.json');
    };

    obj.getDetail = function(){
      return $http.get('json/detail.json').then( function( response){
        buildDetailPageInfo(response);
        console.log("success-detail");
      }), (function(){
        console.log("error");
      });
    };

    obj.getInfo().then( function( response){
        buildHomePageInfo(response);
        console.log("success-info");
      }), (function(){
        console.log("error");
      });

    obj.getDetail();

    var buildHomePageInfo = function(data){
      obj.pageInfo["main.home"] = data.data;
    };

    var buildDetailPageInfo = function(data){
      obj.pageInfo["main.room"] = data.data;
      obj.detailInfo = data.data;
    };


    return obj;
  
}]);