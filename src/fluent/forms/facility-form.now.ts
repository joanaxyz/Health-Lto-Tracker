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

// ---------- Facility Information fields ----------
Record({
    $id: Now.ID['el_fac_name'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_facility_info'],
        element: 'x_1998335_health_l_name',
        position: 0,
    },
})
Record({
    $id: Now.ID['el_fac_doh_license_number'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_facility_info'],
        element: 'x_1998335_health_l_doh_license_number',
        position: 1,
    },
})
Record({
    $id: Now.ID['el_fac_facility_type'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_facility_info'],
        element: 'x_1998335_health_l_facility_type',
        position: 2,
    },
})
Record({
    $id: Now.ID['el_fac_address'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_facility_info'],
        element: 'x_1998335_health_l_address',
        position: 3,
    },
})
Record({
    $id: Now.ID['el_fac_compliance_officer'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_facility_info'],
        element: 'x_1998335_health_l_compliance_officer_id',
        position: 4,
    },
})
Record({
    $id: Now.ID['el_fac_active'],
    table: 'sys_ui_element',
    data: {
        sys_ui_section: Now.ID['form_section_facility_info'],
        element: 'x_1998335_health_l_active',
        position: 5,
    },
})
