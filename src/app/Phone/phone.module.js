angular.module('app.phone', [
  'ui.router',
  'ui.bootstrap'
]).config(
  function config($stateProvider) {
    $stateProvider.state( 'phoneList', {
	  url: '/phones',
	  views: {
	    "main": {
	      controller: 'phoneListController',
	      templateUrl: 'Phone/View/list.tpl.html'
	    }
	  },
	  data:{ pageTitle: 'Home' }
    }).state( 'phoneDetails', {
	  url: '/phones/:id',
	  views: {
	    "main": {
	      controller: 'phoneDetailsController',
	      templateUrl: 'Phone/View/details.tpl.html'
	    }
	  },
	  data:{ pageTitle: 'Phone Details' }
    });
  }
);