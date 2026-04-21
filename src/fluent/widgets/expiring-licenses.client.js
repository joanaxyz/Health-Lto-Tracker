api.controller = function ($scope) {
    var c = this;
    $scope.licenses = c.data.licenses;

    $scope.openLicense = function (sysId) {
        window.location.href = '?id=lto_license_detail&sys_id=' + sysId;
    };
};
