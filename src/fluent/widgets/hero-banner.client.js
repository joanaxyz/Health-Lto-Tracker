api.controller = function ($scope) {
    var c = this;
    $scope.user_name = c.data.user_name;
    $scope.today = c.data.today;
    $scope.active = c.data.active;
    $scope.under_renewal = c.data.under_renewal;
    $scope.total_licenses = c.data.total_licenses;
    $scope.facility_count = c.data.facility_count;
    $scope.attention_count = c.data.attention_count;
};
