(function(){
   angular
      .module('blog')
      .controller('homeController', homeController);
   
   function homeController(videxData, $uibModal){
      var vm = this;
      vm.pageHeader = {
         title: 'Blog Episunsa'
      };

      videxData.getVideos()
         .success(function(data){
            vm.data = {
               content: data
            };
         })
         .error(function(e){
            console.log(e);
         });

      vm.popupLoginForm = function(){
         var modalInstance = $uibModal.open({
            templateUrl: '/modals/login_modal/login.modal.html',
            controller: 'loginController as vm'
         });
      };

      vm.popupRegisterForm = function(){
         var modalInstance = $uibModal.open({
            templateUrl: '/modals/register_modal/register.modal.html',
            controller: 'registerController as vm'
         });
      }; 
   };

})();