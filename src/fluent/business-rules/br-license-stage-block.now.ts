import { BusinessRule } from '@servicenow/sdk/core'

// BR-L-03: Prevent backward stage transitions on License
BusinessRule({
    $id: Now.ID['br_license_stage_block_backward'],
    name: 'LTO: Block Backward Stage Transition',
    active: true,
    table: 'x_1998335_health_l_license',
    when: 'before',
    action: ['update'],
    script: Now.include('./br-license-stage-block.server.js'),
})
