import { BusinessRule } from '@servicenow/sdk/core'

// BR-L-07: Create expiry alert immediately when a license is saved at a threshold
BusinessRule({
    $id: Now.ID['br_license_create_expiry_alert'],
    name: 'LTO: Create Expiry Alert on Save',
    active: true,
    table: 'x_1998335_health_l_license',
    when: 'after',
    action: ['insert', 'update'],
    script: Now.include('./br-license-expiry-alert.server.js'),
})
