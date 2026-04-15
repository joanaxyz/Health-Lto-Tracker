import { BusinessRule } from '@servicenow/sdk/core'

// BR-C-03 / BR-L-06: Recompute checklist_pct on the parent license after checklist update
BusinessRule({
    $id: Now.ID['br_checklist_pct_recompute'],
    name: 'LTO — Recompute Checklist Percentage on License',
    active: true,
    table: 'x_1998335_health_l_form_checklist',
    when: 'after',
    action: ['insert', 'update'],
    script: Now.include('./br-checklist-pct.server.js'),
})
