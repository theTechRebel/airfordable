var app = angular.module('airfordableApp',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
			.when('/', {
				templateUrl: 'pages/index.ejs',
				controller: 'indexController'
			})
			.when('/about', {
				templateUrl: 'pages/about.ejs',
				controller: 'aboutController'
			})
			.when('/contact', {
				templateUrl: 'pages/contact.ejs',
				controller: 'contactController'
			});
});

app.controller('indexController', function($scope,$route){
	$scope.message = 'Get started today...';
});

app.controller('aboutController', function($scope,$route){
	$scope.message = 'This is our story...';
});

app.controller('contactController', function($scope,$route){
	$scope.message = 'Leave a message below...';
});
