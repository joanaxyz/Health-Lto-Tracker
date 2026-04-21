(function () {
    data.user_name = gs.getUserDisplayName() || "User";
    data.today = new GlideDate().getByFormat("MMMM d, yyyy");
    data.active = 0;
    data.expiring_soon = 0;
    data.expired = 0;
    data.under_renewal = 0;
    data.total_licenses = 0;
    data.facility_count = 0;
    data.attention_count = 0;

    var licenseAgg = new GlideAggregate("x_1998335_health_l_license");
    licenseAgg.addAggregate("COUNT", "x_1998335_health_l_status");
    licenseAgg.groupBy("x_1998335_health_l_status");
    licenseAgg.query();
    while (licenseAgg.next()) {
        var status = licenseAgg.x_1998335_health_l_status.toString();
        var count = parseInt(
            licenseAgg.getAggregate("COUNT", "x_1998335_health_l_status"),
            10
        ) || 0;

        data.total_licenses += count;

        if (status === "active") data.active = count;
        else if (status === "expiring_soon") data.expiring_soon = count;
        else if (status === "expired") data.expired = count;
        else if (status === "under_renewal") data.under_renewal = count;
    }

    var facilityAgg = new GlideAggregate("x_1998335_health_l_facility");
    facilityAgg.addAggregate("COUNT");
    facilityAgg.query();
    if (facilityAgg.next()) {
        data.facility_count = parseInt(facilityAgg.getAggregate("COUNT"), 10) || 0;
    }

    data.attention_count = data.expiring_soon + data.expired;
})();
