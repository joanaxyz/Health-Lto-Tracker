(function () {
    data.tiles = [
        {
            icon: "list-alt",
            label: "All Licenses",
            description: "Browse the full tracked license portfolio.",
            url: "/x_1998335_health_l_license_list.do",
            color: "teal",
        },
        {
            icon: "time",
            label: "Expiring Soon",
            description: "Open the licenses inside the risk window.",
            url: "/x_1998335_health_l_license_list.do?sysparm_query=x_1998335_health_l_status%3Dexpiring_soon",
            color: "orange",
        },
        {
            icon: "home",
            label: "Facilities",
            description: "Review facility records and ownership.",
            url: "/x_1998335_health_l_facility_list.do",
            color: "blue",
        },
        {
            icon: "plus-sign",
            label: "New License",
            description: "Register a new license record quickly.",
            url: "/x_1998335_health_l_license.do?sys_id=-1",
            color: "green",
        },
        {
            icon: "bell",
            label: "Alerts",
            description: "See recent reminders and alert outcomes.",
            url: "/x_1998335_health_l_alert_list.do",
            color: "red",
        },
        {
            icon: "folder-open",
            label: "Audit Log",
            description: "Check stage changes and compliance history.",
            url: "/x_1998335_health_l_audit_log_list.do",
            color: "gray",
        },
    ];
})();
