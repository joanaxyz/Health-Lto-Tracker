(function () {
    data.tiles = [
        {
            icon: 'list-alt',
            label: 'All Licenses',
            url: '/x_1998335_health_l_license_list.do',
            color: 'teal',
        },
        {
            icon: 'time',
            label: 'Expiring Soon',
            url: '/x_1998335_health_l_license_list.do?sysparm_query=x_1998335_health_l_status%3Dexpiring_soon',
            color: 'orange',
        },
        {
            icon: 'home',
            label: 'Facilities',
            url: '/x_1998335_health_l_facility_list.do',
            color: 'blue',
        },
        {
            icon: 'plus-sign',
            label: 'New License',
            url: '/x_1998335_health_l_license.do?sys_id=-1',
            color: 'green',
        },
        {
            icon: 'bell',
            label: 'Alerts',
            url: '/x_1998335_health_l_alert_list.do',
            color: 'red',
        },
        {
            icon: 'folder-open',
            label: 'Audit Log',
            url: '/x_1998335_health_l_audit_log_list.do',
            color: 'gray',
        },
    ];
})();
