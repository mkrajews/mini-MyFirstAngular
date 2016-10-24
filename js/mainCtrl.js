angular.module("friendsList").controller("mainCtrl", function($scope) {
  $scope.name = "Miwako"
  $scope.friends = ["Figi", "Kufi", "Belle"];
  $scope.addFriend = function(friend) {
    console.log(friend);
    $scope.friends.push(friend);
  }
});
