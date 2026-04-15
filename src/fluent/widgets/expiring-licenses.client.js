api.controller = function ($scope) {
    var c = this;
    $scope.licenses = c.data.licenses;

    $scope.openLicense = function (sysId) {
        window.location.href = '/x_1998335_health_l_license.do?sys_id=' + sysId;
    };
};
