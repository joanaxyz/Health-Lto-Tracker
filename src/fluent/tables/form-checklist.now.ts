import {
    Table,
    StringColumn,
    ReferenceColumn,
    BooleanColumn,
    DateTimeColumn,
} from '@servicenow/sdk/core'

export const x_1998335_health_l_form_checklist = Table({
    name: 'x_1998335_health_l_form_checklist',
    label: 'Form Checklist',
    schema: {
        x_1998335_health_l_license_id: ReferenceColumn({
            label: 'License',
            referenceTable: 'x_1998335_health_l_license',
            mandatory: true,
        }),
        x_1998335_health_l_form_name: StringColumn({
            label: 'Form Name',
            maxLength: 300,
            mandatory: true,
        }),
        x_1998335_health_l_purpose: StringColumn({
            label: 'Purpose',
            maxLength: 500,
        }),
        x_1998335_health_l_is_completed: BooleanColumn({
            label: 'Is Completed',
            default: false,
        }),
        x_1998335_health_l_completed_at: DateTimeColumn({
            label: 'Completed At',
        }),
        x_1998335_health_l_completed_by: ReferenceColumn({
            label: 'Completed By',
            referenceTable: 'sys_user',
        }),
    },
})
