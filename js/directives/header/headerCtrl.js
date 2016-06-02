(function (arguments) {
  angular.module('mySuperClean').directive('dirHeader', function() {
      return {
          templateUrl: 'js/directives/header/header.html',
          controller: function($scope) {

              $scope.showDropDown = false;

              $scope.DropDownToggle = function() {
                      $scope.showDropDown = !$scope.showDropDown;
                  } //end

          }
    }
  })//END
})();
