;(function executeRule(current, previous) {
    var licenseId = current.x_1998335_health_l_license_id.toString();
    if (!licenseId) return;

    var total = 0;
    var completed = 0;

    var gr = new GlideRecord('x_1998335_health_l_form_checklist');
    gr.addQuery('x_1998335_health_l_license_id', licenseId);
    gr.query();
    while (gr.next()) {
        total++;
        if (gr.x_1998335_health_l_is_completed.toString() === 'true') {
            completed++;
        }
    }

    var pct = (total > 0) ? Math.round((completed / total) * 100) : 0;

    var lic = new GlideRecord('x_1998335_health_l_license');
    if (lic.get(licenseId)) {
        lic.x_1998335_health_l_checklist_pct = pct;
        lic.update();
    }
})(current, previous);
