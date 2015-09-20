hotelApp.factory("homeService",
  ['$http',
  
  function($http){
    var obj = {};
    obj.mainInfo = {};
    obj.pageInfo = {};
    obj.backgroundImg = {};

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

    var buildDetailPageInfo = function(data){
      console.log(data);
      obj.backgroundImg = data.SLIDES[0].IMAGE;
    };

    return obj;
  
}]);