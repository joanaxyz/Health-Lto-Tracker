// Daily job: recompute status/days on all licenses, then generate threshold alerts.
// Alert fires once per (license, threshold) ever, at the most-urgent threshold the license has crossed into.

var today = new GlideDate();
var todayVal = today.getValue();

// 1. Touch every license so the BR recomputes days_before_expiry and status.
var refreshGR = new GlideRecord('x_1998335_health_l_license');
refreshGR.query();
while (refreshGR.next()) {
    refreshGR.setWorkflow(false);
    refreshGR.update();
}

// 2. Generate alerts. Thresholds in ascending order: 7 is most urgent.
var thresholds = [7, 30, 60, 90];

var licGR = new GlideRecord('x_1998335_health_l_license');
licGR.addQuery('x_1998335_health_l_status', '!=', 'expired');
licGR.addQuery('x_1998335_health_l_renewal_stage', '!=', 'released');
licGR.query();

while (licGR.next()) {
    var daysLeft = parseInt(licGR.x_1998335_health_l_days_before_expiry, 10);
    if (isNaN(daysLeft) || daysLeft < 0) continue;

    for (var i = 0; i < thresholds.length; i++) {
        var threshold = thresholds[i];
        if (daysLeft > threshold) continue;

        // Dedup across all time: if this (license, threshold) has ever alerted, skip.
        var dupCheck = new GlideRecord('x_1998335_health_l_alert');
        dupCheck.addQuery('x_1998335_health_l_license_id', licGR.sys_id);
        dupCheck.addQuery('x_1998335_health_l_days_before_expiry', threshold);
        dupCheck.query();
        if (dupCheck.next()) continue;

        var alert = new GlideRecord('x_1998335_health_l_alert');
        alert.initialize();
        alert.x_1998335_health_l_license_id = licGR.sys_id;
        alert.x_1998335_health_l_days_before_expiry = threshold;
        alert.x_1998335_health_l_channel = 'email';
        alert.x_1998335_health_l_status = 'sent';
        alert.x_1998335_health_l_sent_at = new GlideDateTime();
        alert.x_1998335_health_l_alert_date = todayVal;
        alert.insert();

        gs.log('LTO Alert created: License ' + licGR.x_1998335_health_l_license_number +
               ', threshold=' + threshold + ', actual daysLeft=' + daysLeft, 'LTO Tracker');

        break; // Fire the most urgent unfired threshold and stop.
    }
}
