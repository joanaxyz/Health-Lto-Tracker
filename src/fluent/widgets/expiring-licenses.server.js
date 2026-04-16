(function () {
    data.licenses = [];

    var gr = new GlideRecord('x_1998335_health_l_license');
    gr.addQuery('x_1998335_health_l_days_before_expiry', '>=', 0);
    gr.addQuery('x_1998335_health_l_days_before_expiry', '<=', 90);
    gr.orderBy('x_1998335_health_l_days_before_expiry');
    gr.query();

    while (gr.next()) {
        var daysLeft = parseInt(gr.x_1998335_health_l_days_before_expiry);
        var rowColor = '';
        if (daysLeft < 30) rowColor = '#fdecea';
        else if (daysLeft < 60) rowColor = '#fff3e0';
        else rowColor = '#fff9e6';

        data.licenses.push({
            sys_id: gr.sys_id.toString(),
            license_number: gr.x_1998335_health_l_license_number.toString(),
            facility: gr.x_1998335_health_l_facility_id.getDisplayValue(),
            license_type: gr.x_1998335_health_l_license_type.getDisplayValue(),
            expiry_date: gr.x_1998335_health_l_expiry_date.toString(),
            days_before_expiry: daysLeft,
            renewal_stage: gr.x_1998335_health_l_renewal_stage.getDisplayValue(),
            row_color: rowColor,
        });
    }
})();
