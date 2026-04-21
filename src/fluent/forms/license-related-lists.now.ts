import { Record } from '@servicenow/sdk/core'

// Related lists on the License native form. Format of related_list: '<child_table>.<ref_field>'
Record({
    $id: Now.ID['rl_license_form_checklist'],
    table: 'sys_ui_related_list',
    data: {
        name: 'x_1998335_health_l_license',
        view: 'Default view',
        related_list:
            'x_1998335_health_l_form_checklist.x_1998335_health_l_license_id',
        position: 0,
    },
})

Record({
    $id: Now.ID['rl_license_evidence_file'],
    table: 'sys_ui_related_list',
    data: {
        name: 'x_1998335_health_l_license',
        view: 'Default view',
        related_list:
            'x_1998335_health_l_evidence_file.x_1998335_health_l_license_id',
        position: 1,
    },
})

Record({
    $id: Now.ID['rl_license_alert'],
    table: 'sys_ui_related_list',
    data: {
        name: 'x_1998335_health_l_license',
        view: 'Default view',
        related_list: 'x_1998335_health_l_alert.x_1998335_health_l_license_id',
        position: 2,
    },
})
