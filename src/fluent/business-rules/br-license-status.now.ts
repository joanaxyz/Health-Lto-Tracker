import { BusinessRule } from '@servicenow/sdk/core'

// BR-L-01: Compute status and days_before_expiry on License before insert/update
BusinessRule({
    $id: Now.ID['br_license_compute_status'],
    name: 'LTO — Compute License Status and Days Before Expiry',
    active: true,
    table: 'x_1998335_health_l_license',
    when: 'before',
    action: ['insert', 'update'],
    script: Now.include('./br-license-status.server.js'),
})
