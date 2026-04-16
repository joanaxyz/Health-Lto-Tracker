import { BusinessRule } from '@servicenow/sdk/core'

// BR-C-01: Auto-set completed_at / completed_by when checklist item toggled
BusinessRule({
    $id: Now.ID['br_checklist_completed_timestamp'],
    name: 'LTO: Set Checklist Completed Timestamp',
    active: true,
    table: 'x_1998335_health_l_form_checklist',
    when: 'before',
    action: ['update'],
    script: Now.include('./br-checklist-completed.server.js'),
})
