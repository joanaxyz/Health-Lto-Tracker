import {
    Table,
    StringColumn,
    ReferenceColumn,
    BooleanColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

export const x_1998335_health_l_facility = Table({
    name: 'x_1998335_health_l_facility',
    label: 'Facility',
    schema: {
        x_1998335_health_l_name: StringColumn({
            label: 'Name',
            maxLength: 200,
            mandatory: true,
        }),
        x_1998335_health_l_doh_license_number: StringColumn({
            label: 'DOH License Number',
            maxLength: 50,
            mandatory: true,
        }),
        x_1998335_health_l_facility_type: ChoiceColumn({
            label: 'Facility Type',
            mandatory: true,
            choices: {
                hospital:         { label: 'Hospital' },
                dialysis_center:  { label: 'Dialysis Center' },
                clinical_lab:     { label: 'Clinical Laboratory' },
                radiology_center: { label: 'Radiology Center' },
            },
        }),
        x_1998335_health_l_address: StringColumn({
            label: 'Address',
            maxLength: 500,
            mandatory: true,
        }),
        x_1998335_health_l_compliance_officer_id: ReferenceColumn({
            label: 'Compliance Officer',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        x_1998335_health_l_active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})
