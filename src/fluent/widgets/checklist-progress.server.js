(function () {
    data.licenses = [];

    var gr = new GlideRecord('x_1998335_health_l_license');
    gr.addQuery('x_1998335_health_l_status', 'IN', 'expiring_soon,under_renewal,active');
    gr.orderBy('x_1998335_health_l_days_before_expiry');
    gr.setLimit(6);
    gr.query();

    while (gr.next()) {
        var pct = parseInt(gr.x_1998335_health_l_checklist_pct) || 0;
        var days = parseInt(gr.x_1998335_health_l_days_before_expiry);
        var barClass = 'progress-bar-success';
        if (pct < 50) barClass = 'progress-bar-danger';
        else if (pct < 80) barClass = 'progress-bar-warning';

        data.licenses.push({
            sys_id: gr.sys_id.toString(),
            license_number: gr.x_1998335_health_l_license_number.toString(),
            facility: gr.x_1998335_health_l_facility_id.getDisplayValue(),
            pct: pct,
            days: days,
            bar_class: barClass,
        });
    }
})();
