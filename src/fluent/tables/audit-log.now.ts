import {
    Table,
    StringColumn,
    ReferenceColumn,
    DateTimeColumn,
} from '@servicenow/sdk/core'

export const x_1998335_health_l_audit_log = Table({
    name: 'x_1998335_health_l_audit_log',
    label: 'Audit Log',
    schema: {
        x_1998335_health_l_user_id: ReferenceColumn({
            label: 'Changed By',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        x_1998335_health_l_license_id: ReferenceColumn({
            label: 'License',
            referenceTable: 'x_1998335_health_l_license',
        }),
        x_1998335_health_l_facility_id: ReferenceColumn({
            label: 'Facility',
            referenceTable: 'x_1998335_health_l_facility',
        }),
        x_1998335_health_l_action: StringColumn({
            label: 'Action',
            maxLength: 100,
            mandatory: true,
        }),
        x_1998335_health_l_field_changed: StringColumn({
            label: 'Field Changed',
            maxLength: 100,
        }),
        x_1998335_health_l_old_value: StringColumn({
            label: 'Old Value',
            maxLength: 1000,
        }),
        x_1998335_health_l_new_value: StringColumn({
            label: 'New Value',
            maxLength: 1000,
        }),
        x_1998335_health_l_changed_at: DateTimeColumn({
            label: 'Changed At',
            mandatory: true,
        }),
    },
})
