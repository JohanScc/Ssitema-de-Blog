(function(){
   angular.module('blog', ['ngRoute', 'ui.bootstrap']);
   function config($routeProvider, $locationProvider){
      $routeProvider
         .when('/', {
            templateUrl: 'home/home.html',
            controller: 'homeController',
            controllerAs: 'vm'
         })
         .otherwise({redirectTo: '/'});
      $locationProvider.html5Mode(true);
   }
   
   angular
      .module('blog')
      .config(['$routeProvider', '$locationProvider', config]);
})();
