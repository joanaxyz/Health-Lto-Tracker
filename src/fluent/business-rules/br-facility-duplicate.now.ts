import { BusinessRule } from '@servicenow/sdk/core'

// BR-F-01: Prevent duplicate DOH license numbers on Facility
BusinessRule({
    $id: Now.ID['br_facility_duplicate_check'],
    name: 'LTO: No Duplicate DOH License Number',
    active: true,
    table: 'x_1998335_health_l_facility',
    when: 'before',
    action: ['insert', 'update'],
    script: Now.include('./br-facility-duplicate.server.js'),
})
