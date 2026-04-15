import { List } from '@servicenow/sdk/core'

// Default list view for Licenses per SDD §8.4
// Sorted by days_before_expiry ASC (soonest expiry first)
List({
    table: 'x_1998335_health_l_license',
    view: 'default',
    columns: [
        'x_1998335_health_l_license_number',
        'x_1998335_health_l_facility_id',
        'x_1998335_health_l_license_type',
        'x_1998335_health_l_status',
        'x_1998335_health_l_expiry_date',
        'x_1998335_health_l_days_before_expiry',
        'x_1998335_health_l_renewal_stage',
        'x_1998335_health_l_checklist_pct',
    ],
})
