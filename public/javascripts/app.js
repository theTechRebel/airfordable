var app = angular.module('airfordableApp',['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {
	$routeProvider
			.when('/', {   
				templateUrl: 'testCrud/index.ejs',
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

			$locationProvider.html5Mode(true);
});



app.controller('indexController', function($scope,$route,$http){
$http.get('/api/posts/').
    success(function(data, status, headers, config) {
      $scope.posts = data.posts;
      console.log(data);
    });
});

app.controller('aboutController', function($scope,$route){
	$scope.message = 'This is our story...';
});

app.controller('contactController', function($scope,$route){
	$scope.message = 'Leave a message below...';
});
