import { Record } from '@servicenow/sdk/core'

// License form layout — Section 1: License Identity
Record({
    $id: Now.ID['form_section_license_identity'],
    table: 'sys_ui_section',
    data: {
        name: 'x_1998335_health_l_license',
        caption: 'License Identity',
        view: 'Default view',
        position: 0,
    },
})

// License form layout — Section 2: Status & Progress
Record({
    $id: Now.ID['form_section_license_status'],
    table: 'sys_ui_section',
    data: {
        name: 'x_1998335_health_l_license',
        caption: 'Status & Progress',
        view: 'Default view',
        position: 1,
    },
})

// License form layout — Section 3: Related Records
Record({
    $id: Now.ID['form_section_license_related'],
    table: 'sys_ui_section',
    data: {
        name: 'x_1998335_health_l_license',
        caption: 'Related Records',
        view: 'Default view',
        position: 2,
    },
})
