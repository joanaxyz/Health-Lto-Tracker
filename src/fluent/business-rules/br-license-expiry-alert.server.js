;(function executeRule(current, previous) {
    var daysLeft = parseInt(current.x_1998335_health_l_days_before_expiry, 10);
    var stage = current.x_1998335_health_l_renewal_stage.toString();
    var status = current.x_1998335_health_l_status.toString();
    var thresholds = {
        7: true,
        30: true,
        60: true,
        90: true,
    };

    if (isNaN(daysLeft) || !thresholds[daysLeft]) return;
    if (stage === 'released' || status === 'expired') return;

    var today = new GlideDate();
    var todayVal = today.getValue();

    var dupCheck = new GlideRecord('x_1998335_health_l_alert');
    dupCheck.addQuery('x_1998335_health_l_license_id', current.sys_id);
    dupCheck.addQuery('x_1998335_health_l_days_before_expiry', daysLeft);
    dupCheck.addQuery('x_1998335_health_l_alert_date', todayVal);
    dupCheck.query();
    if (dupCheck.next()) return;

    var alert = new GlideRecord('x_1998335_health_l_alert');
    alert.initialize();
    alert.x_1998335_health_l_license_id = current.sys_id;
    alert.x_1998335_health_l_days_before_expiry = daysLeft;
    alert.x_1998335_health_l_channel = 'email';
    alert.x_1998335_health_l_status = 'sent';
    alert.x_1998335_health_l_sent_at = new GlideDateTime();
    alert.x_1998335_health_l_alert_date = todayVal;
    alert.insert();

    gs.info(
        'LTO Alert created immediately: License ' + current.x_1998335_health_l_license_number +
        ', threshold=' + daysLeft,
        'LTO Tracker'
    );
})(current, previous);
