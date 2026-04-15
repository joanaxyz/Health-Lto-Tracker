import { Record } from '@servicenow/sdk/core'

// Application Menu — LTO Tracker
const appMenu = Record({
    $id: Now.ID['lto_app_menu'],
    table: 'sys_app_application',
    data: {
        title: 'LTO Tracker',
        active: true,
        category: 'Compliance',
        description: 'Health Online LTO & Ancillary Licensing Tracker',
    },
})

// Dashboard module — links to the React UiPage dashboard
Record({
    $id: Now.ID['module_dashboard'],
    table: 'sys_app_module',
    data: {
        title: 'Dashboard',
        active: true,
        application: appMenu,
        link_type: 'DIRECT',
        order: 100,
        query: 'x_1998335_health_l_lto_dashboard.do',
    },
})

// Facilities separator
Record({
    $id: Now.ID['module_facilities_sep'],
    table: 'sys_app_module',
    data: {
        title: 'Facilities',
        active: true,
        application: appMenu,
        link_type: 'SEPARATOR',
        order: 200,
    },
})

// All Facilities
Record({
    $id: Now.ID['module_all_facilities'],
    table: 'sys_app_module',
    data: {
        title: 'All Facilities',
        active: true,
        application: appMenu,
        link_type: 'LIST',
        name: 'x_1998335_health_l_facility',
        order: 210,
    },
})

// Create New Facility
Record({
    $id: Now.ID['module_new_facility'],
    table: 'sys_app_module',
    data: {
        title: 'Create New Facility',
        active: true,
        application: appMenu,
        link_type: 'NEW',
        name: 'x_1998335_health_l_facility',
        order: 220,
    },
})

// Licenses separator
Record({
    $id: Now.ID['module_licenses_sep'],
    table: 'sys_app_module',
    data: {
        title: 'Licenses',
        active: true,
        application: appMenu,
        link_type: 'SEPARATOR',
        order: 300,
    },
})

// All Licenses
Record({
    $id: Now.ID['module_all_licenses'],
    table: 'sys_app_module',
    data: {
        title: 'All Licenses',
        active: true,
        application: appMenu,
        link_type: 'LIST',
        name: 'x_1998335_health_l_license',
        order: 310,
    },
})

// Expiring Soon licenses
Record({
    $id: Now.ID['module_expiring_soon'],
    table: 'sys_app_module',
    data: {
        title: 'Expiring Soon',
        active: true,
        application: appMenu,
        link_type: 'LIST',
        name: 'x_1998335_health_l_license',
        query: 'x_1998335_health_l_status=expiring_soon',
        order: 320,
    },
})

// Expired licenses
Record({
    $id: Now.ID['module_expired'],
    table: 'sys_app_module',
    data: {
        title: 'Expired',
        active: true,
        application: appMenu,
        link_type: 'LIST',
        name: 'x_1998335_health_l_license',
        query: 'x_1998335_health_l_status=expired',
        order: 330,
    },
})

// Create New License
Record({
    $id: Now.ID['module_new_license'],
    table: 'sys_app_module',
    data: {
        title: 'Create New License',
        active: true,
        application: appMenu,
        link_type: 'NEW',
        name: 'x_1998335_health_l_license',
        order: 340,
    },
})

// Alerts separator
Record({
    $id: Now.ID['module_alerts_sep'],
    table: 'sys_app_module',
    data: {
        title: 'Alerts',
        active: true,
        application: appMenu,
        link_type: 'SEPARATOR',
        order: 400,
    },
})

// All Alerts
Record({
    $id: Now.ID['module_all_alerts'],
    table: 'sys_app_module',
    data: {
        title: 'All Alerts',
        active: true,
        application: appMenu,
        link_type: 'LIST',
        name: 'x_1998335_health_l_alert',
        order: 410,
    },
})

// Audit Log separator
Record({
    $id: Now.ID['module_audit_sep'],
    table: 'sys_app_module',
    data: {
        title: 'Audit Log',
        active: true,
        application: appMenu,
        link_type: 'SEPARATOR',
        order: 500,
    },
})

// All Audit Entries
Record({
    $id: Now.ID['module_all_audit'],
    table: 'sys_app_module',
    data: {
        title: 'All Audit Entries',
        active: true,
        application: appMenu,
        link_type: 'LIST',
        name: 'x_1998335_health_l_audit_log',
        order: 510,
    },
})
