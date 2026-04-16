import { BusinessRule } from '@servicenow/sdk/core'

// BR-L-05: Write audit log entry on stage change
BusinessRule({
    $id: Now.ID['br_license_stage_audit_log'],
    name: 'LTO: Write Audit Log on Stage Change',
    active: true,
    table: 'x_1998335_health_l_license',
    when: 'after',
    action: ['update'],
    script: Now.include('./br-license-stage-audit.server.js'),
})
