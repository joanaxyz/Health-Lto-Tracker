(function () {
    data.user_name = gs.getUserDisplayName() || 'User';
    data.today = new GlideDate().getByFormat('MMMM d, yyyy');
    data.active = 0;
    data.expiring_soon = 0;
    data.expired = 0;

    var gr = new GlideAggregate('x_1998335_health_l_license');
    gr.addAggregate('COUNT', 'x_1998335_health_l_status');
    gr.groupBy('x_1998335_health_l_status');
    gr.query();
    while (gr.next()) {
        var status = gr.x_1998335_health_l_status.toString();
        var count = parseInt(gr.getAggregate('COUNT', 'x_1998335_health_l_status'));
        if (status === 'active') data.active = count;
        else if (status === 'expiring_soon') data.expiring_soon = count;
        else if (status === 'expired') data.expired = count;
    }
})();
