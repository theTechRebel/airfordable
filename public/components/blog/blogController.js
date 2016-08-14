app
		.controller('blogController', function($scope,$route,$http){
		$http.get('/api/posts/').
    success(function(data, status, headers, config) {
      $scope.posts = data.posts;
    });
		});



