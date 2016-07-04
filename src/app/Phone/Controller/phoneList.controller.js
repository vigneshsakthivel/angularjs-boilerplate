angular.module('app.phone').
controller( 'phoneListController', 
  function PhoneListController($scope, Phone) {
	$scope.phones = Phone.query();
	$scope.orderProp = 'age';
  }
);