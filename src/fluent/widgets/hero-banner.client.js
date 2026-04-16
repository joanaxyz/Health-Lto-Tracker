api.controller = function ($scope) {
    var c = this;
    $scope.user_name = c.data.user_name;
    $scope.today = c.data.today;
    $scope.active = c.data.active;
    $scope.expiring_soon = c.data.expiring_soon;
    $scope.expired = c.data.expired;
};
