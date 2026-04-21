api.controller = function ($scope) {
    var c = this;
    $scope.data = c.data;

    $scope.toggleChecklist = function (row) {
        c.data.action = 'toggle_checklist';
        c.data.row_sys_id = row.sys_id;
        c.server.update().then(function () {
            // server.update re-runs server script with data as input; refresh state
            c.data.action = null;
            c.data.row_sys_id = null;
            $scope.data = c.data;
        });
    };
};
