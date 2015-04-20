bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {

    $scope.restaurants = [];

    $scope.addRestaurant = function() {
        $scope.restaurants.push({ name: $scope.restaurantName,
                                location: $scope.restaurantLocation,
                                price: $scope.restaurantPrice,
                                type:   $scope.restaurantType });
        $scope.restaurantName = null;
        $scope.restaurantLocation = null;
        $scope.restaurantPrice = null;
        $scope.restaurantType = null;
    };

    $scope.deleteRestaurant = function(restaurant) {
        var index = $scope.restaurants.indexOf(restaurant);
        $scope.restaurants.splice(index, 1);
    };
});
