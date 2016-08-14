app.directive('appNavBar',function() {
  return {
    restrict: 'E',
    templateUrl: 'components/navbar/navBarTemplate.ejs',
    controller: function($scope,$location){
      var vm = this;
      vm.isActive = function(viewLocation){ 
        return viewLocation === $location.path();
      };
    },
    controllerAs: 'vm'
  };
});