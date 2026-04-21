import { Record } from '@servicenow/sdk/core'

// ---------- Sections ----------
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

// ---------- Section 1: License Identity ----------
Record({
    $id: Now.ID['el_lic_license_number'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_license_identity'],
        element: 'x_1998335_health_l_license_number',
        position: 0,
    },
})
Record({
    $id: Now.ID['el_lic_facility'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_license_identity'],
        element: 'x_1998335_health_l_facility_id',
        position: 1,
    },
})
Record({
    $id: Now.ID['el_lic_license_type'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_license_identity'],
        element: 'x_1998335_health_l_license_type',
        position: 2,
    },
})
Record({
    $id: Now.ID['el_lic_issue_date'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_license_identity'],
        element: 'x_1998335_health_l_issue_date',
        position: 3,
    },
})
Record({
    $id: Now.ID['el_lic_expiry_date'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_license_identity'],
        element: 'x_1998335_health_l_expiry_date',
        position: 4,
    },
})
Record({
    $id: Now.ID['el_lic_notes'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_license_identity'],
        element: 'x_1998335_health_l_notes',
        position: 5,
    },
})

// ---------- Section 2: Status & Progress ----------
Record({
    $id: Now.ID['el_lic_status'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_license_status'],
        element: 'x_1998335_health_l_status',
        position: 0,
    },
})
Record({
    $id: Now.ID['el_lic_renewal_stage'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_license_status'],
        element: 'x_1998335_health_l_renewal_stage',
        position: 1,
    },
})
Record({
    $id: Now.ID['el_lic_days_before_expiry'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_license_status'],
        element: 'x_1998335_health_l_days_before_expiry',
        position: 2,
    },
})
Record({
    $id: Now.ID['el_lic_checklist_pct'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_license_status'],
        element: 'x_1998335_health_l_checklist_pct',
        position: 3,
    },
})
