import { BusinessRule } from '@servicenow/sdk/core'

// BR-L-04: Validate expiry date when marking stage as Released
BusinessRule({
    $id: Now.ID['br_license_stage_released_validate'],
    name: 'LTO: Validate Expiry Date on Release',
    active: true,
    table: 'x_1998335_health_l_license',
    when: 'before',
    action: ['update'],
    script: Now.include('./br-license-stage-released.server.js'),
})
