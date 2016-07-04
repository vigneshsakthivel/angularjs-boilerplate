angular.module('app.phone').
controller( 'phoneDetailsController', function phoneDetailsController($stateParams, $scope, Phone) {
	$scope.phone = Phone.get({phoneId: $stateParams.phoneId}, function(phone) {
	  $scope.setImage(phone.images[0]);
    });

	$scope.setImage = function setImage(imageUrl) {
	  $scope.mainImageUrl = imageUrl;
    };
  }
);