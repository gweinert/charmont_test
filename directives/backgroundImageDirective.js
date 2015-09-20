hotelApp.directive('backImg', function() {

//   return function(scope, element, attrs) {
//     scope.$watch('backImg', function(){
//       console.log("bljdnfjd");
//       console.log(attrs.backImg);
//       element.css({
//         'background-image': 'url(' + attrs.backImg + ')',
//         'background-repeat': 'no-repeat',
//         'background-size': 'cover'
//       });
//     });
//   };
// });

  return {
    templateUrl: 'directives/bgImg.html',
    restrict: 'A',
    scope: {
      url: '='
    }
  };

});