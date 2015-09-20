hotelApp.factory('Page', function() {
   
  var title = 'default';
   
  var getTitle = function(){
    return title;
  };

  var setTitle = function(newTitle){
    title = newTitle;
  };

   return {
     
     getTitle: getTitle,
     
     setTitle: setTitle
   };

});