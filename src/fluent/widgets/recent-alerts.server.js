(function () {
    data.alerts = [];

    var cutoff = new GlideDateTime();
    cutoff.addDaysUTC(-30);

    var gr = new GlideRecord('x_1998335_health_l_alert');
    gr.addQuery('x_1998335_health_l_sent_at', '>=', cutoff.getValue());
    gr.orderByDesc('x_1998335_health_l_sent_at');
    gr.setLimit(100);
    gr.query();

    while (gr.next()) {
        data.alerts.push({
            sys_id: gr.sys_id.toString(),
            license_number: gr.x_1998335_health_l_license_id.x_1998335_health_l_license_number.toString(),
            license_sys_id: gr.x_1998335_health_l_license_id.toString(),
            facility: gr.x_1998335_health_l_license_id.x_1998335_health_l_facility_id.x_1998335_health_l_name.toString(),
            license_type: gr.x_1998335_health_l_license_id.x_1998335_health_l_license_type.getDisplayValue(),
            days_before_expiry: parseInt(gr.x_1998335_health_l_days_before_expiry),
            sent_at: gr.x_1998335_health_l_sent_at.getDisplayValue(),
        });
    }
})();
