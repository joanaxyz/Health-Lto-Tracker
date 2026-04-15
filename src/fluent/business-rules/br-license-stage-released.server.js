;(function executeRule(current, previous) {
    if (current.x_1998335_health_l_renewal_stage.toString() !== 'released') return;
    if (!current.x_1998335_health_l_renewal_stage.changes()) return;

    var today = new GlideDate();
    today.setValue(gs.now());

    var expiry = new GlideDate();
    expiry.setValue(current.x_1998335_health_l_expiry_date);

    if (expiry.compareTo(today) <= 0) {
        current.setAbortAction(true);
        gs.addErrorMessage('Before marking as Released, please update the Expiry Date to the new license validity date (must be a future date).');
    }
})(current, previous);
