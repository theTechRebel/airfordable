app.config(function ($routeProvider,$locationProvider) {
	$routeProvider
			.when('/', {   
				templateUrl: 'components/home/homeView.ejs',
				controller: 'homeController'
			})
			.when('/about', {
				templateUrl: 'components/about/aboutView.ejs',
				controller: 'aboutController'
			})
			.when('/contact', {
				templateUrl: 'components/contact/contactView.ejs',
				controller: 'contactController'
			})
			.when('/blog', {
				templateUrl: 'components/blog/blogAllPosts.ejs',
				controller: 'blogController'
			});

			$locationProvider.html5Mode(true);
});