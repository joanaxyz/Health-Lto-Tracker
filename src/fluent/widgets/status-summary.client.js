api.controller = function ($scope) {
    var c = this;
    $scope.active = c.data.active;
    $scope.expiring_soon = c.data.expiring_soon;
    $scope.expired = c.data.expired;

    $scope.goToActive = function () {
        window.location.href = '/x_1998335_health_l_license_list.do?sysparm_query=x_1998335_health_l_status%3Dactive';
    };
    $scope.goToExpiringSoon = function () {
        window.location.href = '/x_1998335_health_l_license_list.do?sysparm_query=x_1998335_health_l_status%3Dexpiring_soon';
    };
    $scope.goToExpired = function () {
        window.location.href = '/x_1998335_health_l_license_list.do?sysparm_query=x_1998335_health_l_status%3Dexpired';
    };
};
