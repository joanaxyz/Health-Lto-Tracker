;(function executeRule(current, previous) {
    if (!current.x_1998335_health_l_renewal_stage.changes()) return;

    var stageOrder = {
        'not_started': 0,
        'documents_gathering': 1,
        'submitted_to_doh': 2,
        'under_evaluation': 3,
        'released': 4
    };

    var oldStage = previous.x_1998335_health_l_renewal_stage.toString();
    var newStage = current.x_1998335_health_l_renewal_stage.toString();

    if (stageOrder[newStage] < stageOrder[oldStage]) {
        current.setAbortAction(true);
        gs.addErrorMessage('Renewal stage cannot be moved backward. Current stage: ' + previous.x_1998335_health_l_renewal_stage.getDisplayValue());
    }
})(current, previous);
