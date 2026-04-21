;(function executeRule(current, previous) {
    var expiry = current.x_1998335_health_l_expiry_date.toString();
    if (!expiry) return;

    var todayDT = new GlideDateTime();
    todayDT.setDisplayValue(new GlideDate().getDisplayValue() + ' 00:00:00');

    var expiryDT = new GlideDateTime();
    expiryDT.setDisplayValue(expiry + ' 00:00:00');

    var diffMs = expiryDT.getNumericValue() - todayDT.getNumericValue();
    var daysLeft = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    current.x_1998335_health_l_days_before_expiry = daysLeft;

    var stage = current.x_1998335_health_l_renewal_stage.toString();
    if (stage === 'released') {
        // Released + future expiry already validated by br-license-stage-released; force active.
        current.x_1998335_health_l_status = 'active';
    } else if (stage !== 'not_started') {
        current.x_1998335_health_l_status = 'under_renewal';
    } else if (daysLeft < 0) {
        current.x_1998335_health_l_status = 'expired';
    } else if (daysLeft <= 90) {
        current.x_1998335_health_l_status = 'expiring_soon';
    } else {
        current.x_1998335_health_l_status = 'active';
    }
})(current, previous);
