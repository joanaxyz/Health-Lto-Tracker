var thresholds = [90, 60, 30, 7];
var today = new GlideDate();
today.setValue(gs.now());

var licGR = new GlideRecord('x_1998335_health_l_license');
licGR.addQuery('x_1998335_health_l_status', '!=', 'expired');
licGR.addQuery('x_1998335_health_l_renewal_stage', '!=', 'released');
licGR.query();

while (licGR.next()) {
    var daysLeft = parseInt(licGR.x_1998335_health_l_days_before_expiry);

    for (var i = 0; i < thresholds.length; i++) {
        var threshold = thresholds[i];

        if (daysLeft !== threshold) continue;

        // Deduplication check
        var dupCheck = new GlideRecord('x_1998335_health_l_alert');
        dupCheck.addQuery('x_1998335_health_l_license_id', licGR.sys_id);
        dupCheck.addQuery('x_1998335_health_l_days_before_expiry', threshold);
        dupCheck.addQuery('x_1998335_health_l_alert_date', today.getValue());
        dupCheck.query();
        if (dupCheck.next()) continue;

        // Create Alert record (email notification fires on insert via notification)
        var alert = new GlideRecord('x_1998335_health_l_alert');
        alert.initialize();
        alert.x_1998335_health_l_license_id = licGR.sys_id;
        alert.x_1998335_health_l_days_before_expiry = threshold;
        alert.x_1998335_health_l_channel = 'email';
        alert.x_1998335_health_l_status = 'sent';
        alert.x_1998335_health_l_sent_at = new GlideDateTime();
        alert.x_1998335_health_l_alert_date = today.getValue();
        alert.insert();

        gs.log('LTO Alert created: License ' + licGR.x_1998335_health_l_license_number + ', ' + threshold + ' days before expiry.', 'LTO Tracker');
    }
}
