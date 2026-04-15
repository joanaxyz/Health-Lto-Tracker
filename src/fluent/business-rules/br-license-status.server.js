;(function executeRule(current, previous) {
    // Compute days_before_expiry
    var today = new GlideDate();
    today.setValue(gs.now());

    var expiryDate = new GlideDate();
    expiryDate.setValue(current.x_1998335_health_l_expiry_date);

    var todayDT = new GlideDateTime();
    todayDT.setDisplayValueInternal(gs.nowDateTime());

    var expiryDT = new GlideDateTime(current.x_1998335_health_l_expiry_date + ' 00:00:00');
    var diffMs = expiryDT.getNumericValue() - todayDT.getNumericValue();
    var daysLeft = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    current.x_1998335_health_l_days_before_expiry = daysLeft;

    // Compute status
    var stage = current.x_1998335_health_l_renewal_stage.toString();
    if (stage !== 'not_started' && stage !== 'released') {
        current.x_1998335_health_l_status = 'under_renewal';
    } else if (daysLeft < 0) {
        current.x_1998335_health_l_status = 'expired';
    } else if (daysLeft <= 90) {
        current.x_1998335_health_l_status = 'expiring_soon';
    } else {
        current.x_1998335_health_l_status = 'active';
    }
})(current, previous);
