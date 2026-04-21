(function () {
    data.licenses = [];

    var gr = new GlideRecord("x_1998335_health_l_license");
    gr.addQuery("x_1998335_health_l_days_before_expiry", ">=", 0);
    gr.addQuery("x_1998335_health_l_days_before_expiry", "<=", 90);
    gr.orderBy("x_1998335_health_l_days_before_expiry");
    gr.query();

    while (gr.next()) {
        data.licenses.push({
            sys_id: gr.sys_id.toString(),
            license_number: gr.x_1998335_health_l_license_number.toString(),
            facility: gr.x_1998335_health_l_facility_id.x_1998335_health_l_name.toString(),
            license_type: gr.x_1998335_health_l_license_type.getDisplayValue(),
            expiry_date: gr.x_1998335_health_l_expiry_date.getDisplayValue(),
            days_before_expiry:
                parseInt(gr.x_1998335_health_l_days_before_expiry, 10) || 0,
            renewal_stage: gr.x_1998335_health_l_renewal_stage.getDisplayValue(),
            renewal_stage_value: gr.x_1998335_health_l_renewal_stage.toString(),
        });
    }
})();
