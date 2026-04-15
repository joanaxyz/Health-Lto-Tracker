;(function executeRule(current, previous) {
    if (!current.x_1998335_health_l_renewal_stage.changes()) return;

    var log = new GlideRecord('x_1998335_health_l_audit_log');
    log.initialize();
    log.x_1998335_health_l_user_id = gs.getUserID();
    log.x_1998335_health_l_license_id = current.sys_id;
    log.x_1998335_health_l_action = 'Stage Updated';
    log.x_1998335_health_l_field_changed = 'renewal_stage';
    log.x_1998335_health_l_old_value = previous.x_1998335_health_l_renewal_stage.getDisplayValue();
    log.x_1998335_health_l_new_value = current.x_1998335_health_l_renewal_stage.getDisplayValue();
    log.x_1998335_health_l_changed_at = new GlideDateTime();
    log.insert();
})(current, previous);
