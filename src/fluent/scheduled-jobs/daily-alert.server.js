// Daily job: recompute status/days on all licenses, then generate exact-threshold alerts.

var today = new GlideDate();
var todayVal = today.getValue();
var thresholds = {
    7: true,
    30: true,
    60: true,
    90: true,
};

function computeDaysLeft(expiryValue) {
    if (!expiryValue) return null;

    var todayDT = new GlideDateTime();
    todayDT.setDisplayValue(new GlideDate().getDisplayValue() + ' 00:00:00');

    var expiryDT = new GlideDateTime();
    expiryDT.setDisplayValue(expiryValue + ' 00:00:00');

    var diffMs = expiryDT.getNumericValue() - todayDT.getNumericValue();
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

function computeStatus(stage, daysLeft) {
    if (stage === 'released') return 'active';
    if (stage !== 'not_started') return 'under_renewal';
    if (daysLeft < 0) return 'expired';
    if (daysLeft <= 90) return 'expiring_soon';
    return 'active';
}

function alertExistsToday(licenseSysId, threshold) {
    var dupCheck = new GlideRecord('x_1998335_health_l_alert');
    dupCheck.addQuery('x_1998335_health_l_license_id', licenseSysId);
    dupCheck.addQuery('x_1998335_health_l_days_before_expiry', threshold);
    dupCheck.addQuery('x_1998335_health_l_alert_date', todayVal);
    dupCheck.query();
    return dupCheck.next();
}

function createAlert(licenseGR, threshold, daysLeft) {
    if (alertExistsToday(licenseGR.sys_id, threshold)) return;

    var alert = new GlideRecord('x_1998335_health_l_alert');
    alert.initialize();
    alert.x_1998335_health_l_license_id = licenseGR.sys_id;
    alert.x_1998335_health_l_days_before_expiry = threshold;
    alert.x_1998335_health_l_channel = 'email';
    alert.x_1998335_health_l_status = 'sent';
    alert.x_1998335_health_l_sent_at = new GlideDateTime();
    alert.x_1998335_health_l_alert_date = todayVal;
    alert.insert();

    gs.info(
        'LTO Alert created: License ' + licenseGR.x_1998335_health_l_license_number +
        ', threshold=' + threshold + ', actual daysLeft=' + daysLeft,
        'LTO Tracker'
    );
}

function persistLicenseState(licenseSysId, daysLeft, status) {
    var saveGR = new GlideRecord('x_1998335_health_l_license');
    if (!saveGR.get(licenseSysId)) return;

    saveGR.x_1998335_health_l_days_before_expiry = daysLeft;
    saveGR.x_1998335_health_l_status = status;
    saveGR.setWorkflow(false);
    saveGR.autoSysFields(false);
    saveGR.update();
}

var licGR = new GlideRecord('x_1998335_health_l_license');
licGR.query();

while (licGR.next()) {
    var expiryValue = licGR.x_1998335_health_l_expiry_date.toString();
    var daysLeft = computeDaysLeft(expiryValue);
    if (daysLeft === null || isNaN(daysLeft)) continue;

    var stage = licGR.x_1998335_health_l_renewal_stage.toString();
    var status = computeStatus(stage, daysLeft);
    var storedDaysLeft = parseInt(licGR.x_1998335_health_l_days_before_expiry, 10);
    var storedStatus = licGR.x_1998335_health_l_status.toString();

    if (storedDaysLeft !== daysLeft || storedStatus !== status) {
        persistLicenseState(licGR.sys_id, daysLeft, status);
    }

    if (stage === 'released' || status === 'expired') continue;
    if (!thresholds[daysLeft]) continue;

    createAlert(licGR, daysLeft, daysLeft);
}
