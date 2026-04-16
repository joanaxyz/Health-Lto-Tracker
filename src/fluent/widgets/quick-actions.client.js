api.controller = function ($scope) {
    var c = this;
    $scope.tiles = c.data.tiles;

    $scope.navigate = function (url) {
        window.location.href = url;
    };
};
