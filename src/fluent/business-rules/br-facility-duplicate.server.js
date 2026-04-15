;(function executeRule(current, previous) {
    var gr = new GlideRecord('x_1998335_health_l_facility');
    gr.addQuery('x_1998335_health_l_doh_license_number', current.x_1998335_health_l_doh_license_number);
    if (!current.isNewRecord()) {
        gr.addQuery('sys_id', '!=', current.sys_id);
    }
    gr.query();
    if (gr.next()) {
        current.setAbortAction(true);
        gs.addErrorMessage('A facility with DOH License Number ' + current.x_1998335_health_l_doh_license_number + ' already exists.');
    }
})(current, previous);
