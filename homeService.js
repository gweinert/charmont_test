hotelApp.factory("homeService",
  ['$http',
  
  function($http){
    var obj = {};
    obj.mainInfo = null;

  obj.getInfo = function(){
    return $http.get('home.json');
  };

  obj.getNav = function(){
    return $http.get('navigation.json');
  };

  obj.getDetail = function(){
    return $http.get('detail.json');
  }

  return obj;
  
}]);