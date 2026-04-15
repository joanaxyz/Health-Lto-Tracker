import {
    Table,
    StringColumn,
    ReferenceColumn,
    IntegerColumn,
    ChoiceColumn,
    DateColumn,
} from '@servicenow/sdk/core'

export const x_1998335_health_l_license = Table({
    name: 'x_1998335_health_l_license',
    label: 'License',
    schema: {
        x_1998335_health_l_license_number: StringColumn({
            label: 'License Number',
            maxLength: 100,
            mandatory: true,
        }),
        x_1998335_health_l_facility_id: ReferenceColumn({
            label: 'Facility',
            referenceTable: 'x_1998335_health_l_facility',
            mandatory: true,
        }),
        x_1998335_health_l_license_type: ChoiceColumn({
            label: 'License Type',
            mandatory: true,
            choices: {
                doh_lto_main:    { label: 'DOH LTO (Main)' },
                olrs_radiology:  { label: 'OLRS Variation — Radiology (X-Ray)' },
                olrs_pharmacy:   { label: 'OLRS Variation — Pharmacy' },
            },
        }),
        x_1998335_health_l_issue_date: DateColumn({
            label: 'Issue Date',
            mandatory: true,
        }),
        x_1998335_health_l_expiry_date: DateColumn({
            label: 'Expiry Date',
            mandatory: true,
        }),
        x_1998335_health_l_status: ChoiceColumn({
            label: 'Status',
            choices: {
                active:         { label: 'Active' },
                expiring_soon:  { label: 'Expiring Soon' },
                expired:        { label: 'Expired' },
                under_renewal:  { label: 'Under Renewal' },
            },
            default: 'active',
        }),
        x_1998335_health_l_renewal_stage: ChoiceColumn({
            label: 'Renewal Stage',
            mandatory: true,
            choices: {
                not_started:         { label: 'Not Started' },
                documents_gathering: { label: 'Documents Gathering' },
                submitted_to_doh:    { label: 'Submitted to DOH' },
                under_evaluation:    { label: 'Under Evaluation' },
                released:            { label: 'Released' },
            },
            default: 'not_started',
        }),
        x_1998335_health_l_days_before_expiry: IntegerColumn({
            label: 'Days Before Expiry',
        }),
        x_1998335_health_l_checklist_pct: IntegerColumn({
            label: 'Checklist % Complete',
        }),
        x_1998335_health_l_notes: StringColumn({
            label: 'Notes',
            maxLength: 1000,
        }),
    },
})
