;(function executeRule(current, previous) {
    if (!current.x_1998335_health_l_is_completed.changes()) return;

    if (current.x_1998335_health_l_is_completed.toString() === 'true') {
        current.x_1998335_health_l_completed_at = new GlideDateTime();
        current.x_1998335_health_l_completed_by = gs.getUserID();
    } else {
        current.x_1998335_health_l_completed_at = '';
        current.x_1998335_health_l_completed_by = '';
    }
})(current, previous);
