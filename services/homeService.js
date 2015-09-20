hotelApp.factory("homeService",
  ['$http',
  
  function($http){
    var obj = {};
    obj.mainInfo = {};
    obj.pageInfo = {};
    obj.backgroundImgs = {};


    obj.getInfo = function(){
      return $http.get('home.json');
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
      obj.pageInfo["main.home"] = data.data;
      // obj.backgroundImgs["main.home"] = data.data.SLIDES[0].IMAGE;
      // obj.pageInfo.bg["main.home"] = data.data.SLIDES[0].IMAGE;
      // obj.pageInfo.title["main.home"] = data.data.PAGETITLE;
      // obj.pageInfo.descr["main.home"] = data.data.META_DESCRIPTION;
      // obj.pageInfo.keywords["main.home"] = data.data.META_KEYWORDS;
      console.log(obj.backgroundImgs);
    };

    var buildDetailPageInfo = function(data){
      obj.pageInfo["main.room"] = data.data;
      // obj.backgroundImgs["main.room"] = data.data.SLIDES[0].IMAGE;
      obj.detailInfo = data.data;
    };


    return obj;
  
}]);