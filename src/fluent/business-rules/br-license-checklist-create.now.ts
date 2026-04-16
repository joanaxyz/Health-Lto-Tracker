import { BusinessRule } from '@servicenow/sdk/core'

// BR-L-02: Auto-create form checklist items after first insert
BusinessRule({
    $id: Now.ID['br_license_create_checklist'],
    name: 'LTO: Auto-Create Checklist on Insert',
    active: true,
    table: 'x_1998335_health_l_license',
    when: 'after',
    action: ['insert'],
    script: Now.include('./br-license-checklist-create.server.js'),
})
