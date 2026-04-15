import { List } from '@servicenow/sdk/core'

// Default list view for Alerts per SDD §8.5
List({
    table: 'x_1998335_health_l_alert',
    view: 'default',
    columns: [
        'x_1998335_health_l_license_id',
        'x_1998335_health_l_days_before_expiry',
        'x_1998335_health_l_status',
        'x_1998335_health_l_sent_at',
    ],
})
