var app = angular.module("angularHotels", []);

app.controller("menuCtrl", function($scope) {
  
  $scope.menuItems = [];
  
  $scope.showMenu = false;
  $scope.showOrderMarkUp = false;
  
  $scope.addMenuItem = function() {
    $scope.showMenu = true;
    var item = {"name":"", "cost":""}
    $scope.menuItems.push(item);
  }

  $scope.menuCreationDone = function() {
    $scope.showOrderMarkUp = true;
    $scope.showMenu = false;
  }

  $scope.removeMenuItem = function(item) {
    var index = $scope.menuItems.indexOf(item);
    $scope.menuItems.splice(index, 1);
  }
  
});


