import {
    Table,
    ReferenceColumn,
    IntegerColumn,
    ChoiceColumn,
    DateTimeColumn,
    DateColumn,
} from '@servicenow/sdk/core'

export const x_1998335_health_l_alert = Table({
    name: 'x_1998335_health_l_alert',
    label: 'Alert',
    schema: {
        x_1998335_health_l_license_id: ReferenceColumn({
            label: 'License',
            referenceTable: 'x_1998335_health_l_license',
            mandatory: true,
        }),
        x_1998335_health_l_days_before_expiry: IntegerColumn({
            label: 'Days Before Expiry',
            mandatory: true,
        }),
        x_1998335_health_l_channel: ChoiceColumn({
            label: 'Channel',
            mandatory: true,
            choices: {
                email:  { label: 'Email' },
                in_app: { label: 'In-App' },
            },
            default: 'email',
        }),
        x_1998335_health_l_status: ChoiceColumn({
            label: 'Status',
            mandatory: true,
            choices: {
                sent:   { label: 'Sent' },
                failed: { label: 'Failed' },
            },
            default: 'sent',
        }),
        x_1998335_health_l_sent_at: DateTimeColumn({
            label: 'Sent At',
        }),
        x_1998335_health_l_alert_date: DateColumn({
            label: 'Alert Date',
            mandatory: true,
        }),
    },
})
