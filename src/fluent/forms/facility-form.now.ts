import { Record } from '@servicenow/sdk/core'

// Facility form layout — Section 1: Facility Information
Record({
    $id: Now.ID['form_section_facility_info'],
    table: 'sys_ui_section',
    data: {
        name: 'x_1998335_health_l_facility',
        caption: 'Facility Information',
        view: 'Default view',
        position: 0,
    },
})

// Facility form layout — Section 2: Licenses related list
Record({
    $id: Now.ID['form_section_facility_licenses'],
    table: 'sys_ui_section',
    data: {
        name: 'x_1998335_health_l_facility',
        caption: 'Licenses',
        view: 'Default view',
        position: 1,
    },
})
