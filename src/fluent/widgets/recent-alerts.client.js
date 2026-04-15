api.controller = function ($scope) {
    var c = this;
    $scope.alerts = c.data.alerts;

    $scope.openLicense = function (sysId) {
        window.location.href = '/x_1998335_health_l_license.do?sys_id=' + sysId;
    };
};
