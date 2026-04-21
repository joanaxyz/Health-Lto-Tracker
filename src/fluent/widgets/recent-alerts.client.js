api.controller = function ($scope) {
    var c = this;
    $scope.alerts = c.data.alerts;

    $scope.openLicense = function (sysId) {
        window.location.href = '?id=lto_license_detail&sys_id=' + sysId;
    };
};
